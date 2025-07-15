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
      <body className=""></body>
      {/* announcement section */}
      <div className=" flex gap-x-4 justify-between items-center px-2 py-2 sm:justify-center min-md:justify-center">
        <div className="bg-[#F1F1F2] rounded-full px-3 py-1 flex items-center justify-center text-sm font-semibold text-[#363C46] ">
          <p>Announcement</p>
        </div>
        <div className="flex text-xs pr-2 font-semibold text-pretty">
          <p>
            We are happy to announce that we raise $2 Million in Seed Funding
          </p>
        </div>
      </div>
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
