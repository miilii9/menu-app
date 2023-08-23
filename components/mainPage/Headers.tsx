import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getLocalData } from "../../localData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperComp } from "./Swiper";
import { HeaderLogo } from "./HeaderLogo";
export const Headers = () => {
  return (
    <div className='w-full flex flex-col  justify-start gap-4  bg-red-700  '>
      <HeaderLogo />
      <SwiperComp />
    </div>
  );
};
