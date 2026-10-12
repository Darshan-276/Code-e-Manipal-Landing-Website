"use client";

import { useRef, useState, type HTMLAttributes, type ReactNode } from "react";

type MotionCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "article" | "div";
};

/** A lightweight, source-owned alternative to a cursor spotlight/tilt card. */
export function MotionCard({ as: Tag = "article", children, className = "", onPointerMove, onPointerLeave, ...props }: MotionCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const element = ref.current;
    if (element && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      const bounds = element.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      element.style.setProperty("--pointer-x", `${x}%`);
      element.style.setProperty("--pointer-y", `${y}%`);
      element.style.setProperty("--tilt-x", `${(y - 50) * -0.035}deg`);
      element.style.setProperty("--tilt-y", `${(x - 50) * 0.035}deg`);
    }
    onPointerMove?.(event);
  }

  return (
    <Tag
      {...props}
      className={`motion-card${active ? " motion-card--active" : ""} ${className}`.trim()}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={(event) => { setActive(false); onPointerLeave?.(event); }}
      onPointerMove={handlePointerMove}
      ref={(element) => { ref.current = element; }}
    >
      {children}
    </Tag>
  );
}
