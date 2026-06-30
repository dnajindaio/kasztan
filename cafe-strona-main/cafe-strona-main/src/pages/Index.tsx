import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <MenuSection />
      <TestimonialsSection />
      <CTABanner />
      <InfoSection />
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Index;
