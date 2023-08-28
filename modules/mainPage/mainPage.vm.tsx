"use client";
import React, { useEffect, useState } from "react";
import { MainPageView } from "./mainPage.v";
interface IMainPage {
  data: any;
}
type Anchor = "top" | "left" | "bottom" | "right";

const MainPageViewMode = ({ data }: IMainPage) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>(null);
  const [order, setOrder] = useState<any>({});
  const [state, setState] = React.useState({
    left: false,
  });
  useEffect(() => {
    const changeColor = () => {
      const logoEl = document?.querySelector<HTMLElement>(".logoEl");
      const orderIcon: any = document?.querySelector<HTMLElement>(".orderIcon");
      if (window.scrollY >= 40) {
        if (logoEl) {
          logoEl.style.top = "-60px";
          orderIcon.style.top = "+60px";
        }
      } else {
        if (logoEl) {
          logoEl.style.top = "0px";
          orderIcon.style.top = ".5rem";
        }
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const scrollToSection = (section: any) => {
    var topOfElement =
      (document.getElementById(`${section}`)?.offsetTop as number) - 200;
    window.scroll({ top: topOfElement, behavior: "smooth" });
  };

  const modalHandler = () => {
    setOpenModal(!openModal);
  };
  const menuItemModal = (itemData: any) => {
    setModalData(itemData);
    modalHandler();
  };
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log("first");
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const addOrderHandler = (stat: string, item: any) => {
    setOrder([...order, item]);
  };

  return (
    <MainPageView
      data={data}
      openModal={openModal}
      modalData={modalData}
      modalHandler={modalHandler}
      menuItemModal={menuItemModal}
      scrollToSection={scrollToSection}
      toggleDrawer={toggleDrawer}
      state={state}
      addOrderHandler={addOrderHandler}
      order={order}
    />
  );
};

export default MainPageViewMode;
