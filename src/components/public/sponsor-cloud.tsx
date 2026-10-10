import Image from "next/image";

import { sponsorProfiles } from "@/lib/public-site-data";

export function SponsorCloud() {
  const featured = sponsorProfiles.find((sponsor) => sponsor.name === "The Hosteller");
  const sponsors = sponsorProfiles.filter((sponsor) => sponsor.name !== "The Hosteller");

  return (
    <div className="sponsor-cloud" aria-label="Approved sponsors">
      <svg aria-hidden="true" className="sponsor-cloud__ornament sponsor-cloud__ornament--left" viewBox="0 0 180 260">
        <path d="M165 12C94 43 123 93 74 111c-36 14-43 62-7 89 32 23 4 47-30 48" />
        <path d="M112 72c-24-17-45-10-54 9 21 7 38 3 54-9Zm-44 89c-24-6-40 6-42 27 23 0 37-10 42-27Z" />
        <circle cx="164" cy="12" r="4" />
      </svg>
      <svg aria-hidden="true" className="sponsor-cloud__ornament sponsor-cloud__ornament--right" viewBox="0 0 180 260">
        <path d="M15 12c71 31 42 81 91 99 36 14 43 62 7 89-32 23-4 47 30 48" />
        <path d="M68 72c24-17 45-10 54 9-21 7-38 3-54-9Zm44 89c24-6 40 6 42 27-23 0-37-10-42-27Z" />
        <circle cx="16" cy="12" r="4" />
      </svg>
      {featured && <section className="featured-partner"><p>Featured partner</p><div className="featured-partner__stage"><Image alt={featured.alt} fill sizes="420px" src={featured.image} /></div><h3>The Hosteller</h3><span>Official Stay Partner</span></section>}
      <div className="sponsor-cloud__grid">
        <p className="sponsor-cloud__label">Sponsors</p>
        <div className="sponsor-cloud__row">
            {sponsors.map((sponsor) => (
              <article className="sponsor-cloud__item" key={sponsor.name}>
                <div className="sponsor-cloud__stage">
                  <Image alt={sponsor.alt} fill sizes="(max-width: 640px) 70vw, (max-width: 1000px) 38vw, 240px" src={sponsor.image} />
                </div>
                <h3>{sponsor.name}</h3>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
