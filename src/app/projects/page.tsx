import type { Metadata } from "next";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion"
import { staggerDelay } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Real pre-planning journeys: families who documented their wishes, secured veterans' benefits and found peace of mind with GracePoint Planning Services. Names changed, outcomes real.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects & Case Studies | GracePoint Planning Services",
    description: "Real plans, lasting peace of mind.",
    images: [{ url: "/images/project-1.jpg", width: 1024, height: 576 }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Case studies from the family file"
        subtitle="Every plan starts with a free conversation and ends with a family at peace. These are three of our favorites — names changed, outcomes real."
        image="/images/project-2.jpg"
        imageAlt="A thoughtfully arranged planning desk at GracePoint"
      />

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl space-y-10">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={staggerDelay(i, 0.06)}>
              <article className="glass glass-card-hover grid overflow-hidden rounded-3xl lg:grid-cols-2">
                <div className="relative min-h-64 lg:min-h-full">
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.industry}`}
                    width={1024}
                    height={576}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="glass-strong absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-semibold text-primary">
                    {p.industry}
                  </span>
                </div>
                <div className="flex flex-col p-7 sm:p-9">
                  <h2 className="font-heading text-2xl font-semibold text-primary">{p.name}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">The challenge. </span>
                      {p.challenge}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">The solution. </span>
                      {p.solution}
                    </p>
                  </div>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-1">
                    {p.results.map((r) => (
                      <li
                        key={r}
                        className="flex items-center gap-2.5 rounded-xl bg-white/50 px-4 py-2.5 text-sm font-semibold text-primary"
                      >
                        <TrendingUp className="size-4 shrink-0 text-accent" aria-hidden />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Your turn"
            title="Your family's plan could be the next story"
            subtitle="If your arrangements aren't documented yet, there's no better time than today — while every decision can be made calmly, together."
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
