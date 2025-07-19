import React, { useState } from "react";
import Lockwhite from "../assets/lock-white.svg";
import Mailwhite from "../assets/mail-white.svg";
import background from "../assets/backgrouind.svg";
import { backgroundImage } from "flowbite-react/plugin/tailwindcss/theme";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [active, setActive] = useState("signIn");
  const [remember, setRemember] = useState(false);

  return (
    <>
      <div className="flex flex-col h-screen mt-13 sm:text-lg lg:hidden max-lg:hidden max-sm:flex">
        <p className="flex justify-center items-center text-center text-3xl font-serif mx-14 md:text-5xl">
          Welcome back!
        </p>
        <div className="flex  justify-between w-full">
          <div
            className={`py-3 w-1/2 flex justify-center items-center mt-12 ${
              active === "signIn"
                ? "text-[#5939DC] border-b-2 border-[#5939DC]"
                : "text-[#75757E] border-b-2 border-[#75757E]"
            } font-semibold`}
            onClick={() => setActive("signIn")}
          >
            <p className="">Sign in</p>
          </div>
          <div
            className={`py-3 w-1/2 flex justify-center items-center mt-12 ${
              active === "signUp"
                ? "text-[#5939DC] border-b-2 border-[#5939DC]"
                : "text-[#75757E] border-b-2 border-[#75757E]"
            } font-semibold`}
            onClick={() => setActive("signUp")}
          >
            <p>Sign up</p>
          </div>
        </div>

        {/* Sign in */}
        <div className={`mx-4 ${active === "signIn" ? "block" : "hidden"}`}>
          <div className="mt-12 gap-y-5 flex flex-col">
            <div className="gap-y-2">
              <div className="flex gap-x-1">
                <p className="font-semibold">Email</p>
                <p className="font-semibold text-red-500">*</p>
              </div>
              <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                <img src={Mailwhite} alt="mailwhite" />
                <input type="text" className="w-full h-full" id="email" />
              </div>
            </div>
            <div className="gap-y-2">
              <div className="flex gap-x-1">
                <p className="font-semibold">Password</p>
                <p className="font-semibold text-red-500">*</p>
              </div>
              <div className="flex items-center p-3 gap-x-3 border-1 border-[#E5E7EB] rounded-lg mt-2">
                <img src={Lockwhite} alt="" />
                <input type="password" id="pwd" className="w-full" />
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-4 items-center text-[#75757E]">
            <div className="flex gap-x-1">
              <button
                className={`border-[0.5px] border-[#75757E] px-1 my-1 rounded-xs sm:my-[6px] ${
                  remember === true ? "bg-[#5939DC]" : "bg-white"
                }`}
                onClick={() => {
                  setRemember(!remember);
                }}
              ></button>
              <p className="text-sm sm:text-base">Remember me</p>
            </div>
            <p className="text-sm hover:underline hover:cursor-pointer sm:text-base">
              Forgot password
            </p>
          </div>
          <div className="max-sm:block sm:flex w-full sm:justify-center sm:text-lg">
            <p className="mt-8 text-center py-3 bg-[#5939DC] text-white font-semibold rounded-lg sm:px-40">
              Login
            </p>
          </div>
        </div>

        {/* Sign up */}
        <div className={`mx-4 ${active === "signUp" ? "block" : "hidden"}`}>
          <div className="mt-12 gap-y-5 flex flex-col">
            <div className="gap-y-2">
              <div className="flex gap-x-1">
                <p className="font-semibold">First Name</p>
                <p className="font-semibold text-red-500">*</p>
              </div>
              <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                <input type="text" className="w-full" />
              </div>
            </div>
            <div className="gap-y-2">
              <div className="flex gap-x-1">
                <p className="font-semibold">Last Name</p>
                <p className="font-semibold text-red-500">*</p>
              </div>
              <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                <input type="text" className="w-full" />
              </div>
            </div>
            <div className="gap-y-2">
              <div className="flex gap-x-1">
                <p className="font-semibold">Email</p>
                <p className="font-semibold text-red-500">*</p>
              </div>
              <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                <img src={Mailwhite} alt="mailwhite" />
                <input type="text" className="w-full" />
              </div>
            </div>
            <div className="gap-y-2">
              <div className="flex gap-x-1">
                <p className="font-semibold">Password</p>
                <p className="font-semibold text-red-500">*</p>
              </div>
              <div className="flex items-center p-3 gap-x-3 border-1 border-[#E5E7EB] rounded-lg mt-2">
                <img src={Lockwhite} alt="" />
                <input type="password" className="w-full" />
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-4 items-center text-[#75757E]">
            <div className="flex gap-x-1">
              <button
                className={`border-[0.5px] border-[#75757E] px-1 my-1 rounded-xs sm:my-[6px] ${
                  remember === true ? "bg-[#5939DC]" : "bg-white"
                }`}
                onClick={() => {
                  setRemember(!remember);
                }}
              ></button>
              <p className="text-sm sm:text-base">Remember me</p>
            </div>
            <p className="text-sm hover:underline hover:cursor-pointer sm:text-base">
              Forgot password
            </p>
          </div>
          <div className="max-sm:block sm:flex w-full sm:justify-center sm:text-lg">
            <p className="mt-8 text-center py-3 bg-[#5939DC] text-white font-semibold rounded-lg sm:px-40">
              Login
            </p>
          </div>
        </div>
        <p
          className="text-center mt-auto mb-6"
          onClick={() => {
            setActive("signUp");
            console.log(`Current status is now: ${active}`);
          }}
        >
          By logging in, you agree to our{" "}
          <strong className="font-semibold text-[#5939DC]">
            Terms of Conditions
          </strong>{" "}
          and{" "}
          <strong className="font-semibold text-[#5939DC]">
            Privacy Policy
          </strong>
        </p>
      </div>
      {/* lg screens */}
      <div className="w-screen h-screen max-sm:hidden relative bg-[#F9F9FB]">
        <div
          className="absolute inset-0 bg-fill bg-center z-20"
          style={{ backgroundImage: `url("${background}")` }}
        ></div>
        <div className="absolute inset-0 z-20 flex justify-center">
          {/* Sign in */}
          <div
            className={`flex text-start flex-col m-20 bg-white rounded-lg shadow-2xl  border-[#75757E] relative ${
              active === "signIn" ? "flex" : "hidden"
            }`}
          >
            <div className="px-20 py-20">
              <p className="flex justify-center items-center text-center font-serif mx-14 text-4xl">
                Welcome back!
              </p>
              <div className="pt-12">
                <div className="mx-4">
                  <div className="mt-12 gap-y-5 flex flex-col">
                    <div className="gap-y-2">
                      <div className="flex gap-x-1">
                        <p className="font-semibold">Email</p>
                        <p className="font-semibold text-red-500">*</p>
                      </div>
                      <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                        <img src={Mailwhite} alt="mailwhite" />
                        <input type="text" className="w-full" />
                      </div>
                    </div>
                    <div className="gap-y-2">
                      <div className="flex gap-x-1">
                        <p className="font-semibold">Password</p>
                        <p className="font-semibold text-red-500">*</p>
                      </div>
                      <div className="flex items-center p-3 gap-x-3 border-1 border-[#E5E7EB] rounded-lg mt-2">
                        <img src={Lockwhite} alt="" />
                        <input type="password" className="w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 items-center text-[#75757E]">
                    <div className="flex gap-x-1">
                      <button
                        className={`border-[0.5px] border-[#75757E] px-1 my-1 rounded-xs sm:my-[6px] ${
                          remember === true ? "bg-[#5939DC]" : "bg-white"
                        }`}
                        onClick={() => {
                          setRemember(!remember);
                        }}
                      ></button>
                      <p className="text-sm sm:text-base">Remember me</p>
                    </div>
                    <p className="text-sm hover:underline hover:cursor-pointer sm:text-base">
                      Forgot password
                    </p>
                  </div>
                  <div className="max-sm:block sm:flex w-full sm:justify-center sm:text-lg">
                    <button className="hover:cursor-pointer">
                      <p className="mt-8 text-center py-3 bg-[#5939DC] text-white font-semibold rounded-lg sm:px-40">
                        Login
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <p
                className="text-center pt-6"
                onClick={() => {
                  setActive("signUp");
                }}
              >
                Don't have an account?{" "}
                <strong className="font-semibold text-[#5939DC] hover:cursor-pointer hover:underline">
                  Sign Up
                </strong>{" "}
              </p>
            </div>
          </div>

          {/* Sign up */}
          <div
            className={`flex text-start flex-col m-20 bg-white rounded-lg shadow-2xl  border-[#75757E] relative ${
              active === "signUp" ? "flex" : "hidden"
            }`}
          >
            <div className="px-20 py-20">
              <p className="flex justify-center items-center text-center font-serif mx-14 text-4xl">
                Create an account
              </p>
              <div className="pt-12">
                <div className="mx-4">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-y-2 pr-5">
                      <div className="flex gap-x-1">
                        <p className="font-semibold">First Name</p>
                        <p className="text-red-400 font-semibold">*</p>
                      </div>
                      <div className="bg-white border-1 border-[#E5E7EB] rounded-lg py-2">
                        <input type="text" className="pl-4" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="flex gap-x-1">
                        <p className="font-semibold">Last Name</p>
                        <p className="text-red-400 font-semibold">*</p>
                      </div>
                      <div className="bg-white border-1 border-[#E5E7EB] rounded-lg py-2">
                        <input type="text" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 gap-y-5 flex flex-col">
                    <div className="gap-y-2">
                      <div className="flex gap-x-1">
                        <p className="font-semibold">Email</p>
                        <p className="font-semibold text-red-500">*</p>
                      </div>
                      <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                        <img src={Mailwhite} alt="mailwhite" />
                        <input type="text" className="w-full" />
                      </div>
                    </div>
                    <div className="gap-y-2">
                      <div className="flex gap-x-1">
                        <p className="font-semibold">Password</p>
                        <p className="font-semibold text-red-500">*</p>
                      </div>
                      <div className="flex items-center p-3 gap-x-3 border-1 border-[#E5E7EB] rounded-lg mt-2">
                        <img src={Lockwhite} alt="" />
                        <input type="password" className="w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 items-center text-[#75757E]">
                    <div className="flex gap-x-1">
                      <button
                        className={`border-[0.5px] border-[#75757E] px-1 my-1 rounded-xs sm:my-[6px] ${
                          remember === true ? "bg-[#5939DC]" : "bg-white"
                        }`}
                        onClick={() => {
                          setRemember(!remember);
                        }}
                      ></button>
                      <p className="text-sm sm:text-base">Remember me</p>
                    </div>
                    <p className="text-sm hover:underline hover:cursor-pointer sm:text-base">
                      Forgot password
                    </p>
                  </div>
                  <div className="max-sm:block sm:flex w-full sm:justify-center sm:text-lg">
                    <button className="hover:cursor-pointer">
                      <p className="mt-8 text-center py-3 bg-[#5939DC] text-white font-semibold rounded-lg sm:px-40">
                        Login
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <p
                className="text-center pt-6"
                onClick={() => {
                  setActive("signIn");
                }}
              >
                Already have an account?{" "}
                <strong className="font-semibold text-[#5939DC] hover:cursor-pointer hover:underline">
                  Sign In
                </strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
