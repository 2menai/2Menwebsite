import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import TrackRecord from "@/components/TrackRecord";
import Product from "@/components/Product";
import WhoWeListenFor from "@/components/WhoWeListenFor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <TrackRecord />
        <Product />
        <WhoWeListenFor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
