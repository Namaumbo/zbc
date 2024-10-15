import React from "react";
import ButtonComponent from "./ButtonComponent";
import { BiSolidLike } from "react-icons/bi";

const MinistryComponent = ({ ...props }) => {
  const { title, description, image, buttonLabel, buttonLink } = props;
  return (
    <div>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-1/2 absolute left-0">
          <img
            src={image}
            alt="Kids and Activities"
            className=" h-94 shadow-4xl"
          />
        </div>
        <div className="bg-gradient-to-l from-white to-transparent h-full w-[60%] mt-[4%] ml-[30%] z-0 p-4 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-50"></div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-2 text-orange-500 font-coiny text-left relative">
            {title}
          </h1>
          <hr className="border-t-2 border-green-300 my-2 font-bold w-full mt-4 mb-4" />
          <section className="w-[90%] text-white text-lg relative">
            <p className="text-sm font-paragraph text-left mb-4 text-black">
              {description}
            </p>
          </section>
          <ButtonComponent icon={<BiSolidLike />} />
        </div>
      </div>
    </div>
  );
};

export default MinistryComponent;
