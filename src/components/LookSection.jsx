import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const LookSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const look = new SplitType(".lookMain", { types: "words" });
      const lookSub = new SplitType(".lookSub", { types: "words" });
      const find = new SplitType(".findText", { types: "words" });
      const perfect = new SplitType(".perfectText", { types: "words" });

      const all = [
        ...look.words,
        ...lookSub.words,
        ...find.words,
        ...perfect.words,
      ];

      gsap.set(all, {
        yPercent: 100,
        skewY: 3,
        transformOrigin: "top left",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse"
        }
      });

      tl.to(look.words, {
        yPercent: 0,
        skewY: 0,
        stagger: 0.04,
        duration: 0.9,
        ease: "power3.out"
      })
      .to(lookSub.words, {
        yPercent: 0,
        skewY: 0,
        stagger: 0.04,
        duration: 0.8
      }, "-=0.6")
      .to(find.words, {
        yPercent: 0,
        skewY: 0,
        stagger: 0.04,
        duration: 0.9
      }, "-=0.9")
      .to(perfect.words, {
        yPercent: 0,
        skewY: 0,
        stagger: 0.04,
        duration: 0.9
      }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6 lg:px-20">

      <div className="flex flex-col lg:flex-row items-end justify-between gap-10">
        <div className="relative inline-block overflow-hidden p-2">
          <h2 className="lookMain text-[18vw] lg:text-[16vw] leading-[0.9] text-[#c9c6c1] font-light tracking-tight">
            LOOK
          </h2>

          <div className="absolute bottom-2 right-0 overflow-hidden">
            <p className="lookSub text-lg sm:text-2xl lg:text-4xl tracking-[0.2em] text-[#7A746C]">
              BEYOND LIMITS.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[40vw] h-48">
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-end gap-8 pt-16">
        <div className="w-full lg:w-[75vw] h-48">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="overflow-hidden">
          <h2 className="findText text-[14vw] lg:text-[7rem] leading-none text-[#dcdcdc] font-light">
            FIND
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-end pt-10">
        <div className="overflow-hidden">
          <h1 className="perfectText text-[12vw] lg:text-[8rem] leading-tight text-[#564f49] font-light uppercase pb-3">
            TRUE PERFECTION.
          </h1>
        </div>
      </div>

    </section>
  );
};

export default LookSection;
