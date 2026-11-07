import { renderWithoutAgeGate } from "@/components/home/AgeGateSlot";
import Home, { metadata } from "../page";

// The Dutch homepage without the age check, for recognisable crawlers and bots. Not a page of its
// own: next.config.ts rewrites their requests for / to it (the URL stays /), and redirects this
// URL to /. Same component and metadata (including the canonical /), so the content is identical.
export { metadata };

export default function HomeWithoutAgeGate() {
  renderWithoutAgeGate();
  return <Home />;
}
