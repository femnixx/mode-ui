import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import HeaderComponent from "../components/HeaderComponent";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import SixthPage from "./SixthPage";

const LandingPage = () => {
  return (
    <>
      {/* navbar section */}
      <NavbarComponent></NavbarComponent>
      {/* header section */}
      <HeaderComponent></HeaderComponent>
      {/* Second page */}
      <SecondPage></SecondPage>
      {/* Third page */}
      <ThirdPage></ThirdPage>
      {/* Fourth Page */}
      <FourthPage></FourthPage>
      {/* Fifth Page */}
      <FifthPage></FifthPage>
      {/* SixthPage */}
      <SixthPage></SixthPage>
    </>
  );
};

export default LandingPage;
