"use client";

import { useEffect, useRef } from "react";

/** Decorative pointer-responsive linework; excluded from the accessibility tree. */
export function AmbientAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const updatePointer = (event: PointerEvent) => {
      element.style.setProperty("--ambient-x", `${(event.clientX / window.innerWidth) * 100}%`);
      element.style.setProperty("--ambient-y", `${(event.clientY / window.innerHeight) * 100}%`);
    };
    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return <div aria-hidden="true" className="ambient-atmosphere" ref={ref}><i /><i /><i /><span /></div>;
}
