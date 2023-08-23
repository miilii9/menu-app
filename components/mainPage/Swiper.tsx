"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
export const SwiperComp = () => {
  return (
    <div className='w-full flex flex-col items-center align-middle justify-start gap-2'>
      <div className='  p-4'>
        <span className='text-sm font-medium bg-red-500 px-4 py-2 w-full text-center rounded-3xl cursor-pointer'>
          همه دسته بندی ها در یک نگاه
        </span>
      </div>
      <Swiper
        className=' w-full h-full'
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        navigation
        onSwiper={(swiper) => console.log(swiper)}>
        <div className='flex w-full justify-around'>
          <SwiperSlide className=' bg-gray-200 w-24 flex flex-col justify-start items-center align-middle'>Slide 1</SwiperSlide>
        
        </div>
      </Swiper>
    </div>
  );
};
