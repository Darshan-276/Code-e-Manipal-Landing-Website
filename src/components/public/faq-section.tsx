"use client";

import { useState } from "react";

import { faqCategories, faqCount } from "@/lib/faq-data";

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleCategories = activeCategory === "all" ? faqCategories : faqCategories.filter((category) => category.id === activeCategory);

  return <section className="faq-section-component" aria-labelledby="faq-section-title"><header><p className="eyebrow"><span aria-hidden="true" />Participant support & guidance</p><h2 id="faq-section-title">Frequently asked questions</h2><p>Everything you need to know about Code-e-Manipal 2.0: account provisioning, team workspace management, challenge releases, submission requirements, and jury evaluation.</p></header><div className="faq-section-component__tabs" aria-label="FAQ categories"><button aria-pressed={activeCategory === "all"} onClick={() => setActiveCategory("all")} type="button">All questions <span>{faqCount}</span></button>{faqCategories.map((category) => <button aria-pressed={activeCategory === category.id} key={category.id} onClick={() => setActiveCategory(category.id)} type="button">{category.title} <span>{category.items.length}</span></button>)}</div><div className="faq-section-component__groups">{visibleCategories.map((category) => <section key={category.id}><h3>{category.title}</h3>{category.items.map((item) => <details key={item.id}><summary>{item.question}<b aria-hidden="true">+</b></summary><div><p>{item.answer}</p>{item.link && <a href={item.link.href} rel="noreferrer" target="_blank">{item.link.label} <span aria-hidden="true">↗</span></a>}</div></details>)}</section>)}</div><aside><h3>Still have questions?</h3><p>For operational emergencies during the 36-hour hackathon, visit the Help Desk in Lab Block 3 or consult the official technical documentation.</p><a href="https://code-e-manipal-2-testing.vercel.app/guidelines" rel="noreferrer" target="_blank">Guidelines ↗</a><a href="/timeline">Event Timeline ↗</a></aside></section>;
}
