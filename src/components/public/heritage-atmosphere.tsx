"use client";

import Image from "next/image";

import { heritageImages } from "@/lib/public-site-data";
import { useTheme } from "./theme-provider";

type HeritageKey = keyof typeof heritageImages;

type HeritageAtmosphereProps = {
  asset: HeritageKey;
  className?: string;
  priority?: boolean;
};

export function HeritageAtmosphere({ asset: assetKey, className = "", priority = false }: HeritageAtmosphereProps) {
  const { theme } = useTheme();
  const asset = heritageImages[assetKey];
  const src = theme === "dark" ? asset.dark : asset.light;

  return (
    <div aria-hidden="true" className={`heritage-atmosphere${asset.available ? " heritage-atmosphere--with-image" : ""} ${className}`.trim()}>
      {asset.available && (
        <Image
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          src={src}
          style={{ objectFit: "cover", objectPosition: asset.focalPoint }}
        />
      )}
      <span className="heritage-atmosphere__wash" />
      <span className="heritage-atmosphere__arch heritage-atmosphere__arch--one" />
      <span className="heritage-atmosphere__arch heritage-atmosphere__arch--two" />
      <span className="heritage-atmosphere__datum heritage-atmosphere__datum--one" />
      <span className="heritage-atmosphere__datum heritage-atmosphere__datum--two" />
    </div>
  );
}
