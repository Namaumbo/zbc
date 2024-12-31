import React from "react";
// import { motion } from "framer-motion";
import NavBarComponent from "../../components/NavBarComponent";
import { Button } from "flowbite-react";
import { InputComponent } from "../../components/InputComponent";
import { TextAreaComponent } from "../../components/TextAreaComponent";

const ContactPage = () => {
  return (
    <div className="">
      <NavBarComponent />
      <div
        className="relative h-[40rem]  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://scontent.fblz1-1.fna.fbcdn.net/v/t39.30808-6/324841664_480510607487998_4782025878627412943_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYqMPLHiwKPINxuWhlOBwN_hKM9qjLGZf-Eoz2qMsZl2ftkK9WxFe3oo2T8uX0bjez9A4Rhv3AyQkObJaslo8S&_nc_ohc=l63UzaY8leYQ7kNvgGVLnkZ&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fblz1-1.fna&_nc_gid=AtIxDlhgkeil_GfdwjoVe8e&oh=00_AYBQAQuTAkqIpEvzXea95oFpputvfbThtLAdvwQ6toLNjQ&oe=675E6E98')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60">
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold mb-4 w-[60%]">
              Get in Touch with Zomba Baptist Church
            </h2>
            <p className="text-xl md:text-lg sm:text-base xs:text-sm container text-white font-heading_secondary">
              We'd love to hear from you! Whether you have questions about our
              services, want to join our community, or need spiritual guidance,
              our team is here to help. Reach out to us through the contact
              information below.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mb-6 md:mb-0 p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-semi_heading_color mb-4 md:pr-8 font-heading text-center">
          Contact &
          <span className="relative z-[1] inline-block ml-1 text-white px-4 py-2">
            Support
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
        <p className="text-gray-600 text-center mt-4 mb-8 container  w-[70%] mx-auto font-heading_secondary">
          Connect with us through our contact form, phone, or email. We're here
          to answer your questions, provide support, and welcome you into our
          church community. Your message is important to us.
        </p>
      </div>

      <div className="container p-4 flex flex-row gap-4 m-[auto] w-1/2">
        <div className="bg-gray-200  rounded-md p-4 w-1/2">
          <div className="flex flex-row gap-3">
            <InputComponent label="First name *" />

            <InputComponent label="Last name *" />
          </div>
          <div className="mt-4">
            <InputComponent label="Email *" />
          </div>
          <div className="mt-4">
            <TextAreaComponent />
          </div>
          <Button className="bg-brand_color mt-4">Submit</Button>
        </div>
        <div className="p-8">
          <div>
            <h3 className="font-heading text-semi_heading_color font-bold">
              Church HotLine
            </h3>
            <p className="text-gray-500 font-semibold">
              Interested to speak with us? Call us at:
            </p>
            <p className="font-heading">0999999999</p>
            <hr />
          </div>
          <div className="mt-8">
            <h3 className="font-heading text-semi_heading_color font-bold">
              Church Email
            </h3>
            <p className="text-gray-500 font-semibold">
              Interested to speak Email Us?:
            </p>
            <p className="font-heading">admin@zbc.com</p>
            <hr />
          </div>
          <div className="mt-8">
            <h3 className="font-heading text-semi_heading_color font-bold">
              Donate
            </h3>

            <p className="text-gray-500 font-semibold">
              Support our ministry and make a lasting impact through your
              generous donation:
            </p>
            <p className="font-semi_heading">National Bank: 20201010101</p>
            <p className="font-semi_heading">TNM Mpamba: 20201010101</p>
            <p className="font-semi_heading">AirTel Money: 20201010101</p>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
// background-color: #d8e9f0;
// background-image: url("https://www.transparenttextures.com/patterns/graphcoders-lil-fiber.png");
