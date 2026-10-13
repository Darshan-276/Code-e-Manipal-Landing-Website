import { Reveal } from "./reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = "left",
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${alignment}`}>
      <Reveal className="section-header__eyebrow"><p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p></Reveal>
      <Reveal delay={65}><h2>{title}</h2></Reveal>
      {description && <Reveal delay={130}><p className="section-header__description">{description}</p></Reveal>}
    </div>
  );
}
