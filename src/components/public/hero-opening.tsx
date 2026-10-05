"use client";

import { useEffect, useState, type CSSProperties } from "react";

import { event, primaryActions } from "@/lib/public-site-data";
import { ArchitecturalRule } from "./architectural-rule";
import { Button } from "./button";
import { HeritageAtmosphere } from "./heritage-atmosphere";
import { SiteLogo } from "./site-logo";

export function HeroOpening() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const update = () => setScrollOffset(Math.min(window.scrollY * 0.08, 36));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="hero hero--opening" style={{ "--hero-shift": `${scrollOffset}px` } as CSSProperties}>
      <HeritageAtmosphere asset="hero" className="hero__atmosphere" priority />
      <div className="hero__edge-rule hero__edge-rule--left" aria-hidden="true" />
      <div className="hero__edge-rule hero__edge-rule--right" aria-hidden="true" />

      <div className="page-shell hero__opening-grid">
        <div className="hero__copy hero__copy--opening">
          <p className="hero__kicker hero__reveal hero__reveal--one"><span />Code-e-Manipal <em>Public edition</em></p>
          <div className="hero__identity hero__reveal hero__reveal--two">
            <SiteLogo className="hero__brand-logo" priority />
            <span className="hero__edition-mark">2.0</span>
          </div>
          <h1 className="hero__headline hero__reveal hero__reveal--three">Make the next thing matter.</h1>
          <p className="hero__lede hero__reveal hero__reveal--four">{event.shortDescription}</p>
          <div className="hero__actions hero__reveal hero__reveal--five">
            <Button href={primaryActions.register.href}>Register now</Button>
            <Button href={primaryActions.enter.href} variant="secondary">Enter portal</Button>
          </div>
        </div>

        <div className="hero__visual hero__reveal hero__reveal--six" aria-label="Jaipur heritage interpreted as architectural linework">
          <div className="hero__visual-grid" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="hero__visual-arch hero__visual-arch--outer" aria-hidden="true" />
          <div className="hero__visual-arch hero__visual-arch--middle" aria-hidden="true" />
          <div className="hero__visual-arch hero__visual-arch--inner" aria-hidden="true" />
          <div className="hero__visual-sun" aria-hidden="true"><i /><i /><i /></div>
          <p className="hero__visual-caption"><span>01</span> Jaipur / technical signal</p>
          <aside className="hero__signal hero__signal--opening" aria-label="Verified event information">
            <p className="eyebrow"><span aria-hidden="true" />Event signal</p>
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
      </div>

      <div className="page-shell hero__footer hero__footer--opening">
        <p>Jaipur, interpreted through a modern technical lens.</p>
        <ArchitecturalRule label="Scroll to explore" />
      </div>
      <div className="hero__transition" aria-hidden="true"><span /><i /><span /></div>
    </section>
  );
}
