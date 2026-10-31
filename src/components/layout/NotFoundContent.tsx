import Link from "next/link";
import { PageHero } from "@/components/article/PageHero";
import type { Locale } from "@/content/types";

export function NotFoundContent({ locale }: { locale: Locale }) {
  const nl = locale === "nl";
  return (
    <PageHero
      crumbs={[{ name: "Home", path: nl ? "/" : "/en/" }, { name: "404", path: "#" }]}
      eyebrow="404"
      title={nl ? "Deze pagina bestaat niet (meer)." : "This page doesn’t exist."}
    >
      <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/75">
        {nl ? "Misschien is de pagina verplaatst. Begin opnieuw vanaf de homepage of bekijk de kennisbank." : "It may have moved. Start again from the homepage."}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={nl ? "/" : "/en/"} className="rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:bg-mist">
          {nl ? "Naar de homepage" : "Go to the homepage"}
        </Link>
        {nl && (
          <Link href="/kennisbank/" className="rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/10">
            Kennisbank
          </Link>
        )}
      </div>
    </PageHero>
  );
}
