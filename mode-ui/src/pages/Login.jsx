import React from "react";

const Login = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <h1 className="mt-13 text-center flex items-center justify-center">
          Welcome back!
        </h1>
        <div className="mt-12">
          <div className="flex justify-around w-full">
            <div className="w-1/2 flex items-center justify-center">
              <p className="">Sign in</p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <p>Sign up</p>
            </div>
          </div>
          {/* login */}
          <div className="mt-12 px-4 ">
            <div className="flex">
              <p>Email</p>
              <p>*</p>
            </div>
            <div className="flex mt-2">
              <p>image</p>
              <p>hugeicons@gmail.com</p>
            </div>
            <div className="flex mt-5">
              <p>Password</p>
              <p>*</p>
            </div>
            <div className="flex mt-2">
              <p>image</p>
              <p>*******</p>
            </div>
            <div className="flex mt-3 justify-between">
              <div className="flex">
                <div>.</div>
                <p>Remember me</p>
              </div>
              <p>Forgot password</p>
            </div>
            <button className="mt-8 flex text-center border-1 w-full items-center justify-center">
              Login
            </button>
            <p className="flex justify-center items-end text-center">
              By logging in, you agree to our Terms of Conditions and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
