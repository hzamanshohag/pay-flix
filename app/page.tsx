import AboutSection from "@/components/shared/AboutSection";
import ContactSection from "@/components/shared/ContactSection";
import FooterSection from "@/components/shared/FooterSection";
import HeroSection from "@/components/shared/HeroSection";
import ServicesSection from "@/components/shared/ServicesSection";



export default function Home() {
  return (
    <div>
      {/* <h2>Welcome to Pay-Flix</h2> */}
      <HeroSection/>
      <AboutSection />
      <ServicesSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}
