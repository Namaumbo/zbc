import React from "react";
import { motion } from "framer-motion";

import NavBarComponent from "../../components/NavBarComponent";
import { SermonComponent } from "../../components/SermonComponent";

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

      <SermonComponent />
      <SermonComponent />
      <SermonComponent />
      <SermonComponent />
    </div>
  );
};

export default SermonArchive;
