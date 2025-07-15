import React from "react";
import Logo from "../assets/Logo.svg";
import discord from "../assets/discord.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const SixthPage = () => {
  return (
    <>
      <div className="border-[0.1px] border-black/20 "></div>
      <div className="pt-12 pb-8 px-4 text-left md:px-16 md:24 gap-y-4 md:text-center lg:pt-24 lg:pb-16 flex flex-col items-start justify-start md:items-center md:justify-center max-md:items-center">
        <img src={Logo} alt="mode UI" className="w-fit" />
        <p className="md:max-w-4/5 lg:max-w-2/3 text-left pl-2 text-pretty md:text-center max-md:text-center">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </p>
      </div>
      <div className="border-[0.1px] border-black/20 "></div>
      <div className="flex flex-col pl-4 gap-y-8 mt-8 md:grid-cols-2 md:grid lg:flex-row lg:grid-cols-none lg:flex lg:px-23 max-lg:grid lg:gap-x-8 lg:justify-between max-md:grid max-md:grid-cols-2">
        <div className="gap-y-4 flex flex-col">
          <p className="font-semibold pb-2">Company</p>
          <p>About us</p>
          <p>Pricing</p>
          <p>Contact us</p>
          <p>Features</p>
        </div>
        <div className="gap-y-4 flex flex-col">
          <p className="font-semibold pb-2">Product</p>
          <p>Figma design system</p>
          <p>Ios kit</p>
          <p>Android kit</p>
          <p>Wireframe</p>
        </div>
        <div className="gap-y-4 flex flex-col ">
          <p className="font-semibold pb-2">Resources</p>
          <p>Templates</p>
          <p>Landing Pages</p>
          <p>Documentation</p>
          <p>Comp library</p>
        </div>
        <div className="gap-y-4 flex flex-col">
          <p className="font-semibold pb-2">Legal</p>
          <p>Privacy policy</p>
          <p>Terms & Conditions</p>
          <p>Disclaimer</p>
          <p>Affiliate programme</p>
        </div>
        <div className="gap-y-4 flex flex-col">
          <p className="font-semibold pb-2">Support</p>
          <p>Help centre</p>
          <p>Raise ticket</p>
          <p>Report</p>
          <p>Refund</p>
        </div>
      </div>
      <div className="flex gap-x-6 px-4 mt-16 md:justify-center max-md:justify-center max-sm:justify-start">
        <img src={github} alt="github" />
        <img src={linkedin} alt="linked in" />
        <img src={discord} alt="discord" />
      </div>
      <p className=" pb-10 pt-6 px-4 text-[#5A6475] font-light max-w-2/3 max-md:text-center max-md:max-w-full md:max-w-full md:text-center">
        <sup>&copy;</sup> 2023 Mode UI Inc. All Rights Reserved.
      </p>
    </>
  );
};

export default SixthPage;
