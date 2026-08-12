"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container -ml-5">
          {projects.map((p) => (
            <div key={p.name} className="embla__slide pl-5">
              <article className="glass glass-card-hover flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.industry} case study`}
                    width={1024}
                    height={576}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="glass-strong absolute top-3 left-3 rounded-full px-3 py-1.5 text-xs font-semibold text-primary">
                    {p.industry}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Challenge: </span>
                    {p.challenge}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Solution: </span>
                    {p.solution}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {p.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm font-medium text-primary">
                        <TrendingUp className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous projects"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-white/60 text-primary shadow-sm transition-all hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Project pages">
          {projects.map((p, i) => (
            <button
              key={p.name}
              type="button"
              role="tab"
              aria-selected={selected === i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                selected === i ? "w-6 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next projects"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-white/60 text-primary shadow-sm transition-all hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
