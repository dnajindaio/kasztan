import aboutCafe from "@/assets/about-cafe.jpg";
import AnimateOnScroll from "./AnimateOnScroll";
import { siteConfig } from "@/config/siteConfig";

const AboutSection = () => {
  const { about } = siteConfig;

  return (
    <section id="o-nas" className="py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <AnimateOnScroll>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={aboutCafe}
                alt={about.imageAlt}
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold/30 rounded-full -z-10" />
          </div>
        </AnimateOnScroll>
        <div>
          <AnimateOnScroll delay={100}>
            <p className="text-accent font-body font-semibold tracking-[0.25em] uppercase text-xs mb-5">
              {about.subtitle}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground mb-8 leading-[1.15]">
              {about.heading.split(about.headingAccent)[0]}
              <span className="italic text-accent">{about.headingAccent}</span>
            </h2>
          </AnimateOnScroll>
          {about.paragraphs.map((p, i) => (
            <AnimateOnScroll key={i} delay={300 + i * 100}>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                {p}
              </p>
            </AnimateOnScroll>
          ))}
          <AnimateOnScroll delay={500}>
            <div className="grid grid-cols-3 gap-6">
              {about.stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
