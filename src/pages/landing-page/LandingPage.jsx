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
          },
        }}
      >
        <NavBarComponent />
        <div className="absolute inset-0  bg-purple-900/60"></div>

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

      <div className="px-4 sm:px-6 lg:px-14 container mx-auto flex flex-row justify-center items-center mt-3 ">
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
      <div className="w-[70%] m-auto">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-semi_heading_color mb-4 md:pr-8 font-heading text-center">
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
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="font-heading_secondary text-base"
          >
            Zomba Baptist Church is dedicated to give and serve God and other
            people in the City of Zomba, Zomba District, Malawi, and other parts
            of the world,with the the help of the Holy Spirit. <br />
            <strong>
              Mathew 20 vs 28 , Mathew 28 vs 18-20 and Acts 1 vs 8
            </strong>
          </motion.p> */}
        </motion.section>

        <motion.div
          className="w-full px-4 py-16 bg-cover bg-center bg-opacity-10"
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
                className={`${headingStyle} text-4xl mb-6`}
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
                className={`${headingStyle} text-4xl mb-6`}
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

            <div className="text-center">
              <motion.h2
                className={`${headingStyle} text-4xl mb-6 w-[80%] text-center mx-auto`}
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
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
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
                Weekly Activities
              </h3>
              <p className="font-heading_secondary text-center">
                Join us every Sunday at <strong>8:30 AM</strong> for
                International Service and <strong>10:30 AM</strong> for chichewa
                Service, where we come together as a community to praise God,
                hear His word, and grow in our faith and love. "Let us not give
                up meeting together, as some are in the habit of doing, but let
                us encourage one another." - <strong>Hebrews 10:25</strong>
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
