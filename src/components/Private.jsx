import React, { useLayoutEffect, useRef } from "react";
import MagneticButton from "./MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Private = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(".Text", { types: "chars" });

      gsap.set(split.chars, { yPercent: 120, display: "inline-block" });
      gsap.set(".imgMask", { scaleY: 0, transformOrigin: "bottom" });
      gsap.set(".imgMask img", { scale: 1.25 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 130%",
          end: "bottom 100%",
          scrub: 0.8
        }
      });

      tl.to(split.chars, {
        yPercent: 0,
        stagger: 0.04,
        ease: "power3.out"
      })
        .to(".imgMask", { scaleY: 1, duration: 1.2, ease: "power3.out" }, "-=0.5")
        .to(".imgMask img", { scale: 1, duration: 1.2, ease: "power3.out" }, "<");

      gsap.fromTo(
        ".parallaxBg",
        { backgroundPosition: "50% 85%" },
        {
          backgroundPosition: "50% 15%",
          ease: "none",
          scrollTrigger: {
            trigger: ".parallaxWrapper",
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
    <section
      ref={sectionRef}
      className="w-full bg-[#e7e3dc] mt-35"
    >
      <div className="relative px-8 lg:px-24 pb-40 -top-45">
        <div className="relative flex flex-col lg:flex-row justify-between items-center">

          <div className="relative z-10 max-w-4xl">
            <span className="block text-[#9c9489] uppercase tracking-[0.3em] text-xs mb-8">
              Suites
            </span>

            <div className="overflow-hidden">
              <h2 className="Text text-[#c7c0b5] text-[3vw] font-light italic uppercase leading-none tracking-tight">
                Private
              </h2>
            </div>

            <div className="overflow-hidden -mt-[1vw]">
              <h2 className="Text text-[#c7c0b5] text-[13vw] lg:text-[11vw] font-light uppercase leading-[0.9] tracking-[-0.03em]">
                Retreats
              </h2>
            </div>
          </div>
          <div className="relative lg:absolute lg:right-24 w-[90%] lg:w-[26vw] z-20 bg-[#f0e1ce]">
            <div className="imgMask w-full aspect-[4/3] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <img
                className="w-full h-full object-cover"
                src="/ethos.jpg"
                alt="retreat"
              />
            </div>
          </div>

        </div>
      </div>
      <div className="parallaxWrapper relative w-full h-[80vh] lg:h-[95vh] overflow-hidden px-10 lg:px-25 pb-25">
        <div
          className="parallaxBg w-full h-full bg-cover bg-center rounded-sm"
          style={{ backgroundImage: "url(/ethosPic.jpg)" }}
        ></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <MagneticButton text="angelina suite" sectionRef={sectionRef} />
        </div>
      </div>
    </section>
  );
};

export default Private;
