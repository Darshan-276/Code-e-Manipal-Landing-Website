import { tracks } from "@/lib/public-site-data";

export function TrackGrid({ compact = false }: { compact?: boolean }) {
  return <div className={`track-grid-premium${compact ? " track-grid-premium--compact" : ""}`}>{tracks.map((track, index) => <article key={track.name}><span>0{index + 1}</span><i aria-hidden="true">{track.icon}</i><h3>{track.name}</h3></article>)}</div>;
}
