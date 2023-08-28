import React from "react";
import style from "@/styles/Menu.module.css";
import { CategoryItem } from "./CategoryItem";
interface IItem {
  data: any;
  menuItemModal: (section: any) => void;
}
export const MenuItem = ({ data, menuItemModal }: IItem) => {
  return (
    <div
      id={data.name}
      className={`${style.categoryItem} flex flex-col gap-4 items-center align-middle w-full  container   p-4`}>
      <h3
        className={` w-full ${style.header}  text-center font-extrabold   relative z-10`}>
        <span className='text-red-900  bg-[#282828] z-20'>
          {`${data.name}`}
        </span>
      </h3>
      <div className='grid w-full grid-cols-2 gap-6 px-12'>
        {data.menuItems.map((item: any, q: any) => (
          <CategoryItem data={item} key={q} menuItemModal={menuItemModal} />
        ))}
      </div>
    </div>
  );
};