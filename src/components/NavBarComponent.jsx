import React from "react";

const NavBarComponent = () => {
  const linkStyle =
    "text-white hover:text-gray-300 px-2 sm:px-4 py-2 text-base sm:text-lg font-semibold font-paragraph transition duration-300";
  return (
    <nav>
      <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 p-4">
        <div className="logo mb-4 sm:mb-0 cursor-pointer" onClick={() => window.location.href = '/'}>
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2 font-coiny">
            <img
              src="/image.png"
              alt="ZBC Logo"
              className="w-28 h-28 inline-block ml-2"
            />
          </h1>
    
        </div>
        <div className="links flex flex-wrap justify-center">
          <a href="/about" className={linkStyle}>
            About
          </a>
          <a href="/services" className={linkStyle}>
            Services
          </a>
          <a href="/contact" className={linkStyle}>
            Contact
          </a>
          <a href="/ministries" className={linkStyle}>
            Ministries
          </a>
          <a href="/giving" className={linkStyle}>
            Giving
          </a>
        </div>
      </div>{" "}
    </nav>
  );
};

export default NavBarComponent;
