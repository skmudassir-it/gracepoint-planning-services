"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
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
        <div className="embla__container -ml-4">
          {testimonials.map((t) => (
            <div key={t.name} className="embla__slide pl-4">
              <figure className="glass glass-card-hover flex h-full flex-col rounded-3xl p-6 sm:p-7">
                <Quote className="size-7 text-accent/70" aria-hidden />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#5a6f85] text-sm font-semibold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-medium text-primary">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canPrev && !emblaApi?.canScrollPrev()}
          aria-label="Previous testimonials"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-white/60 text-primary shadow-sm transition-all hover:bg-white disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial pages">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={selected === i}
              aria-label={`Go to testimonial ${i + 1}`}
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
          disabled={!canNext && !emblaApi?.canScrollNext()}
          aria-label="Next testimonials"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-white/60 text-primary shadow-sm transition-all hover:bg-white disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
