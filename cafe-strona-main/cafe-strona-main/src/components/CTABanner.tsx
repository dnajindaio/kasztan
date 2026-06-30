import cafeExterior from "@/assets/cafe-exterior.jpg";
import AnimateOnScroll from "./AnimateOnScroll";
import { siteConfig } from "@/config/siteConfig";

const CTABanner = () => {
  const { cta } = siteConfig;

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <img
        src={cafeExterior}
        alt={cta.imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-espresso/70" />
      <AnimateOnScroll>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
            {cta.heading} <span className="italic text-gold">{cta.headingAccent}</span>
          </h2>
          <p className="font-body text-cream/80 text-lg mb-10 leading-relaxed">
            {cta.text}
          </p>
          <a
            href={cta.buttonHref}
            className="inline-block bg-gold text-espresso px-10 py-4 rounded-full font-body font-bold tracking-wide hover:bg-gold/90 transition-all hover:shadow-lg hover:shadow-gold/20"
          >
            {cta.buttonLabel}
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default CTABanner;
