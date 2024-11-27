import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const FooterComponent = () => {
  return (
    <footer className=" max-auto  bg-[#989898]">
      <div className="flex flex-row justify-center items-center">
        <div className="">
          <img src="/zbc_logo.png" alt="ZBC Logo" className="h-40 w-40" />
        </div>

        <div className=" mr-10 ml-10 p-5 ">
          <ul className="flex">
            <li className="mr-20">
              <a href="/" className="font-paragraph text-xl">
                Home
              </a>
            </li>
            <li className="mr-20">
              <a href="/services" className="font-paragraph text-xl">
                Services
              </a>
            </li>
            <li className=" mr-20">
              <a href="/ministries" className="font-paragraph text-xl">
                Ministries
              </a>
            </li>
            <li>
              <a href="/contact" className="font-paragraph text-xl">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex  mr-10 ml-10 p-5 gap-4">
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
      <hr className="w-[40%] mx-auto border-black mt-1 mb-5" />
      <p className="w-full text-center flex flex-row justify-center items-center font-bold">
        © 2024 Zomba Baptist Church. All rights reserved. Join us in spreading
        love and hope through our faith and community initiatives.
      </p>
    </footer>
  );
};
export default FooterComponent;
