import React from "react";
import background from "../../assets/bg-4.jpg";
import cross from "../../assets/cross.jpg";

const LandingPage = () => {
  const linkStyle =
    "text-white hover:text-gray-300 px-2 sm:px-4 py-2 text-base sm:text-lg font-semibold transition duration-300";
  const buttonStyle =
    "bg-orange-500 text-white py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full font-bold cursor-pointer hover:bg-orange-600 text-sm sm:text-base md:text-lg mt-4";
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
        <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 p-4">
          <div className="logo mb-4 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2 font-coiny">
              ZBC
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Zomba Baptist Church
            </p>
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
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl 4xl:text-10xl font-bold text-white mb-4 font-coiny">
            What did Jesus say?
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl font-paragraph">
            Zomba Baptist Church is a welcoming community for spiritual growth
            through engaging sermons, Bible studies, and fellowship.
          </p>

          <button className={buttonStyle}>Discover Now</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-gray-50">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row p-4">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h3 className="font-welcome text-orange-500 text-3xl sm:text-4xl mb-2">
              Welcome
            </h3>
            <p className="font-paragraph text-gray-700 text-base sm:text-lg">
              We believe that the greatest event on anyone's life is the day
              that they discover who Jesus is and what He has done for them.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className={buttonStyle}>Learn More</button>
          </div>

          <div className="flex justify-center md:justify-start ">
            <img
              src={cross}
              alt="Cross"
              className="w-48 h-48 sm:w-64 sm:h-64"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <img src={cross} alt="Cross" className="w-48 h-48 sm:w-64 sm:h-64" />
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="flex flex-col md:flex-row justify-center items-center p-4 max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 p-4 shadow-lg rounded-lg bg-white w-full md:w-1/3">
            <img
              src="/church.png"
              alt="Church"
              className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-lg mb-4"
            />
            <h3 className="text-center text-xl font-bold mb-2">Next sermon</h3>
            <p className="text-center text-gray-600 font-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 p-4 shadow-lg rounded-lg bg-white w-full md:w-1/3">
            <img
              src="/day.png"
              alt="Church"
              className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-lg mb-4"
            />
            <h3 className="text-center text-xl font-bold mb-2">
              Daily Devotion
            </h3>
            <p className="text-center text-gray-600 font-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center md:mx-4 p-4 shadow-lg rounded-lg bg-white w-full md:w-1/3">
            <img
              src="/bible.png"
              alt="Church"
              className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-lg mb-4"
            />
            <h3 className="text-center text-xl font-bold mb-2">
              Latest Teaching
            </h3>
            <p className="text-center text-gray-600 font-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="relative h-64 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/evangelism.jpg")',
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black flex flex-col items-end justify-center">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold px-4 max-w-4xl text-orange-500 font-coiny mb-4">
              Evangelism
            </h2>
            <p className="text-white text-base pr-2 sm:pr-4 md:pr-6 w-full sm:w-2/3 md:w-1/2 text-justify font-paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              voluptatem odit? Rerum esse odio dignissimos laboriosam facilis
              praesentium molestias sed voluptatibus iusto eaque aliquam
              accusamus facere iste, perspiciatis magni. Molestias. Spread the
              Word of God. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Fugiat, voluptatem odit? Rerum esse odio dignissimos
              laboriosam facilis praesentium molestias.
              <ul>
                <li>God is good</li>
                <li>God is Love</li>
                <li>God is Peace indeed</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 flex justify-center items-center py-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold px-4 max-w-4xl from-stone-300 font-coiny">
          Loving God, helping others and serving the World together
        </h2>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/community.png"
                alt="Community"
                className="w-16 h-16 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/growth-plant.png"
                alt="Growth"
                className="w-16 h-16 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Spiritual Growth</h3>
              <p className="text-center text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/church_2.png"
                alt="Church"
                className="w-16 h-16 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Worship</h3>
              <p className="text-center text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/christianity.png"
                alt="Christianity"
                className="w-16 h-16 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Faith</h3>
              <p className="text-center text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className={buttonStyle}>All Services</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
