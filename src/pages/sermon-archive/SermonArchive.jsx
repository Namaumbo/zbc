import React from "react";
import { motion } from "framer-motion";
import NavBarComponent from "../../components/NavBarComponent";
import { CardComponent } from "../../components/CardComponent";

const SermonArchive = () => {
  return (
    <div className="bg-gray-200">
      <NavBarComponent />

      <div className="bg-gradient-to-r from-[#160b14] to-black flex flex-col items-center justify-center pb-32 ">
        <motion.h3
          className="text-6xl text-center font-bold font-coiny text-orange-700 pb-5 pt-24"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Church Sermons
        </motion.h3>

        <motion.p
          className="w-[50%] text-white font-paragraph text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </motion.p>
      </div>

      <motion.div className=" flex flex-col md:flex-row items-center justify-center p-6 md:p-10 ">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:pr-8 font-heading text-center md:text-left">
            Empowering Our Community Through Faith
          </h1>
        </div>
        <div className="w-full md:w-1/2 ">
          <p className="font-paragraph text-base sm:text-lg lg:text-xl text-center md:text-left">
            Zomba Baptist Church is committed to making a positive impact
            through our outreach initiatives. We engage in various community
            service programs that aim to spread love, hope, and the teachings of
            Christ. Join us in our mission to foster spiritual growth and
            support those in need.
          </p>
        </div>
      </motion.div>

      <motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 gap-5">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </motion.div>
    </div>
  );
};

export default SermonArchive;
