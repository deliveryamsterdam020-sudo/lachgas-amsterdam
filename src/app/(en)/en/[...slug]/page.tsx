import { notFound } from "next/navigation";
import { ArticleView } from "@/components/article/ArticleView";
import { getPageByPath, pagesFor, slugSegments } from "@/content";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string[] }> };

const find = (slug: string[]) => {
  const page = getPageByPath(`/en/${slug.join("/")}/`);
  return page?.locale === "en" ? page : undefined;
};

export function generateStaticParams() {
  return pagesFor("en").map((p) => ({ slug: slugSegments(p) }));
}

export async function generateMetadata({ params }: Props) {
  const page = find((await params).slug);
  return page ? pageMetadata(page) : {};
}

export default async function EnglishArticle({ params }: Props) {
  const page = find((await params).slug);
  if (!page) notFound();
  return <ArticleView page={page} />;
}
