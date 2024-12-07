"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";

export function CarouselComponent() {
  const carouselContent = [
    {
      title: "Welcome to Our Church.",
      description:
        "Zomba Baptist Church is a welcoming community for spiritual growth through engaging sermons Bible studies and fellowship.",
    },
    {
      title: "Grow in Faith Together.",
      description:
        "Join us in our journey of faith as we learn, worship, and support each other through Bible studies, prayer groups, and community activities.",
    },
    {
      title: "Join Our Community.",
      description:
        "Become part of our diverse and loving church family where everyone is welcome to participate, serve, and build meaningful relationships.",
    },
    {
      title: "Experience God's Love.",
      description:
        "Discover the transformative power of God's love through worship, ministry, and outreach programs that touch lives and hearts.",
    },
  ];


  return (
    <div className="h-[40vh] sm:h-[30vh] xl:h-[50vh] 2xl:h-[60vh]">
      <Carousel
        slideInterval={5000}
        indicators={true}
        leftControl=""
        rightControl=""
      >
        {carouselContent.map((item, index) => (
          <div key={index} className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              
              <motion.div
                key={`carousel-item-${index}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 2}}
                className="flex flex-col items-center"
              >
                <h1 className="font-heading text-white text-4xl sm:text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mb-4">
                  {item.title}
                </h1>
                <p className="text-white text-lg sm:text-xl mb-8 max-w-2xl font-heading_secondary text-center mx-auto border-l-8 border-green-700 pl-2 pt-4">
                  {item.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
