import React from "react";
import { motion } from "framer-motion";
import NavBarComponent from "../../components/NavBarComponent";
import { Button } from "flowbite-react";

const SermonArchive = () => {
  return (
    <div className="bg-gray-50">
      {/* NavBar */}
      <NavBarComponent />

      {/* Hero Section */}
      <div
        className="relative h-[40rem] mb-16 bg-cover bg-center"
        style={{ backgroundImage: "url(/mgonero.jpg)" }}
      >
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Join Us For Our Weekly Activities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-white font-heading_secondary mb-8"
            >
              Experience the power of worship and fellowship at Zomba Baptist
              Church. Our services are filled with inspiring messages, uplifting
              music, and a welcoming community. Join us as we gather to praise,
              learn, and grow together in faith.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className=" mx-auto bg-brand_color hover:bg-brand_color/90 px-8 py-3 text-lg">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <motion.div
        className="container mx-auto px-6 md:px-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-semi_heading_color mb-6 font-heading">
            Empowering Our Community Through{" "}
            <span className="relative inline-block text-white px-4 py-2">
              Faith
              <span
                className="absolute bg-brand_color inset-0 skew-x-[-15deg]"
                aria-hidden="true"
                style={{ zIndex: -1, transformOrigin: "right" }}
              ></span>
            </span>
          </h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src="/zbc-images/WhatsApp Image 2025-01-27 at 15.53.38.jpeg"
                alt="ZBC Worship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-8">
              <h2 className="text-3xl font-heading font-bold text-semi_heading_color mb-4">
                Our Worship Experience
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Zomba Baptist Church, we offer vibrant worship services that
                blend contemporary and traditional hymns. Our talented worship
                team leads the congregation in songs that deepen your connection
                with God.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-8 md:mt-0">
              <h2 className="text-3xl font-heading font-bold text-semi_heading_color mb-4">
                Our Joyful Worship Experience
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Join us in our joyful celebration of faith where every service is
                filled with uplifting music, heartfelt praise, and spiritual
                connection. Our worship services create an atmosphere of joy and
                reverence, welcoming all to experience God's presence in a
                meaningful way.
              </p>
              <Button
                onClick={() => (window.location.href = "/contact")}
                className="bg-second_brand_color hover:bg-second_brand_color/90 px-8 py-3 text-lg"
              >
                Join Us
              </Button>
            </div>
            <div className="w-full aspect-video mt-8 overflow-hidden rounded-lg shadow-lg">
              <img
                src="/zbc-images/WhatsApp Image 2025-01-27 at 15.57.03.jpeg"
                alt="ZBC Fellowship"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SermonArchive;