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
// import ChurchActivityComponent from "../../components/landing/ChurchActivityComponent";

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
    " text-semi_heading_color font-heading text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold mb-2";
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
          }
        }}
      >
        <NavBarComponent />
        <div
          className="absolute inset-0  bg-blue-900/60"
          // style={{
          //   background:
          //    "absolute inset-0 bg-blue-900/60",
          // }}
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

      <div className="px-4 sm:px-6 lg:px-14 container mx-auto flex flex-row justify-center items-center ">
        <div className="hidden md:block w-1/2">
          <motion.div className="relative h-[60%] overflow-hidden mt-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="flex flex-col"
            >
              <img
                src="/pastorPicture.jpg"
                alt="Evangelism"
                className="w-full h-full object-cover p-2 rounded-lg shadow-lg border"
              />
            </motion.div>
            <p className=" font-heading font-semibold text-center mt-4">
              Pastor R Makhenjera and Wife
            </p>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2  mt-[-10%]">
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
              Our Mission & Values
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="font-heading_secondary"
            >
              Zomba Baptist Church is dedicated to spreading love, hope, and the
              teachings of Christ. Our mission is to foster a strong community
              of faith, providing support and guidance while encouraging
              spiritual growth among our members.
            </motion.p>
          </motion.section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 w-full md:w-1/2 text-center"
            >
              <motion.h5
                ref={ref}
                className={headingStyle}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                <CountUp end={500} duration={2.5} start={isInView ? null : 0} />{" "}
                members
              </motion.h5>
              <p className="font-heading_secondary">
                With over 500 members, we are a thriving community committed to
                living out our faith and supporting one another.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 w-full md:w-1/2 text-center"
            >
              <motion.h5
                ref={ref}
                className={headingStyle}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                <CountUp end={30} duration={2.5} start={isInView ? null : 0} />{" "}
                outreach programs
              </motion.h5>
              <p className="font-heading_secondary">
                We engage in numerous outreach programs, impacting the lives of
                100 individuals and families in our community each year.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 w-full md:w-1/2 text-center"
            >
              <motion.h5
                ref={ref}
                className={headingStyle}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                <CountUp end={45} duration={2.5} start={isInView ? null : 0} />{" "}
                years
              </motion.h5>
              <p className="font-heading_secondary">
                For over 20 years, Zomba Baptist Church has been a beacon of
                hope and faith in our community, guiding individuals on their
                spiritual journeys.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 w-full md:w-1/2 text-center"
            >
              <motion.h5
                ref={ref}
                className={headingStyle}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
              >
                <CountUp end={10} duration={2.5} start={isInView ? null : 0} />{" "}
                ministries
              </motion.h5>
              <p className="font-heading_secondary">
                We offer 10 active ministries that cater to various needs,
                ensuring everyone finds a place to grow and serve.
              </p>
            </motion.div>
          </motion.div>
        </div>{" "}
      </div>

      <div className="container mx-auto mt-[5rem]  flex flex-col justify-center items-center">
        <h1 className={headingStyle}>Church Activities Overview</h1>

        <ul className="flex flex-row flex-wrap gap-4 justify-center mt-12 mb-12 px-4 md:px-6">
          <li className="w-full sm:w-[calc(25%-1rem)]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 * 0.2 }}
              className="hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center p-6 shadow-lg rounded-lg h-full"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/church_2.png"
                alt="meetinn & praying"
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-4"
              />
              <h3 className="font-heading font-extrabold text-2xl text-semi_heading_color mt-4 mb-3 text-center">
                Weekly Service
              </h3>
              <p className="font-heading_secondary text-center">
                Join us every Sunday for an uplifting worship service where we
                come together as a community to praise God, hear His word, and
                grow in our faith and love. "Let us not give up meeting
                together, as some are in the habit of doing, but let us
                encourage one another." - <strong>Hebrews 10:25</strong>
              </p>
            </motion.div>
          </li>
          <li className="w-full sm:w-[calc(25%-1rem)]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2 * 0.2 }}
              className="hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center p-6 shadow-lg rounded-lg h-full"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/community.png"
                alt="/foldedHands.png"
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-4"
              />
              <h3 className="font-heading font-extrabold text-2xl text-semi_heading_color mt-4 mb-3 text-center">
                Community Outreach
              </h3>
              <p className="font-heading_secondary text-center">
                Serve and connect with our local community through various
                outreach programs, showing God's love in practical ways and
                making a positive impact in people's lives. "For even the Son of
                Man did not come to be served, but to serve, and to give his
                life as a ransom for many." - <strong>Mark 10:45</strong>
              </p>
            </motion.div>
          </li>

          <li className="w-full sm:w-[calc(25%-1rem)]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 3 * 0.2 }}
              className="hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center p-6 shadow-lg rounded-lg h-full"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/foldedHands.png"
                alt="/foldedHands.png"
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-4"
              />
              <h3 className="font-heading font-extrabold text-2xl text-semi_heading_color mt-4 mb-3 text-center">
                Prayer Meeting
              </h3>
              <p className="font-heading_secondary text-center">
                Gather with fellow believers for powerful prayer sessions where
                we lift up our needs, intercede for others, and experience the
                transformative power of corporate prayer. "Again, truly I tell
                you that if two of you on earth agree about anything they ask
                for, it will be done for them by my Father in heaven." -
                <strong>Matthew 18:19</strong>
              </p>
            </motion.div>
          </li>
          <li className="w-full sm:w-[calc(25%-1rem)]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 4 * 0.2 }}
              className="hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center p-6 shadow-lg rounded-lg h-full"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/bible_icon.png"
                alt="holy-bible"
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mb-4"
              />
              <h3 className="font-heading font-extrabold text-2xl text-semi_heading_color mt-4 mb-3 text-center">
                Bible Study
              </h3>
              <p className="font-heading_secondary text-center">
                Deepen your understanding of Scripture through our engaging
                Bible study sessions where we explore God's word, share
                insights, and apply biblical teachings to daily life. "All
                Scripture is God-breathed and is useful for teaching, rebuking,
                correcting and training in righteousness." -{" "}
                <strong>2 Timothy 3:16</strong>
              </p>
            </motion.div>
          </li>
        </ul>
      </div>
      <div className="container mx-auto  flex flex-col justify-center items-center ">
        <h1 className={headingStyle}>Our Community Talk & Testimonies</h1>

        <div className="w-full">
          <UserCardComponent />
        </div>
      </div>

      <motion.div className="container mx-auto p-6 md:p-10 flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  md:pr-8 font-heading text-semi_heading_color ">
            Empowering Our Community Through Service & Hope
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
        <motion.div className="container  mx-auto p-6 md:p-10 flex flex-col md:flex-row justify-center">
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
                className="px-6 py-4 bg-second_brand_color text-white rounded-md font-semibold hover:bg-[#0e7490]transition-colors"
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
        <motion.div className="container  mx-auto p-6 md:p-10 flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  md:pr-8 font-heading text-semi_heading_color">
              Join us and Experience The Power of Faith This (Sun)Sunday!
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 bg-second_brand_color text-white rounded-md font-semibold hover:bg-gray-700 transition-colors mt-4"
            >
              <div className="flex items-center justify-center gap-2 text-center                                                                                                                                                                                                                                                                                                                                      ">
                <FiMapPin size={25} /> <span>Ask For Directions</span>
              </div>
            </motion.button>
          </div>

          <div className="w-full md:w-1/2 ">
            <p className=" font-heading_secondary">
              Come and experience the warmth of our welcoming church family.
              Join us for uplifting worship services, meaningful connections,
              and spiritual growth. Whether you're seeking peace, purpose, or
              community, our doors are always open to welcome you home.
            </p>
            <div className="text-center">
              <DatePickerComponent />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default LandingPage;
