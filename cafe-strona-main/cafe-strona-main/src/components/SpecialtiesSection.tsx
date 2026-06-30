import specialtyPourover from "@/assets/specialty-pourover.jpg";
import specialtyMatcha from "@/assets/specialty-matcha.jpg";
import specialtyPastry from "@/assets/specialty-pastry.jpg";
import AnimateOnScroll from "./AnimateOnScroll";
import { siteConfig } from "@/config/siteConfig";

const imageMap = {
  pourover: specialtyPourover,
  matcha: specialtyMatcha,
  pastry: specialtyPastry,
} as const;

const SpecialtiesSection = () => {
  const { specialties } = siteConfig;

  return (
    <section id="specjalnosci" className="py-28 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <p className="text-accent font-body font-semibold tracking-[0.25em] uppercase text-xs mb-5">
              {specialties.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {specialties.heading}
            </h2>
            <div className="section-divider mt-6" />
          </div>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.items.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 150}>
              <div className="glass-card hover-lift overflow-hidden group">
                <div className="relative overflow-hidden h-72">
                  <img
                    src={imageMap[item.imageKey]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm">
                    {item.desc}
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

export default SpecialtiesSection;
