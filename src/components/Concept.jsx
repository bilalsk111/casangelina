import React, { useLayoutEffect, useRef } from "react";
import MagneticButton from "./MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Concept = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const split = new SplitType(".ethosText", { types: "chars" });

      gsap.set(split.chars, {
        yPercent: 120,
        display: "inline-block"
      });

      gsap.set(".imgMask", {
        scaleY: 0,
        transformOrigin: "bottom"
      });

      gsap.set(".imgMask img", { scale: 1.2 });

      gsap.set(".paraMask", { y: 80 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 100%",
          scrub: 0.8
        }
      });

      tl.to(split.chars, {
        yPercent: 0,
        stagger: 0.05,
        ease: "power3.out"
      })
      .to(".imgMask", {
        scaleY: 1,
        duration: 1
      }, "-=0.4")
      .to(".imgMask img", {
        scale: 1,
        duration: 1
      }, "<")
      .to(".paraMask", {
        y: 0,
        duration: 1
      }, "-=0.5");


      /* BACKGROUND PARALLAX (IMAGE BG) */
      gsap.fromTo(
        ".parallaxBg",
        { backgroundPosition: "50% 80%" },
        {
          backgroundPosition: "50% 20%",
          ease: "none",
          scrollTrigger: {
            trigger: ".parallaxBg",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      /* TEXT PARALLAX */
      gsap.fromTo(
        ".parallaxText",
        { y: 80 },
        {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallaxBg",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-[100vh] bg-[#d7cfc5] py-10">

      <div className="relative -top-20 left-20 flex items-end gap-6 z-30 ">
        <div className="w-64 overflow-hidden bg-[#d7cfc5]">
          <div className="imgMask w-full h-full">
            <img className="w-full h-full object-cover" src="/ethos.jpg" alt="" />
          </div>
        </div>

        <div className="overflow-hidden">
          <h4 className="ethosText p-2 text-[#473f3a] font-[LMroman10] text-5xl">
            ethos
          </h4>
        </div>
      </div>

      <div className="overflow-hidden ml-65">
        <p className="paraMask w-[25vw] text-xl font-[LMroman10] text-[#473f3a] leading-[1.65]">
          Understated chic is our design ethos and subtle details are our
          raison d'être.
        </p>
      </div>
      <div className="absolute -bottom-20 w-full flex justify-around">

        <div
          className="parallaxBg w-[45vw] h-[420px] bg-cover bg-center"
          style={{ backgroundImage: "url(/ethosPic.jpg)" }}
        ></div>

        <p className="parallaxText w-[25vw] text-xl text-[#443c38] font-[LMroman10]">
         We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the thoughtfully-placed garden-grown herb garnishes on your plate.
        </p>

      </div>
  <MagneticButton text="concept" sectionRef={sectionRef} />
    </div>
  );
};

export default Concept;
