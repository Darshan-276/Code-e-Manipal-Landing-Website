import Link from "next/link";

import { ArchitecturalRule } from "@/components/public/architectural-rule";
import { Button } from "@/components/public/button";
import { HeritageAtmosphere } from "@/components/public/heritage-atmosphere";
import { Reveal } from "@/components/public/reveal";
import { SectionHeader } from "@/components/public/section-header";
import { SiteLogo } from "@/components/public/site-logo";
import {
  event,
  faqs,
  gallery,
  people,
  primaryActions,
  prizes,
  schedulePreview,
  sponsors,
  trackPreview,
  valuePillars,
} from "@/lib/public-site-data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeritageAtmosphere asset="hero" className="hero__atmosphere" priority />
        <div className="hero__frame" aria-hidden="true">
          <span className="hero__frame-arch" />
          <span className="hero__frame-line hero__frame-line--top" />
          <span className="hero__frame-line hero__frame-line--side" />
        </div>

        <div className="page-shell hero__grid">
          <div className="hero__copy">
            <p className="hero__kicker"><span />Code-e-Manipal 2.0 <em>Public site</em></p>
            <div className="hero__logo">
              <SiteLogo priority />
            </div>
            <h1>Build with a point of view.</h1>
            <p className="hero__lede">{event.shortDescription}</p>
            <div className="hero__actions">
              <Button href={primaryActions.register.href}>Register</Button>
              <Button href={primaryActions.enter.href} variant="secondary">Enter portal</Button>
            </div>
          </div>

          <aside className="hero__signal" aria-label="Event information">
            <p className="eyebrow"><span aria-hidden="true" />Event signal</p>
            <div className="hero__signal-orbit" aria-hidden="true"><i /><i /><i /></div>
            <p className="hero__signal-copy">Official event details will be released through this site.</p>
            <div className="hero__metadata">
              {event.metadata.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="page-shell hero__footer">
          <p>Jaipur, interpreted through a modern technical lens.</p>
          <ArchitecturalRule label="Scroll to explore" />
        </div>
      </section>

      <section className="proof-strip" aria-labelledby="proof-title">
        <div className="page-shell">
          <div className="proof-strip__intro">
            <p className="eyebrow"><span aria-hidden="true" />Event proof</p>
            <h2 id="proof-title">The facts will be here when they are real.</h2>
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

      <section className="section why-section" id="about">
        <div className="page-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Why Code-e-Manipal"
              title="Enough structure to focus. Enough room to make it yours."
              description="A public foundation designed to put the work, the people, and the next meaningful question at the center."
            />
          </Reveal>
          <div className="pillar-grid">
            {valuePillars.map((pillar, index) => (
              <Reveal delay={index * 90} key={pillar.number}>
                <article className="pillar-card">
                  <span className="pillar-card__number">{pillar.number}</span>
                  <p className="eyebrow"><span aria-hidden="true" />{pillar.eyebrow}</p>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <span className="pillar-card__arch" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tracks-section" id="problem-statements">
        <div className="page-shell tracks-section__topline">
          <SectionHeader
            eyebrow="Problem statements"
            title="Start with a question worth staying up for."
            description="Official tracks will land here with enough context to help teams choose a direction with confidence."
          />
          <Button href="/problem-statements" variant="quiet">Explore challenges</Button>
        </div>
        <div className="page-shell track-grid">
          {trackPreview.map((track, index) => (
            <Reveal delay={index * 85} key={track.number}>
              <Link className="track-card" href={track.href || "/problem-statements"}>
                <span className="track-card__marker">{track.number}</span>
                <span className="track-card__index">{track.eyebrow}</span>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <span className="track-card__meta">{track.status}<b>↗</b></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section timeline-section" id="schedule">
        <div className="page-shell timeline-section__grid">
          <div className="timeline-section__sticky">
            <SectionHeader
              eyebrow="Event journey"
              title="A clear route from first signal to final showcase."
              description="The official timetable will turn this architecture into a practical, participant-ready journey."
            />
            <Button href="/schedule" variant="secondary">View schedule</Button>
          </div>
          <div className="timeline-list">
            {schedulePreview.map((phase, index) => (
              <Reveal delay={index * 100} key={phase.number}>
                <article className="timeline-item">
                  <span className="timeline-item__dot" aria-hidden="true" />
                  <span className="timeline-item__number">{phase.number}</span>
                  <div>
                    <p className="eyebrow"><span aria-hidden="true" />{phase.eyebrow}</p>
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </div>
                  <strong>{phase.status}</strong>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section awards-section" id="prizes">
        <div className="page-shell award-frame">
          <div className="award-frame__ornament" aria-hidden="true"><span /><span /><span /></div>
          <Reveal>
            <SectionHeader
              alignment="center"
              eyebrow="Recognition"
              title="A considered reward for considered work."
              description={prizes[0].description}
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="award-frame__status">
              <span>Official awards</span>
              <strong>{prizes[0].status}</strong>
              <Button href="/prizes" variant="secondary">View prizes</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section people-section" id="judges">
        <div className="page-shell people-section__header">
          <SectionHeader
            eyebrow="People behind the room"
            title="Perspectives that make the moment count."
            description="Judges, mentors, and organizing partners will be introduced here when their participation is confirmed."
          />
          <Button href="/judges" variant="quiet">Meet the people</Button>
        </div>
        <div className="page-shell profile-stage">
          <Reveal>
            <article className="profile-stage__card profile-stage__card--primary">
              <div className="profile-stage__portrait" aria-hidden="true"><span /></div>
              <p className="eyebrow"><span aria-hidden="true" />{people[0].eyebrow}</p>
              <h3>{people[0].title}</h3>
              <p>{people[0].description}</p>
              <strong>{people[0].status}</strong>
            </article>
          </Reveal>
          <div className="profile-stage__lines" aria-hidden="true"><span /><span /><span /></div>
          <div className="profile-stage__note">
            <span>01</span>
            <p>Professional profiles will be published when the panel is officially confirmed.</p>
          </div>
        </div>
      </section>

      <section className="section partners-section" id="sponsors">
        <div className="page-shell partners-section__head">
          <SectionHeader
            eyebrow="Partners"
            title="Good work needs a thoughtful support system."
            description={sponsors[0].description}
          />
          <Button href="/sponsors" variant="quiet">Partner with us</Button>
        </div>
        <div className="page-shell partner-wall">
          {["01", "02", "03", "04", "05", "06"].map((item, index) => (
            <Reveal delay={index * 45} key={item}>
              <div className="partner-slot">
                <span>{item}</span>
                <strong>{sponsors[0].status}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="page-shell gallery-section__grid">
          <div>
            <SectionHeader
              eyebrow="Gallery"
              title="When the work begins, the archive follows."
              description={gallery[0].description}
            />
            <Button href="/gallery" variant="secondary">Open gallery</Button>
          </div>
          <div className="gallery-frames" aria-label="Gallery preview">
            <Reveal className="gallery-frame gallery-frame--tall"><span>01</span><em>Official frames</em></Reveal>
            <Reveal className="gallery-frame gallery-frame--wide" delay={90}><span>02</span><em>To be announced</em></Reveal>
            <Reveal className="gallery-frame gallery-frame--square" delay={160}><span>03</span><em>Archive</em></Reveal>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="page-shell faq-section__grid">
          <SectionHeader
            eyebrow="FAQ"
            title="Clear answers, without the runaround."
            description="The answers below are intentionally limited to official-information status until organizers confirm the details."
          />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <Reveal delay={index * 45} key={faq.question}>
                <details>
                  <summary><span>0{index + 1}</span>{faq.question}<b aria-hidden="true">+</b></summary>
                  <p>{faq.answer}</p>
                </details>
              </Reveal>
            ))}
            <Link className="faq-list__link" href="/faq">Visit the FAQ page <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <HeritageAtmosphere asset="register" className="final-cta__atmosphere" />
        <div className="page-shell final-cta__content">
          <p className="eyebrow"><span aria-hidden="true" />Code-e-Manipal 2.0</p>
          <h2>Be ready when it is time to make your move.</h2>
          <p>Registration and portal guidance will be published through the official site.</p>
          <div className="final-cta__actions">
            <Button href={primaryActions.register.href}>Register now</Button>
            <Button href={primaryActions.enter.href} variant="secondary">Enter portal</Button>
          </div>
          <ArchitecturalRule label="End of signal" />
        </div>
      </section>
    </>
  );
}
