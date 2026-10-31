import { notFound } from "next/navigation";
import { ArticleView } from "@/components/article/ArticleView";
import { getPageByPath, pagesFor, slugSegments } from "@/content";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string[] }> };

const find = (slug: string[]) => {
  const page = getPageByPath(`/${slug.join("/")}/`);
  return page?.locale === "nl" ? page : undefined;
};

export function generateStaticParams() {
  return pagesFor("nl").map((p) => ({ slug: slugSegments(p) }));
}

export async function generateMetadata({ params }: Props) {
  const page = find((await params).slug);
  return page ? pageMetadata(page) : {};
}

export default async function DutchArticle({ params }: Props) {
  const page = find((await params).slug);
  if (!page) notFound();
  return <ArticleView page={page} />;
}
