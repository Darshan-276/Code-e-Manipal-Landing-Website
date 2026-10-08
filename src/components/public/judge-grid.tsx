"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { judgeProfiles } from "@/lib/public-site-data";

export function JudgeGrid() {
  const [active, setActive] = useState<number | null>(null);
  const cards = useRef<Array<HTMLElement | null>>([]);

  if (!judgeProfiles.length) {
    return <div className="judge-empty">Confirmed judge profiles will be published here.</div>;
  }

  const resetCard = (index: number) => {
    cards.current[index]?.style.setProperty("--judge-rotate-x", "0deg");
    cards.current[index]?.style.setProperty("--judge-rotate-y", "0deg");
    cards.current[index]?.style.setProperty("--judge-x", "0px");
    cards.current[index]?.style.setProperty("--judge-y", "0px");
  };

  return (
    <div className="judge-grid">
      {judgeProfiles.map((judge, index) => (
        <article
          className={`judge-card${active === index ? " is-active" : ""}`}
          key={judge.name}
          onMouseLeave={() => { setActive(null); resetCard(index); }}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            event.currentTarget.style.setProperty("--judge-rotate-x", `${Math.max(-7, Math.min(7, -y * 14))}deg`);
            event.currentTarget.style.setProperty("--judge-rotate-y", `${Math.max(-7, Math.min(7, x * 14))}deg`);
            event.currentTarget.style.setProperty("--judge-x", `${x * 10}px`);
            event.currentTarget.style.setProperty("--judge-y", `${y * 10}px`);
            setActive(index);
          }}
          ref={(node) => { cards.current[index] = node; }}
        >
          <div className="judge-card__image"><Image alt={judge.name} fill sizes="(max-width: 700px) 90vw, 30vw" src={judge.image} /></div>
          <div className="judge-card__copy"><p>Jury</p><h3>{judge.name}</h3><span>{judge.role}</span>{judge.organization && <small>{judge.organization}</small>}</div>
        </article>
      ))}
    </div>
  );
}
