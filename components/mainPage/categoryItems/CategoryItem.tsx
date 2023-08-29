import React, { useEffect, useState } from "react";
import style from "@/styles/Menu.module.css";
interface ICategoryItemProp {
  data: any;
  menuItemModal: (section: any) => void;
  order: any;
}
export const CategoryItem = ({
  data,
  menuItemModal,
  order,
}: ICategoryItemProp) => {
  const [orderStat, setOrderStat] = useState<boolean>();
  const [orderDetails, setOrderDetails] = useState<any>();
  const checkOrder = () => {
    let tempOrders = [...order];
    const objIndex = tempOrders.findIndex((obj) => obj.id == data.id);
    if (objIndex > -1) {
      setOrderStat(true);
      setOrderDetails(tempOrders[objIndex]);
    }
  };
  useEffect(() => {
    if (order) {
      checkOrder();
    }
  }, [order.length]);
  return (
    <div
      className={`w-full  h-96 bg-[#2e2e2e] flex flex-col relative justify-between items-center align-middle rounded-md ${style.foodImg}`}
      onClick={() => {
        menuItemModal({ ...data });
      }}>
      <div
        className={`flex w-full  flex-col justify-end pb-2 absolute gap-2 h-48  top-[52%] px-2 ${
          style.foodRecipe
        } ${orderStat ? `${style.active} z-[50]` : null}`}>
        <div className={`flex flex-col gap-1 ${orderStat ? ` z-[50]` : null}`}>
          <h3 className='font-extrabold'>{data.name}</h3>
          <div className={` flex flex-col gap-2 relative`}>
            <p className='mb-2'>
              نان مافین. پنیر زیره. سلمن دودی. آووکادو. سس هلندایز. تخم مرغ
              پوچد. سالاد میوه
            </p>
            <p className=''>{data.description}</p>
          </div>
        </div>
        <div className='flex items-center gap-1 self-start float-right text-white z-50'>
          <span className='text-white font-extrabold text-lg'>
            {data.subItems[0].price}
          </span>
          <div className='text-start  mr-2'>
            هزار
            <br />
            <small>تومان</small>
          </div>
        </div>
      </div>
    </div>
  );
};
