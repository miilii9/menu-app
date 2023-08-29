"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import style from "@/styles/Menu.module.css";
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

  return (
    <div
      className={`  w-full  flex flex-col items-center align-middle justify-start`}>
      {order.length ? (
        <span
          className='absolute top-2 left-2 z-[999] orderIcon'
          onClick={toggleDrawer("left", true)}>
          <div className='relative'>
            <span className='absolute -top-1 -right-3 bg-orange-600 text-sm rounded-full w-5 h-5 text-center align-middle  text-white'>
              {order.length}
            </span>
            <FaBookOpen className={"text-4xl"} />
          </div>{" "}
        </span>
      ) : null}
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
       >
        {data.categorys.map((item: any, q: any) => (
          <SwiperSlide
            className='w-full my-3 '
            key={q}
            id={item.id}
            onClick={() => {
              scrollToSection(item.name);
            }}>
            <div className=' bg-[#ffffff80]  w-32 flex flex-col justify-center items-center align-middle  rounded-2xl text-center gap-2 p-8 h-32'>
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
