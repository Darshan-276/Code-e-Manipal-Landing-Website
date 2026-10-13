import { aboutHighlights } from "@/lib/public-site-data";
import { ArchitecturalRule } from "./architectural-rule";
import { Button } from "./button";
import { primaryActions } from "@/lib/public-site-data";
import { TrackGrid } from "./track-grid";
import { Reveal } from "./reveal";

const factLabels = ["Format", "Participation", "Team size"];

export function AboutEditorial() {
  return (
    <div className="about-editorial">
      <Reveal variant="left"><p className="about-editorial__lede">LearnIT&apos;s flagship hackathon brings innovators, developers, and problem-solvers together to ideate, build, and turn bold ideas into impactful solutions.</p></Reveal>
      <div className="about-editorial__facts">{aboutHighlights.map((item, index) => <Reveal delay={index * 70} key={item}><article><span>{factLabels[index]}</span><p>{item}</p></article></Reveal>)}</div>
      <Reveal className="about-editorial__story-reveal" variant="image">
        <div className="about-editorial__story">
        <div><p className="eyebrow"><span aria-hidden="true" />The room</p><h2>Made for people who want to make a useful thing.</h2></div>
        <p>Code-e-Manipal brings student builders together around practical challenges, focused collaboration, and a shared commitment to thoughtful work.</p>
        </div>
      </Reveal>
      <Reveal delay={70}><ArchitecturalRule label="LearnIT · MUJ" /></Reveal>
      <Reveal delay={115}><div className="about-editorial__tracks"><span>Official tracks</span><TrackGrid compact /></div></Reveal>
      <Reveal delay={150}><div className="about-editorial__action"><Button href={primaryActions.enter.href}>Enter Console</Button></div></Reveal>
    </div>
  );
}
