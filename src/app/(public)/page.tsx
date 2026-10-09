import { ArchitecturalRule } from "@/components/public/architectural-rule";
import { Button } from "@/components/public/button";
import { HeritageAtmosphere } from "@/components/public/heritage-atmosphere";
import { HeroOpening } from "@/components/public/hero-opening";
import { EventMarquee } from "@/components/public/event-marquee";
import { JourneyRail } from "@/components/public/journey-rail";
import { PrizePodium } from "@/components/public/prize-podium";
import { Reveal } from "@/components/public/reveal";
import { SectionHeader } from "@/components/public/section-header";
import { TrackExplorer } from "@/components/public/track-explorer";
import {
  event,
  primaryActions,
  schedulePreview,
  valuePillars,
} from "@/lib/public-site-data";

export default function Home() {
  return (
    <>
      <HeroOpening />

      <section className="proof-strip" aria-labelledby="proof-title">
        <div className="page-shell">
          <div className="proof-strip__intro">
            <p className="eyebrow"><span aria-hidden="true" />Event proof</p>
            <h2 id="proof-title">The public record starts with what can be verified.</h2>
          </div>
          <div className="proof-strip__metrics">
            {event.proof.map((item, index) => (
              <Reveal delay={index * 80} key={item.label}>
                <div className="metric">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EventMarquee />

      <section className="section why-section" id="about" aria-labelledby="why-title">
        <div className="page-shell why-manifesto">
          <Reveal className="why-manifesto__lead">
            <p className="eyebrow"><span aria-hidden="true" />Why Code-e-Manipal</p>
            <h2 id="why-title">BUILD.<br />BREAK.<br /><em>BECOME.</em></h2>
            <p>
              A competitive journey can give good ideas the tension, perspective, and room they need to become real.
            </p>
          </Reveal>

          <div className="why-manifesto__story" aria-label="Why the experience matters">
            {valuePillars.map((pillar, index) => (
              <Reveal delay={index * 100} key={pillar.number}>
                <article className="why-story-step">
                  <span>{pillar.number}</span>
                  <div>
                    <p>{pillar.eyebrow}</p>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                  <i aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tracks-section" id="tracks" aria-labelledby="tracks-title">
        <div className="page-shell tracks-section__topline">
          <Reveal>
            <SectionHeader
              eyebrow="Challenge tracks"
              title="Find the problem that deserves your best thinking."
              description="The official categories will appear as soon as they are confirmed. Until then, this selector keeps the challenge map ready without making up the brief."
            />
          </Reveal>
          <Button href="/tracks" variant="quiet">Explore tracks</Button>
        </div>
        <Reveal className="page-shell" delay={90}>
          <TrackExplorer />
        </Reveal>
      </section>

      <section className="section journey-section" id="journey" aria-labelledby="journey-title">
        <div className="page-shell journey-section__grid">
          <Reveal className="journey-section__intro">
            <SectionHeader
              eyebrow="How it works"
              title="A journey with more than one kind of finish line."
              description="This is the proposed experience architecture. The confirmed sequence, eligibility, and timings will be published by the organizers."
            />
            <ArchitecturalRule label="Journey status: to be announced" />
          </Reveal>
          <JourneyRail />
        </div>
      </section>

      <section className="section schedule-preview-section" id="timeline" aria-labelledby="timeline-title">
        <div className="page-shell schedule-preview-section__head">
          <Reveal>
            <SectionHeader
              eyebrow="Timeline preview"
              title="A 36-hour journey, from qualifier to final demo."
              description="The complete event progression, including check-in, hacking, mentorship, code freeze, and jury evaluation, is now available on the public timeline."
            />
          </Reveal>
          <Button href="/timeline" variant="secondary">View full timeline</Button>
        </div>

        <Reveal className="page-shell" delay={80}>
          <div className="schedule-table-wrap">
            <table className="schedule-table">
              <caption className="sr-only">Official schedule preview</caption>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Event</th>
                  <th scope="col">Description</th>
                  <th scope="col">Location</th>
                  <th scope="col">Stage</th>
                </tr>
              </thead>
              <tbody>
                {schedulePreview.map((item) => (
                  <tr key={item.number}>
                    <td data-label="Date">{item.day}</td>
                    <td data-label="Time">{item.time}</td>
                    <th data-label="Event" scope="row">{item.event}</th>
                    <td data-label="Description">{item.description}</td>
                    <td data-label="Location">{item.location}</td>
                    <td data-label="Stage"><span>{item.stage}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section prizes-section" id="prizes" aria-labelledby="prizes-title">
        <div className="page-shell prizes-section__head">
          <Reveal>
            <SectionHeader
              eyebrow="Prize experience"
              title="Recognition should feel like a moment, not a footnote."
              description="The award architecture is ready for its confirmed names, benefits, and prize values. None are published here before the official release."
            />
          </Reveal>
          <Button href="/prizes" variant="quiet">View all prizes</Button>
        </div>
        <Reveal className="page-shell" delay={90}>
          <PrizePodium />
        </Reveal>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <HeritageAtmosphere asset="register" className="final-cta__atmosphere" />
        <div className="page-shell final-cta__content">
          <p className="eyebrow"><span aria-hidden="true" />Code-e-Manipal 2.0</p>
          <h2 id="final-cta-title">Ready to build what comes next?</h2>
          <p>Registration guidance and the official challenge release will be published through this site.</p>
          <div className="final-cta__actions">
            <Button href={primaryActions.enter.href}>Enter Console</Button>
          </div>
          <ArchitecturalRule label="The next signal is yours" />
        </div>
      </section>
    </>
  );
}
