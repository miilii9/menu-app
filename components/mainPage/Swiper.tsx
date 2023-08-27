"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import style from "@/styles/Menu.module.css";
interface ICategorys {
  data: any;
}
export const SwiperComp = ({ data }: ICategorys) => {
  return (
    <div
      className={` ${style.menuHeader} w-full  flex flex-col items-center align-middle justify-start`}>
      <div className='  '>
        <span
          className={` ${style.allCategories} text-xs font-medium bg-[rgba(255, 255, 255, 0.15)] px-4 py-2 w-full text-center rounded-3xl cursor-pointer`}>
          همه دسته بندی ها در یک نگاه
        </span>
      </div>
      <Swiper className=' w-full h-full' slidesPerView={6} spaceBetween={50}>
          {data.categorys.map((item: any, q: any) => (
            <SwiperSlide className='w-full ' key={q}>
              <div className=' bg-[#e6e6e6c9]  w-32 flex flex-col justify-center items-center align-middle  rounded-2xl text-center gap-2 px-4 py-2'>
                <img src='pics/cat.png' alt='pic' className='self-center' />
                <span className='w-32 text-center font-bold opacity-100'>
                  {item.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
