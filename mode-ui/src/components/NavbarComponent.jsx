import React from "react";
import Logo from "../assets/Logo.svg";
import Login from "../assets/login.svg";
import Hamburger from "../assets/hamburger.svg";
import Dropdown from "../assets/dropdown.svg";
const NavbarComponent = () => {
  return (
    <>
      {/* navbar components */}
      <div className="w-screen">
        <div className="flex justify-between  border-[#E6E7E9] border-1 bg-transparent w-full px-4 text-xs py-5 items-center">
          <div>
            <img src={Logo} alt="logo" className="w-20" />
          </div>

          <div className="max-md:hidden flex w-fit gap-x-6 font-normal text-xl md:hidden min-lg:flex lg:text-lg">
            <button className="flex gap-x-2 items-center justify-center hover:cursor-pointer">
              <p>Card access</p>
              <img src={Dropdown} alt="dropdown" />
            </button>
            <button className="hover:cursor-pointer">Banking</button>
            <button className="hover:cursor-pointer">Processing</button>
            <button className="hover:cursor-pointer">About</button>
            <button className="hover:cursor-pointer">Carrier</button>
            <button className="hover:cursor-pointer">Contact</button>
          </div>

          <div className="flex gap-x-4">
            <div className="flex min-lg:pr-10 hover:cursor-pointer">
              <button className="hover:cursor-pointer">
                <div className="flex items-center w-fit font-semibold gap bg-[#EEEFEF] rounded-lg  text-[#5A6475] px-4 py-2 gap-x-2 text-sm">
                  <p>Login</p>
                  <img src={Login} alt="" className="" />
                </div>
              </button>
            </div>
            <div className="flex items-center justify-center min-lg:hidden hover:cursor-pointer">
              <img src={Hamburger} alt="hamburger icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
