import React from "react";
import { MenuItem } from "./MenuItem";
interface IItemList {
  data: any;
  menuItemModal: (section: any) => void;
  addOrderHandler: (stat: any, item: any) => void;
}
export const ItemList = ({ data, menuItemModal,addOrderHandler }: IItemList) => {
  return (
    <div className=' bg-[#282828] h-screen  flex flex-col justify-start gap-4 mt-[15rem] '>
      {data.categorys.map((item: any, q: any) => (
        <MenuItem data={item} key={q} menuItemModal={menuItemModal} />
      ))}
    </div>
  );
};
