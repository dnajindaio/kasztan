import { Instagram, Facebook, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const Footer = () => {
  const { contact, footer } = siteConfig;

  return (
    <footer className="bg-espresso text-cream py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              {siteConfig.name}<span className="text-gold">{siteConfig.nameAccent}</span>{siteConfig.nameSuffix}
            </h3>
            <p className="font-body text-cream/60 text-sm leading-relaxed">
              {footer.description}
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-gold">
              Nawigacja
            </h4>
            <div className="font-body text-cream/60 text-sm space-y-2">
              {siteConfig.navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block hover:text-cream transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-gold">
              Śledź nas
            </h4>
            <div className="flex gap-3">
              {contact.socials.instagram && (
                <a href={contact.socials.instagram} className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/60 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {contact.socials.facebook && (
                <a href={contact.socials.facebook} className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/60 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/40">
            © {footer.year} {siteConfig.name} {siteConfig.nameAccent} {siteConfig.nameSuffix}. Wszystkie prawa zastrzeżone.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/60 transition-all"
            aria-label="Wróć na górę"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
