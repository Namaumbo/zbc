"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
const UserCardComponent = () => {
  const carouselContent = [
    {
      name: "John Smith",
      position: "Church Member",
      comments:
        "I found a true spiritual home at Zomba Baptist Church. The sermons are inspiring and the community is so welcoming.",
    },
    {
      name: "Mary Johnson",
      position: "Youth Group Leader",
      comments:
        "Being part of this church has transformed my life. The Bible studies and prayer groups have deepened my faith immensely.",
    },
    {
      name: "David Williams",
      position: "Church Volunteer",
      comments:
        "What I love most about our church is how inclusive it is. Everyone is treated like family, regardless of their background.",
    },
    {
      name: "Sarah Anderson",
      position: "Worship Team Member",
      comments:
        "The worship experience here is incredible. I've seen so many lives changed through our ministry programs.",
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
                transition={{ duration: 2 }}
                className="flex flex-col items-center"
              >
                <h1 className="font-heading text-black font-bold mb-4 text-2xl">
                  {item.name}
                </h1>
                <p className="text-gray-500 mb-[-5px]">{item.position}</p>
                <p className=" text-lg sm:text-xl mb-8 max-w-2xl font-heading_secondary text-center mx-auto pl-2 pt-4">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="inline-block w-10 h-10 mr-1 mb-4 text-brand_color"
                  >
                    <path
                      fill="currentColor"
                      d="M4.583 6.679C3.553 7.773 3 9 3 10.989c0 3.5 2.457 6.637 6.03 8.188l.893-1.378c-3.335-1.804-3.987-4.145-4.247-5.621.537.278 1.24.375 1.929.311 1.804-.167 3.226-1.648 3.226-3.489a3.5 3.5 0 00-3.5-3.5c-1.073 0-2.099.49-2.748 1.179zm10 0C13.553 7.773 13 9 13 10.989c0 3.5 2.457 6.637 6.03 8.188l.893-1.378c-3.335-1.804-3.987-4.145-4.247-5.621.537.278 1.24.375 1.929.311 1.804-.167 3.226-1.648 3.226-3.489a3.5 3.5 0 00-3.5-3.5c-1.073 0-2.099.49-2.748 1.179z"
                    ></path>
                  </svg>
                  <span className="text-xl text-black">{item.comments}</span>

                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="inline-block w-10 h-10  mr-1 mb-4 text-brand_color"
                  >
                    <path
                      fill="currentColor"
                      d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                    ></path>
                  </svg>
                </p>{" "}
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UserCardComponent;
