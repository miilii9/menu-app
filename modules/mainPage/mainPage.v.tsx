import { Headers } from "@/components/mainPage/Headers";
import { ItemList } from "@/components/mainPage/ItemList";
import React from "react";
interface IMainPageProps {
  data: any;
}
export const MainPageView = ({ data }: IMainPageProps) => {
  return (
    <>
      <Headers data={data} />
      <div className='  h-screen w-full '>
        <ItemList data={data} />
      </div>
    </>
  );
};
