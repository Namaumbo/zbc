import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import { Button } from "flowbite-react";
import MinistryComponent from "../../components/MinistryComponent";
// import { motion } from "framer-motion";

const ParallaxScroll = () => {
  return (
    <div className="relative bg-white">
      <NavBarComponent />
      {/* Hero sections */}

      <div
        className="relative h-[40rem]  bg-cover bg-center"
        style={{
          backgroundImage: "url('/ministries.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold mb-4 w-[60%]">
              Join Our Community Church Ministries
            </h2>
            <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white font-heading_secondary">
              Serve and give by being God’s coworker and part of His field and
              building.
            </p>
            <p className="font-bold text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white font-heading_secondary">
              1 Corinthians 3:9
            </p>
            <Button className="mt-4 p-2 bg-brand_color">Learn More</Button>
          </div>
        </div>
      </div>

      {/* ------ END OF Hero Section ------ */}

      <div
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")`,
        }}
      >
        <div className="w-full mb-6 md:mb-0 p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-semi_heading_color mb-4 md:pr-8 font-heading text-center">
            Our
            <span className="relative z-[1] inline-block ml-1 text-white px-4 py-2">
              Ministries
              <span
                className="absolute bg-brand_color inset-0 ml-2 skew-x-[-15deg]"
                aria-hidden="true"
                style={{
                  zIndex: -1,
                  transformOrigin: "right",
                }}
              ></span>
            </span>
          </h1>
        </div>

        <MinistryComponent />
      </div>
    </div>
  );
};
export default ParallaxScroll;
