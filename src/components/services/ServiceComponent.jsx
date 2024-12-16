import React from "react";

const ServiceComponent = () => {
  return (
    <div className="services">
      <div className="border border-blue-700">
        {/* carosel */}
        <div className="">
            
        </div>

        {/* description */}
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-semi_heading_color mb-4 md:pr-8 font-heading text-center md:text-left ">
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
  );
};

export default ServiceComponent;
