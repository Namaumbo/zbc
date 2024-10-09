import React from "react";
import NavBarComponent from "../../components/NavBarComponent";

const MinistriesPage = () => {
  return (
    <div>
      <NavBarComponent />
      <div className="w-full mx-auto  bg-[#252525] flex">
        <div className="relative bg-white h-[26rem] w-[50%] float-end mx-auto flex items-center justify-center ">
          <div className="absolute left-[-40%]">
            <img
              src="/kids.jpg"
              alt="Kids and Activities"
              className="w-[33%] h-auto shadow-lg rounded-r-lg"
            />
          </div>
          <div className="text-black text-center  ml-[10%]">
            <div className="pb-2 w-[70%] float-start ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-orange-500 font-coiny">
                Kids Ministry
              </h1>
              <hr className="border-t-2 border-green-300 my-2 font-bold w-full" />
              <p className="text-sm font-paragraph">
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
      </div>
    </div>
  );
};

export default MinistriesPage;
