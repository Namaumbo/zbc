import React from "react";
import { motion } from "framer-motion";
import NavBarComponent from "../../components/NavBarComponent";
import { Button } from 'flowbite-react';


const ContactPage = () => {
  return (
    <div className="contact-page">
      <NavBarComponent />

      <div className="bg-gradient-to-r from-[#160b14] to-black flex flex-col items-center justify-center pb-32 ">
        <motion.h3
          className="text-6xl text-center font-bold font-coiny text-orange-700 pb-5 pt-24"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
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

      <motion.div
        className="bg-gray-100 rounded-lg p-8 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.25 }}
      >
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="message"
              placeholder="Your message here..."
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-all duration-300 hover:scale-105"
              type="submit"
            >
              Send Message
            </button>
            <Button default>
        Click me
      </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
