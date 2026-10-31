import { shareImage } from "@/components/seo/shareImage";

// Stable URL so every page can reference the same share image explicitly.
export function GET() {
  return shareImage({ kicker: "Independent guide for visitors", subtitle: "The law, the health risks and public safety — clearly explained." });
}
