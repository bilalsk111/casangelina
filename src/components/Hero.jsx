import React from "react";
import LookSection from "./LookSection";
import Marqee from "./Marqee";

const Hero = () => {
  return (
    <div className="w-full pb-25">

      <div className="relative w-full h-screen">
        <video
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          src="/videos/home2025fhd.mp4"
        />

        <img
          className="absolute w-52 sm:w-72 lg:w-[32vw] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 brightness-0 invert"
          src="/logo.svg"
          alt="Logo"
        />
      </div>

      <LookSection />

      <section className="relative w-full py-10 px-6 lg:px-20">
        <div className="ml-auto max-w-4xl text-[#6E6259] font-[LMroman10]">
          <h4 className="text-2xl lg:text-3xl font-semibold pb-12">
            Tastemakers of Understated Chic Luxury
          </h4>

          <div className="flex flex-col gap-6">
            <p className="text-lg lg:text-2xl leading-8 lg:leading-9">
              Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast, Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy.
            </p>

            <p className="text-lg lg:text-2xl leading-8 lg:leading-9">
              Our 36-room hotel serves as a sanctuary, bearing a fresh, white-washed aesthetic that accentuates every space, from the azure sea and sky outside to the contemporary artworks on display inside.
            </p>

            <p className="text-lg lg:text-2xl leading-8 lg:leading-9">
           We work to ensure everything about your stay is true perfection, from our welcome amenities and the thoughtful turndown services to the curated dishes from our chefs and activities organized by our concierge.
            </p>
          </div>
        </div>
      </section>

      <Marqee images={[
        "/imgs/lhw.png",
        "/imgs/ftg25.png",
        "/imgs/virtuoso.png",
        "/imgs/michelinkey.png",
        "/imgs/michelin2025.png",
        "/imgs/american_express.png",
        "/imgs/serandipians.png",
      ]} />

    </div>
  );
};

export default Hero;
