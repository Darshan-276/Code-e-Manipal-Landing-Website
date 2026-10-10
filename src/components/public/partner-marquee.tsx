import Image from "next/image";
import { sponsorProfiles } from "@/lib/public-site-data";

export function PartnerMarquee({ large = false }: { large?: boolean }) {
  return <div className={`partner-marquee${large ? " partner-marquee--large" : ""}`} aria-label="Event partners"><div className="partner-marquee__track">{[false, true].map((duplicate) => <div aria-hidden={duplicate} className="partner-marquee__group" key={String(duplicate)}>{sponsorProfiles.map((sponsor) => <div className="partner-marquee__item" key={`${duplicate}-${sponsor.name}`}><div><Image alt={duplicate ? "" : sponsor.alt} fill sizes={large ? "260px" : "150px"} src={sponsor.image} /></div><span>{sponsor.name}</span></div>)}</div>)}</div></div>;
}
