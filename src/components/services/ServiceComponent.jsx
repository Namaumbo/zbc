import React from "react";
import CustomCarouselComponent from "../CustomCarouselComponent";

const ServiceComponent = () => {
  const services = [
    {
      cover: "kidsandpaster.jgp",
      description: "kids",
    },
    {
      cover: "kids.jpg",
      description: "praise & Worship",
    },
  ];
  return (
    <div className="services">
      <div className="flex flex-row">
        {/* carosel */}
        <div className="w-1/2">
          <CustomCarouselComponent content={services} />
        </div>

        {/* description */}
        <div className="w-1/2">
          <div className=" w-[70%] text-center text-3xl sm:text-4xl md:text-5xl font-bold text-semi_heading_color font-heading">
            Why Joining Us this
            <span className="relative  inline-block ml-1 text-white px-4 py-2">
              Sunday?
              <span
                className="absolute bg-brand_color inset-0 ml-2 skew-x-[-15deg]"
                aria-hidden="true"
                style={{
                  zIndex: -1,
                  transformOrigin: "right",
                }}
              ></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
