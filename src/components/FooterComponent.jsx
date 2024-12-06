import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const FooterComponent = () => {
  return (
    <footer className="max-auto bg-[#989898]">
      <div className="flex flex-col md:flex-row justify-center items-center p-4">
        <div className="mb-4 md:mb-0">
          <img src="/zbc_logo.png" alt="ZBC Logo" className="h-32 w-32 md:h-40 md:w-40" />
        </div>

        <div className="mb-4 md:mb-0 md:mr-10 md:ml-10 p-5">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0">
            <li className="md:mr-20 text-center">
              <a href="/" className="font-paragraph text-lg md:text-xl">
                Home
              </a>
            </li>
            <li className="md:mr-20 text-center">
              <a href="/services" className="font-paragraph text-lg md:text-xl">
                Services
              </a>
            </li>
            <li className="md:mr-20 text-center">
              <a href="/ministries" className="font-paragraph text-lg md:text-xl">
                Ministries
              </a>
            </li>
            <li className="text-center">
              <a href="/contact" className="font-paragraph text-lg md:text-xl">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center md:mr-10 md:ml-10 p-5 gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-2 border-gray-400 bg-gray-200 hover:bg-gray-300"
          >
            <FiFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-2 border-gray-400 bg-gray-200 hover:bg-gray-300"
          >
            <FiTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-2 border-gray-400 bg-gray-200 hover:bg-gray-300"
          >
            <FiInstagram size={20} />
          </a>
        </div>
      </div>
      <hr className="w-[80%] md:w-[40%] mx-auto border-black mt-1 mb-5" />
      <p className="w-full text-center px-4 pb-4 font-bold text-sm md:text-base">
        © 2024 Zomba Baptist Church. All rights reserved. Join us in spreading
        love and hope through our faith and community initiatives.
      </p>
    </footer>
  );
};
export default FooterComponent;