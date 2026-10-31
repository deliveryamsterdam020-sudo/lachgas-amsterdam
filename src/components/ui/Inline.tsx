import Link from "next/link";
import { Fragment, type ReactNode } from "react";

// Renders the two inline markers allowed in content: [label](href) and **bold**.
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    const i = m.index ?? 0;
    if (i > last) out.push(<Fragment key={key++}>{text.slice(last, i)}</Fragment>);
    if (m[1] && m[2]) {
      const href = m[2];
      const external = /^https?:\/\//.test(href);
      out.push(
        external ? (
          <a key={key++} href={href} rel="noopener noreferrer" className="inline-link">
            {m[1]}
          </a>
        ) : (
          <Link key={key++} href={href} className="inline-link">
            {m[1]}
          </Link>
        ),
      );
    } else if (m[3]) {
      out.push(<strong key={key++}>{m[3]}</strong>);
    }
    last = i + m[0].length;
  }
  if (last < text.length) out.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}

/** Plain-text version for meta tags and structured data. */
export const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
