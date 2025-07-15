import React from "react";
import mail from "../assets/mail.svg";
import headphones from "../assets/headphones.svg";

const FifthPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 md:py-24 md:px-8 lg:px-20 text-balance">
        <h1 className="text-xl md:text-5xl lg:max-w-2/3 font-semibold max-md:text-4xl max-sm:text-3xl">
          Unlock Limitless Possibilities with Our New Card Solutions
        </h1>
        <div className="flex flex-col items-center pt-8 gap-y-2 md:flex-row md:gap-x-2 font-medium">
          <div className="bg-[#582066] text-white flex px-16 rounded-lg py-3 gap-x-2 md:px-4 md:py-3">
            <p>Unlock your card</p>
            <img src={mail} alt="mail" />
          </div>
          <div className="flex bg-[#EEEFEF] text-[#5A6475] fill-[#5A6475] px-16 py-3 rounded-lg gap-x-2 md:px-4 md:py-3">
            <p>Customer support</p>
            <img src={headphones} alt="headphones" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthPage;
