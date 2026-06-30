import { motion } from "framer-motion";
import heroCafe from "@/assets/hero-cafe.jpg";
import { siteConfig } from "@/config/siteConfig";

const HeroSection = () => {
  const [name, accent, suffix] = siteConfig.heroHeading;

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroCafe}
        alt="Wnętrze przytulnej kawiarni z ciepłym oświetleniem"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/40 to-espresso/70" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-8"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold text-cream text-shadow-hero mb-8 leading-[1.1]"
        >
          {name}<br />
          <span className="italic font-normal text-gold">{accent}</span> {suffix}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-body text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed whitespace-pre-line"
        >
          {siteConfig.heroSubtext}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {siteConfig.heroButtons.map((btn) => (
            <a
              key={btn.href}
              href={btn.href}
              className={
                btn.variant === "outline"
                  ? "inline-block border border-cream/30 text-cream px-8 py-4 rounded-full font-body font-semibold tracking-wide hover:bg-cream/10 transition-all"
                  : "inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-body font-semibold tracking-wide hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
              }
            >
              {btn.label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-cream/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
