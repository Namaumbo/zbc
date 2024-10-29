import React from "react";
import background from "../../assets/bg-4.jpg";
import cross from "../../assets/cross.jpg";
import { BiSolidDownArrow } from "react-icons/bi";
import ButtonComponent from "../../components/ButtonComponent";
import NavBarComponent from "../../components/NavBarComponent";
import "animate.css";
import ScrollReveal from "scrollreveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { CarouselComponent } from "../../components/CarouselComponent";
const LandingPage = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    ScrollReveal().reveal(".reveal", {
      duration: 600,
      distance: "100px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen relative bg-fixed"
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: "fixed",
          backgroundPosition: `center ${scrollPosition * -0.5}px`,
        }}
      >
        <NavBarComponent />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        ></div>

        <div className="w-full">         
          <CarouselComponent/>
          </div>
          <motion.div
            className=" absolute bottom-[2rem] left-1/2 transform -translate-x-1/2"
            style={{ opacity }}
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <BiSolidDownArrow size={52} color="white" />
          </motion.div>

      </div>

      <div className="flex flex-col md:flex-row bg-gray-50">
        <div className="w-full p-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 font-coiny">
            Join us for church this Sunday!
          </h2>
          <p className="text-xl sm:text-2xl mb-6 font-paragraph">
            Our weekend services last one hour. We can't wait to meet you!
          </p>
          <div className="flex flex-wrap justify-center items-center">
            <div className="mx-4 my-2">
              <span className="text-2xl sm:text-3xl font-bold">8:00 am -</span>
            </div>
            <div className="mx-4 my-2">
              <span className="text-2xl sm:text-3xl font-bold">9:30 am</span>
            </div>
            <div className="mx-4 my-2">
              <span className="text-2xl sm:text-3xl font-bold">11:00 am -</span>
            </div>
            <div className="mx-4 my-2">
              <span className="text-2xl sm:text-3xl font-bold">12:30 pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" reveal flex flex-col md:flex-row bg-gray-50">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row p-4">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h3 className="font-welcome text-orange-500 text-3xl sm:text-4xl mb-2">
              Welcome
            </h3>
            <p className=" font-paragraph text-gray-700 text-base sm:text-lg">
              We believe that the greatest event on anyone's life is the day
              that they discover who Jesus is and what He has done for them.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <ButtonComponent label="Learn More" />
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
        <div className="relative h-80 overflow-hidden">
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
              <h3 className="text-lg font-semibold mb-2">Church</h3>
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
            <ButtonComponent label="All Services" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 px-5">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">
              How to find Jesus
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Finding Jesus is a personal journey that begins with an open heart
              and mind. It involves reading the Bible, praying, and seeking
              guidance from fellow believers. Attending church services and
              participating in community activities can also help. Remember,
              Jesus said, "Seek and you will find" (Matthew 7:7).
            </p>
            <ButtonComponent label="Learn More" />
          </div>

          <div className="w-full md:w-1/3 px-4">
            <img
              src="/cross_2.jpg"
              alt="Jesus"
              className="w-full h-auto rounded-sm shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
