import Link from "next/link";

import { primaryActions, publicNavigation } from "@/lib/public-site-data";
import { Button } from "./button";
import { SiteLogo } from "./site-logo";

export function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="public-footer__line" aria-hidden="true"><span /><i /><span /></div>
      <div className="page-shell public-footer__grid">
        <div className="public-footer__brand">
          <SiteLogo />
          <p>Modern thinking, crafted with Jaipur in the frame.</p>
          <div className="public-footer__actions">
            <Button href={primaryActions.enter.href}>Enter Console</Button>
          </div>
        </div>

        <div className="public-footer__links">
          <p className="eyebrow"><span aria-hidden="true" />Explore</p>
          <div>
            {publicNavigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>

        <div className="public-footer__details">
          <p className="eyebrow"><span aria-hidden="true" />Official information</p>
          <Link href="/contact">Contact organizers</Link>
          <p>Contact details and official social links are to be announced.</p>
        </div>
      </div>
      <div className="page-shell public-footer__bottom">
        <span>Code-e-Manipal 2.0</span>
        <span>All official event details will be published here.</span>
      </div>
    </footer>
  );
}
