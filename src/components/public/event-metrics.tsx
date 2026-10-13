"use client";

import { useEffect, useRef, useState } from "react";

import { currentProof } from "@/lib/public-site-data";
import { MotionCard } from "./motion-card";
import { Reveal } from "./reveal";

function MetricValue({ value }: { value: string }) {
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
    const element = ref.current;
    if (!match || !element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replaceAll(",", ""));
    const formatter = digits.includes(",") ? new Intl.NumberFormat("en-IN") : new Intl.NumberFormat("en-US", { useGrouping: false });
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const duration = 700;
      const tick = (now: number) => {
        const progress = Math.min((now - started) / duration, 1);
        setShown(`${prefix}${formatter.format(Math.round(target * (1 - Math.pow(1 - progress, 3))))}${suffix}`);
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
  return (
    <div className="scale-stats">
      {currentProof.map((item, index) => (
        <Reveal className="scale-stats__reveal" delay={index * 75} key={item.label}>
          <MotionCard className="metric-card"><MetricValue value={item.value} /><span>{item.label}</span></MotionCard>
        </Reveal>
      ))}
    </div>
  );
}
