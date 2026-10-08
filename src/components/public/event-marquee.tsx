import Image from "next/image";

import { sponsorProfiles } from "@/lib/public-site-data";

export function EventMarquee() {
  return (
    <section aria-label="Approved sponsors" className="event-marquee">
      <div className="event-marquee__track">
        {[false, true].map((duplicate) => (
          <div aria-hidden={duplicate} className="event-marquee__group" key={duplicate ? "duplicate" : "original"}>
            {sponsorProfiles.map((sponsor) => (
              <div className="event-marquee__item" key={`${duplicate}-${sponsor.name}`}>
                <div className="event-marquee__logo"><Image alt={duplicate ? "" : sponsor.alt} fill sizes="180px" src={sponsor.image} /></div>
                <i aria-hidden="true">◆</i>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
