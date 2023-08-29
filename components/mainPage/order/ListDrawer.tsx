import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FaTrash, FaBook } from "react-icons/fa";
import { OrderItem } from "./OrderItem";
type Anchor = "top" | "left" | "bottom" | "right";

interface IDrawer {
  toggleDrawer: (vars: any, sth: any) => any;
  state: any;
  order: any;
  orderItemChange: (type: any, item: any) => void;
  deleteAll: () => void;
}
export default function ListDrawer({
  toggleDrawer,
  state,
  order,
  orderItemChange,
  deleteAll,
}: IDrawer) {
  const list = (anchor: Anchor) => (
    <div
      style={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 400,
        height: "100vh",
      }}
      role='presentation'>
      <div className='h-full flex relative flex-col justify-start items-start  bg-transparent'>
        {/* close icon */}
        <div
          className='w-full p-4 bg-[#161616] h-1/12 rounded-r-3xl cursor-pointer'
          onClick={toggleDrawer(anchor, false)}>
          <span className='text-[#8b0505] text-xl font-semibold'>X</span>
        </div>
        <div className='h-screen min-h-fit bg-[#2e2e2e] self-end w-10/12 px-0 pt-4 flex flex-col relative gap-2 rounded-r-2xl'>
          {/* header text */}
          <div className='flex flex-col p-1 '>
            <span className='text-xl absolute text-[#8b0505] bg-[#2e2e2e] p-2 font-light rounded-lg top-[-3%]  left-[45%]'>
              <FaBook />
            </span>
            <div className='flex flex-row-reverse justify-start items-center gap-2'>
              <span
                className='text-xl text-[#8b0505] bg-[#161616] p-2 font-light rounded-lg '
                onClick={deleteAll}>
                <FaTrash />
              </span>
              <span className='text-[#8b0505] self-center w-3/4 text-center '>
                یادداشت سفارش من
              </span>
            </div>
          </div>
          {/* items */}
          <div className='flex flex-col px-1 justify-start h-full w-full gap-2'>
            {order.map((item: any, q: any) => (
              <OrderItem
                key={q}
                data={item}
                orderItemChange={orderItemChange}
              />
            ))}
          </div>
          <div className='w-full h-[10rem] flex flex-col justify-around items-center rounded-t-2xl  p-4  bg-[#8B0505] self-end'>
            <div className='w-full flex justify-around items-center'>
              <span className='text-white font-semibold'>جمع مبالغ</span>
              <span className='text-white font-semibold'>640 هزار تومان</span>
            </div>
            <span className='text-white text-sm font-semibold'>
              برای سفارش,یادداشت خود را به مجموعه اعلام کنید
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
