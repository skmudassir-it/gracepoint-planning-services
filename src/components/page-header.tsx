import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  children,
}: PageHeaderProps) {
  return (
    <section className="relative px-4 pt-32 pb-14 sm:pt-36 sm:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="text-primary">
                {eyebrow}
              </li>
            </ol>
          </nav>
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </FadeIn>

        {image && (
          <FadeIn delay={0.12} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-2xl shadow-[rgba(59,74,90,0.18)]">
              <Image
                src={image}
                alt={imageAlt}
                width={1024}
                height={576}
                priority
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />
            </div>
            <div className="glass absolute -bottom-4 -left-4 hidden rounded-2xl px-4 py-3 sm:block">
              <p className="text-xs font-medium text-muted-foreground">Trusted by</p>
              <p className="font-heading text-lg font-semibold text-primary">2,400+ clients</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export { buttonVariants };
