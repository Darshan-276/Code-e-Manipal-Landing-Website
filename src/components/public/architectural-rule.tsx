type ArchitecturalRuleProps = {
  label?: string;
  className?: string;
};

export function ArchitecturalRule({ label, className = "" }: ArchitecturalRuleProps) {
  return (
    <div aria-hidden="true" className={`architectural-rule ${className}`.trim()}>
      <span />
      <i />
      {label && <em>{label}</em>}
      <span />
    </div>
  );
}
