import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  compact?: boolean;
  priority?: boolean;
  className?: string;
};

export function SiteLogo({ compact = false, priority = false, className = "" }: SiteLogoProps) {
  return (
    <Link aria-label="Code-e-Manipal home" className={`site-logo${compact ? " site-logo--compact" : ""} ${className}`.trim()} href="/">
      <span className="site-logo__crop">
        <Image
          alt="Code-e-Manipal official logo"
          fill
          priority={priority}
          quality={95}
          sizes={compact ? "(max-width: 768px) 240px, 360px" : "(max-width: 768px) 640px, 1120px"}
          src="/images/brand/code-e-manipal-logo.png"
        />
      </span>
    </Link>
  );
}
