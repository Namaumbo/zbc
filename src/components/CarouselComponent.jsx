"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";

export function CarouselComponent() {
  const content = [
    {
      title: "Welcome to ZBC",
      description: "To Serve and To Give  ",
      verse: "Mathew 20 v 20 & Mark 10 v 45",
    },
    {
      title: "Grow in Faith Together",
      description:
        "Join us in our journey of faith as we learn, worship, and fellowship with God Almighty and each other.",
      verse: "",
    },
    {
      title: "God Loves You",
      description:
        "At ZBC we know that God loves you that He gave His Son so that you should have eternal life",
      verse: "John 3 v 16",
    },
  ];

  return (
    <div className="h-[50vh] sm:h-[30vh] xl:h-[50vh] 2xl:h-[60vh]">
      <Carousel
        slideInterval={10000}
        indicators={true}
        leftControl=" "
        rightControl=" "
      >
        {content.map((item, index) => (
          <div
            key={index}
            className="h-full flex items-center justify-center px-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`carousel-item-${index}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-center"
              >
                <h1 className="font-heading text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mb-2 sm:mb-4 text-center">
                  {item.title}
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-8 max-w-2xl font-heading_secondary text-center mx-auto sm:border-l-8 sm:border-green-700 pl-2 pt-2 sm:pt-4">
                  {item.description}
                  <p className="text-base">{item.verse}</p>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
