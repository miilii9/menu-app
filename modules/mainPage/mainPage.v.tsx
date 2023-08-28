import { Headers } from "@/components/mainPage/header/Headers";
import { ItemList } from "@/components/mainPage/categoryItems/ItemList";
import React from "react";
import ItemModal from "@/components/mainPage/ItemModal";
import ListDrawer from "@/components/mainPage/ListDrawer";
interface IMainPageProps {
  data: any;
  openModal: boolean;
  modalData: any;
  modalHandler: () => void;
  menuItemModal: (section: any) => void;
  scrollToSection: (section: string) => void;
  toggleDrawer: (vars: any, sth: any) => void;
  state: any;
  order: any;
  addOrderHandler: (stat: any, item: any) => void;
}
export const MainPageView = ({
  data,
  scrollToSection,
  modalHandler,
  modalData,
  openModal,
  menuItemModal,
  toggleDrawer,
  state,
  addOrderHandler,
  order,
}: IMainPageProps) => {
  return (
    <>
      <ListDrawer toggleDrawer={toggleDrawer} state={state} order={order} />
      <ItemModal
        modalData={modalData}
        openModal={openModal}
        modalHanlder={modalHandler}
        addOrderHandler={addOrderHandler}
      />

      <Headers
        data={data}
        scrollToSection={scrollToSection}
        order={order}
        toggleDrawer={toggleDrawer}
      />
      <div className='  h-screen w-full  '>
        <ItemList
          data={data}
          menuItemModal={menuItemModal}
          addOrderHandler={addOrderHandler}
        />
      </div>
    </>
  );
};
