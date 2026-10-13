"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent, type RefObject } from "react";

import { Reveal } from "./reveal";
import styles from "./gallery-grid.module.css";

type GalleryLayout = "featured" | "side" | "wide" | "medium" | "compact" | "standard";
type GalleryFormat = "landscape" | "classic";

type GalleryEntry = {
  id: string;
  image: string;
  title: string;
  description: string;
  alt: string;
  category: "Stage" | "Build" | "Recognition" | "Community";
  layout: GalleryLayout;
  format: GalleryFormat;
};

const galleryEntries: GalleryEntry[] = [
  {
    id: "one-community-one-stage",
    image: "/images/gallery/IMG_2071-Enhanced-NR.jpg",
    title: "One Community, One Stage",
    description: "A full-stage gathering brings the people behind the event together in one frame.",
    alt: "Code-e-Manipal team gathered on stage in front of the event screen",
    category: "Community",
    layout: "featured",
    format: "classic",
  },
  {
    id: "opening-the-floor",
    image: "/images/gallery/IMG_0099-Enhanced-NR.jpg",
    title: "Opening the Floor",
    description: "Presenters take the stage to guide the audience through the session.",
    alt: "Two presenters speaking from a podium on the Code-e-Manipal stage",
    category: "Stage",
    layout: "side",
    format: "landscape",
  },
  {
    id: "a-room-full-of-ideas",
    image: "/images/gallery/IMG_0101-Enhanced-NR.jpg",
    title: "A Room Full of Ideas",
    description: "Participants fill the auditorium, ready to learn, connect and exchange ideas.",
    alt: "Participants seated across a packed auditorium",
    category: "Stage",
    layout: "side",
    format: "landscape",
  },
  {
    id: "sharing-the-vision",
    image: "/images/gallery/IMG_0134-Enhanced-NR.jpg",
    title: "Sharing the Vision",
    description: "A speaker walks the audience through a presentation on online communities.",
    alt: "Speaker presenting an online community slide on stage",
    category: "Stage",
    layout: "side",
    format: "landscape",
  },
  {
    id: "closer-as-a-team",
    image: "/images/gallery/IMG_2072-Enhanced-NR.jpg",
    title: "Closer as a Team",
    description: "A closer group portrait captures the people who helped bring the event together.",
    alt: "Close group portrait of Code-e-Manipal organisers on stage",
    category: "Community",
    layout: "side",
    format: "classic",
  },
  {
    id: "people-behind-the-event",
    image: "/images/gallery/IMG_1663-Enhanced-NR.jpg",
    title: "The People Behind the Event",
    description: "The team comes together for a group portrait after the event activities.",
    alt: "Code-e-Manipal organising team in a group portrait indoors",
    category: "Community",
    layout: "wide",
    format: "landscape",
  },
  {
    id: "recognising-achievement",
    image: "/images/gallery/IMG_2046-Enhanced-NR.jpg",
    title: "Recognising Achievement",
    description: "Participants and organisers come together on stage for a certificate presentation.",
    alt: "Certificate recipients and organisers posing on stage",
    category: "Recognition",
    layout: "medium",
    format: "classic",
  },
  {
    id: "a-moment-worth-celebrating",
    image: "/images/gallery/IMG_2053-Enhanced-NR.jpg",
    title: "A Moment Worth Celebrating",
    description: "Participants gather on stage to celebrate a certificate presentation.",
    alt: "Participants receiving certificates with organisers on stage",
    category: "Recognition",
    layout: "compact",
    format: "classic",
  },
  {
    id: "together-on-stage",
    image: "/images/gallery/IMG_2063-Enhanced-NR.jpg",
    title: "Together on Stage",
    description: "Participants and organisers pause for a group photograph beneath the event backdrop.",
    alt: "Participants and organisers standing together in front of the Code-e-Manipal backdrop",
    category: "Recognition",
    layout: "medium",
    format: "classic",
  },
  {
    id: "presenting-smartsip",
    image: "/images/gallery/IMG_0080-Enhanced-NR.jpg",
    title: "Presenting SmartSip",
    description: "A project presenter introduces SmartSip on the Code-e-Manipal stage.",
    alt: "SmartSip presenter speaking beneath the Code-e-Manipal stage display",
    category: "Stage",
    layout: "wide",
    format: "landscape",
  },
  {
    id: "deep-in-the-build",
    image: "/images/gallery/IMG_1612-Enhanced-NR.jpg",
    title: "Deep in the Build",
    description: "A team works through code, ideas and technical challenges together.",
    alt: "Participants working around laptops and cables during the build",
    category: "Build",
    layout: "wide",
    format: "landscape",
  },
  {
    id: "from-concept-to-prototype",
    image: "/images/gallery/IMG_1654-Enhanced-NR.jpg",
    title: "From Concept to Prototype",
    description: "A custom-built wheeled prototype brings mechanical design and electronics together.",
    alt: "Custom wheeled electronics prototype on a table with its builders",
    category: "Build",
    layout: "medium",
    format: "landscape",
  },
  {
    id: "ideas-in-motion",
    image: "/images/gallery/IMG_1621-Enhanced-NR.jpg",
    title: "Ideas in Motion",
    description: "Participants exchange feedback and discuss their work around the laptops.",
    alt: "Participants discussing code and ideas around a laptop",
    category: "Build",
    layout: "standard",
    format: "landscape",
  },
  {
    id: "a-moment-of-feedback",
    image: "/images/gallery/IMG_1650-Enhanced-NR.jpg",
    title: "A Moment of Feedback",
    description: "A project discussion brings different perspectives to the table.",
    alt: "Participants discussing a project in a classroom workspace",
    category: "Build",
    layout: "medium",
    format: "landscape",
  },
  {
    id: "two-minds-one-screen",
    image: "/images/gallery/IMG_1611-Enhanced-NR.jpg",
    title: "Two Minds, One Screen",
    description: "Teammates review their work and work through the next step together.",
    alt: "Two teammates reviewing work together at a laptop",
    category: "Build",
    layout: "standard",
    format: "landscape",
  },
  {
    id: "the-team-huddle",
    image: "/images/gallery/IMG_1656-Enhanced-NR.jpg",
    title: "The Team Huddle",
    description: "Teammates gather around their workstation to discuss the project and work through the next steps.",
    alt: "Team huddled around a workstation during the event",
    category: "Build",
    layout: "compact",
    format: "landscape",
  },
  {
    id: "ideas-across-the-table",
    image: "/images/gallery/IMG_1661-Enhanced-NR.jpg",
    title: "Ideas Across the Table",
    description: "Different perspectives come together as participants exchange feedback and refine their ideas.",
    alt: "Participants exchanging feedback around a classroom table",
    category: "Build",
    layout: "medium",
    format: "landscape",
  },
  {
    id: "conversations-beyond-the-code",
    image: "/images/gallery/IMG_1608-Enhanced-NR.jpg",
    title: "Conversations Beyond the Code",
    description: "Participants take a break to connect and catch up over a meal.",
    alt: "Participants sharing a meal and conversation in the campus dining area",
    category: "Community",
    layout: "wide",
    format: "landscape",
  },
  {
    id: "a-well-earned-break",
    image: "/images/gallery/IMG_1605-Enhanced-NR.jpg",
    title: "A Well-Earned Break",
    description: "Participants step away from their workstations to share a meal and recharge.",
    alt: "Participants sharing a meal in a dining area with red chairs",
    category: "Community",
    layout: "standard",
    format: "landscape",
  },
  {
    id: "a-conversation-that-counts",
    image: "/images/gallery/IMG_0011-Enhanced-NR.jpg",
    title: "A Conversation That Counts",
    description: "Participants and organisers exchange thoughts during an auditorium discussion.",
    alt: "Participants and organisers talking in an auditorium",
    category: "Community",
    layout: "medium",
    format: "landscape",
  },
  {
    id: "a-quick-exchange",
    image: "/images/gallery/IMG_0025-Enhanced-NR.jpg",
    title: "A Quick Exchange",
    description: "A candid moment captures a brief exchange during the event.",
    alt: "Two participants in conversation in an auditorium",
    category: "Community",
    layout: "compact",
    format: "landscape",
  },
  {
    id: "at-the-podium",
    image: "/images/gallery/IMG_0319-Enhanced-NR.jpg",
    title: "At the Podium",
    description: "A speaker addresses the room under the glow of the stage lights.",
    alt: "Speaker addressing the audience from a podium under stage lights",
    category: "Stage",
    layout: "standard",
    format: "landscape",
  },
];

type GalleryCardProps = {
  entry: GalleryEntry;
  index: number;
  onOpen: (index: number, event: MouseEvent<HTMLButtonElement>) => void;
};

function GalleryCard({ entry, index, onOpen }: GalleryCardProps) {
  return (
    <article className={styles.card}>
      <button aria-label={`Open ${entry.title}`} className={styles.imageButton} onClick={(event) => onOpen(index, event)} type="button">
        <span className={styles.imageFrame}>
          <Image
            alt={entry.alt}
            className={styles.image}
            fill
            priority={index === 0}
            quality={82}
            sizes={index === 0 ? "(max-width: 720px) 100vw, (max-width: 1200px) 75vw, 52vw" : "(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 31vw"}
            src={entry.image}
          />
          <span aria-hidden="true" className={styles.openCue}>View image <b>↗</b></span>
        </span>
      </button>
      <div className={styles.caption}>
        <p className={styles.category}>{entry.category}</p>
        <h2>{entry.title}</h2>
        <p>{entry.description}</p>
      </div>
    </article>
  );
}

type LightboxProps = {
  activeIndex: number;
  dialogRef: RefObject<HTMLDivElement>;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

function Lightbox({ activeIndex, dialogRef, onClose, onNext, onPrevious }: LightboxProps) {
  const entry = galleryEntries[activeIndex];

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div aria-labelledby="gallery-lightbox-title" className={styles.lightboxBackdrop} onClick={handleBackdropClick} role="presentation">
      <div aria-describedby="gallery-lightbox-description" aria-modal="true" className={styles.lightbox} ref={dialogRef} role="dialog" tabIndex={-1}>
        <div className={styles.lightboxTopbar}>
          <p>{String(activeIndex + 1).padStart(2, "0")} / {String(galleryEntries.length).padStart(2, "0")}</p>
          <button aria-label="Close image viewer" className={styles.iconButton} onClick={onClose} type="button">×</button>
        </div>
        <div className={`${styles.lightboxImage} ${entry.format === "classic" ? styles.lightboxImageClassic : ""}`}>
          <Image alt={entry.alt} fill priority quality={82} sizes="(max-width: 720px) 94vw, 84vw" src={entry.image} />
        </div>
        <div className={styles.lightboxFooter}>
          <div>
            <p>{entry.category}</p>
            <h2 id="gallery-lightbox-title">{entry.title}</h2>
            <p id="gallery-lightbox-description">{entry.description}</p>
          </div>
          <div className={styles.lightboxNavigation}>
            <button aria-label={`Show previous image, ${galleryEntries[(activeIndex - 1 + galleryEntries.length) % galleryEntries.length].title}`} onClick={onPrevious} type="button">← <span>Previous</span></button>
            <button aria-label={`Show next image, ${galleryEntries[(activeIndex + 1) % galleryEntries.length].title}`} onClick={onNext} type="button"><span>Next</span> →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const originTriggerRef = useRef<HTMLButtonElement | null>(null);
  const isLightboxOpen = activeIndex !== null;

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => setActiveIndex((current) => current === null ? current : (current - 1 + galleryEntries.length) % galleryEntries.length);
  const showNext = () => setActiveIndex((current) => current === null ? current : (current + 1) % galleryEntries.length);

  const openLightbox = (index: number, event: MouseEvent<HTMLButtonElement>) => {
    originTriggerRef.current = event.currentTarget;
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.requestAnimationFrame(() => dialogRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(focusTimer);
      document.body.style.overflow = previousOverflow;
      originTriggerRef.current?.focus();
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) => current === null ? current : (current - 1 + galleryEntries.length) % galleryEntries.length);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => current === null ? current : (current + 1) % galleryEntries.length);
      }
      if (event.key === "Tab") {
        const controls = Array.from(dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])") ?? []);
        const firstControl = controls[0];
        const lastControl = controls.at(-1);
        if (!firstControl || !lastControl) return;
        if (event.shiftKey && document.activeElement === firstControl) {
          event.preventDefault();
          lastControl.focus();
        } else if (!event.shiftKey && document.activeElement === lastControl) {
          event.preventDefault();
          firstControl.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section aria-label="Code-e-Manipal 1.0 event gallery" className={styles.gallery}>
      <div className={styles.collection}>
        {galleryEntries.map((entry, index) => (
          <Reveal className={`${styles.cardReveal} ${styles[entry.layout]} ${styles[entry.format]}`} delay={(index % 5) * 55} key={entry.id}>
            <GalleryCard entry={entry} index={index} onOpen={openLightbox} />
          </Reveal>
        ))}
      </div>

      <p className={styles.credit}>Photography by Aperture Digital Arts Society.</p>

      {activeIndex !== null && <Lightbox activeIndex={activeIndex} dialogRef={dialogRef} onClose={closeLightbox} onNext={showNext} onPrevious={showPrevious} />}
    </section>
  );
}
