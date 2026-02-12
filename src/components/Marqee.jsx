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
    <div className='w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-10 px-6 lg:px-14 my-20 pb-15'>
       {imgs.map((item, idx) => (
        <div key={idx} className='w-20 sm:w-24 lg:w-28'>
          <img className='w-full object-contain' src={item} alt="brand" />
        </div>
      ))}
    </div>
  );
};

export default Marqee;
