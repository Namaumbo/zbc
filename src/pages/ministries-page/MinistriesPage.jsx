import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import { Button } from "flowbite-react";
import MinistryComponent from "../../components/MinistryComponent";

const ParallaxScroll = () => {
  return (
    <div className="relative bg-white">
      <NavBarComponent />
      {/* Hero sections */}

      <div
        className="relative h-[40rem] mb-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/events.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/30 ">
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="text-5xl md:text-5xl sm:text-3xl xs:text-3xl font-bold mb-4 w-[34rem] text-white">
              Join Our Community Church Ministries
            </h2>
            <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white">
              Experience the joy of giving back and making a difference. At
              Zomba Baptist, we are dedicated to spreading love and hope through
              our community service programs. Get involved and help us create a
              positive impact.
            </p>
            <Button className="mt-4 p-3 bg-[#008cd0]">Learn More</Button>
          </div>
        </div>
      </div>

      {/* ------ END OF Hero Section ------ */}

      <div
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")`,
        }}
      >
        <MinistryComponent />
      </div>
    </div>
  );
};
export default ParallaxScroll;
