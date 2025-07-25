import React, { useState } from "react";
import Lockwhite from "../assets/lock-white.svg";
import Mailwhite from "../assets/mail-white.svg";
import background from "../assets/backgrouind.svg";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authServices";
import User from "../../../backend/models/User";

const Login = () => {
  const [active, setActive] = useState("signIn");
  const [remember, setRemember] = useState(false);

  // state for empty fields
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [signupEmailError, setSignupEmailError] = useState("");
  const [signupPasswordError, setSignupPasswordError] = useState("");

  // state for login form fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // state for sign up form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // state for displaying messages (success or error)
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // code for email required

  // handler for login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // clear previous field-specific error for long email
    setLoginEmailError("");

    // only proceed with API call if validation passes
    try {
      const response = await authService.Login(loginEmail, loginPassword);
      setMessage(response.message || "Login successful!");
      alert("Login successful: " + (response.message || "Welcome!"));
      console.log("Login successful: ", response);
      <Link to="/"></Link>;

      setLoginEmail("");
      setLoginPassword("");
    } catch (error) {
      setMessage(error);
      console.error("Login error: ", error);
      if (!loginEmail || !loginPassword) {
        window.alert("All fields are required to be filled.");
      }
      if ((await !User.matchPassword) && loginEmail != "") {
        window.alert("Email not found or password is incorrect");
      }
    }
  };

  // handler for signup submission
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!firstName || !lastName || !signupEmail || !signupPassword) {
      setMessage("All fields are required to sign up.");
      window.alert("All fields are required to be filled to sign up.");
      return;
    }

    try {
      const response = await authService.Signup(
        firstName,
        lastName,
        signupEmail,
        signupPassword
      );

      setMessage(response.message + " You can now log in.");
      alert("Signup successful: " + response.message);
      console.log("Signup successful: ", response);
      window.alert("All fields are required to be filled to sign up.");

      // clear fields on successful signup, switch to login tab
      setFirstName("");
      setLastName("");
      setSignupEmail("");
      setSignupPassword("");
      setActive("signIn");
      setLoginEmail(signupEmail);
    } catch (error) {
      setMessage(error);
      console.error("Signup error: ", error);
    }
  };

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
        <form action="" onSubmit={handleLoginSubmit}>
          <div className={`mx-4 ${active === "signIn" ? "block" : "hidden"}`}>
            <div className="mt-12 gap-y-5 flex flex-col">
              <div className="gap-y-2">
                <div className="flex gap-x-1">
                  <p className="font-semibold">Email</p>
                  <p className="font-semibold text-red-500">*</p>
                </div>
                <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                  <img src={Mailwhite} alt="mailwhite" />
                  <input
                    type="email"
                    className="w-full h-full"
                    id="login-email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="gap-y-2">
                <div className="flex gap-x-1">
                  <p className="font-semibold">Password</p>
                  <p className="font-semibold text-red-500">*</p>
                </div>
                <div className="flex items-center p-3 gap-x-3 border-1 border-[#E5E7EB] rounded-lg mt-2">
                  <img src={Lockwhite} alt="" />
                  <input
                    type="password"
                    id="Login-pwd"
                    className="w-full"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
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
            <div
              className="max-sm:block sm:flex w-full sm:justify-center sm:text-lg"
              onClick={handleLoginSubmit}
            >
              <p className="mt-8 text-center py-3 bg-[#5939DC] text-white font-semibold rounded-lg sm:px-40 hover:cursor-pointer hover:bg-purple-800">
                Login
              </p>
            </div>
          </div>
        </form>

        {/* Sign up */}
        <form action="" onSubmit={handleSignup}>
          <div className={`mx-4 ${active === "signUp" ? "block" : "hidden"}`}>
            <div className="mt-12 gap-y-5 flex flex-col">
              <div className="gap-y-2">
                <div className="flex gap-x-1">
                  <p className="font-semibold">First Name</p>
                  <p className="font-semibold text-red-500">*</p>
                </div>
                <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                  <input
                    type="text"
                    className="w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="gap-y-2">
                <div className="flex gap-x-1">
                  <p className="font-semibold">Last Name</p>
                  <p className="font-semibold text-red-500">*</p>
                </div>
                <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                  <input
                    type="text"
                    className="w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="gap-y-2">
                <div className="flex gap-x-1">
                  <p className="font-semibold">Email</p>
                  <p className="font-semibold text-red-500">*</p>
                </div>
                <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                  <img src={Mailwhite} alt="mailwhite" />
                  <input
                    type="text"
                    className="w-full"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="gap-y-2">
                <div className="flex gap-x-1">
                  <p className="font-semibold">Password</p>
                  <p className="font-semibold text-red-500">*</p>
                </div>
                <div className="flex items-center p-3 gap-x-3 border-1 border-[#E5E7EB] rounded-lg mt-2">
                  <img src={Lockwhite} alt="" />
                  <input
                    type="password"
                    className="w-full"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
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
            <div
              className="max-sm:block sm:flex w-full sm:justify-center sm:text-lg"
              onClick={handleSignup}
            >
              <p className="mt-8 text-center py-3 bg-[#5939DC] text-white font-semibold rounded-lg sm:px-40 hover:cursor-pointer hover:bg-purple-800">
                Login
              </p>
            </div>
          </div>
        </form>
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
          <form action="" onSubmit={handleLoginSubmit}>
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
                          <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full"
                            value={loginEmail}
                            onChange={(e) => {
                              setLoginEmail(e.target.value);
                            }}
                          />
                        </div>
                        <p
                          className={`text-red-500 font-semibold text-sm pt-2 ${
                            loginEmail === "" ? "flex" : "hidden"
                          }`}
                        >
                          * Email is required
                        </p>
                      </div>
                      <div className="gap-y-2">
                        <div className="flex gap-x-1">
                          <p className="font-semibold">Password</p>
                          <p
                            className={`font-semibold text-red-500 ${
                              loginEmail === "" ? "flex" : "hidden"
                            }`}
                            required
                          ></p>
                        </div>
                        <div className="flex items-center p-3 gap-x-3 border-1 border-[#E5E7EB] rounded-lg mt-2">
                          <img src={Lockwhite} alt="" />
                          <input
                            type="password"
                            className="w-full"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                          />
                        </div>
                        <p
                          className={`font-semibold text-red-500 text-sm pt-2 ${
                            loginPassword === "" ? "block" : "hidden"
                          }`}
                        >
                          * Password is required
                        </p>
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
                      <button
                        className="hover:cursor-pointer"
                        onClick={handleLoginSubmit}
                      >
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
          </form>

          {/* Sign up */}
          <form action="" onSubmit={handleSignup}>
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
                          <input
                            type="text"
                            className="pl-4"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-1">
                          <p className="font-semibold">Last Name</p>
                          <p className="text-red-400 font-semibold">*</p>
                        </div>
                        <div className="bg-white border-1 border-[#E5E7EB] rounded-lg py-2">
                          <input
                            className="pl-4"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
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
                          <input
                            type="text"
                            className="w-full"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="gap-y-2">
                        <div className="flex gap-x-1">
                          <p className="font-semibold">Password</p>
                          <p className="font-semibold text-red-500">*</p>
                        </div>
                        <div className="flex items-center p-3 gap-x-3 border-1 border-[#E5E7EB] rounded-lg mt-2">
                          <img src={Lockwhite} alt="" />
                          <input
                            type="password"
                            className="w-full"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                          />
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
                      <button
                        className="hover:cursor-pointer"
                        onClick={handleSignup}
                      >
                        <p className="mt-8 text-center py-3 bg-[#5939DC] text-white font-semibold rounded-lg sm:px-40">
                          Sign up
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
