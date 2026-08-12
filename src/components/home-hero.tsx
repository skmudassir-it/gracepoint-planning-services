import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Star } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

export function HomeHero() {
  return (
    <section className="relative px-4 pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <div className="glass-strong mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Guiding families with care since 1999
          </div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance text-primary sm:text-6xl">
            Plan with care, so your family{" "}
            <span className="text-gradient">never plans under pressure.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {siteConfig.tagline}. We help you document every wish, lock in today&apos;s
            pricing, and give your family the quiet confidence of a plan already made.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Start Free Planning
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/services"
              className={buttonVariants({
                variant: "outline",
                size: "default",
                className: "btn-glass min-h-12 rounded-xl px-7 text-sm font-semibold",
              })}
            >
              Explore Services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="flex text-accent" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <strong className="font-semibold text-foreground">4.9/5</strong> from 1,200+ family reviews
            </span>
            <span className="flex items-center gap-2">
              <HeartHandshake className="size-4 text-primary" aria-hidden />
              Licensed, trusted counselors
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-[rgba(59,74,90,0.25)]">
            <Image
              src="/images/hero.jpg"
              alt="A calm, sunlit consultation room at GracePoint Planning Services"
              width={1280}
              height={720}
              priority
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/40" />
          </div>

          <div className="glass-strong absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-[rgba(59,74,90,0.18)] sm:-left-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#c2a170] text-white">
              <HeartHandshake className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block font-heading text-base font-semibold text-primary">10,000+ families</span>
              <span className="block text-xs text-muted-foreground">Guided with compassion since 1999</span>
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
