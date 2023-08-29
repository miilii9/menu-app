import React from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

interface iOrderItem {
  data: any;
  orderItemChange: (type: any, item: any) => void;
}
export const OrderItem = ({ data, orderItemChange }: iOrderItem) => {
  return (
    <div className='bg-[#161616] p-1  flex justify-between items-start gap-1 w-full rounded-lg'>
      <div className='w-full flex justify-start gap-1 items-start h-full'>
        <img src='pics/food.png' alt='' className='w-3/6 p-2 rounded-lg' />
        <span className='truncate  text-white text-sm font-semibold'>
          {data.name}
        </span>
      </div>
      <div className='flex flex-col h-full justify-start gap-1 '>
        <div className='w-full flex items-center gap-2 bg-[#2e2e2e] px-1  rounded-full'>
          <span
            className='text-xs text-[#8b0505]  p-1 font-light rounded-lg '
            onClick={() => {
              data.amount > 1
                ? orderItemChange("sub", data)
                : orderItemChange("remove", data);
            }}>
            {data.amount > 1 ? <FaMinus /> : <FaTrash />}
          </span>
          <span className='text-white'>{data.amount}</span>
          <span
            className='text-xs text-[#8b0505] p-1 font-light rounded-lg '
            onClick={() => orderItemChange("add", data)}>
            <FaPlus />
          </span>
        </div>
        <div className='flex items-center gap-1 self-center float-right text-white z-50 text-xs'>
          <span className='text-white font-extrabold text-xs'>
            {data.subItems[0].price}
          </span>
          <div className='text-center   text-xs'>
            هزار
            <br />
            <small>تومان</small>
          </div>
        </div>
      </div>
    </div>
  );
};
