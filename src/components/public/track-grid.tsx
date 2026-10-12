import { tracks } from "@/lib/public-site-data";
import { MotionCard } from "./motion-card";

export function TrackGrid({ compact = false }: { compact?: boolean }) {
  return <div className={`track-grid-premium${compact ? " track-grid-premium--compact" : ""}`}>{tracks.map((track, index) => <MotionCard key={track.name}><span>0{index + 1}</span><i aria-hidden="true">{track.icon}</i><h3>{track.name}</h3></MotionCard>)}</div>;
}
