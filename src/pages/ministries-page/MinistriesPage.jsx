import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import { Button } from "flowbite-react";
import MinistryComponent from "../../components/MinistryComponent";

const ParallaxScroll = () => {
  return (
    <div className="relative bg-white">
      <NavBarComponent />
      {/* Hero sections */}

      <div
        className="relative h-[40rem] mb-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://scontent.fblz1-1.fna.fbcdn.net/v/t39.30808-6/324841664_480510607487998_4782025878627412943_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYqMPLHiwKPINxuWhlOBwN_hKM9qjLGZf-Eoz2qMsZl2ftkK9WxFe3oo2T8uX0bjez9A4Rhv3AyQkObJaslo8S&_nc_ohc=l63UzaY8leYQ7kNvgGVLnkZ&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fblz1-1.fna&_nc_gid=AtIxDlhgkeil_GfdwjoVe8e&oh=00_AYBQAQuTAkqIpEvzXea95oFpputvfbThtLAdvwQ6toLNjQ&oe=675E6E98')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60">
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold mb-4 w-[60%]">
              Join Our Community Church Ministries
            </h2>
            <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white font-heading_secondary">
              Experience the joy of giving back and making a difference. At
              Zomba Baptist, we are dedicated to spreading love and hope through
              our community service programs. Get involved and help us create a
              positive impact.
            </p>
            <Button className="mt-4 p-2 bg-brand_color">Learn More</Button>
          </div>
        </div>
      </div>

      {/* ------ END OF Hero Section ------ */}

      <div
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")`,
        }}
      >
        <MinistryComponent />
      </div>
    </div>
  );
};
export default ParallaxScroll;
