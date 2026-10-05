"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { primaryActions, publicNavigation } from "@/lib/public-site-data";
import { Button } from "./button";
import { SiteLogo } from "./site-logo";
import { ThemeToggle } from "./theme-toggle";

export function PublicHeader() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 22);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`public-header${hasScrolled ? " public-header--scrolled" : ""}`}>
      <div className="public-header__inner page-shell">
        <SiteLogo compact />

        <nav aria-label="Primary navigation" className="public-header__nav">
          {publicNavigation.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className={pathname === item.href ? "is-active" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="public-header__actions">
          <ThemeToggle />
          <Button href={primaryActions.enter.href} variant="secondary">Enter</Button>
          <Button href={primaryActions.register.href}>Register</Button>
        </div>

        <div className="public-header__mobile-actions">
          <ThemeToggle />
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`} id="mobile-navigation">
        <nav aria-label="Mobile navigation" className="mobile-menu__nav page-shell">
          {publicNavigation.map((item, index) => (
            <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
              <small>{item.description}</small>
            </Link>
          ))}
          <div className="mobile-menu__actions">
            <Button href={primaryActions.register.href}>Register</Button>
            <Button href={primaryActions.enter.href} variant="secondary">Enter portal</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
