import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { ServicesGrid } from "@/components/services-grid";
import { StatsStrip } from "@/components/stats-strip";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Funeral Pre-Planning Services",
  description:
    "Pre-need funeral planning, cremation planning, burial & cemetery arrangements, memorial services, veterans' benefits planning, prepaid plan management and grief support — delivered with compassion by licensed counselors.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Funeral Pre-Planning Services | GracePoint Planning Services",
    description:
      "Seven compassionate practices designed around your family — never a catalog.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 675 }],
  },
};

const process = [
  {
    step: "01",
    title: "Listen",
    description:
      "We sit with you, at your pace, and hear what matters — traditions, values, wishes, and the people you want involved.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Together we document every preference: service style, music, readings, casket or urn, cemetery and more.",
  },
  {
    step: "03",
    title: "Protect",
    description:
      "If you choose to prepay, your funds are held in trust or insurance-backed accounts with pricing locked at today's rates.",
  },
  {
    step: "04",
    title: "Honor",
    description:
      "When the time comes, your family follows the plan you wrote — with our coordinators handling every detail.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Planning services, designed around your family"
        subtitle="We're not a call center and we don't sell from a catalog. Every plan is led by a licensed counselor who listens first — and documents every wish with care."
        image="/images/about.jpg"
        imageAlt="A warm consultation room at GracePoint Planning Services"
      />

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="All services"
            title="Seven practices, one standard: your peace of mind"
          />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How it works"
            title="A proven four-step journey"
            subtitle="The same caring, disciplined process behind every plan we create."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.08}>
                <div className="glass glass-card-hover relative h-full overflow-hidden rounded-3xl p-6">
                  <span className="font-heading text-5xl font-semibold text-primary/15">
                    {p.step}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip />
      <CtaBand />
    </>
  );
}
