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
      yPercent: 110,
      skewY: 6,
      transformOrigin: "top left",
      willChange: "transform"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65%",
        end: "bottom 40%",
        scrub: 0.6,
        snap: { snapTo: 1, duration: 0.2 }
      }
    });

    tl.to(look.words, {
      yPercent: 0,
      skewY: 0,
      stagger: 0.04,
      duration: 1,
      ease: "power3.out"
    })
    .to(lookSub.words, {
      yPercent: 0,
      skewY: 0,
      stagger: 0.04,
      duration: 1
    }, "-=0.7")
    .to(find.words, {
      yPercent: 0,
      skewY: 0,
      stagger: 0.04,
      duration: 1
    }, "-=0.7")
    .to(perfect.words, {
      yPercent: 0,
      skewY: 0,
      stagger: 0.04,
      duration: 1
    }, "-=0.7");

  }, sectionRef);

  return () => ctx.revert();
}, []);




  return (
    <section ref={sectionRef} className="bg-white py-20">
      {/* LOOK */}
      <div className="relative flex justify-around items-end">
        <div className="relative z-20 ml-16 inline-block overflow-hidden">
          <div className="w-fit h-fit pr-2">
            <h2 className="lookMain text-[16rem] leading-[0.9] text-[#c9c6c1] font-light tracking-tighter">
              LOOK
            </h2>
          <div className="absolute bottom-2 -right-10">
            <p className="lookSub text-4xl tracking-[0.2em] text-[#7A746C]">
              BEYOND LIMITS.
            </p>
          </div>
          </div>

          {/* positioned relative to LOOK text block */}
        </div>

        <div className="w-[40vw] h-48">
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>

      {/* FIND */}
      <div className="relative flex items-end pt-10 gap-8">
        <div className="w-[75vw] h-48">
          <img
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="overflow-hidden">
          <h2 className="findText text-[7rem] leading-none text-[#dcdcdc] font-light">
            FIND
          </h2>
        </div>
      </div>

      {/* PERFECTION */}
      <div className="flex flex-col items-end pr-10">
        <div className="overflow-hidden">
          <h1 className="perfectText text-[8rem] leading-tight text-[#564f49] font-light uppercase pb-3">
            TRUE PERFECTION.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LookSection;
