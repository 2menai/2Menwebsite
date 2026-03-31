import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Platform from "@/components/Platform";
import HowItWorks from "@/components/HowItWorks";
import WhyNotJustAI from "@/components/WhyNotJustAI";
import WhyUs from "@/components/WhyUs";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Platform />
        <HowItWorks />
        <WhyNotJustAI />
        <WhyUs />
        <SocialProof />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
