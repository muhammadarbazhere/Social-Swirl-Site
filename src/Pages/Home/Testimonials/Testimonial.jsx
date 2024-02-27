import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import products from './Products';

const Testimonial = () => {
  
  return (
    <div className="w-full h-auto   flex px-0 sm:px-16 py-0 sm:py-4 items-center">

      <Swiper
         spaceBetween={25}
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
          
              <div className=" text-center w-full h-auto border bg-white  shadow-inner rounded-xl">
             
                  <div className="px-6 py-4">
                    <p className="text-black font-[Comfortaa] leading-7">{item.description}</p>
                  </div>
             
                <hr className="my-4" />
                <div className='mb-4'>
                  <h3 className="text-blue-400 text-2xl font-bold font-[Chivo]">
                        {item.title} 
                    <span className="text-black  font-bold font-[Chivo]">
                        {item.subTitle}
                    </span>
                  </h3>
                </div>
              </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
