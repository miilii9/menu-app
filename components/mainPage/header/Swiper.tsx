"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import style from "@/styles/Menu.module.css";
import { useSwiperSlide } from "swiper/react";
import { FaBookOpen } from "react-icons/fa";

interface ICategorys {
  data: any;
  scrollToSection: (section: string) => void;
  order: any;
  toggleDrawer: (vars: any, sth: any) => any;
}
export const SwiperComp = ({
  data,
  scrollToSection,
  order,
  toggleDrawer,
}: ICategorys) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div
      className={`  w-full  flex flex-col items-center align-middle justify-start`}>
      <span
        className='absolute top-2 left-2 z-[999] orderIcon'
        onClick={toggleDrawer("left", true)}>
        <FaBookOpen className={"text-2xl"} />
      </span>
      <div className=' mb-2 '>
        <span
          className={` ${style.allCategories} text-xs font-medium bg-[rgba(255, 255, 255, 0.15)] px-4 py-2 w-full text-center rounded-3xl cursor-pointer`}>
          همه دسته بندی ها در یک نگاه
        </span>
      </div>
      <Swiper
        className=' w-full h-full p-4'
        slidesPerView={6}
        spaceBetween={50}
        modules={[Navigation]}
        centeredSlides={true}
        onSlideChange={(swiper) => {
          console.log(swiper);
        }}>
        {data.categorys.map((item: any, q: any) => (
          <SwiperSlide
            className='w-full my-2 '
            key={q}
            id={item.id}
            onClick={() => {
              scrollToSection(item.name);
            }}>
            <div className=' bg-[#e6e6e6c9]  w-32 flex flex-col justify-center items-center align-middle  rounded-2xl text-center gap-2 p-8 h-32'>
              <img
                src='pics/cat.png'
                alt='pic'
                className='self-center w-full aspect-square'
              />
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
