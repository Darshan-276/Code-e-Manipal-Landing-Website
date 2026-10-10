import { officialTracks } from "@/lib/public-site-data";

export function TrackGrid() {
  return <div className="track-grid-premium">{officialTracks.map((track, index) => <article key={track}><span>0{index + 1}</span><h3>{track}</h3><i aria-hidden="true" /></article>)}</div>;
}
