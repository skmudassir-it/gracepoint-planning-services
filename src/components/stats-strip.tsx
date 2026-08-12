import { FadeIn } from "@/components/motion";
import { stats } from "@/lib/data";

export function StatsStrip() {
  return (
    <section className="px-4 py-10">
      <div className="glass mx-auto grid max-w-6xl grid-cols-2 gap-y-8 rounded-3xl px-6 py-10 sm:px-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn
            key={s.label}
            delay={i * 0.08}
            className="flex flex-col items-center gap-1 text-center"
          >
            <span className="font-heading text-3xl font-semibold text-transparent sm:text-4xl bg-gradient-to-r from-primary via-[#5a6f85] to-accent bg-clip-text">
              {s.value}
            </span>
            <span className="max-w-[11rem] text-sm text-muted-foreground">{s.label}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
