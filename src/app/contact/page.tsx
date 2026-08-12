import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone, HeartHandshake } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/page-header";
import { QuoteForm } from "@/components/quote-form";
import { FadeIn } from "@/components/motion"
import { staggerDelay } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a free funeral pre-planning consultation from GracePoint Planning Services. Talk to a compassionate counselor by phone, email or the form below — response within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | GracePoint Planning Services",
    description: "Free planning consultation, one business day response.",
    images: [{ url: "/images/contact.jpg", width: 1024, height: 576 }],
  },
};

const contactCards = [
  {
    title: "Call us",
    body: "Mon–Fri, 8am–6pm CT. Grief support line answered anytime.",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
  },
  {
    title: "Email us",
    body: "For plan documents, questions and general inquiries.",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    title: "Visit us",
    body: "In-person planning sessions available by appointment.",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
    href: "#",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's plan this together, gently"
        subtitle="Request a free consultation below, or reach us directly. A compassionate counselor — not a call center — will respond within one business day."
        image="/images/contact.jpg"
        imageAlt="The GracePoint reception area, warm and inviting"
      />

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-5">
            {contactCards.map((c, i) => (
              <FadeIn key={c.title} delay={staggerDelay(i, 0.06)}>
                <a
                  href={c.href}
                  className="glass glass-card-hover flex items-start gap-4 rounded-3xl p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#5a6f85] text-white shadow-lg shadow-[rgba(59,74,90,0.3)]">
                    <c.icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-heading text-lg font-semibold text-primary">
                      {c.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{c.body}</span>
                    <span className="mt-1 block break-words text-sm font-medium text-primary">
                      {c.value}
                    </span>
                  </span>
                </a>
              </FadeIn>
            ))}

            <FadeIn delay={0.2}>
              <div className="glass relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero.jpg"
                  alt=""
                  aria-hidden
                  width={1024}
                  height={576}
                  className="h-40 w-full object-cover"
                />
                <div className="flex items-center gap-3 p-5">
                  <Clock className="size-5 shrink-0 text-accent" aria-hidden />
                  <p className="text-sm text-muted-foreground">
                    Average response time for planning requests:{" "}
                    <strong className="text-primary">4 hours</strong>.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="glass flex items-center gap-3 rounded-3xl p-5">
                <HeartHandshake className="size-6 shrink-0 text-primary" aria-hidden />
                <p className="text-sm text-muted-foreground">
                  Your information is never sold or shared. Period.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <QuoteForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
