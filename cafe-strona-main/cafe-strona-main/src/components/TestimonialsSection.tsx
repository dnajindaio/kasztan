import { Star } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { siteConfig } from "@/config/siteConfig";

const TestimonialsSection = () => {
  const { testimonials } = siteConfig;

  return (
    <section id="opinie" className="py-28 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <p className="text-accent font-body font-semibold tracking-[0.25em] uppercase text-xs mb-5">
              {testimonials.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {testimonials.heading}
            </h2>
            <div className="section-divider mt-6" />
          </div>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 150}>
              <div className="glass-card p-8 hover-lift h-full flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-foreground leading-relaxed mb-6 flex-1 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
