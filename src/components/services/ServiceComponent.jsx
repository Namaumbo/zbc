import React from "react";
import CustomCarouselComponent from "../CustomCarouselComponent";

const ServiceComponent = () => {
  const services = [
    {
      cover: "/kidsandpaster.jpg",
      description: "kids",
    },
    {
      cover: "/kids.jpg",
      description: "praise & Worship",
    },
    {
      cover: "/pastor.jpg",
      description: "pastor",
    },
    {
      cover: "/inchurch.jpg",
      description: "kids",
    },
    {
      cover: "/cross-2.jpg",
      description: "kids",
    },
  ];
  return (
    <div className="services">
      <div className="flex flex-row items-center">
        {/* carosel */}
        <div className="w-1/2">
          <CustomCarouselComponent content={services} />
        </div>

        {/* description */}
        <div className="w-1/2 ml-8">
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
          <p className="mt-8 text-lg font-heading_secondary leading-relaxed">
            Join us this Sunday for an uplifting experience where you'll find
            genuine fellowship, inspiring worship, and life-changing messages.
            Whether you're seeking spiritual growth, meaningful connections, or
            a place to belong, our welcoming community is here to embrace you.
            Experience the joy of worship, the power of prayer, and the warmth
            of real relationships. Your journey of faith begins with a single
            step - we can't wait to meet you and walk alongside you on this
            transformative path.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
