// Known AI crawlers and AI assistants, matched on the User-Agent header. Used by src/proxy.ts to
// decide, on the server, whether the homepage age check (AgeGate) is rendered. Nothing else on
// the site changes for these agents: they get the same pages, text and metadata as everyone.
//
// User-Agent matching is not watertight: a bot can send any User-Agent it likes, and new or
// unannounced AI agents are not in this list. It only recognises agents that identify themselves.
//
// To add an agent: add the product token as it appears in its User-Agent string. Matching is a
// case-insensitive substring match, so "GPTBot" also matches "Mozilla/5.0 (…; GPTBot/1.2; …)".

export const AI_BOT_TOKENS: readonly string[] = [
  // OpenAI
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Claude-Web",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // ByteDance
  "Bytespider",
  // Common Crawl (training data for many models)
  "CCBot",
  // Amazon
  "Amazonbot",
  // Apple: "Applebot-Extended" is mainly a robots.txt token; plain Applebot (Siri/Spotlight
  // search) is deliberately not listed.
  "Applebot-Extended",
  // Meta
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot",
  // Others
  "Diffbot",
  "cohere-ai",
  "cohere-training-data-crawler",
  "YouBot",
  "ImagesiftBot",
  "MistralAI-User",
];

// Regular search engines always get the normal page, whatever else is in their User-Agent.
export const SEARCH_ENGINE_TOKENS: readonly string[] = ["Googlebot", "Bingbot"];

const aiBotTokens = AI_BOT_TOKENS.map((t) => t.toLowerCase());
const searchEngineTokens = SEARCH_ENGINE_TOKENS.map((t) => t.toLowerCase());

/** True when the User-Agent identifies itself as one of the known AI bots above. */
export function isKnownAiBot(userAgent: string | null | undefined): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  if (searchEngineTokens.some((t) => ua.includes(t))) return false;
  return aiBotTokens.some((t) => ua.includes(t));
}

/**
 * Internal request header set by src/proxy.ts and read by the homepage. The proxy always
 * removes any value the visitor sent and writes its own, so it cannot be spoofed from outside.
 */
export const VISITOR_HEADER = "x-lachgas-visitor";
export const VISITOR_AI_BOT = "ai-bot";
export const VISITOR_HUMAN = "human";
