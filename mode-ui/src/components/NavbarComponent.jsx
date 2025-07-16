import React from "react";
import Logo from "../assets/Logo.svg";
import Login from "../assets/login.svg";
import Hamburger from "../assets/hamburger.svg";
import Dropdown from "../assets/dropdown.svg";
import HamburgerComponent from "../components/HamburgerComponent.jsx";
import { useState } from "react";

const NavbarComponent = () => {
  const [toggled, setToggled] = useState(false);

  function ToggleMenu() {
    setToggled(!toggled);
    console.log("Navbar toggled state: ", !toggled);
  }

  return (
    <>
      <HamburgerComponent
        isOpen={toggled}
        onClose={ToggleMenu}
      ></HamburgerComponent>
      {/* navbar components */}
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
            <button className="hover:cursor-pointer">Career</button>
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
            <div
              className="flex items-center justify-center lg:hidden hover:cursor-pointer"
              onClick={() => {
                ToggleMenu();
              }}
            >
              <img src={Hamburger} alt="hamburger icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
