import { features } from "@/lib/data";
import { FadeIn } from "@/components/motion"
import { staggerDelay } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function FeaturesGrid() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why GracePoint"
          title="A different kind of planning partner"
          subtitle="We don't sell funerals — we help you plan them with clarity, compassion and care. Here's what working with us actually looks like."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={staggerDelay(i)}>
              <div className="glass glass-card-hover h-full rounded-3xl p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-[#c2a170] text-white shadow-lg shadow-[rgba(176,141,87,0.35)]">
                  <i className={cn(f.icon, "text-lg")} aria-hidden />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
