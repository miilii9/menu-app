import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getLocalData } from "../../lib/localData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperComp } from "./Swiper";
import { HeaderLogo } from "./HeaderLogo";
interface IHeader {
  data: any;
}
export const Headers = ({ data }: IHeader) => {
  return (
    <header className='w-full flex flex-col  justify-start gap-2  bg-[#8B0505]  '>
      <HeaderLogo />
      <SwiperComp data={data} />
    </header>
  );
};
