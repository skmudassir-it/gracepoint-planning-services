import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

import { pricingPlans, faqs } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { FaqSection } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion"
import { staggerDelay } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pre-planning pricing from GracePoint Planning Services. Plan creation is free forever; prepaid arrangements lock today's prices with trust-protected funds. No surprises, ever.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | GracePoint Planning Services",
    description: "Transparent planning pricing. No surprises, ever.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 675 }],
  },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, transparent planning pricing"
        subtitle="Creating your plan is free forever. Prepaid arrangements lock in today's prices with funds held in trust or insurance-backed accounts — and every option is itemized before you choose."
        image="/images/cta.jpg"
        imageAlt="A counselor welcoming a family at the GracePoint reception"
      />

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <FadeIn key={plan.name} delay={staggerDelay(i)}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl p-7",
                    plan.popular ? "glass-strong shadow-2xl shadow-[rgba(59,74,90,0.22)] lg:-translate-y-2" : "glass"
                  )}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#b08d57] to-[#c2a170] px-4 py-1.5 text-xs font-bold text-[#241a0d] shadow-lg shadow-[rgba(176,141,87,0.4)]">
                      <Sparkles className="size-3.5" aria-hidden />
                      Most popular
                    </span>
                  )}
                  <h2 className="font-heading text-xl font-semibold text-primary">{plan.name}</h2>
                  <p className="mt-2 min-h-10 text-sm leading-relaxed text-muted-foreground">
                    {plan.tagline}
                  </p>
                  <div className="mt-5 flex items-baseline gap-1.5">
                    {plan.priceMonthly !== null ? (
                      <>
                        <span className="font-heading text-4xl font-semibold text-primary">
                          {plan.priceMonthly === 0 ? "$0" : `$${plan.priceMonthly}`}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {plan.priceMonthly === 0 ? "forever" : "/month"}
                        </span>
                      </>
                    ) : (
                      <span className="font-heading text-3xl font-semibold text-primary">
                        Custom
                      </span>
                    )}
                  </div>
                  {plan.priceMonthly !== null && plan.priceMonthly > 0 && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      ${plan.priceAnnual}/mo when billed annually
                    </p>
                  )}
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="size-3 text-primary" aria-hidden />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "default", size: "default" }),
                      "mt-7 min-h-12 w-full rounded-xl text-sm font-semibold",
                      plan.popular
                        ? "btn-accent"
                        : "btn-glass bg-white/60 hover:bg-white"
                    )}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10">
            <p className="glass mx-auto max-w-3xl rounded-2xl px-6 py-4 text-center text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Prefer to talk first?</span> Every
              plan — paid or not — starts with a free, no-obligation planning conversation.{" "}
              <Link href="/contact" className="font-semibold text-primary underline underline-offset-4">
                Book yours
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Pricing FAQ"
            title="How our plans actually work"
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
