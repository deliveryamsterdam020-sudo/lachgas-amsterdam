// Recognises automated clients (search and AI crawlers, AI fetchers, link-preview fetchers, SEO
// tools, scripts) by their User-Agent header, so the age check is not shown to them as an
// interstitial. It only decides whether the popup is rendered: the page content is the same for
// every client.
//
// The decision is made in routing, before the cache: next.config.ts rewrites requests for the
// homepages whose User-Agent matches AUTOMATED_CLIENT_UA_PATTERN to a prerendered variant without
// the popup (see src/components/home/AgeGateSlot.tsx). Both variants are static and cached by the
// CDN; no server function runs for the decision.
//
// User-Agent detection is best effort. Any client can send any User-Agent, so a bot that poses as
// a browser still gets the popup, and this is no access control. The list is deliberately
// conservative: a person wrongly treated as a bot would miss the age check, a bot wrongly treated
// as a person only gets a popup it never looks at.
//
// What is matched is the client's own name, never where a visit came from. A person who opens the
// site in a normal browser after clicking a link in ChatGPT, Claude or Perplexity (or uses an AI
// browser that sends a normal browser User-Agent) still sees the popup. The fetchers that AI
// services run on behalf of a user (ChatGPT-User, Claude-User, Perplexity-User) are automated: they
// read the HTML and show no page to anyone, so they are treated as bots.

/** Names that crawlers and fetchers put in their User-Agent. Matched case-insensitively, anywhere. */
const KNOWN_AUTOMATED_CLIENTS = [
  // OpenAI
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Claude-Web",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (Googlebot also covers Googlebot-Image, -News and -Video)
  "Googlebot",
  "GoogleOther",
  "Google-InspectionTool",
  "Google-Extended",
  "Google-CloudVertexBot",
  "Storebot-Google",
  "AdsBot-Google",
  "Mediapartners-Google",
  "APIs-Google",
  "FeedFetcher-Google",
  "Google-Read-Aloud",
  "Google-Site-Verification",
  // Microsoft
  "bingbot",
  "BingPreview",
  "msnbot",
  "AdIdxBot",
  // Other search engines
  "Applebot",
  "DuckDuckBot",
  "DuckAssistBot",
  "YandexBot",
  "YandexImages",
  "Baiduspider",
  "Sogou web spider",
  "SeznamBot",
  "PetalBot",
  "MojeekBot",
  "Qwantbot",
  // Other AI and data crawlers
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Diffbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "FacebookBot",
  "MistralAI-User",
  "YouBot",
  "AI2Bot",
  "Timpibot",
  "ImagesiftBot",
  // Link previews in social media and chat apps
  "facebookexternalhit",
  "facebookcatalog",
  "Twitterbot",
  "LinkedInBot",
  "Slackbot",
  "Slack-ImgProxy",
  "Discordbot",
  "TelegramBot",
  "Pinterestbot",
  "redditbot",
  "Embedly",
  "Iframely",
  "SkypeUriPreview",
  "vkShare",
  // SEO tools, archives and uptime monitors
  "AhrefsBot",
  "AhrefsSiteAudit",
  "SemrushBot",
  "SiteAuditBot",
  "MJ12bot",
  "DotBot",
  "DataForSeoBot",
  "Screaming Frog SEO Spider",
  "rogerbot",
  "BLEXBot",
  "ia_archiver",
  "archive.org_bot",
  "UptimeRobot",
  "Pingdom",
  // Browsers driven by scripts, never by a person
  "HeadlessChrome",
  "PhantomJS",
];

/** Scripts and HTTP libraries. Only at the very start: every browser starts with "Mozilla/". */
const SCRIPT_CLIENTS = [
  "curl",
  "wget",
  "python-requests",
  "python-urllib",
  "python-httpx",
  "aiohttp",
  "Go-http-client",
  "node-fetch",
  "axios",
  "undici",
  "okhttp",
  "Java",
  "Apache-HttpClient",
  "libwww-perl",
  "Scrapy",
  "HTTPie",
  "PostmanRuntime",
];

// The patterns are used as header conditions in next.config.ts. Next.js matches them as
// ^pattern$ without flags; Vercel passes them on unchanged. So they are written out
// case-insensitively with character classes, without \b, \d or flags, without capture groups (those
// would become rewrite parameters), and so that they give the same result whether or not the
// router anchors them. Vercel accepts at most 4096 characters per value, so the list is split over
// several patterns; a client is automated when any of them matches.

/** A literal, case-insensitive: "Bot" becomes "[bB][oO][tT]". */
const ci = (s: string) =>
  s
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/[a-z]/gi, (c) => `[${c.toLowerCase()}${c.toUpperCase()}]`);
const anyOf = (items: string[]) => `(?:${items.map(ci).join("|")})`;

/** Signs that may appear anywhere in the User-Agent. */
const ANYWHERE = [
  ...KNOWN_AUTOMATED_CLIENTS.map(ci),
  // A crawler name with a version: "Examplebot/2.1", "Some-Crawler/1.0", "Foo Spider/3".
  // Deliberately no bare "bot": that would also match phones such as "CUBOT".
  `${anyOf(["bot", "crawler", "spider", "scraper"])}/[0-9]`,
  // A contact URL, as crawlers add them: "(compatible; Example/1.0; +https://example.com/bot)".
  `\\+${ci("http")}[sS]?://`,
];

/** Signs that only count at the start of the User-Agent. */
const AT_START = [
  // Link previews of WhatsApp: "WhatsApp/2.23.20.0 A". An in-app browser never starts like this.
  `${ci("WhatsApp")}/`,
  `${anyOf(SCRIPT_CLIENTS)}(?:[/ ;(]|$)`,
];

/** Vercel's limit for a header condition value. */
const MAX_PATTERN_LENGTH = 4096;
/** Room left per pattern, so a few added names never break the deployment. */
const TARGET_PATTERN_LENGTH = 2500;

/** Packs alternatives into as few patterns as fit the target length. */
function pack(alternatives: string[], wrap: (body: string) => string): string[] {
  const groups: string[][] = [[]];
  for (const alt of alternatives) {
    const current = groups[groups.length - 1];
    if (current.length && wrap([...current, alt].join("|")).length > TARGET_PATTERN_LENGTH) groups.push([alt]);
    else current.push(alt);
  }
  return groups.map((g) => wrap(g.join("|")));
}

/**
 * Regular expression sources that together match the complete User-Agent of a recognisable
 * automated client. Used by next.config.ts (one `has` header rewrite per pattern) and by
 * isAutomatedClient().
 */
export const AUTOMATED_CLIENT_UA_PATTERNS = [
  ...pack(AT_START, (body) => `^(?:${body}).*`),
  ...pack(ANYWHERE, (body) => `.*(?:${body}).*`),
];

// Fail the build here rather than the deployment on Vercel.
for (const p of AUTOMATED_CLIENT_UA_PATTERNS) {
  if (p.length > MAX_PATTERN_LENGTH) throw new Error(`Bot pattern of ${p.length} characters exceeds ${MAX_PATTERN_LENGTH}`);
}

const AUTOMATED_RES = AUTOMATED_CLIENT_UA_PATTERNS.map((p) => new RegExp(`^${p}$`));

/**
 * True when the User-Agent belongs to a recognisable automated client: the same test the routing
 * applies. A missing User-Agent also counts (next.config.ts has a rule for that as well).
 */
export function isAutomatedClient(userAgent: string | null | undefined): boolean {
  if (userAgent == null) return true;
  return AUTOMATED_RES.some((re) => re.test(userAgent));
}
