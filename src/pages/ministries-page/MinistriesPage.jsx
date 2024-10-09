import React from "react";
import NavBarComponent from "../../components/NavBarComponent";

const MinistriesPage = () => {
  return (
    <div>
      <NavBarComponent />
      <div className="w-full mx-auto bg-[#252525] flex flex-col md:flex-row">
        <div className="relative bg-white h-auto md:h-[26rem] w-full md:w-[50%] mx-auto flex items-center justify-center py-8 md:py-0">
          <div className="hidden md:block absolute left-[-40%]">
            <img
              src="/kids.jpg"
              alt="Kids and Activities"
              className="w-full md:w-[33%] h-auto shadow-lg rounded-r-lg"
            />
          </div>
          <div className="text-black text-center md:ml-[10%] px-4 md:px-0">
            <div className="w-full md:w-[70%] float-start">
                          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-2 text-orange-500 font-coiny text-left">
                            Kids Ministry
                          </h1>              
              <hr className="border-t-2 border-green-300 my-2 font-bold w-full" />
              <p className="text-sm font-paragraph text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden w-full">
          <img
            src="/kids.jpg"
            alt="Kids and Activities"
            className="w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MinistriesPage;
