import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

export function CtaBand() {
  return (
    <section className="px-4 py-16">
      <FadeIn className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <Image
          src="/images/cta.jpg"
          alt=""
          aria-hidden
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b2530]/85 via-[#2a3847]/70 to-[#3b4a5a]/45" />
        <div className="relative z-10 flex flex-col items-start gap-8 px-6 py-16 sm:px-12 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[#c2a170] uppercase">
              Plan ahead, with peace
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              A conversation today could spare your family years of stress.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Talk to a compassionate counselor. No pressure, no obligation — just a clear,
              caring plan for the future, made at your pace.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#b08d57] to-[#c2a170] px-7 text-sm font-semibold text-[#241a0d] shadow-xl shadow-[rgba(176,141,87,0.35)] transition-all hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start Free Planning
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className={buttonVariants({
                variant: "outline",
                size: "default",
                className:
                  "min-h-12 border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white",
              })}
            >
              <PhoneCall className="size-4" aria-hidden />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
