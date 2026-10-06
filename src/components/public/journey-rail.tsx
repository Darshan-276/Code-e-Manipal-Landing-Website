"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import { competitionJourney } from "@/lib/public-site-data";

export function JourneyRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;
        const nextIndex = itemRefs.current.findIndex((item) => item === visibleEntry.target);
        if (nextIndex >= 0) setActiveIndex(nextIndex);
      },
      { rootMargin: "-22% 0px -45% 0px", threshold: [0.1, 0.45, 0.75] },
    );

    itemRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const progress = competitionJourney.length > 1
    ? (activeIndex / (competitionJourney.length - 1)) * 100
    : 0;

  return (
    <ol
      aria-label="Competition journey"
      className="journey-rail"
      style={{ "--journey-progress": `${progress}%` } as CSSProperties}
    >
      {competitionJourney.map((step, index) => {
        const isActive = index === activeIndex;
        const isComplete = index < activeIndex;

        return (
          <li
            aria-current={isActive ? "step" : undefined}
            className={`journey-rail__item${isActive ? " is-active" : ""}${isComplete ? " is-complete" : ""}`}
            key={step.number}
            ref={(item) => { itemRefs.current[index] = item; }}
          >
            <span className="journey-rail__marker" aria-hidden="true" />
            <span className="journey-rail__number">{step.number}</span>
            <div className="journey-rail__content">
              <p>{step.eyebrow}</p>
              <h3>{step.title}</h3>
              <span>{step.description}</span>
            </div>
            <strong>{step.status}</strong>
          </li>
        );
      })}
    </ol>
  );
}
