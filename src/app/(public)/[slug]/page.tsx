import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { Button } from "@/components/public/button";
import { HeritageAtmosphere } from "@/components/public/heritage-atmosphere";
import { JudgeGrid } from "@/components/public/judge-grid";
import { SectionHeader } from "@/components/public/section-header";
import { SponsorCloud } from "@/components/public/sponsor-cloud";
import { AboutEditorial } from "@/components/public/about-editorial";
import { OfficialPrizes } from "@/components/public/official-prizes";
import { OfficialTimeline } from "@/components/public/official-timeline";
import { primaryActions, publicRoutes, routeContent, type PublicRoute } from "@/lib/public-site-data";

type PublicPageProps = {
  params: { slug: string };
};

const assetForRoute = {
  about: "about",
  schedule: "schedule",
  timeline: "schedule",
  tracks: "problemStatements",
  "problem-statements": "problemStatements",
  prizes: "prizes",
  judges: "judges",
  sponsors: "sponsors",
  gallery: "gallery",
  faq: "faq",
  contact: "contact",
  register: "register",
  enter: "enter",
} as const;

function resolveRoute(slug: string) {
  const route = `/${slug}` as PublicRoute;
  return route in routeContent ? route as Exclude<PublicRoute, "/"> : null;
}

export function generateStaticParams() {
  return publicRoutes.map((route) => ({ slug: route.slice(1) }));
}

export function generateMetadata({ params }: PublicPageProps): Metadata {
  const route = resolveRoute(params.slug);
  if (!route) return {};
  const content = routeContent[route];

  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: route },
  };
}

export default function PublicDetailPage({ params }: PublicPageProps) {
  const route = resolveRoute(params.slug);
  if (!route) notFound();
  if (params.slug === "schedule") redirect("/timeline");

  const content = routeContent[route];
  const asset = assetForRoute[params.slug as keyof typeof assetForRoute];

  return (
    <>
      <section className={`page-intro${params.slug === "sponsors" ? " page-intro--sponsors" : ""}`}>
        <HeritageAtmosphere asset={asset} />
        <div className="page-shell page-intro__content">
          <p className="eyebrow"><span aria-hidden="true" />{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <div className="page-intro__actions"><Button href={primaryActions.enter.href}>Enter Console</Button></div>
        </div>
      </section>

      <section className={`section section--tight${params.slug === "sponsors" ? " sponsors-section" : ""}`}>
        <div className="page-shell content-placeholder">
          {params.slug === "about" ? <AboutEditorial /> : params.slug === "prizes" ? <OfficialPrizes /> : params.slug === "timeline" ? <OfficialTimeline /> : params.slug === "sponsors" ? (
            <>
              <SectionHeader eyebrow="Approved partners" title="Made possible with our partners." description="A considered collection of supporters behind Code-e-Manipal 2.0." />
              <SponsorCloud />
            </>
          ) : params.slug === "judges" ? (
            <>
              <SectionHeader eyebrow="Jury" title="A considered panel, announced in full soon." description="Judge names, roles, organisations, and photography will appear only after official confirmation." />
              <JudgeGrid />
            </>
          ) : (
            <>
              <SectionHeader eyebrow="Official update" title="This section is ready for confirmed event information." description="The content model and visual foundation are in place; only authoritative event details will be published here." />
              <div className="content-placeholder__frame"><span className="content-placeholder__corner content-placeholder__corner--one" /><span className="content-placeholder__corner content-placeholder__corner--two" /><p>To be announced</p></div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
