import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
// import { motion } from "framer-motion";
import EventCardComponent from "../../components/EventCardComponent";
import { Button } from "flowbite-react";
const EventsPage = () => {
  return (
    <>
      <NavBarComponent />
      <div
        className="relative h-[40rem] mb-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/events.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/30 ">
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold mb-4 w-[60%]">
              Upcoming News &amp; Church Messages.
            </h2>
            <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white font-heading_secondary">
              Join us for our vibrant church events and activities that bring
              our community together. From worship services to fellowship
              gatherings, youth programs to special celebrations, there's
              something for everyone at Zomba Baptist Church.
            </p>
            <Button className="mt-4 p-2 bg-brand_color">Learn More</Button>
          </div>
        </div>
      </div>
      {/*--------------- HERO SECTION -------------------- */}
      {/* EVENTS SECTION  */}
      <div
        style={{
          backgroundColor: "#e2e2e2",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.83' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {[1, 2, 3].map((index, key) => {
            return (
              <div key={key}>
                <EventCardComponent />
              </div>
            );
          })}
        </div>
      </div>{" "}
    </>
  );
};

export default EventsPage;
