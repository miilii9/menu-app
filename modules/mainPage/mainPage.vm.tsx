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
  const [order, setOrder] = useState<any>([]);
  const [state, setState] = React.useState({
    left: false,
  });
  useEffect(() => {
    const changeColor = () => {
      const logoEl = document?.querySelector<HTMLElement>(".logoEl");
      const orderIcon = document?.querySelector<HTMLElement>(".orderIcon");
      if (window.scrollY >= 40) {
        if (logoEl) {
          logoEl.style.top = "-60px";
        }
        if (orderIcon) {
          orderIcon.style.top = "+70px";
        }
      } else {
        if (logoEl) {
          logoEl.style.top = "0px";
        }
        if (orderIcon) {
          orderIcon.style.top = ".5rem";
        }
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const scrollToSection = (section: any) => {
    console.log(section)
    const sectionEl: HTMLElement = document?.querySelector(`.${section}`) as HTMLElement
    console.log(sectionEl)
    if (sectionEl) {
      console.log(sectionEl)
      
      var topOfElement = (sectionEl?.offsetTop as number) - 200;
      
      window.scroll({ top: topOfElement, behavior: "smooth" });
    }
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
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const addOrderHandler = (item: any) => {
    let tempOrders = [...order];
    const objIndex = tempOrders.findIndex((obj) => obj.id == item.id);
    let tempItem = { ...item, amount: 1 };
    console.log(objIndex);
    if (objIndex == -1) {
      tempOrders.push(tempItem);
      setOrder([...tempOrders]);
    }
    modalHandler();
  };
  const orderItemChange = (type: string, item: any) => {
    let tempOrders = [...order];
    const objIndex = tempOrders.findIndex((obj) => obj.id == item.id);
    switch (type) {
      case "add":
        tempOrders[objIndex].amount += 1;
        break;
      case "sub":
        tempOrders[objIndex].amount -= 1;
        break;
      case "remove":
        tempOrders.splice(objIndex, 1);
        break;
    }
    setOrder(tempOrders);
  };
  const deleteAll = () => {
    setOrder([]);
    setState({ ...state, ["left"]: false });
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
      orderItemChange={orderItemChange}
      deleteAll={deleteAll}
    />
  );
};

export default MainPageViewMode;
