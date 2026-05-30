import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Offerings from "@/components/Offerings";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Principles />
        <Offerings />
        <Contact />
        <About />
      </main>
      <Footer />
    </>
  );
}
