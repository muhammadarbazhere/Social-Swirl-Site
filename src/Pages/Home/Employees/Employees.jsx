import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import products from './Product';

const Employees = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">



      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 1000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=' flex justify-center  '>
            <div className="flex flex-col w-72  items-center ">
              <img
                src={item.image}
                alt={item.title}
                className=" border w-auto border-blue-500 rounded-full"
              />
              <div className="text-center mt-2 ml-4 font-[Comfortaa]">
                <p className="text-[#374151] mt-2 ">{item.title}</p>
                <p className="text-[#374151] mt-2">{item.description}</p>
                <button className="bg-blue-500 mt-2 hover:bg-blue-600 text-white rounded-lg px-5 py-2 font-[Chivo]">Explore</button>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Employees;
