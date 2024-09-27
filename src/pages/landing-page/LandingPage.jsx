import React from "react";
import background from "../../assets/bg-4.jpg";
import cross from "../../assets/cross.jpg";

const LandingPage = () => {
  const linkStyle =
    "text-white hover:text-gray-300 px-4 py-2 text-lg font-semibold transition duration-300";
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen relative"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        ></div>
        <div className="flex justify-between items-center relative z-10">
          <div className="logo">
            <h1 className="text-4xl font-bold text-orange-500 mb-2 font-coiny">
              ZBC
            </h1>
            <p className="text-xl text-gray-300">Zomba Baptist Church</p>
          </div>
          <div className="links">
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
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-6xl font-bold text-white mb-4 font-coiny">
            What did Jesus say?
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl font-paragraph">
            Zomba Baptist Church is a welcoming community for spiritual growth
            through engaging sermons, Bible studies, and fellowship.
          </p>

          <button className="bg-orange-500 text-white py-2 px-4 rounded-full font-bold cursor-pointer hover:bg-orange-600">
            Discover Now
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 flex">
          <div>
            <h3 className="font-welcome text-orange-500 text-4xl">Welcome</h3>
            <p className="font-paragraph text-gray-700 text-lg">
              We believe that the greatest event on anyone's life is the day
              that they discover who Jesus is and what He has done for them.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <div>
            <img src={cross} alt="Cross" className="w-64 h-64" />
          </div>
        </div>
        <div className="w-1/2">
          <img src={cross} alt="Cross" className="w-64 h-64" />
        </div>
      </div>
    </>
  );
};
export default LandingPage;
