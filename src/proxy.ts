import { NextResponse, type NextRequest } from "next/server";
import { isKnownAiBot, VISITOR_AI_BOT, VISITOR_HEADER, VISITOR_HUMAN } from "@/lib/ai-bots";

// Server-side visitor classification for the homepage age check. The result is passed to the
// page as an internal request header; whatever the visitor sent under that name is overwritten.
// Only the request header is set: the response, redirects and caching headers are untouched.
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.delete(VISITOR_HEADER);
  requestHeaders.set(
    VISITOR_HEADER,
    isKnownAiBot(request.headers.get("user-agent")) ? VISITOR_AI_BOT : VISITOR_HUMAN,
  );
  return NextResponse.next({ request: { headers: requestHeaders } });
}

// Only the two homepages render the age check, so the proxy runs nowhere else.
export const config = {
  matcher: ["/", "/en", "/en/"],
};
