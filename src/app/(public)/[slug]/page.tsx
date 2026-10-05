import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/public/button";
import { HeritageAtmosphere } from "@/components/public/heritage-atmosphere";
import { SectionHeader } from "@/components/public/section-header";
import { primaryActions, publicRoutes, routeContent, type PublicRoute } from "@/lib/public-site-data";

type PublicPageProps = {
  params: { slug: string };
};

const assetForRoute = {
  about: "about",
  schedule: "schedule",
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

  const content = routeContent[route];
  const asset = assetForRoute[params.slug as keyof typeof assetForRoute];

  return (
    <>
      <section className="page-intro">
        <HeritageAtmosphere asset={asset} />
        <div className="page-shell page-intro__content">
          <p className="eyebrow"><span aria-hidden="true" />{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <div className="page-intro__actions">
            <Button href={primaryActions.register.href}>Register</Button>
            <Button href={primaryActions.enter.href} variant="secondary">Enter portal</Button>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="page-shell content-placeholder">
          <SectionHeader
            eyebrow="Official update"
            title="This section is ready for confirmed event information."
            description="The content model and visual foundation are in place; only authoritative event details will be published here."
          />
          <div className="content-placeholder__frame">
            <span className="content-placeholder__corner content-placeholder__corner--one" />
            <span className="content-placeholder__corner content-placeholder__corner--two" />
            <p>To be announced</p>
          </div>
        </div>
      </section>
    </>
  );
}
