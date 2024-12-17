import React from "react";
import { Carousel } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCarouselComponent = (...props) => {
  const content = props[0].content;

  console.log(content);
  return (
    <div className=" h-[30rem]">
      <Carousel
        slideInterval={2000}
        indicators={true}
        leftControl=""
        rightControl=""
      >
        {content.map((item, index) => (
          <div key={index} className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`carousel-item-${index}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-center"
              >
                <img src={item.cover} alt={item.description} className="object-cover" />
                <p className="text-white text-lg sm:text-xl mb-8 max-w-2xl font-heading_secondary text-center mx-auto border-l-8  pl-2 pt-4">
                  {item.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarouselComponent;
