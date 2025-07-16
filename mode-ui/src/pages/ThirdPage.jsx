import React from "react";
import ArrowRightPurple from "../assets/arrow-right.svg";
import picture1 from "../assets/picture1.svg";
import picture2 from "../assets/picture2.svg";
const ThirdPage = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center justify-center mt-16 md:mt-24 px-4 md:px-16">
        <h1 className="text-3xl max-sm:min-w-full md:text-4xl md:max-w-4/5 lg:max-w-2/3 max-md:max-w-2/3 xl:max-w-2/3 xl:text-5xl xl:text-balance font-semibold">
          Elevating Card Programs with Cutting-Edge Technology
        </h1>
        <p className="text-[#5A6475] max-sm:text-sm max-sm:min-w-4/5 pt-4 md:text-base md:max-w-5/6 lg:max-w-3/5 max-md:max-w-2/3 max-lg:max-w-2/3 xl:max-w-1/3 ">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <button className="hover:cursor-pointer">
          <div className="flex pt-8 md:text-base gap-x-2 font-semibold">
            <p className="text-[#582066]">Compare all Pro features</p>
            <img src={ArrowRightPurple} alt="arrow right purple" />
          </div>
        </button>
        <div className="gap-y-8 flex flex-col mt-12  lg:flex-row items-center justify-center lg:gap-x-2 mb-20 md:mb-24 lg:px-24 lg:mb-24">
          <img src={picture1} alt="picture 1 flex-grow-0" />
          <img src={picture2} alt="picture 2 flex-grow-0" />
        </div>
        <div className=" font-medium text-pretty max-sm:max-w-2/3 sm:max-w-2/5 flex flex-col items-center justify-center mt-16  mb-16 md:mt-24 gap-y-8 md:gap-y-12 md:mb-24 lg:flex-row lg:gap-x-8 lg:max-w-full md:text-balance lg:text-balance">
          <div className="flex flex-col">
            <h1 className="text-4xl text-[#582066] font-medium">2 Million</h1>
            <p className="pt-4">Customers</p>
            <p className="pt-2 text-[#5A6475] font-medium">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-medium text-[#582066]">1K</h1>
            <p className="pt-4 font-medium">Downloads</p>
            <p className="pt-2 text-[#5A6475]">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-medium text-[#582066]">$73 Million</h1>
            <p className="pt-4 font-medium">Transaction</p>
            <p className="pt-2 text-[#5A6475]">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-medium text-[#582066]">2.0</h1>
            <p className="pt-4 font-medium">Latest Version</p>
            <p className="pt-2 text-[#5A6475]">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
