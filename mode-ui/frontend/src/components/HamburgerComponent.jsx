import React from "react";
import { useState } from "react";

const HamburgerComponent = ({ isOpen, onClose }) => {
  console.log("HamburgerComponent received isOpen: ", isOpen);
  return (
    <>
      <div
        className={`flex-col w-screen h-screen ${isOpen ? "flex" : "hidden"} ${
          isOpen ? "" : "pointer-events-none"
        }`}
      >
        <div className="w-full flex justify-end px-8 pt-4">
          <button
            className="text-end font-bold text-xl hover:cursor-pointer w-fit"
            id="close-menu"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-center gap-y-8 justify-center mt-40 text-3xl">
          <button onClick={onClose}>Banking</button>
          <button onClick={onClose}>Processing</button>
          <button onClick={onClose}>About</button>
          <button onClick={onClose}>Career</button>
          <button onClick={onClose}>Contact</button>
        </div>
      </div>
    </>
  );
};

export default HamburgerComponent;
