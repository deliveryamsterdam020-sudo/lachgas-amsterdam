import { renderWithoutAgeGate } from "@/components/home/AgeGateSlot";
import EnglishHome, { metadata } from "../page";

// The English homepage without the age check, for recognisable crawlers and bots. Not a page of its
// own: next.config.ts rewrites their requests for /en/ to it (the URL stays /en/), and redirects
// this URL to /en/. Same component and metadata (including the canonical /en/), so the content is
// identical.
export { metadata };

export default function EnglishHomeWithoutAgeGate() {
  renderWithoutAgeGate();
  return <EnglishHome />;
}
