import React from "react";
import ButtonComponent from "./ButtonComponent";
import { BiSolidLike } from "react-icons/bi";
const MinistryComponentSecond = ({ ...props }) => {
  const { title, description, image, buttonLabel, buttonLink } = props;
  return (
    <div>
      <div className="flex flex-col md:flex-row  relative">
        <div className="w-1/2 absolute left-0 z-10 mt-16 p-4 ">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-50"></div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-2 text-orange-500 font-coiny text-left relative">
            {title}
          </h1>
          <hr className="border-t-2 border-green-300 my-2 font-bold w-full mt-6 mb-6" />
          <section className="w-[90%] text-black text-lg relative">
            <p className="text-sm font-paragraph text-left mb-4">
              {description}
            </p>
          </section>
          <ButtonComponent icon={<BiSolidLike />} />
        </div>
        <div className="bg-gradient-to-l l w-[70%] ml-[40%] z-0 p-4 ">
          <img
            src={image}
            alt="Kids and Activities"
            className=" h-[100%] w-[100%] shadow-4xl rounded-l-sm "
          />
        </div>
      </div>
    </div>
  );
};

export default MinistryComponentSecond;
