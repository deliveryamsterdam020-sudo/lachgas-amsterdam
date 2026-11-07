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

// The pattern is used as a header condition in next.config.ts, where it is matched as
// ^pattern$ without flags, also by Vercel's router. So it is written out case-insensitively with
// character classes, without \b, \d or flags, and without capture groups (those would become
// rewrite parameters).

/** A literal, case-insensitive: "Bot" becomes "[bB][oO][tT]". */
const ci = (s: string) =>
  s
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/[a-z]/gi, (c) => `[${c.toLowerCase()}${c.toUpperCase()}]`);
const anyOf = (items: string[]) => `(?:${items.map(ci).join("|")})`;

/** Signs that may appear anywhere in the User-Agent. */
const ANYWHERE = [
  anyOf(KNOWN_AUTOMATED_CLIENTS),
  // A crawler name with a version: "Examplebot/2.1", "Some-Crawler/1.0", "Foo Spider/3".
  // Deliberately no bare "bot": that would also match phones such as "CUBOT".
  `${anyOf(["bot", "crawler", "spider", "scraper"])}/[0-9]`,
  // A contact URL, as crawlers add them: "(compatible; Example/1.0; +https://example.com/bot)".
  `\\+${ci("http")}[sS]?://`,
].join("|");

/** Signs that only count at the start of the User-Agent. */
const AT_START = [
  // Link previews of WhatsApp: "WhatsApp/2.23.20.0 A". An in-app browser never starts like this.
  `${ci("WhatsApp")}/`,
  `${anyOf(SCRIPT_CLIENTS)}(?:[/ ;(]|$)`,
].join("|");

/**
 * Regular expression source that matches the complete User-Agent of a recognisable automated
 * client. Used by next.config.ts (as a `has` header value) and by isAutomatedClient().
 */
export const AUTOMATED_CLIENT_UA_PATTERN = `(?:(?:${AT_START}).*|.*(?:${ANYWHERE}).*)`;

const AUTOMATED_RE = new RegExp(`^${AUTOMATED_CLIENT_UA_PATTERN}$`);

/**
 * True when the User-Agent belongs to a recognisable automated client: the same test the routing
 * applies. A missing User-Agent also counts (next.config.ts has a rule for that as well).
 */
export function isAutomatedClient(userAgent: string | null | undefined): boolean {
  if (userAgent == null) return true;
  return AUTOMATED_RE.test(userAgent);
}
