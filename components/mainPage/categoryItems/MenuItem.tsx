import React from "react";
import style from "@/styles/Menu.module.css";
import { CategoryItem } from "./CategoryItem";
interface IItem {
  data: any;
  menuItemModal: (section: any) => void;
  orderItemChange: (type: any, item: any) => void;
  order: any;
}
export const MenuItem = ({
  data,
  menuItemModal,
  orderItemChange,
  order,
}: IItem) => {
  const name = data.name.replace(/\s+/g, "");
  return (
    <section
      id={data.name}
      className={`${style.categoryItem} flex flex-col gap-4 items-center align-middle w-full  container ${name}  p-4`}>
      <h3
        className={` w-full ${style.header}  text-center font-extrabold   relative z-10`}>
        <span className='text-red-900  bg-[#282828] z-20'>
          {`${data.name}`}
        </span>
      </h3>
      <div className='grid w-full  grid-cols-2  gap-6 px-12 mmd:grid-cols-1 msm:grid-cols-1 mxs:grid-cols-1  '>
        {data.menuItems.map((item: any, q: any) => (
          <CategoryItem
            data={item}
            key={q}
            menuItemModal={menuItemModal}
            order={order}
          />
        ))}
      </div>
    </section>
  );
};
