import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const MagneticButton = ({ sectionRef, text = " " }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!sectionRef || !sectionRef.current) return;

    const cursor = cursorRef.current;
    const section = sectionRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)" });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    };

    window.addEventListener("mousemove", moveCursor);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [sectionRef]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{ 
        transform: "translate(-50%, -50%)", 
        opacity: 0, 
        scale: 0 
      }}
    >
      {/* Container jo text ke sath expand hoga */}
      <div className="relative flex items-center group">
        <div className="bg-white px-8 py-3 rounded-full shadow-xl border border-white/20 flex items-center z-10">
          <span className="text-[#8a847c] text-[13px] font-light italic tracking-[0.15em] uppercase whitespace-nowrap">
            {text}
          </span>
        </div>
        <div 
          className="h-[45px] w-[55px] border-y border-r border-white rounded-r-full -ml-5 flex items-center justify-end pr-4 shadow-sm"
          style={{ backgroundColor: 'transparent' }}
        >
           <ArrowUpRight size={18} className="text-white pl-1" />
        </div>

      </div>
    </div>
  );
};

export default MagneticButton;