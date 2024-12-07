import React, { useRef } from "react";
import background from "../../assets/bg-4.jpg";
import { BiSolidDownArrow } from "react-icons/bi";
import NavBarComponent from "../../components/NavBarComponent";
import "animate.css";
import ScrollReveal from "scrollreveal";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CarouselComponent } from "../../components/CarouselComponent";
import UserCardComponent from "../../components/UserCardComponent";
import CountUp from "react-countup";
import { DatePickerComponent } from "../../components/DatePickerComponent";
import { FiMapPin } from "react-icons/fi";
import EmpoweringComponent from "../../components/landing/EmpoweringComponent";

const LandingPage = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    " text-semi_heading_color font-heading text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold p-3 sm:p-4 md:p-5";
  const secondaryHeadingStyle =
    "font-heading text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl font-bold p-5";

  const landingpageParagraphy =
    " text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-basel font-paragraph";
  const secondarylandingpageParagraphy =
    "text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base font-paragraph";
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

        <div className="w-full pt-8">
          <CarouselComponent />
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

      <div className="px-4 sm:px-6 lg:px-14 max-w-7xl mx-auto flex flex-row justify-center items-center ">
        <div className="hidden md:block w-1/2">
          <motion.div className="relative h-[900px] overflow-hidden mt-4">
            <motion.div
              animate={{
                y: [0, -900],
              }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-col"
            >
              <img
                src="bg-3.jpg"
                alt="Evangelism"
                className="w-full h-full object-cover p-2"
              />
              <img
                src="bg-5.jpg"
                alt="Evangelism"
                className="w-full h-full object-cover p-2"
              />

              <img
                src="evangelism.jpg"
                alt="Evangelism"
                className="w-full h-full object-cover p-2"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2">
          <section className="p-4 text-center">
            <h1 className="font-heading text-semi_heading_color text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold p-5">
              Our Mission & Values
            </h1>
            <p className={landingpageParagraphy}>
              Zomba Baptist Church is dedicated to spreading love, hope, and the
              teachings of Christ. Our mission is to foster a strong community
              of faith, providing support and guidance while encouraging
              spiritual growth among our members.
            </p>
          </section>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="p-4 w-full md:w-1/2 text-center">
              <motion.h5
                ref={ref}
                className={headingStyle}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                <CountUp end={500} duration={2.5} start={isInView ? null : 0} />{" "}
                members
              </motion.h5>
              <p className={landingpageParagraphy}>
                With over 500 members, we are a thriving community committed to
                living out our faith and supporting one another.
              </p>
            </div>
            <div className="p-4 w-full md:w-1/2 text-center">
              <h5 className={headingStyle}>
                <CountUp end={30} duration={2.5} start={isInView ? null : 0} />{" "}
                outreach programs
              </h5>
              <p className={landingpageParagraphy}>
                We engage in numerous outreach programs, impacting the lives of
                100 individuals and families in our community each year.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="p-4 w-full md:w-1/2 text-center">
              <h5 className={headingStyle}>
                <CountUp end={45} duration={2.5} start={isInView ? null : 0} />{" "}
                years
              </h5>
              <p className={landingpageParagraphy}>
                For over 20 years, Zomba Baptist Church has been a beacon of
                hope and faith in our community, guiding individuals on their
                spiritual journeys.
              </p>
            </div>
            <div className="p-4 w-full md:w-1/2 text-center">
              <h5 className={headingStyle}>
                <CountUp end={10} duration={2.5} start={isInView ? null : 0} />{" "}
                ministries
              </h5>
              <p className={landingpageParagraphy}>
                We offer 10 active ministries that cater to various needs,
                ensuring everyone finds a place to grow and serve.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-row justify-center items-center p-5 mt-10 ">
        <div className="flex flex-col md:flex-row justify-center items-center p-4">
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 p-4 shadow-lg rounded-lg bg-white w-full md:w-1/3">
            <img
              src="/christianity.png"
              alt="Church"
              className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-lg mb-4"
            />
            <h3 className={secondaryHeadingStyle}>Weekly Service</h3>
            <p className={secondarylandingpageParagraphy}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4 p-4 shadow-lg rounded-lg bg-white w-full md:w-1/3">
            <img
              src="/community.png"
              alt="Church"
              className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-lg mb-4"
            />
            <h3 className={secondaryHeadingStyle}>Daily Devotion</h3>
            <p className={secondarylandingpageParagraphy}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center md:mx-4 p-4 shadow-lg rounded-lg bg-white w-full md:w-1/3">
            <img
              src="/church_2.png"
              alt="Church"
              className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-lg mb-4"
            />

            <h3 className={secondaryHeadingStyle}>Latest Teaching</h3>
            <p className={secondarylandingpageParagraphy}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center md:mx-4 p-4 shadow-lg rounded-lg bg-white w-full md:w-1/3">
            <img
              src="/growth-plant.png"
              alt="Church"
              className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-lg mb-4"
            />

            <h3 className={secondaryHeadingStyle}>Latest Teaching</h3>
            <p className={secondarylandingpageParagraphy}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col justify-center items-center">
        <h1 className={headingStyle}>Our Community Talk & Testimonies</h1>

        <div className="w-full">
          <UserCardComponent />
        </div>
      </div>
   
      <motion.div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  md:pr-8 font-heading text-semi_heading_color ">
            Empowering Our Community Through Service
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <p className="font-heading_secondary">
            Zomba Baptist Church is committed to making a positive impact
            through our outreach initiatives. We engage in various community
            service programs that aim to spread love, hope, and the teachings of
            Christ. Join us in our mission to foster spiritual growth and
            support those in need.
          </p>
        </div>
      </motion.div>

      <div className="">
        <EmpoweringComponent />
      </div>

      <div className=" container mx-auto mt-16">
        <motion.div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  md:pr-8 font-heading text-semi_heading_color">
              Join Our Community Through Service
            </h1>
          </div>
          <div className="w-full md:w-1/2 ">
            <p className="font-heading_secondary">
              Discover how you can make a difference in our church and
              community. Participate in various activities that strengthen our
              bonds and spread love. Your involvement is crucial in carrying out
              our mission and supporting those in need.
            </p>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-[#0e7490] text-white rounded-md font-semibold hover:bg-[#0e7490]transition-colors"
              >
                Explore More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-gray-500 text-white rounded-md font-semibold hover:bg-gray-700 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto mt-16">
        <motion.div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/2 ">
            <p className="font-paragraph text-base sm:text-lg lg:text-xl text-center md:text-left">
              Discover how you can make a difference in our church and
              community. Participate in various activities that strengthen our
              bonds and spread love. Your involvement is crucial in carrying out
              our mission and supporting those in need.
            </p>
            <div className="text-center">
              <DatePickerComponent />
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:pr-8 font-heading text-center md:text-left">
              Join us and Experience The Power of Faith This (Sun)Sunday!
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 bg-gray-500 text-white rounded-md font-semibold hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center justify-center gap-2 text-center">
                <FiMapPin size={25} /> <span>Ask For Directions</span>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default LandingPage;
