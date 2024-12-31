"use client";
import React from "react";
import { motion } from "framer-motion";

function ChurchActivityComponent() {
  const churchPoints = [
    {
      id: 2,
      title: "Bible Study",
      description:
        "Deepen your understanding of Scripture through our engaging Bible study sessions where we explore God's word, share insights, and apply biblical teachings to daily life.",
      image: "/bible.png",
    },
  

  ];
  return (
    <>
      <div className="container mx-auto flex flex-row justify-center items-center p-5 mt-10 ">
        <div className="flex flex-col md:flex-row justify-center items-center p-4">
          {churchPoints.map((point, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={point.id}
              className=" hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center mb-8 md:mb-0 md:mx-4 p-4 shadow-lg rounded-lg  w-full md:w-1/3"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={point.image}
                alt={point.title}
                className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-lg mb-4"
              />
              <h3 className=" font-heading font-extrabold text-2xl text-semi_heading_color mt-4 mb-3">
                {point.title}
              </h3>
              <p className=" font-heading_secondary">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChurchActivityComponent;
