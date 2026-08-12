import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion"
import { staggerDelay } from "@/lib/utils";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion defaultValue={[faqs[0].question]}>
        {faqs.map((f, i) => (
          <FadeIn key={f.question} delay={staggerDelay(i, 0.05)}>
            <AccordionItem value={f.question} className="glass mb-3 rounded-2xl px-1">
              <AccordionTrigger className="px-4 py-4 text-base font-medium text-foreground/90">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <p className="leading-relaxed text-muted-foreground">{f.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </FadeIn>
        ))}
      </Accordion>
    </div>
  );
}
