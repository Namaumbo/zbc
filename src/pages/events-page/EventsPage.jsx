import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import { motion } from "framer-motion";
import EventCardComponent from "../../components/EventCardComponent";
import { Button } from "flowbite-react";
const EventsPage = () => {
  return (
    // <div>
    //   <NavBarComponent />
    //   <div className="bg-gradient-to-r from-[#160b14] to-black flex flex-col items-center justify-center pb-32 ">
    //     <motion.h3
    //       className="text-6xl text-center font-bold font-coiny text-white pb-5 pt-24"
    //       initial={{ opacity: 0, y: -50 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1 }}
    //     >
    //       ZBC Events
    //     </motion.h3>

    //     <motion.p
    //       className="w-[50%] text-white font-paragraph text-center"
    //       initial={{ opacity: 0, y: 50 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1.5 }}
    //     >
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris.
    //     </motion.p>
    //   </div>
    //   <div>
    //     <motion.div
    //       className="h-screen sticky top-0 items-center justify-center bg-no-repeat  scroll-m-1 overflow-scroll"
    //       style={{
    //         height: "100vh",
    //         backgroundImage: "url('/events.jpg')",
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //       }}
    //     >
    //       <div className="flex flex-row justify-center mt-8">
    //         <motion.div
    //           className="bg-white rounded-sm p-6 shadow-2xl w-[40%] ml-28"
    //           initial={{ opacity: 1, y: 50 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 2 }}
    //         >
    //           <h3 className="font-bold text-5xl font-coiny w-96">
    //             Children Ministry
    //           </h3>
    //           <p className="text-gray-600 mt-4 font-paragraph w-[96%] ">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    //             in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    //             nulla pariatur. Excepteur sint occaecat cup
    //           </p>
    //         </motion.div>

    //         <motion.div
    //           className=" rounded-sm mb-5 shadow-2xl w-[40%] ml-[-2%]"
    //           initial={{ opacity: 1, y: 0 }}
    //           whileInView={{ opacity: 1, y: 5 }}
    //           transition={{ duration: 1, delay: 1 }}
    //         >
    //           <img
    //             src="/kids.jpg"
    //             alt="Children's Ministry"
    //             className="w-full h-full shadow-sm rounded-sm"
    //           />
    //         </motion.div>
    //       </div>

    //       <div className="flex flex-row justify-center mt-8">
    //         <motion.div
    //           className="bg-white rounded-sm p-6 shadow-2xl w-[40%] ml-28"
    //           initial={{ opacity: 0, y: 50 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 1 }}
    //         >
    //           <h3 className="font-bold text-5xl font-coiny w-96">
    //             Children Ministry
    //           </h3>
    //           <p className="text-gray-600 mt-4 font-paragraph w-[96%] ">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    //             in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    //             nulla pariatur. Excepteur sint occaecat cup
    //           </p>
    //         </motion.div>

    //         <motion.div
    //           className=" rounded-sm mb-5 shadow-2xl w-[40%] ml-[-2%]"
    //           initial={{ opacity: 1, y: 0 }}
    //           whileInView={{ opacity: 1, y: 20 }}
    //           transition={{ duration: 3, delay: 1 }}
    //         >
    //           <img
    //             src="/kids.jpg"
    //             alt="Children's Ministry"
    //             className="w-full h-full shadow-sm rounded-sm"
    //           />
    //         </motion.div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>

    <>
      <NavBarComponent />
      <div
        className="relative h-[30rem] mb-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/events.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/30">
          <div className="flex flex-col items-start justify-center h-full text-left px-4">
            <h2 className="text-5xl md:text-7xl sm:text-3xl xs:text-3xl font-bold mb-4">Church Events</h2>
            <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl">
              Join us for these exciting upcoming events at our church. We'd
              love to have you participate and be part of our community.
            </p>
            <Button className="mt-4">Learn More</Button>
          </div>
        </div>
      </div>
      {/*--------------- HERO SECTION -------------------- */}

      {/* EVENTS SECTION  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-10">
          {[1, 2, 3].map((index, key) => {
            return (
              <div key={key}>
                <EventCardComponent />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
