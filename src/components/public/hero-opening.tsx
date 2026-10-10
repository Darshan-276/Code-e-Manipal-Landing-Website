import { HeritageAtmosphere } from "./heritage-atmosphere";
import { SiteLogo } from "./site-logo";

export function HeroOpening() {
  return <section className="brand-hero"><HeritageAtmosphere asset="hero" priority /><div className="brand-hero__content"><p className="brand-hero__learnit">LearnIT presents</p><SiteLogo className="brand-hero__logo" priority /><span className="brand-hero__edition">2.0</span><h1>Build. Grow. Innovate.</h1><p>Code-e-Manipal&apos;s 36-hour hackathon experience at Manipal University Jaipur.</p></div></section>;
}
