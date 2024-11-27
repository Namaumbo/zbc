"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "flowbite-react";
import MinistriesExplaination from "../core/MinistryExplainations";
export default function MinistryComponent() {
  console.log(MinistriesExplaination);
  return (
    <div>
      {MinistriesExplaination.map((ministry, index) => (
        <div className="flex flex-row justify-center mt-8" key={index}>
          <motion.div
            className="bg-[#008cd0] rounded-sm p-6 shadow-2xl w-[40%] ml-28"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h3 className="font-bold text-5xl font-coiny w-96 text-white">
              {ministry.ministry}
            </h3>
            <p className="mt-4 font-paragraph w-[80%]  text-white">
              {ministry.explaination}
            </p>
            <Button className="mt-4  p-2" color="light">
              Like and Share
            </Button>
          </motion.div>

          <motion.div
            className=" rounded-sm mb-5 shadow-2xl w-[40%] ml-29 mt-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: -150 }}
            transition={{ duration: 2 }}
          >
            <img
              src="/kids.jpg"
              alt="Children's Ministry"
              className="w-full h-full shadow-sm rounded-sm"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
