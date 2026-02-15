import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FullScreenNavbar from "./components/FullScreenNavbar";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Concept from "./components/Concept";
import HorizontalCarousel from "./components/HorizontalCarousel";
import Footer from "./components/Footer";
import WorldClockSection from "./components/WorldClockSection";
import Private from "./components/Private";


gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const [open, setOpen] = useState(false);
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,      
    smoothWheel: true,
    smoothTouch: false,   
    wheelMultiplier: 1,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove((time) => {
      lenis.raf(time * 1000);
    });
    lenis.destroy();
  };
}, []);

  return (
    <div className="w-full min-h-screen bg-white">
        <Navbar setOpen={setOpen} />
        <FullScreenNavbar open={open} setOpen={setOpen} />
        <Hero />
       <Concept />
       <Private />
       <HorizontalCarousel />
       <WorldClockSection />
       <Footer />
    </div>
  );
};

export default App;
