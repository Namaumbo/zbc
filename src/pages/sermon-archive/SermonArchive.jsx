import React from "react";
import { motion } from "framer-motion";
import NavBarComponent from "../../components/NavBarComponent";
import { Button } from "flowbite-react";
// import ServiceComponent from "../../components/services/ServiceComponent";

const SermonArchive = () => {
  return (
    <div className="">
      <NavBarComponent />
      <div
        className="relative h-[40rem] mb-8 bg-cover bg-center"
        style={{
          backgroundImage: "url(/mgonero.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60">
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold mb-4 w-[60%]">
              Join Us For Our Weekly Activities
            </h2>
            <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white font-heading_secondary">
              Experience the power of worship and fellowship at Zomba Baptist
              Church. Our services are filled with inspiring messages, uplifting
              music, and a welcoming community. Join us as we gather to praise,
              learn, and grow together in faith.
            </p>
            <Button className="mt-4 p-2 bg-brand_color">Learn More</Button>
          </div>
        </div>
      </div>
      <motion.div className="container mx-auto p-6 md:p-10 text-center justify-center mt-[3rem]">
        <div className=" mb-6 md:mb-0 mx-auto w-[50%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-semi_heading_color mb-4 md:pr-8 font-heading text-center">
            Empowering Our Community Through
            <span className="relative  inline-block ml-1 text-white px-4 py-2">
              Faith
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
      </motion.div>

      {/* <motion.div className="container p-6 md:p-10 flex mx-auto ">
        <div className="w-full h-full">
          <img
            src="/zbc-images/WhatsApp Image 2025-01-27 at 15.53.38.jpeg"
            alt="ZBC"
            className="w-[100%] shadow-lg h-[100%]"
          />
        </div>

        <div className="mt-8">
          <h2 className="ml-8 text-3xl font-heading font-bold text-semi_heading_color mb-4">
            Our Worship Experience
          </h2>
          <p className="ml-8 text-lg text-gray-700 leading-relaxed w-[70%]">
            At Zomba Baptist Church, our worship services are a vibrant
            celebration of God's love and grace, featuring contemporary and
            traditional hymns that uplift the soul. Our dedicated worship team
            leads the congregation in meaningful worship experiences that
            combine musical excellence with spiritual depth, helping people
            connect with God in profound ways.
          </p>
        </div>
      </motion.div>

      <motion.div className="container p-6 md:p-10 flex mx-auto ">
        <div className="mt-8">
          <h2 className="ml-8 text-3xl font-heading font-bold text-semi_heading_color mb-4">
            Our Worship Experience
          </h2>
          <p className="ml-8 text-lg text-gray-700 leading-relaxed w-[70%]">
            At Zomba Baptist Church, our worship services are a vibrant
            celebration of God's love and grace, featuring contemporary and
            traditional hymns that uplift the soul. Our dedicated worship team
            leads the congregation in meaningful worship experiences that
            combine musical excellence with spiritual depth, helping people
            connect with God in profound ways.
          </p>
        </div>

        <div className="w-full h-full  mt-[-10rem]">
          <img
            src="/zbc-images/WhatsApp Image 2025-01-27 at 15.53.38.jpeg"
            alt="ZBC"
            className="w-[100%] shadow-lg h-[100%]"
          />
        </div>
      </motion.div> */}

      <div className="container mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-8 w-[80%]">
        <div className="flex-1">
          <div className="w-full aspect-video ">
            <img
              src="/zbc-images/WhatsApp Image 2025-01-27 at 15.53.38.jpeg"
              alt="ZBC"
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-heading font-bold text-semi_heading_color mb-4">
              Our Worship Experience
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Zomba Baptist Church, we offer vibrant worship services that
              blend contemporary and traditional hymns. Our talented worship
              team leads the congregation that deepen your connection with God.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="mt-8 md:mt-0">
            <h2 className="text-3xl font-heading font-bold text-semi_heading_color mb-4">
              Our Joyful Worship Experience
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed pb-2">
              Join us in our joyful celebration of faith where every service is
              filled with uplifting music, heartfelt praise, and spiritual
              connection. Our worship services create an atmosphere of joy and
              reverence, welcoming all to experience God's presence in a
              meaningful way.
            </p>
            <Button onClick={()=>{window.location.href ="/contact"}} className="bg-second_brand_color">Join Us</Button>
          </div>
          <div className="w-full aspect-video mt-8">
            <img
              src="/zbc-images/WhatsApp Image 2025-01-27 at 15.57.03.jpeg"
              alt="ZBC"
              className="w-full h-full object-cover rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonArchive;
