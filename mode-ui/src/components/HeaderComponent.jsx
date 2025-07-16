import React from "react";
import Mesh from "../assets/mesh-background.svg";
import Brands from "../assets/brands.svg"; // Likely for small screens
import Brandsmd from "../assets/brands-md.svg"; // Likely for medium screens
import Brandslg from "../assets/brands-lg.svg";
import { Outlet, Link } from "react-router-dom";
import ArrowRight from "../assets/arrow-right-white.png";

const HeaderComponent = () => {
  return (
    <>
      <div className="pt-10 flex flex-col items-center text-center px-4">
        <p>Seamless Experience</p>
        <h1 className="pt-4 text-2xl md:text-6xl lg:max-w-2/5 max-lg:max-w-2/3 sm:text-4xl max-md:text-3xl font-semibold">
          Unleashing the Next Generation of Card Solutions{" "}
        </h1>
        <p className="text-[#5A6475] font-normal pt-4 md:text-lg md:max-w-3/5 lg:max-w-3/5 lg:text-lg sm:max-w-2/3 max-md:max-w-4/5 xl:max-w-2/5">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>
        <button className="hover:cursor-pointer">
          <div className="flex mt-8 gap-x-2 bg-[#582066] p-4 rounded-lg text-white">
            <p>Unlock your card</p>
            <img src={ArrowRight} alt="arrow right" className="fill-white" />
          </div>
        </button>
        <p className="pt-4 text-[#5A6475]">*No credit card required</p>
      </div>
      <div className="px-4 mt-20 flex justify-center content-center text-center mb-16 md:mb-24">
        <img src={Brands} alt="brands sm" className="sm:hidden" />
        <img
          src={Brandsmd}
          alt="brands md"
          className="hidden md:block lg:hidden"
        />
        <img
          src={Brandslg}
          alt="brands lg"
          className="hidden lg:block  w-fit"
        />
      </div>
    </>
  );
};

export default HeaderComponent;
