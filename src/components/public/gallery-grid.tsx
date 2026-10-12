"use client";

import Image from "next/image";
import { useState } from "react";

const approvedStudies = [
  { title: "Hawa Mahal", description: "A study in rhythm, screens, and the detail that makes a facade memorable.", image: "/images/backgrounds/Hawa_Mahal_Day_Scene.jpg", alt: "Hawa Mahal in Jaipur" },
  { title: "Jal Mahal", description: "Stillness, reflection, and a landmark held between landscape and water.", image: "/images/backgrounds/jahal_mahal_lightmode.jpg", alt: "Jal Mahal in Jaipur" },
  { title: "Amer Fort", description: "Layered thresholds and a sense of arrival—references for the event’s spatial language.", image: "/images/backgrounds/amber_lightmode.jpg", alt: "Amer Fort in Jaipur" },
  { title: "Albert Hall", description: "An evening study in texture, light, and public gathering.", image: "/images/backgrounds/alberthall_light.jpg", alt: "Albert Hall Museum in Jaipur" },
  { title: "City Palace", description: "A compositional reference for craft, symmetry, and the city’s visual memory.", image: "/images/backgrounds/Jaipur_03-2016_20_City_Palace_complex_ight.jpg", alt: "City Palace complex in Jaipur" },
] as const;

type GalleryEntry = {
  title: string;
  description: string;
  alt: string;
  position: string;
} & ({ reserved: false; image: string } | { reserved: true });

const galleryEntries: GalleryEntry[] = Array.from({ length: 30 }, (_, index) => {
  const approved = approvedStudies[index];
  const position = String(index + 1).padStart(2, "0");

  return approved
    ? { ...approved, position, reserved: false as const }
    : {
        title: `Gallery frame ${position}`,
        description: "Reserved for an approved Code-e-Manipal event photograph, title, and credit.",
        alt: "",
        position,
        reserved: true as const,
      };
});

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rows = Array.from({ length: Math.ceil(galleryEntries.length / 5) }, (_, row) => galleryEntries.slice(row * 5, row * 5 + 5));

  return (
    <section className="gallery-grid" aria-label="Jaipur heritage visual studies">
      <div className="gallery-grid__intro"><p className="eyebrow"><span aria-hidden="true" />Visual studies</p><p>Explore the architectural references behind Code-e-Manipal’s public identity. Official event photography will be added here after clearance.</p></div>
      <div className="gallery-grid__items">
        {rows.map((row, rowIndex) => <div className="gallery-grid__row" key={rowIndex}>{row.map((study) => {
          const index = galleryEntries.indexOf(study);
          const expanded = index === activeIndex;
          return <button aria-expanded={expanded} className={`gallery-grid__item${expanded ? " is-expanded" : ""}${study.reserved ? " gallery-grid__item--reserved" : ""}`} key={study.position} onClick={() => setActiveIndex(index)} type="button">
            {!study.reserved && <Image alt={study.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 45vw" src={study.image} />}
            <span className="gallery-grid__veil" aria-hidden="true" />
            <span className="gallery-grid__copy"><small>{study.position} · {study.reserved ? "Event archive" : "Jaipur"}</small><strong>{study.title}</strong><em>{study.description}</em><b aria-hidden="true">{expanded ? "−" : "+"}</b></span>
          </button>;
        })}</div>)}
      </div>
      <p className="gallery-grid__note">Images are supplied project assets; source and licence confirmation remain pending organizer review.</p>
    </section>
  );
}
