import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import { motion } from "framer-motion";

const EventsPage = () => {
  return (
    <div>
      <NavBarComponent />
      <div className="bg-gradient-to-r from-[#160b14] to-black flex flex-col items-center justify-center pb-32 ">
        <div className="flex flex-col items-center justify-center mt-8">
          <motion.h1 className="font-coiny text-orange-700 text-5xl font-bold">
            ZBC Events
          </motion.h1>
          <motion.p className="font-paragraph text-white text-center w-[50%] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>
        </div>
      </div>
      <div
      >
        <motion.div
          className="h-screen sticky top-0 items-center justify-center bg-no-repeat  scroll-m-1 overflow-scroll"
          style={{
            height: "100vh",
            backgroundImage: "url('/events.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-row justify-center">
            <motion.div
              className="bg-white rounded-sm p-6 shadow-2xl w-[40%] ml-28"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-bold text-5xl font-coiny w-96">
                Children Ministry
              </h3>
              <p className="text-gray-600 mt-4 font-paragraph w-[96%] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cup
              </p>
            </motion.div>

            <motion.div
              className=" rounded-sm mb-5 shadow-2xl w-[40%] ml-28 mt-10"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: -150 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/kids.jpg"
                alt="Children's Ministry"
                className="w-full h-full shadow-sm rounded-sm"
              />
            </motion.div>
          </div>

          <div className="flex flex-row justify-center">
            <motion.div
              className="bg-white rounded-sm p-6 shadow-2xl w-[40%] ml-28"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-bold text-5xl font-coiny w-96">
                Children Ministry
              </h3>
              <p className="text-gray-600 mt-4 font-paragraph w-[96%] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cup
              </p>
            </motion.div>

            <motion.div
              className=" rounded-sm mb-5 shadow-2xl w-[40%] ml-28 mt-10"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: -150 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/kids.jpg"
                alt="Children's Ministry"
                className="w-full h-full shadow-sm rounded-sm"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPage;
