import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import EventCardComponent from "../../components/EventCardComponent";
// import { Button } from "flowbite-react";

const EventsPage = () => {
  return (
    <div className="bg-gray-50">
      {/* NavBar */}
      <NavBarComponent />

      {/* Hero Section */}
      <div
        className="relative h-[40rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/events.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Upcoming News &amp; Church Messages
            </h2>
            <p className="text-lg sm:text-xl text-white font-heading_secondary">
              Join us for our vibrant church events and activities that bring
              our community together. From worship services to fellowship
              gatherings, youth programs to special celebrations, there's
              something for everyone at Zomba Baptist Church.
            </p>
          
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div
        className="py-16"
   
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-semi_heading_color text-center mb-8 font-heading">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[1, 2, 3].map((index) => (
              <div key={index}>
                <EventCardComponent />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;