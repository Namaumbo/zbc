import React, { useRef } from "react";
import background from "../../assets/bg-4.jpg";
import { BiSolidDownArrow } from "react-icons/bi";
import "animate.css";
import ScrollReveal from "scrollreveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { CarouselComponent } from "../../components/CarouselComponent";
import SquareDots from "../../components/SquareDots";
import HeroSection from "../../components/HeroSection";

const LandingPage = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
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

  const headingStyle =
    "text-semi_heading_color font-heading text-4xl font-bold tracking-tight  text-gray-900 sm:text-5xl";
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen relative bg-fixed"
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: "fixed",
          backgroundPosition: `center ${scrollPosition * -0.7}px`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          "@media (max-width: 768px)": {
            backgroundAttachment: "scroll",
            backgroundPosition: "center",
          },
        }}
      >
        <div className="absolute inset-0  bg-purple-900/60"></div>
        <div className="container mx-auto flex flex-col justify-center items-center h-screen">
          <HeroSection />
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-14 container mx-auto flex flex-row justify-center items-center mt-10 p-4 ">
        <div className="hidden md:block w-1/2">
          <motion.div className="relative h-[60%] overflow-hidden mt-4 ">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="flex flex-col"
            >
              <img
                src="/pastorPicture.jpg"
                alt="pastor&wife"
                className="w-full h-[35rem] object-cover object-top rounded-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl filter hover:brightness-110 hover:contrast-110"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transform: "perspective(1000px) rotateY(0deg)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform =
                    "perspective(1000px) rotateY(5deg)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform =
                    "perspective(1000px) rotateY(0deg)";
                }}
              />{" "}
            </motion.div>
            <p className="block text-right italic font-semibold text-brand_color mt-2">
              - Pastor R Makhenjera and Wife
            </p>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 md:ml-[-4rem] z-10 mt-[15rem]">
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-heading text-semi_heading_color font-bold mb-3">
              Hello in Jesus Name!
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 font-heading_secondary p-2 sm:p-4">
              I am so excited to welcome you to our ZBC website. We are looking
              forward to keep interacting with you. Our goal is to keep you
              informed of what the Lord is doing through His Church. Keep
              following us for what the Lord Almighty wants to share with you
              through this website.
            </p>
            <span className="block text-right italic font-semibold text-brand_color text-sm sm:text-base">
              - Pastor Richard Makhenjera
            </span>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto mt-7">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="p-4 text-center"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-semi_heading_color text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold p-5"
          >
            <div className="w-full mb-6 md:mb-0 p-8">
              <h1 className=" mt-1 text-4xl font-bold tracking-tight  text-gray-900 sm:text-5xl">
                Our Identity &
                <span className="relative z-[1] inline-block ml-1 text-white px-4 py-2">
                  Mission
                  <span
                    className="absolute bg-brand_color inset-0 ml-2 skew-x-[-15deg]"
                    aria-hidden="true"
                    style={{
                      zIndex: -1,
                      transformOrigin: "right",
                    }}
                  ></span>
                </span>
              </h1>
            </div>
          </motion.h1>
        </motion.section>

        <motion.div
          className="w-full px-4 py-16 bg-cover bg-center bg-opacity-10 rounded-lg"
          style={{ backgroundImage: `url(${background})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto space-y-16 bg-white/80 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="text-center">
              <motion.h2
                className={`${headingStyle}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Who are We?
              </motion.h2>
              <motion.p
                className="font-heading_secondary mt-4 text-lg leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                We are a Christ-centred church growing in the Word of God.
              </motion.p>
            </div>

            <div className="text-center">
              <motion.h2
                className={`${headingStyle}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                What is Our Mission?
              </motion.h2>
              <motion.p
                className="font-heading_secondary mt-4 text-lg leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                As a body of Christ, we let the Holy Spirit guide us to serve
                God and others throughout the City of Zomba, the District of
                Zomba, and beyond, fulfilling our calling as described in
                Matthew 20:28, Matthew 28:18-20, and Acts 1:8.
              </motion.p>
            </div>

            <div className="text-center ">
              <motion.h2
                className={`${headingStyle} w-[80%] mx-auto`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                How do we carry out our mission?
              </motion.h2>
              <motion.p
                className="font-heading_secondary mt-4 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                We are guided by the fruits of the Spirit:
              </motion.p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <motion.div
                  className="p-8 bg-white/95 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-heading_secondary text-lg">
                    Love • Joy • Peace
                  </p>
                </motion.div>
                <motion.div
                  className="p-8 bg-white/95 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-heading_secondary text-lg">
                    Patience • Kindness • Goodness
                  </p>
                </motion.div>
                <motion.div
                  className="p-8 bg-white/95 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-heading_secondary text-lg">
                    Faithfulness • Gentleness • Self-control
                  </p>
                </motion.div>
              </motion.div>
              <motion.p
                className="font-heading_secondary mt-8 text-base italic text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                — Galatians 5:22-23
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto mt-[5rem]    text-center">
        <h2 className="mt-4 text-4xl font-bold tracking-tight  text-gray-900 sm:text-5xl">
          Church Activities Overview
        </h2>
        <div class="mt-2">
          <span class="relative mt-4 whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              class="absolute top-[-1rem] left-[-3rem] right-0 m-auto h-[2.5em] w-fit fill-brand_color"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
          </span>
        </div>
        <motion.div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-[5rem]">
          <motion.div className="w-full md:flex-1 p-4">
            <h1 className={headingStyle}>
              Sunday Worship
              <span className="relative z-[1] inline-block ml-1 text-white px-4 py-2">
                Services
                <span
                  className="absolute bg-brand_color inset-0 ml-2 skew-x-[-15deg]"
                  aria-hidden="true"
                  style={{
                    zIndex: -1,
                    transformOrigin: "right",
                  }}
                ></span>
              </span>
            </h1>

            <p className="font-heading_secondary text-justify text-lg md:text-xl mt-6 mb-8 text-gray-700 leading-relaxed">
              We invite you to join us in worship and fellowship. Experience the
              warmth of our community as we gather together to praise God and
              grow in faith. "For where two or three gather in my name, there am
              I with them." -
              <span className="font-semibold">Matthew 18:20</span>
            </p>

            <p className="font-heading_secondary text-lg md:text-xl mt-6 mb-4 text-gray-800 flex items-center space-x-3">
              <span className="w-2 h-2 bg-brand_color rounded-full"></span>
              <span className="font-semibold">International Service:</span>
              <span>8:30 AM - 10:45 AM</span>
            </p>
            <p className="font-heading_secondary text-lg md:text-xl mt-4 text-gray-800 flex items-center space-x-3">
              <span className="w-2 h-2 bg-brand_color rounded-full"></span>
              <span className="font-semibold">Chichewa Service:</span>
              <span>10:00 AM - 12:00 PM</span>
            </p>
          </motion.div>
          <motion.div className="w-full md:flex-1 px-4 md:px-0">
            <div className="relative">
              <img
                src="/inchurch.jpg"
                alt="worship"
                className="z-50 rounded-lg w-full"
              />
            </div>
            <SquareDots />
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col md:flex-row justify-center items-center mt-[10rem]">
          <motion.div className="w-full md:flex-1 px-4 md:px-0">
            <div className="relative">
              <img
                src="/bg-3.jpg"
                alt="worship"
                className="z-50 rounded-lg w-full"
              />
            </div>
            <SquareDots />
          </motion.div>
          <motion.div className="w-full md:flex-1 p-4 md:mt-[-4rem]">
            <h1 className={headingStyle}>
              Corporate Prayer
              <span className="relative z-[1] inline-block ml-1 text-white px-4 py-2">
                Sessions
                <span
                  className="absolute bg-brand_color inset-0 ml-2 skew-x-[-15deg]"
                  aria-hidden="true"
                  style={{
                    zIndex: -1,
                    transformOrigin: "right",
                  }}
                ></span>
              </span>
            </h1>

            <p className="font-heading_secondary text-lg md:text-xl mt-6 mb-8 text-gray-700 leading-relaxed text-justify">
              Join us in our dedicated corporate prayer sessions where we come
              together as a community to seek God's presence, intercede for one
              another, and experience the power of unified prayer.
            </p>

            <p className="font-heading_secondary text-lg md:text-xl mt-6 mb-4 text-gray-800 flex items-center space-x-3">
              <span className="w-2 h-2 bg-brand_color rounded-full"></span>
              <span className="font-semibold">Wednesday, 16:00 to 17:00</span>
            </p>
            <p className="font-heading_secondary text-lg md:text-xl mt-4 text-gray-800 flex items-center space-x-3">
              <span className="w-2 h-2 bg-brand_color rounded-full"></span>
              <span className="font-semibold">
                Last Friday of the month: Overnight from 20:00
              </span>
            </p>
            <p className="font-heading_secondary text-lg md:text-xl mt-4 text-gray-800 flex items-center space-x-3">
              <span className="w-2 h-2 bg-brand_color rounded-full"></span>
              <span className="font-semibold">
                First Wednesday of the month: Prayer and fasting up to 17:00
              </span>
            </p>
            <p className="font-heading_secondary text-lg md:text-xl mt-4 text-gray-800 flex items-center space-x-3">
              <span className="w-2 h-2 bg-brand_color rounded-full"></span>
              <span className="font-semibold">
                First Monday to Friday of every quarter: 5 days of prayer and
                fasting
              </span>
            </p>
          </motion.div>
        </motion.div>{" "}
      </div>
    </>
  );
};
export default LandingPage;
