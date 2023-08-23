import React from "react";
import { MainPageView } from "./mainPage.v";

const MainPageViewMode = () => {
  const scrollToSection = (section: string) => {
    window.scrollTo({
      top: (document.getElementById(section) as any).offsetTop - 120,
      behavior: "smooth",
    });
  };

  return <MainPageView />;
};

export default MainPageViewMode;
