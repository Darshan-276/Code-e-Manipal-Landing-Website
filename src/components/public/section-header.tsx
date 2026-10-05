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
      <p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-header__description">{description}</p>}
    </div>
  );
}
