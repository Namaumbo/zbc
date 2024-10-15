import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NavBarComponent from "../../components/NavBarComponent";

const ParallaxScroll = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);

  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-black">
      <NavBarComponent />

      <motion.div
        className="h-screen sticky top-0 flex items-center justify-center bg-no-repeat"
        style={{
          height: "100vh",
          backgroundImage: "url('/bg-5.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: `center ${scrollPosition * -0.5}px`,
          y: y2,
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
              Children Ministryoo
            </h3>
            <p className="text-gray-600 mt-4 font-paragraph w-[96%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
              className="w-full h-auto shadow-sm rounded-sm"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="h-screen bg-cover bg-center bg-fixed bg-no-repeat sticky top-0 flex items-center justify-center"
        style={{
          height: "100vh",
          backgroundImage: "url('/bg-3.jpg')",
          y: y2,
        }}
      >
        <div className="flex flex-row justify-center">
          <motion.div
            className=" rounded-sm mb-5 shadow-2xl w-[40%] mt-10"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 150 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/kids.jpg"
              alt="Children's Ministry"
              className="w-full h-auto shadow-sm rounded-sm"
            />
          </motion.div>
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cup
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="h-screen bg-cover bg-center bg-fixed bg-no-repeat sticky top-0 flex items-center justify-center"
        style={{
          height: "100vh",
          backgroundImage: "url('/bg-5.jpg')",
          y: y2,
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
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
              className="w-full h-auto shadow-sm rounded-sm"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default ParallaxScroll;
