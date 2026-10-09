import { aboutHighlights, officialTracks } from "@/lib/public-site-data";

export function AboutEditorial() {
  return (
    <div className="about-editorial">
      <p className="about-editorial__lede">LearnIT&apos;s flagship hackathon brings innovators, developers, and problem-solvers together to ideate, build, and turn bold ideas into impactful solutions.</p>
      <div className="about-editorial__facts">{aboutHighlights.map((item) => <p key={item}>{item}</p>)}</div>
      <div className="about-editorial__tracks"><span>Official tracks</span>{officialTracks.map((track) => <b key={track}>{track}</b>)}</div>
    </div>
  );
}
