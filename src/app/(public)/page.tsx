import { ArchitecturalRule } from "@/components/public/architectural-rule";
import { Button } from "@/components/public/button";
import { HeritageAtmosphere } from "@/components/public/heritage-atmosphere";
import { HeroOpening } from "@/components/public/hero-opening";
import { PartnerMarquee } from "@/components/public/partner-marquee";
import { SectionHeader } from "@/components/public/section-header";
import { TrackGrid } from "@/components/public/track-grid";
import { currentProof, primaryActions } from "@/lib/public-site-data";

export default function Home() {
  return <>
    <HeroOpening />
    <PartnerMarquee />
    <section className="section scale-section"><div className="page-shell"><SectionHeader eyebrow="Event proof" title="The Scale of the Sprint" description="A focused 36-hour build experience at Manipal University Jaipur." /><div className="scale-stats">{currentProof.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></div></section>
    <section className="section tracks-section"><div className="page-shell"><SectionHeader eyebrow="Themes & tracks" title="Nine spaces to build what matters." description="Choose a track that gives your idea a meaningful problem to solve." /><TrackGrid /></div></section>
    <section className="section partners-showcase"><div className="page-shell"><SectionHeader eyebrow="Partners" title="Built with partners who back innovation." description="Our sponsors help create the room for ambitious ideas to become practical work." /></div><PartnerMarquee large /></section>
    <section className="section next-section"><div className="page-shell next-section__inner"><div><p className="eyebrow"><span aria-hidden="true" />What comes next</p><h2>Bring the idea. Build the proof.</h2></div><p>Explore the themes, prepare your team, and follow the official event journey as each phase opens.</p><ArchitecturalRule label="Code-e-Manipal 2.0" /></div></section>
    <section className="final-cta"><HeritageAtmosphere asset="hero" className="final-cta__atmosphere" /><div className="page-shell final-cta__content"><p className="eyebrow"><span aria-hidden="true" />Code-e-Manipal 2.0</p><h2>Ready to build what comes next?</h2><p>Enter the official workspace when your team is ready.</p><div className="final-cta__actions"><Button href={primaryActions.enter.href}>Enter Console</Button></div></div></section>
  </>;
}
