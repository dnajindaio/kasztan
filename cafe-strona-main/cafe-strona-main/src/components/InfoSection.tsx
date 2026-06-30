import { Clock, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { siteConfig } from "@/config/siteConfig";

const InfoSection = () => {
  const { contact } = siteConfig;

  return (
    <section id="kontakt" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <p className="text-accent font-body font-semibold tracking-[0.25em] uppercase text-xs mb-5">
              {contact.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {contact.heading}
            </h2>
            <div className="section-divider mt-6" />
          </div>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <AnimateOnScroll delay={0}>
            <div className="glass-card p-10 text-center hover-lift h-full">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Godziny otwarcia
              </h3>
              <div className="font-body text-muted-foreground space-y-3 text-sm">
                <p className="uppercase tracking-wider text-xs text-accent font-semibold">{contact.hours.weekdays.label}</p>
                <p className="text-foreground font-semibold text-lg">{contact.hours.weekdays.time}</p>
                <p className="uppercase tracking-wider text-xs text-accent font-semibold mt-4">{contact.hours.weekends.label}</p>
                <p className="text-foreground font-semibold text-lg">{contact.hours.weekends.time}</p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <div className="glass-card p-10 text-center hover-lift h-full">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Lokalizacja
              </h3>
              <div className="font-body text-muted-foreground space-y-2 text-sm">
                <p className="text-foreground font-semibold text-base">{contact.address.street}</p>
                <p>{contact.address.city}</p>
                <p className="text-xs mt-4 leading-relaxed whitespace-pre-line">
                  {contact.address.note}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="glass-card p-10 text-center hover-lift h-full">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Kontakt
              </h3>
              <div className="font-body text-muted-foreground space-y-3 text-sm">
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-foreground font-semibold text-base block hover:text-accent transition-colors">
                  {contact.phone}
                </a>
                <p>{contact.email}</p>
                <div className="flex gap-4 justify-center mt-6">
                  {contact.socials.instagram && (
                    <a href={contact.socials.instagram} className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all">
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {contact.socials.facebook && (
                    <a href={contact.socials.facebook} className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all">
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Google Maps Embed */}
        <AnimateOnScroll delay={400}>
          <div className="glass-card overflow-hidden rounded-2xl">
            <iframe
              src={contact.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja kawiarni na mapie"
              className="w-full"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default InfoSection;
