import { HeritageAtmosphere } from "./heritage-atmosphere";
import { SiteLogo } from "./site-logo";

export function HeroOpening() {
  return (
    <section className="brand-hero">
      <HeritageAtmosphere asset="hero" priority />
      <div className="brand-hero__content">
        <p className="brand-hero__learnit brand-hero__reveal brand-hero__reveal--one">LearnIT presents</p>
        <div className="brand-hero__reveal brand-hero__reveal--two"><SiteLogo className="brand-hero__logo" priority /></div>
        <span className="brand-hero__edition brand-hero__reveal brand-hero__reveal--three">2.0</span>
        <h1 className="brand-hero__reveal brand-hero__reveal--four">Build. Grow. Innovate.</h1>
        <p className="brand-hero__reveal brand-hero__reveal--five">Code-e-Manipal&apos;s 36-hour hackathon experience at Manipal University Jaipur.</p>
      </div>
    </section>
  );
}
