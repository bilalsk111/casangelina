import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FullScreenNavbar from "./components/FullScreenNavbar";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Concept from "./components/Concept";


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
    </div>
  );
};

export default App;
