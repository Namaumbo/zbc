import React from "react";
import { motion } from "framer-motion";
import NavBarComponent from "../../components/NavBarComponent";
import { CardComponent } from "../../components/CardComponent";

const SermonArchive = () => {
  return (
    <div className="bg-gray-200">
      <NavBarComponent />
      <div className="bg-gradient-to-r from-[#160b14] to-black">
        <div className="container mx-auto flex flex-col items-center justify-center pb-32 ">
          <motion.h3
            className="text-6xl text-center font-bold font-coiny text-white pb-5 pt-24"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Church Services
          </motion.h3>
          <motion.p
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] text-gray-300 font-paragraph text-center text-sm sm:text-base md:text-lg lg:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </motion.p>
          <div className="flex gap-4 mt-8">
            <motion.button
              className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-opacity-90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Us
            </motion.button>
            <motion.button
              className="px-6 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:bg-opacity-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>{" "}
      <motion.div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col md:flex-row justify-center">
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
