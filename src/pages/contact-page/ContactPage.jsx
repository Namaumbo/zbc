import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import { Button } from "flowbite-react";
import { InputComponent } from "../../components/InputComponent";
import { TextAreaComponent } from "../../components/TextAreaComponent";

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[40rem] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://scontent.fblz1-1.fna.fbcdn.net/v/t39.30808-6/324841664_480510607487998_4782025878627412943_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYqMPLHiwKPINxuWhlOBwN_hKM9qjLGZf-Eoz2qMsZl2ftkK9WxFe3oo2T8uX0bjez9A4Rhv3AyQkObJaslo8S&_nc_ohc=l63UzaY8leYQ7kNvgGVLnkZ&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fblz1-1.fna&_nc_gid=AtIxDlhgkeil_GfdwjoVe8e&oh=00_AYBQAQuTAkqIpEvzXea95oFpputvfbThtLAdvwQ6toLNjQ&oe=675E6E98')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Let's Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-white font-heading_secondary">
              We'd love to hear from you! Whether you have questions about our
              services, want to join our community, or need spiritual guidance,
              our team is here to help. Reach out to us through the contact
              information below.
            </p>
          </div>
        </div>
      </div>

      {/* Contact & Support Section */}
      <div className="w-full p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-semi_heading_color mb-4 text-center font-heading">
          Contact &{" "}
          <span className="relative z-[1] inline-block text-white px-4 py-2">
            Support
            <span
              className="absolute bg-brand_color inset-0 skew-x-[-15deg]"
              aria-hidden="true"
              style={{ zIndex: -1, transformOrigin: "right" }}
            ></span>
          </span>
        </h1>
        <p className="text-gray-600 text-center mt-4 mb-8 max-w-2xl mx-auto font-heading_secondary">
          Connect with us through our contact form, phone, or email. We're here
          to answer your questions, provide support, and welcome you into our
          church community. Your message is important to us.
        </p>
      </div>

      {/* Contact Form and Information Section */}
      <div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8 max-w-6xl">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 w-full md:w-1/2">
          <div className="flex flex-col sm:flex-row gap-4">
            <InputComponent label="First name *" />
            <InputComponent label="Last name *" />
          </div>
          <div className="mt-4">
            <InputComponent label="Email *" />
          </div>
          <div className="mt-4">
            <TextAreaComponent label="Message *" />
          </div>
          <Button className="bg-brand_color hover:bg-brand_color/90 mt-6 w-full sm:w-auto px-4 py-1">
            Submit
          </Button>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2">
          {/* Church Hotline */}
          <div className="mb-8">
            <h3 className="font-heading text-semi_heading_color font-bold text-2xl mb-2">
              Church Hotline
            </h3>
            <p className="text-gray-600 font-semibold">
              Interested in speaking with us? Call us at:
            </p>
            <p className="font-heading text-gray-800">+265 993 740 261</p>
            <hr className="my-4 border-gray-300" />
          </div>

          {/* Church Email */}
          <div className="mb-8">
            <h3 className="font-heading text-semi_heading_color font-bold text-2xl mb-2">
              Church Email
            </h3>
            <p className="text-gray-600 font-semibold">
              Interested in emailing us? Reach us at:
            </p>
            <p className="font-heading text-gray-800">
              zombabaptistchurch@gmail.com
            </p>
            <p className="font-heading text-gray-800">
              Pastor’s email: richardmakhenjera@gmail.com
            </p>
            <hr className="my-4 border-gray-300" />
          </div>

          {/* Donate */}
          <div>
            <h3 className="font-heading text-semi_heading_color font-bold text-2xl mb-2">
              Donate
            </h3>
            <p className="text-gray-600 font-semibold">
              Support our ministry and make a lasting impact through your
              generous donation:
            </p>
            <p className="font-heading text-gray-800">
              National Bank: 20201010101
            </p>
            <p className="font-heading text-gray-800">TNM Mpamba: 20201010101</p>
            <p className="font-heading text-gray-800">
              Airtel Money: 20201010101
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;