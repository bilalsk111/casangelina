import { div, img } from 'framer-motion/client'
import React from 'react'

const Marqee = () => {
  const imgs = [
    "/imgs/american_express.png",
    "/imgs/ftg25.png",
    "/imgs/lhw.png",
    "/imgs/michelin2025.png",
    "/imgs/michelinkey.png",
    "/imgs/serandipians.png",
    "/imgs/virtuoso.png"
  ];

  return (
    <div className='w-full flex items-center justify-evenly px-10 my-50'>
       {imgs.map((item, idx) => (
        <div className='w-26'>
          <img className='w-full object-cover'  key={idx} src={item} alt="brand" />
        </div>
      ))}
    </div>
  );
};

export default Marqee;
