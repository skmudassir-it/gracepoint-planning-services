import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/data";
import { FadeIn } from "@/components/motion"
import { staggerDelay } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <FadeIn key={s.slug} delay={staggerDelay(i)}>
          <Link
            href={`/services/${s.slug}`}
            className="glass glass-card-hover group flex h-full flex-col rounded-3xl p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#5a6f85] text-white shadow-lg shadow-[rgba(59,74,90,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              <i className={cn(s.icon, "text-lg")} aria-hidden />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-primary">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
            <span
              className={buttonVariants({
                variant: "ghost",
                size: "default",
                className: "mt-5 w-fit -ml-2 px-2 text-primary",
              })}
            >
              Learn more
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
