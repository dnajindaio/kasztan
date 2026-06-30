import { Coffee, Leaf, CakeSlice } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { siteConfig } from "@/config/siteConfig";

const iconMap = {
  coffee: Coffee,
  leaf: Leaf,
  cake: CakeSlice,
} as const;

const MenuSection = () => {
  const { menu } = siteConfig;

  return (
    <section id="menu" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <p className="text-accent font-body font-semibold tracking-[0.25em] uppercase text-xs mb-5">
              {menu.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {menu.heading}
            </h2>
            <div className="section-divider mt-6" />
          </div>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {menu.categories.map((category, catIndex) => {
            const Icon = iconMap[category.icon];
            return (
              <AnimateOnScroll key={category.category} delay={catIndex * 150}>
                <div>
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                    <Icon className="w-5 h-5 text-accent" />
                    <h3 className="text-2xl font-display font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-start gap-4 group"
                      >
                        <div>
                          <p className="font-body font-semibold text-foreground group-hover:text-accent transition-colors">
                            {item.name}
                          </p>
                          <p className="font-body text-sm text-muted-foreground mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                        <span className="font-display font-semibold text-accent whitespace-nowrap text-lg">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
