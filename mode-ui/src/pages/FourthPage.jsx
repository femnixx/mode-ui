import React from "react";
import wise from "../assets/company-logo.svg";
import avatar from "../assets/Avatar.svg";

const FourthPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-16 px-4 md:mx-8 md:my-24">
        <img src={wise} alt="wise" />
        <p className="font-serif pt-8 md:text-3xl text-balance lg:max-w-3/4 xl:max-w-2/3">
          I had the pleasure of experiencing the next generation of card
          solutions with this incredible product. It's refreshing to see such
          innovation in the financial industry.
        </p>
        <div className="min-w-full flex flex-col items-center justify-center mb-16 md:px-16 md:text-2xl md:mb-24 lg:max-w-5/6 xl:max-w-2/3 max-md:max-w-5/6 max-md:text-base max-md:px-16">
          <img src={avatar} alt="" className="pt-12" />
        </div>
      </div>
    </>
  );
};

export default FourthPage;
