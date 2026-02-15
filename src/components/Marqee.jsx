import React from "react";

const Marquee = ({ images = [], className = "" }) => {
  return (
    <div
      className={`w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-around gap-6 px-6 lg:px-14 my-15 pb-15 ${className}`}
    >
      {images.map((item, idx) => (
        <div key={idx} className="w-16 sm:w-18 lg:w-26">
          <img
            className="w-full object-contain"
            src={item}
            alt={`brand-${idx}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Marquee;
