import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer"; 
import { HeygenEmbed } from "./components/HeygenEmbed";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="h-16"></div> {/* Spacer for fixed header */}
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
      <HeygenEmbed />
    </div>
  );
}
