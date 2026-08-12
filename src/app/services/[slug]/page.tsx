import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.short,
      images: [{ url: service.image, width: 1024, height: 576 }],
    },
  };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const related = [...services.slice(0, index), ...services.slice(index + 1)].slice(0, 3);

  return (
    <>
      <section className="relative px-4 pt-32 pb-12 sm:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <li aria-hidden>·</li>
                <li>
                  <Link href="/services" className="transition-colors hover:text-primary">
                    Services
                  </Link>
                </li>
                <li aria-hidden>·</li>
                <li aria-current="page" className="text-primary">
                  {service.title}
                </li>
              </ol>
            </nav>
            <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#5a6f85] text-white shadow-lg shadow-[rgba(59,74,90,0.35)]">
              <i className={cn(service.icon, "text-xl")} aria-hidden />
            </span>
            <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-balance text-primary sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Start free planning
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "outline",
                  size: "default",
                  className: "btn-glass min-h-12 rounded-xl px-7 text-sm font-semibold",
                })}
              >
                See pricing
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-2xl shadow-[rgba(59,74,90,0.2)]">
              <Image
                src={service.image}
                alt={`${service.title} — ${siteConfig.name}`}
                width={1024}
                height={576}
                priority
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />
            </div>
            <div className="glass-strong mt-6 flex items-center gap-4 rounded-2xl px-5 py-4">
              <span className="font-heading text-3xl font-semibold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                {service.stat.value}
              </span>
              <span className="text-sm leading-snug text-muted-foreground">{service.stat.label}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="glass h-full rounded-3xl p-7 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-primary">
                What&apos;s included
              </h2>
              <ul className="mt-5 space-y-3.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass h-full rounded-3xl bg-gradient-to-br from-white/70 to-[#eef1f3]/70 p-7 sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-primary">
                Outcomes you can count on
              </h2>
              <ul className="mt-5 space-y-3.5">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Keep exploring" title="Related services" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass glass-card-hover group flex h-full flex-col rounded-3xl p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#5a6f85] text-white shadow-md shadow-[rgba(59,74,90,0.3)]">
                    <i className={cn(s.icon, "text-base")} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
