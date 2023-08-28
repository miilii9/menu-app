import React from "react";

import style from "@/styles/Menu.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperComp } from "./Swiper";
import { HeaderLogo } from "./HeaderLogo";
interface IHeader {
  data: any;
  scrollToSection: (section: string) => void;
  order: any;
  toggleDrawer: (vars: any, sth: any) => void;
}
export const Headers = ({
  data,
  scrollToSection,
  order,
  toggleDrawer,
}: IHeader) => {
  return (
    <header
      className={`w-full flex flex-col  justify-start gap-2  bg-[#8B0505]  logoEl ${style.menuHeader}`}>
      <HeaderLogo />
      <SwiperComp
        data={data}
        scrollToSection={scrollToSection}
        order={order}
        toggleDrawer={toggleDrawer}
      />
    </header>
  );
};
