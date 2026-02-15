import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Refined items for a better "scattered" editorial look
const items = [
  {
    id: 1,
    title: "WELLBEING",
    img: "/imgs2/GIA07886.jpg",
    speed: 40, // Moves down slightly
    className: "w-[70vw] h-[40vh] md:w-[35vw]", // Slightly above center
    titleClass: "bottom-2 left-[-2rem] md:left-[-3rem]",
  },
  {
    id: 2,
    title: "POOL",
    img: "/imgs2/pool.jpg",
    speed: -50, // Moves Up
    className: "w-[50vw] md:w-[25vw]  -translate-y-20", // Pushed down
    titleClass: "-rotate-90 origin-bottom-left bottom-10 left-10",
  },
  {
    id: 3,
    title: "BEACH",
    img: "/imgs2/BM3A5179.jpg",
    speed: 20,
    className: "w-[65vw] md:w-[35vw] -mt-20", // Wide landscape, higher up
    titleClass: "bottom-[-2rem] right-10",
  },
  {
    id: 4,
    title: "THE GROUNDS",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=800",
    speed: -80,
    className: "w-[40vw] md:w-[25vw] h-[70vh] mt-10",
    titleClass: "-rotate-90 origin-top-left top-90 -left-12",
  },
  {
    id: 5,
    title: "OUR BOATS",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
    speed: 60,
    className: "w-[65vw] h-[50vh] md:w-[40vw]",
    titleClass: "top-[-4rem] right-0",
  },
];

const HorizontalScrollGsap = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const scrollAmount = trackRef.current.scrollWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollAmount}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      cardsRef.current.forEach((card, index) => {
        gsap.to(card, {
          y: items[index].speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: `+=${scrollAmount}`,
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#F8F5F2] overflow-x-hidden">
      {/* SECTION Wrapper */}
      <section
        ref={containerRef}
        className="relative w-full h-[120vh] overflow-hidden flex flex-col justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/facilitiesBack.jpg')" }}
      >
        {/* Fixed Editorial Header */}
        <div className="absolute top-0 right-30 text-right md:top-15 md:right-50 z-20 pointer-events-none">
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-white/80 mb-3 block">
            The Extras
          </span>
          <h1 className="text-6xl md:text-8xl font-thin text-white tracking-wide leading-none">
            THAT COUNT
          </h1>
        </div>
        <div
          ref={trackRef}
          className="flex items-center gap-12 md:gap-32 px-[5vw] h-full w-max pt-20"
        >
          <div className="w-[10vw] md:w-[35vw] flex-shrink-0" />

          {items.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`relative flex-shrink-0 flex flex-col justify-center ${item.className} group`}
            >
              <div className="relative w-full h-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-shadow duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
                <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/0 transition-colors duration-700 ease-in-out" />

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
                />
              </div>
              <h2
                className={`absolute z-30 text-2xl md:text-[4.5rem] font-thin tracking-widest text-white uppercase whitespace-nowrap pointer-events-none
                ${item.titleClass}`}
              >
                {item.title}
              </h2>
            </div>
          ))}
          <div className="w-[10vw] md:w-[15vw] flex-shrink-0" />
        </div>
      </section>
    </div>
  );
};

export default HorizontalScrollGsap;
