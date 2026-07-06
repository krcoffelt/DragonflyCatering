import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag
        className={`font-display text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          tone === "dark" ? "text-warmwhite" : "text-plum"
        }`}
      >
        {title}
      </Tag>
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-warmwhite/75" : "text-charcoal/75"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
