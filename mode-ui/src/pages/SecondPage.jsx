import React from "react";
import globe from "../assets/globe.svg";
import key from "../assets/key.svg";
import lock from "../assets/lock.svg";
import ArrowRightPurple from "../assets/arrow-right.svg";

const SecondPage = () => {
  return (
    <>
      <div className="mt-16 md:mt-24 xl:mt-32 flex-col flex items-center text-center px-4 md:px-16 lg:px-28 mb-28">
        <h1 className="text-3xl max-sm:min-w-full md:text-4xl md:max-w-4/5 lg:max-w-2/3 xl:text-5xl xl:max-w-2/3 xl:text-balance font-semibold">
          Elevating Card Programs with Cutting-Edge Technology
        </h1>
        <p className="text-[#5A6475] max-sm:text-sm max-sm:min-w-4/5 pt-4 md:text-base md:max-w-5/6 lg:max-w-3/5 max-md:max-w-2/3 max-lg:max-w-2/3 xl:max-w-1/3 ">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <div className="flex pt-8 md:text-base gap-x-2 font-semibold">
          <p className="text-[#582066]">Compare all Pro features</p>
          <img src={ArrowRightPurple} alt="arrow right purple" />
        </div>

        <div className="lg:flex lg:gap-x-8 mb-24 md:mb-24 px-4 mt-12 lg:mt-24">
          <div className="pt-12 flex flex-col items-center">
            <img
              src={globe}
              alt="globe"
              className="bg-[#F4EFF6] p-4 rounded-full"
            />
            <p className="pt-4 font-semibold">Globally Accepted</p>
            <p className="pt-4 md:max-w-2/3 lg:max-w-3/4 max-md:max-w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="pt-12 flex flex-col items-center">
            <img
              src={key}
              alt="key"
              className="bg-[#F4EFF6] p-4 rounded-full"
            />
            <p className="pt-4 font-semibold">Biometric Integrated</p>
            <p className="pt-4 md:max-w-2/3 lg:max-w-3/4 max-md:max-w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div className="pt-12 flex flex-col items-center">
            <img
              src={lock}
              alt="lock"
              className="bg-[#F4EFF6] p-4 rounded-full"
            />
            <p className="pt-4 font-semibold">Fully Secured</p>
            <p className="pt-4 md:max-w-2/3 lg:max-w-3/4 max-md:max-w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
