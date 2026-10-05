"use client";

import { useCallback, useEffect, useState } from "react";

import { SiteLogo } from "./site-logo";

const INTRO_HAS_PLAYED = "code-e-manipal-intro-played";

export function IntroExperience() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const complete = useCallback(() => {
    setLeaving(true);
    window.setTimeout(() => {
      setVisible(false);
      document.documentElement.dataset.introComplete = "true";
      window.sessionStorage.setItem(INTRO_HAS_PLAYED, "true");
    }, 620);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasPlayed = window.sessionStorage.getItem(INTRO_HAS_PLAYED) === "true";
    const delay = reducedMotion || hasPlayed ? 160 : 3050;
    const timer = window.setTimeout(complete, delay);

    return () => window.clearTimeout(timer);
  }, [complete]);

  if (!visible) return null;

  return (
    <div aria-label="Opening Code-e-Manipal" aria-live="polite" className={`intro-experience${leaving ? " intro-experience--leaving" : ""}`} role="status">
      <div className="intro-experience__linework" aria-hidden="true">
        <span className="intro-experience__arch intro-experience__arch--outer" />
        <span className="intro-experience__arch intro-experience__arch--inner" />
        <span className="intro-experience__horizon" />
        <i /><i /><i />
      </div>
      <div className="intro-experience__content">
        <p className="intro-experience__kicker">Manipal University Jaipur presents</p>
        <SiteLogo className="intro-experience__logo" priority />
        <p className="intro-experience__edition">2.0</p>
        <p className="intro-experience__note">Jaipur heritage × modern technical culture</p>
      </div>
      <button className="intro-experience__skip" onClick={complete} type="button">Skip intro <span aria-hidden="true">↗</span></button>
    </div>
  );
}
