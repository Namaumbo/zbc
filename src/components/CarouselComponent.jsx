"use client";

import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";

export function CarouselComponent() {
  return (
    <div className="h-[24rem] sm:h-[24rem] xl:h-[24rem] 2xl:h-[32rem]">
      <Carousel
        slideInterval={5000}
        indicators={false}
        leftControl=" "
        rightControl=" "
      >
        <div className="flex items-center justify-center h-full">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 6 }}
              className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl 4xl:text-10xl font-bold text-white mb-4 font-coiny"
            >
              What did Jesus say?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 6 }}
              className=" text-lg sm:text-xl text-white mb-8 max-w-2xl font-paragraph text-center"
            >
              Zomba Baptist Church is a welcoming community for spiritual growth
              through engaging sermons, Bible studies, and fellowship.
            </motion.p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 6 }}
              className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl 4xl:text-10xl font-bold text-white mb-4 font-coiny"
            >
              What did Jesus say?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 6 }}
              className=" text-lg sm:text-xl text-white mb-8 max-w-2xl font-paragraph text-center"
            >
              Zomba Baptist Church is a welcoming community for spiritual growth
              through engaging sermons, Bible studies, and fellowship.
            </motion.p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 6 }}
              className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl 4xl:text-10xl font-bold text-white mb-4 font-coiny"
            >
              What did Jesus say?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 6 }}
              className=" text-lg sm:text-xl text-white mb-8 max-w-2xl font-paragraph text-center"
            >
              Zomba Baptist Church is a welcoming community for spiritual growth
              through engaging sermons, Bible studies, and fellowship.
            </motion.p>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 6 }}
              className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl 4xl:text-10xl font-bold text-white mb-4 font-coiny"
            >
              What did Jesus say?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 6 }}
              className=" text-lg sm:text-xl text-white mb-8 max-w-2xl font-paragraph text-center"
            >
              Zomba Baptist Church is a welcoming community for spiritual growth
              through engaging sermons, Bible studies, and fellowship.
            </motion.p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
