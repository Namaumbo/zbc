import React from "react";
import { motion } from "framer-motion";
import NavBarComponent from "../../components/NavBarComponent";
import { Button } from "flowbite-react";
import ServiceComponent from "../../components/services/ServiceComponent";

const SermonArchive = () => {
  return (
    <div className="">
      <NavBarComponent />
      <div
        className="relative h-[40rem] mb-8 bg-cover bg-center"
        style={{
          backgroundImage: "url(/mgonero.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60">
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold mb-4 w-[60%]">
              Join Us For Our Weekly Activities
            </h2>
            <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white font-heading_secondary">
              Experience the power of worship and fellowship at Zomba Baptist
              Church. Our services are filled with inspiring messages, uplifting
              music, and a welcoming community. Join us as we gather to praise,
              learn, and grow together in faith.
            </p>
            <Button className="mt-4 p-2 bg-brand_color">Learn More</Button>
          </div>
        </div>
      </div>
      <motion.div className="container mx-auto p-6 md:p-10 text-center justify-center mt-[3rem]">
        <div className="w-full mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-semi_heading_color mb-4 md:pr-8 font-heading text-center">
            Empowering Our Community Through
            <span className="relative  inline-block ml-1 text-white px-4 py-2">
              Faith
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

        <div className="w-full text-center">
          <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-4xl font-heading_secondary m-[auto]">
            Zomba Baptist Church is committed to making a positive impact
            through our outreach initiatives. We engage in various community
            service programs that aim to spread love, hope, and the teachings of
            Christ. Join us in our mission to foster spiritual growth and
            support those in need.
          </p>
        </div>
      </motion.div>
      <motion.div
      className="flex flex-row justify-end mr-[15rem] rotate-12 mt-[-5rem]"
      
      >
        <img
          src="data:image/png;base64,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"
          alt="heart-cross"
          width={150}
          height={150}
        />
      </motion.div>
      <motion.div>
        <div className="container mx-auto p-6 md:p-10">
          <ServiceComponent />
        </div>
      </motion.div>
    </div>
  );
};

export default SermonArchive;
