import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

import { siteConfig, siteUrl } from "@/lib/site";
import { services, testimonials, faqs } from "@/lib/data";
import { HomeHero } from "@/components/home-hero";
import { FeaturesGrid } from "@/components/features-grid";
import { StatsStrip } from "@/components/stats-strip";
import { ServicesGrid } from "@/components/services-grid";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ProjectSlider } from "@/components/project-slider";
import { FaqSection } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Compassionate Funeral Pre-Planning`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — Compassionate Funeral Pre-Planning`,
    description: siteConfig.description,
    url: siteUrl,
    images: [{ url: "/images/og.jpg", width: 1200, height: 675, alt: siteConfig.name }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${siteUrl}/images/og.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.2672, longitude: -97.7431 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1200" },
  areaServed: "US",
  sameAs: siteConfig.socials.map((s) => s.href),
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    name: s.title,
    description: s.short,
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <StatsStrip />
      <FeaturesGrid />

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we do"
            title="Planning services that honor every wish"
            subtitle="Seven compassionate practices, one goal: make sure the plan you make is the plan your family receives."
          />
          <div className="mt-12">
            <ServicesGrid limit={6} />
          </div>
          <FadeIn className="mt-10 text-center">
            <Link
              href="/services"
              className={buttonVariants({
                variant: "outline",
                size: "default",
                className: "btn-glass min-h-12 rounded-xl px-7 text-sm font-semibold",
              })}
            >
              View all services
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Client stories"
            title="Plans that gave families peace of mind"
            subtitle="A few of the case studies behind the numbers — every plan in this reel started with a free conversation."
          />
          <FadeIn className="mt-12">
            <ProjectSlider />
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our families say"
            subtitle="10,000+ families trust GracePoint with life's quietest decisions — here's why they stay."
          />
          <FadeIn className="mt-12">
            <TestimonialSlider />
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered honestly"
            subtitle="The things families ask us most before their first planning session."
          />
          <div className="mt-12">
            <FaqSection />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
