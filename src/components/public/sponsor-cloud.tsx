import Image from "next/image";

import { sponsorProfiles } from "@/lib/public-site-data";
import { MotionCard } from "./motion-card";
import { Reveal } from "./reveal";

export function SponsorCloud() {
  const featured = sponsorProfiles.find((sponsor) => sponsor.name === "The Hosteller");
  const sponsors = sponsorProfiles.filter((sponsor) => sponsor.name !== "The Hosteller");

  return (
    <div className="sponsor-cloud" aria-label="Partners supporting Code-e-Manipal 2.0">
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

      {featured && (
        <Reveal className="featured-partner__reveal" variant="image">
          <section className="featured-partner">
            <p>Official Stay Partner</p>
            <div className="featured-partner__stage">
              <Image alt={featured.alt} fill sizes="420px" src={featured.image} />
            </div>
            <h3>{featured.name}</h3>
            {featured.designation && <span>{featured.designation}</span>}
          </section>
        </Reveal>
      )}

      <div className="sponsor-cloud__grid">
        <Reveal>
          <p className="sponsor-cloud__label">Meet the partners supporting Code-e-Manipal 2.0</p>
        </Reveal>
        <div className="sponsor-cloud__row">
          {sponsors.map((sponsor, index) => (
            <Reveal className="sponsor-cloud__reveal" delay={index * 80} key={sponsor.name}>
              <MotionCard className="sponsor-cloud__item">
                <div className="sponsor-cloud__stage">
                  <Image alt={sponsor.alt} fill sizes="(max-width: 640px) 70vw, (max-width: 1000px) 38vw, 240px" src={sponsor.image} />
                </div>
                <h3>{sponsor.name}</h3>
              </MotionCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
