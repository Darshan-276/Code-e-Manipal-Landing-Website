import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HeritageAtmosphere } from "@/components/public/heritage-atmosphere";
import { SectionHeader } from "@/components/public/section-header";
import { SponsorCloud } from "@/components/public/sponsor-cloud";
import { AboutEditorial } from "@/components/public/about-editorial";
import { TeamShowcase } from "@/components/public/team-showcase";
import { GalleryGrid } from "@/components/public/gallery-grid";
import { publicRoutes, routeContent, type PublicRoute } from "@/lib/public-site-data";

type PublicPageProps = {
  params: { slug: string };
};

const assetForRoute = {
  about: "about",
  sponsors: "sponsors",
  team: "team",
  gallery: "gallery",
} as const;

const visibleRoutes = new Set(["/about", "/sponsors", "/team", "/gallery"]);

function resolveRoute(slug: string) {
  const route = `/${slug}` as PublicRoute;
  return visibleRoutes.has(route) && route in routeContent ? route as Exclude<PublicRoute, "/"> : null;
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
        </div>
      </section>

      <section className={`section section--tight${params.slug === "sponsors" ? " sponsors-section" : ""}`}>
        <div className="page-shell content-placeholder">
          {params.slug === "about" ? <AboutEditorial /> : params.slug === "team" ? <TeamShowcase /> : params.slug === "gallery" ? <GalleryGrid /> : params.slug === "sponsors" ? <SponsorCloud /> : (
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
