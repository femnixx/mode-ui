import React from "react";
import Mesh from "../assets/mesh-background.svg";
import Brands from "../assets/brands.svg"; // Likely for small screens
import Brandsmd from "../assets/brands-md.svg"; // Likely for medium screens

const HeaderComponent = () => {
  return (
    <>
      <div className="mt-10 relative z-10">
        {/* Main Header Content */}
        <div className="flex flex-col text-center w-full px-4 gap-y-4 ">
          <p className="font-semibold text-[#582066]">Seamless experience</p>
          <div
            // Base styles: Visible by default for all sizes unless hidden by a breakpoint
            // If Mesh is only for certain sizes, you'd hide it and show alternatives.
            // For now, assuming Mesh is the general background for this section
            className="gap-y-4 w-full flex flex-col justify-center items-center" // Added justify-center, items-center to center the content within this div
            style={{
              backgroundImage: `url(${Mesh})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} // Added background styling
          >
            <h1 className="font-semibold text-4xl text-balance">
              Unleashing the Next Generation of Card Solutions
            </h1>
            <p className="text-[#5A6475]">
              Experience the future of payments: smarter, more secure, and
              perfectly tailored for you.
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="py-8 w-full px-4 flex justify-center flex-col items-center">
          <button className="w-full md:w-fit ">
            {" "}
            {/* Use md: instead of min-md: here for consistency */}
            <div className="bg-[#582066] flex text-white justify-center py-4 rounded-lg font-semibold gap-x-2 ">
              <p>Unlock your card </p>
              <p>🡪</p>
            </div>
          </button>
          <p className="text-sm text-center py-4 font-semibold text-[#5A6475]">
            *No credit card required
          </p>
        </div>
      </div>

      {/* Brands Images - Optimized for Specific Ranges */}
      {/* Brands (smallest version): visible from 0px up to md breakpoint (767px) */}
      <div className="flex px-4 w-full items-center justify-center mt-16 md:hidden">
        <img src={Brands} alt="brands-small" className="flex-grow-1" />
      </div>

      {/* Brandsmd (medium version): visible from md breakpoint (768px) up to lg breakpoint (1023px) */}
      <div className="hidden md:flex px-4 w-full items-center justify-center mt-16 lg:hidden">
        <img src={Brandsmd} alt="brands-medium" className="flex-grow-1" />
      </div>

      {/* Optional: Brandslg (large version): visible from lg breakpoint (1024px) and up */}
      {/* If you have a larger version of Brands for desktop, use this */}
      <div className="hidden lg:flex px-4 w-full items-center justify-center mt-16">
        {/* Assuming you have a Brandslg.svg for large screens */}
        {/* <img src={Brandslg} alt="brands-large" className="flex-grow-1" /> */}
        {/* If Brandsmd is also for large screens, simply remove the lg:hidden from the above div */}
      </div>
    </>
  );
};

export default HeaderComponent;
