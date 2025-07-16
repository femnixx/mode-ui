import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <p className="flex justify-center items-center mt-13 text-center text-4xl font-serif mx-14">
          Welcome back!
        </p>
        <div className="flex  justify-between w-full">
          <div className="py-3 px-16  w-1/2 mt-12">
            <p>Sign in</p>
          </div>
          <div className="py-3 px-16 w-1/2 mt-12">
            <p>Sign up</p>
          </div>
        </div>
        <div className="mx-4">
          <div className="mt-12 gap-y-5 flex flex-col">
            <div className="gap-y-2">
              <div className="flex gap-x-1">
                <p className="font-semibold">Email</p>
                <p className="font-semibold text-red-500">*</p>
              </div>
              <div className="flex p-3 gap-x-3 items-center border-1 rounded-lg border-[#E5E7EB] mt-2">
                <p>.</p>
                <p>hugeicons@gmail.com</p>
              </div>
            </div>
            <div className="gap-y-2">
              <div className="flex gap-x-1">
                <p className="font-semibold">Password</p>
                <p className="font-semibold text-red-500">*</p>
              </div>
              <div className="flex items-center p-3 gap-x-3 border-1 border-[#E5E7EB] rounded-lg mt-2">
                <p>.</p>
                <p>*****</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-4 items-center text-[#75757E]">
            <div className="flex gap-x-1">
              <button className="border-1 border-[#75757E] px-1 my-0.5 rounded-xs"></button>
              <p className="text-sm">Remember me</p>
            </div>
            <p className="text-sm">Forgot password</p>
          </div>
          <p className="mt-8 text-center border-1">Login</p>
        </div>
        <p className="text-center mt-auto mb-6">
          By logging in, you agree to our Terms of Conditions and Privacy Policy
        </p>
      </div>
    </>
  );
};

export default Login;
