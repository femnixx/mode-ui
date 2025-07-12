import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import HeaderComponent from "../components/HeaderComponent";

const LandingPage = () => {
  return (
    <>
      {/* announcement section */}
      <div className="flex gap-x-4 justify-between items-center px-2 py-2 min-md:justify-center">
        <div className="bg-[#F1F1F2] rounded-full px-3 py-1 flex items-center justify-center text-sm font-semibold text-[#363C46] ">
          <p>Announcement</p>
        </div>
        <div className="flex text-xs pr-2 font-semibold text-balance text-wrap-2">
          <p>
            We are happy to announce that we raise $2 Million in Seed Funding
          </p>
        </div>
      </div>
      {/* navbar section */}
      <NavbarComponent></NavbarComponent>
      {/* header section */}
      <HeaderComponent></HeaderComponent>
    </>
  );
};

export default LandingPage;
