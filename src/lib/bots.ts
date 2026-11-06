// Recognises automated clients (search and AI crawlers, AI fetchers, link-preview fetchers, SEO
// tools, scripts) by their User-Agent header, so the age check is not shown to them as an
// interstitial. It only decides whether the popup is rendered: the page content is the same for
// every client.
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
] as const;

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const KNOWN_RE = new RegExp(KNOWN_AUTOMATED_CLIENTS.map(escape).join("|"), "i");

/**
 * Generic signs of a crawler that is not in the list above. Each is something a browser used by a
 * person never sends. Deliberately no bare "bot": that would also match phones such as "CUBOT".
 */
const GENERIC_RES = [
  // A crawler name with a version: "Examplebot/2.1", "Some-Crawler/1.0", "Foo Spider/3".
  /[a-z0-9_-]*(?:bot|crawler|spider|scraper)\/\d/i,
  // A contact URL, as crawlers add them: "(compatible; Example/1.0; +https://example.com/bot)".
  /\+https?:\/\//i,
  // Link previews of WhatsApp: "WhatsApp/2.23.20.0 A". Anchored, so an in-app browser never matches.
  /^WhatsApp\//i,
  // Scripts and HTTP libraries. Anchored at the start: every browser starts with "Mozilla/".
  /^(?:curl|wget|python-requests|python-urllib|python-httpx|aiohttp|go-http-client|node-fetch|axios|undici|okhttp|java|apache-httpclient|libwww-perl|scrapy|httpie|postmanruntime)\b/i,
];

/**
 * True when the User-Agent belongs to a recognisable automated client. A missing or empty
 * User-Agent also counts: no browser sends a request without one.
 */
export function isAutomatedClient(userAgent: string | null | undefined): boolean {
  const ua = userAgent?.trim();
  if (!ua) return true;
  return KNOWN_RE.test(ua) || GENERIC_RES.some((re) => re.test(ua));
}
