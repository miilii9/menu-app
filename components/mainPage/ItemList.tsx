import React from "react";
import { MenuItem } from "./MenuItem";
interface IItemList {
  data: any;
}
export const ItemList = ({ data }: IItemList) => {
  return (
    <div className=' bg-[#282828] h-screen mt-4 flex flex-col justify-start gap-4 '>
      {data.categorys.map((item: any, q: any) => (
        <MenuItem data={item} key={q} />
      ))}
    </div>
  );
};
