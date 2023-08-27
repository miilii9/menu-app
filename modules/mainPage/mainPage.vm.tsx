import React from "react";
import { MainPageView } from "./mainPage.v";
interface IMainPage {
  data: any;
}
const MainPageViewMode = ({ data }: IMainPage) => {
  console.log(data);
  const scrollToSection = (section: string) => {
    window.scrollTo({
      top: (document.getElementById(section) as any).offsetTop - 120,
      behavior: "smooth",
    });
  };
  return <MainPageView data={data} />;
};

export default MainPageViewMode;
