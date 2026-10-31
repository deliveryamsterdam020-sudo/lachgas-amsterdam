import { AlertTriangle, Info, LifeBuoy } from "lucide-react";
import type { Block } from "@/content/types";
import { Inline } from "@/components/ui/Inline";

const tones = {
  info: { icon: Info, box: "border-navy-700/15 bg-mist", icn: "text-navy-700" },
  warning: { icon: AlertTriangle, box: "border-alert/20 bg-alert-soft", icn: "text-alert" },
  help: { icon: LifeBuoy, box: "border-help/20 bg-help-soft", icn: "text-help" },
} as const;

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-la">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} id={b.id}>
                {b.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "p":
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            );
          case "list": {
            const List = b.ordered ? "ol" : "ul";
            return (
              <List key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "callout": {
            const t = tones[b.tone];
            const Icon = t.icon;
            return (
              <aside key={i} className={`not-prose my-8 flex gap-4 rounded-2xl border p-5 sm:p-6 ${t.box}`}>
                <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${t.icn}`} aria-hidden="true" />
                <div>
                  <p className="!mt-0 font-semibold text-ink">{b.title}</p>
                  <p className="!mt-1.5 text-[15.5px] leading-relaxed">
                    <Inline text={b.text} />
                  </p>
                </div>
              </aside>
            );
          }
          case "facts":
            return (
              <dl key={i} className="my-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper">
                {b.items.map((f, j) => (
                  <div key={j} className="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                    <dt className="eyebrow pt-1 text-[11px] text-muted">{f.label}</dt>
                    <dd className="text-[15.5px] leading-relaxed text-ink">
                      <Inline text={f.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            );
          case "steps":
            return (
              <ol key={i} className="!list-none !pl-0 relative my-8 space-y-0">
                {b.items.map((s, j) => (
                  <li key={j} className="relative grid grid-cols-[40px_1fr] gap-4 pb-7 last:pb-0">
                    {j < b.items.length - 1 && <span aria-hidden="true" className="absolute left-[19px] top-10 h-[calc(100%-40px)] w-px bg-line" />}
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono text-[13px] text-white tabular">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-1.5">
                      <p className="!mt-0 font-semibold text-ink">{s.title}</p>
                      <p className="!mt-1 text-[16px]">
                        <Inline text={s.text} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            );
        }
      })}
    </div>
  );
}
