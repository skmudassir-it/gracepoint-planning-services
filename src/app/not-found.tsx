import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass, HeartHandshake } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh items-center px-4 pt-28 pb-16">
      <FadeIn className="glass-strong mx-auto w-full max-w-xl rounded-3xl p-10 text-center shadow-2xl shadow-[rgba(59,74,90,0.18)] sm:p-12">
        <span className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-[#5a6f85] text-white shadow-lg shadow-[rgba(59,74,90,0.35)]">
          <Compass className="size-8" aria-hidden />
        </span>
        <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
          Error 404
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          This page couldn&apos;t be found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or was moved. Let&apos;s get
          you back to safe ground.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to home
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "outline",
              size: "default",
              className: "btn-glass min-h-12 rounded-xl px-7 text-sm font-semibold",
            })}
          >
            <HeartHandshake className="size-4" aria-hidden />
            Start free planning
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
