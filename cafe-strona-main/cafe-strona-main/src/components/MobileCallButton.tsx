import { Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const MobileCallButton = () => {
  const phoneNumber = siteConfig.contact.phone.replace(/\s/g, "");

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg shadow-accent/30 hover:bg-accent/90 transition-all active:scale-95"
      aria-label="Zadzwoń do nas"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default MobileCallButton;
