import { Reveal } from "./Reveal";

type CheckListProps = {
  items: string[];
  columns?: 2 | 3;
};

/** Elegant multi-column list with gold markers, used for service coverage. */
export function CheckList({ items, columns = 2 }: CheckListProps) {
  const colCls =
    columns === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2";
  return (
    <Reveal>
      <ul className={`grid gap-x-10 gap-y-3.5 ${colCls}`}>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-3 text-[15px] leading-relaxed text-charcoal/80"
          >
            <span
              aria-hidden
              className="mt-1 h-1.5 w-1.5 shrink-0 translate-y-[-2px] rotate-45 bg-gold"
            />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
