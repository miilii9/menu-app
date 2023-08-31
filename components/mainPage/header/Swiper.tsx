"use client";

import React, { useEffect, useState } from "react";
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
  const [swiperIndex, setSwiperIndex] = useState<any>(0);
  const swiperToId = () => {
    const swiperSlides = document.getElementsByClassName("swiper-slide");
    const activeId = swiperSlides[swiperIndex].id;
    // let topOfElement =
    //   (document.getElementById(activeId)?.getBoundingClientRect().x as any) -
    //   200;
    // window.scroll({ top: topOfElement, behavior: "smooth" });
    scrollToSection(activeId);
  };
  useEffect(() => {
    swiperToId();
    return () => {};
  }, [swiperIndex]);

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
        slideToClickedSlide={true}
        centeredSlides={true}
        className=' w-full h-full p-4'
        slidesPerView={6}
        spaceBetween={50}
        modules={[Navigation]}
        onActiveIndexChange={(swiper) => setSwiperIndex(swiper.activeIndex)}>
        {data.categorys.map((item: any, q: any) => (
          <SwiperSlide
            className='w-full my-3 '
            key={q}
            id={item.name.replace(/\s+/g, "")}
            onClick={() => {
              scrollToSection(item.name.replace(/\s+/g, ""));
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
// sdddddddddddddddddddddddddddddd

//   const [swiperIndex, setSwiperIndex] = useState<any>(0);
//   const swiperToId = () => {
//     const swiperSlides = document.getElementsByClassName("swiper-slide");
//     const activeId = swiperSlides[swiperIndex].id;
//     let topOfElement =
//       (document.getElementById(activeId)?.getBoundingClientRect().x as any) -
//       200;
//     window.scroll({ top: topOfElement, behavior: "smooth" });
//   };
//   useEffect(() => {
//     swiperToId();
//     return () => {};
//   }, [swiperIndex]);

//   return (
//     <div
//       className={`  w-full  flex flex-col items-center align-middle justify-start`}>
//       {order.length ? (
//         <span
//           className='absolute top-2 left-2 z-[999] orderIcon'
//           onClick={toggleDrawer("left", true)}>
//           <div className='relative'>
//             <span className='absolute -top-1 -right-3 bg-orange-600 text-sm rounded-full w-5 h-5 text-center align-middle  text-white'>
//               {order.length}
//             </span>
//             <FaBookOpen className={"text-4xl"} />
//           </div>{" "}
//         </span>
//       ) : null}
//       <div className=' mb-2 '>
//         <span
//           className={` ${style.allCategories} text-xs font-medium bg-[rgba(255, 255, 255, 0.15)] px-4 py-2 w-full text-center rounded-3xl cursor-pointer`}>
//           همه دسته بندی ها در یک نگاه
//         </span>
//       </div>
//       <Swiper
//         className=' w-full h-full p-4'
//         slidesPerView={6}
//         spaceBetween={50}
//         modules={[Navigation]}
//         centeredSlides={true}
//         onSlideChange={() => {
//           // const activeId = document.querySelector(".swiper-slide-active")?.id;
//           // // console.log(activeId);
//           // let topOfElement =
//           //   (document.getElementById(`${activeId}`)?.offsetTop as number) - 200;
//           // window.scroll({ top: topOfElement, behavior: "smooth" });
//           // scrollToSection(`${activeId}`);
//         }}
//         slideToClickedSlide={true}>
//         {data.categorys.map((item: any, q: any) => (
//           <SwiperSlide
//             className='w-full my-3 '
//             key={q}
//             id={item.name}
//             onClick={() => {
//               scrollToSection(item.name);
//             }}>
//             <div className=' bg-[#ffffff80]   flex flex-col justify-center items-center align-middle  rounded-2xl text-center gap-2 p-14 py-16 h-32'>
//               <img
//                 src='pics/cat.png'
//                 alt='pic'
//                 className='self-center w-full aspect-square'
//               />
//               <span className='w-32 text-center font-bold opacity-100'>
//                 {item.name}
//               </span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };
