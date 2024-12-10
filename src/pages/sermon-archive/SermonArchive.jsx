import React from "react";
import { motion } from "framer-motion";
import NavBarComponent from "../../components/NavBarComponent";
import { CardComponent } from "../../components/CardComponent";
import { Button } from "flowbite-react";

const SermonArchive = () => {
  return (
    <div className="bg-gray-200">
      <NavBarComponent />
      <div
        className="relative h-[40rem] mb-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://scontent.fblz1-1.fna.fbcdn.net/v/t39.30808-6/324466291_5908916682479126_4871868397930071838_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFZFor43UXK8eAyudHmVompIbGzy3rc5oohsbPLetzmiqK54XeNNh2F8VoJJpUidfgqSYbeBqByhd5WzC5RHran&_nc_ohc=-VNfMXnned0Q7kNvgHUL6nB&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fblz1-1.fna&_nc_gid=AKkcvq2PegtuZOtrZ1onxRj&oh=00_AYCLcXFOKr3SqMrbh7QktiVnTme7sVEE7k76LXN5RKEgUA&oe=675E6E7E')",
        }}
      >
          <div className="absolute inset-0 bg-blue-900/60">
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold mb-4 w-[60%]">
                Join Us For Our Weekly Services
              </h2>
              <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white font-heading_secondary">
                Experience the power of worship and fellowship at Zomba Baptist
                Church. Our services are filled with inspiring messages,
                uplifting music, and a welcoming community. Join us as we gather
                to praise, learn, and grow together in faith.
              </p>{" "}
              <Button className="mt-4 p-2 bg-brand_color">Learn More</Button>
            </div>
          </div>
      </div>
      <motion.div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:pr-8 font-heading text-center md:text-left">
            Empowering Our Community Through Faith
          </h1>
        </div>
        <div className="w-full md:w-1/2 ">
          <p className="font-paragraph text-base sm:text-lg lg:text-xl text-center md:text-left">
            Zomba Baptist Church is committed to making a positive impact
            through our outreach initiatives. We engage in various community
            service programs that aim to spread love, hope, and the teachings of
            Christ. Join us in our mission to foster spiritual growth and
            support those in need.
          </p>
        </div>
      </motion.div>
      <motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 gap-5">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </motion.div>
    </div>
  );
};

export default SermonArchive;
