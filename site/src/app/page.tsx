import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import HowWeOperate from "@/components/HowWeOperate";
import Ventures from "@/components/Ventures";
import Comparison from "@/components/Comparison";
import Services from "@/components/Services";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Approach />
        <HowWeOperate />
        <Ventures />
        <Comparison />
        <Services />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
