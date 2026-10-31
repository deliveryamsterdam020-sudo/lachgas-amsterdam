import { shareImage } from "@/components/seo/shareImage";

// Stable URL so every page can reference the same share image explicitly.
export function GET() {
  return shareImage({ kicker: "Onafhankelijk informatieplatform", subtitle: "Wetgeving, gezondheid en publieke veiligheid — helder uitgelegd." });
}
