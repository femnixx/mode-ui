import React from "react";
import Logo from "../assets/Logo.svg";
import Login from "../assets/login.svg";
import Hamburger from "../assets/hamburger.svg";
const NavbarComponent = () => {
  return (
    <>
      {/* small-md screen */}
      <div className="w-screen">
        <div className="flex justify-between py-[] border-[#E6E7E9] border-1 bg-transparent w-full px-4 text-xs py-5 items-center">
          <div>
            <img src={Logo} alt="logo" className="w-20" />
          </div>

          <div className="flex gap-x-4">
            <div className="flex">
              <div className="flex items-center w-fit font-semibold gap bg-[#EEEFEF] rounded-lg  text-[#5A6475] px-4 py-2 gap-x-2 text-sm">
                <p>Login</p>
                <img src={Login} alt="" className="" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={Hamburger} alt="hamburger icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
