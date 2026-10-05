import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  compact?: boolean;
  priority?: boolean;
};

export function SiteLogo({ compact = false, priority = false }: SiteLogoProps) {
  return (
    <Link aria-label="Code-e-Manipal home" className={`site-logo${compact ? " site-logo--compact" : ""}`} href="/">
      <span className="site-logo__crop">
        <Image
          alt="Code-e-Manipal"
          fill
          priority={priority}
          sizes={compact ? "(max-width: 768px) 124px, 140px" : "(max-width: 768px) 260px, 420px"}
          src="/images/brand/code-e-manipal-logo.png"
        />
      </span>
    </Link>
  );
}
