import type { Metadata } from "next";
import Image from "next/image";

import { siteConfig } from "@/lib/site";
import { values, stats } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GracePoint Planning Services is a family-owned funeral pre-planning firm. Since 1999 we've helped 10,000+ families document their wishes, protect their funds and find peace of mind.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | GracePoint Planning Services",
    description: "Family-owned, counselor-led, and uncompromisingly compassionate.",
    images: [{ url: "/images/about.jpg", width: 1024, height: 576 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The firm that treats pre-planning as an act of love"
        subtitle={`${siteConfig.name} was founded in 1999 on a simple belief: no family should ever have to make funeral decisions under pressure. Twenty-five years and 10,000+ families later, that belief still guides every plan we create.`}
        image="/images/about.jpg"
        imageAlt="The warm consultation room at GracePoint Planning Services"
      />

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <FadeIn className="order-2 lg:order-1">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-primary">
              We answer to your family — always
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                The funeral industry often operates on markup and pressure — decisions made
                in grief, priced in haste. We built GracePoint to be the opposite: a place
                where planning happens calmly, years in advance, with itemized pricing and
                counselors who work on salary, not commission.
              </p>
              <p>
                What we do is simple: we listen to your stories, document every wish, and
                protect your plans and funds so nothing is left to chance. When the time
                comes, our coordinators handle the details — and your family is free to
                grieve, not to organize.
              </p>
              <p className="border-l-2 border-accent pl-4 font-medium text-foreground/90">
                “Pre-planning is one of the last great gifts you can give the people you
                love — the gift of never having to decide.”
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-2xl shadow-[rgba(59,74,90,0.2)]">
              <Image
                src="/images/hero.jpg"
                alt="A calm, sunlit consultation room at GracePoint"
                width={1024}
                height={576}
                className="aspect-[16/11] w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our values"
            title="Four principles, zero exceptions"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="glass glass-card-hover h-full rounded-3xl p-6">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-[#c2a170] text-white shadow-lg shadow-[rgba(176,141,87,0.35)]">
                    <i className={cn(v.icon, "text-lg")} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="By the numbers"
            title="A record you can trust"
            subtitle="Compassionate guidance, measured the only way that matters: families at peace."
          />
          <div className="mt-12">
            <StatsStrip />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { title: "Family-owned", body: "Founded and run by the same family since 1999. No shareholders, no quotas — just families served with care." },
              { title: "Counselors on salary", body: "Our licensed counselors earn no commission, so every recommendation is made for you — never for a sale." },
              { title: "Funds trust-protected", body: "Prepaid plans are held in state-regulated trust or insurance-backed accounts, reviewed annually." },
            ].map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
                <div className="glass h-full rounded-3xl p-6">
                  <h3 className="font-heading text-lg font-semibold text-primary">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
