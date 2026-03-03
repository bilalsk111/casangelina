import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Marqee from "./Marqee";
import LookSection from "./LookSection";

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [showCursor, setShowCursor] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="w-full">
      {/* VIDEO SECTION */}
      <div
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        onClick={toggleSound}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-[1.01]"
          muted
          loop
          autoPlay
          playsInline
          src="/videos/home2025fhd.mp4"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            className="w-52 sm:w-72 lg:w-[35vw] brightness-0 invert opacity-90"
            src="/logo.svg"
            alt="Logo"
          />
        </div>
        <div
          ref={cursorRef}
          className={`fixed top-0 left-0 z-50 pointer-events-none flex items-center justify-center
          transition-all duration-500 ease-out
          ${showCursor ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <div className="w-14 h-14 rounded-full border-2 border-white/80  flex items-center justify-center text-white">
            <div className="relative">
              {isMuted ? (
                <VolumeX size={24} strokeWidth={1.5} />
              ) : (
                <Volume2 size={24} strokeWidth={1.5} />
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
          <svg
            id="verticalArrow"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 16.74 39.42"
            xmlSpace="preserve"
            className="w-6 h-10 mx-auto mb-4"
          >
            <path
              fill="#FFFFFF"
              d="M7.99,39.42c0.24,0.1,0.52,0.1,0.77,0c0.12-0.05,0.23-0.12,0.32-0.22l7.37-7.37
      c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0l-5.66,5.66L9.37,1c0-0.55-0.45-1-1-1
      C8.09,0,7.84,0.11,7.66,0.29C7.48,0.47,7.37,0.72,7.37,1l0,35.08l-5.66-5.66
      c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41l7.37,7.37
      C7.75,39.29,7.87,39.37,7.99,39.42z"
            />
          </svg>

          <p className="text-white text-sm tracking-widest uppercase">
            Swipe up <br /> to start the experience
          </p>
        </div>
      </div>

      <LookSection />

      <section className="relative w-full py-10 px-6 lg:px-20">
        <div className="ml-auto max-w-4xl text-[#6E6259] font-[LMroman10]">
          <h4 className="text-2xl lg:text-3xl font-semibold pb-12">
            Tastemakers of Understated Chic Luxury
          </h4>

          <div className="flex flex-col gap-6">
            <p className="text-lg lg:text-2xl leading-8 lg:leading-9">
              Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast, Casa
              Angelina offers a sublime slice of modern minimalism on the
              Mediterranean, with an emphasis on barefoot luxury and top-level
              gastronomy.
            </p>

            <p className="text-lg lg:text-2xl leading-8 lg:leading-9">
              Our 36-room hotel serves as a sanctuary, bearing a fresh,
              white-washed aesthetic that accentuates every space, from the
              azure sea and sky outside to the contemporary artworks on display
              inside.
            </p>

            <p className="text-lg lg:text-2xl leading-8 lg:leading-9">
              We work to ensure everything about your stay is true perfection,
              from our welcome amenities and the thoughtful turndown services to
              the curated dishes from our chefs and activities organized by our
              concierge.
            </p>
          </div>
        </div>
      </section>

      <Marqee
        images={[
          "/imgs/lhw.png",
          "/imgs/ftg25.png",
          "/imgs/virtuoso.png",
          "/imgs/michelinkey.png",
          "/imgs/michelin2025.png",
          "/imgs/american_express.png",
          "/imgs/serandipians.png",
        ]}
      />
    </div>
  );
};

export default Hero;
