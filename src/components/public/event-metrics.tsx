"use client";

import { useEffect, useRef, useState } from "react";

import { currentProof } from "@/lib/public-site-data";
import { MotionCard } from "./motion-card";

function MetricValue({ value }: { value: string }) {
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const match = value.match(/^(.*?)(\d+)(.*?)$/);
    const element = ref.current;
    if (!match || !element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const duration = 700;
      const tick = (now: number) => {
        const progress = Math.min((now - started) / duration, 1);
        setShown(`${prefix}${Math.round(target * (1 - Math.pow(1 - progress, 3)))}${suffix}`);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.55 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <strong aria-label={value} ref={ref}>{shown}</strong>;
}

export function EventMetrics() {
  return <div className="scale-stats">{currentProof.map((item) => <MotionCard className="metric-card" key={item.label}><MetricValue value={item.value} /><span>{item.label}</span></MotionCard>)}</div>;
}
