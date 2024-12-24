import React from "react";
import { motion } from "framer-motion";

const EmpoweringComponent = () => {
  const content = [
    {
      title: "Next sermon",
      imageUrl: "/inchurch.jpg",
      description:
        "Join us for our upcoming sermon series where we explore faith, community, and spiritual growth together. Find guidance for your spiritual journey.",
    },
    {
      title: "Upcoming events",
      imageUrl: "bg-5.jpg",
      description:
        "Stay connected with our community through various events, workshops, and gatherings. Check out our calendar to see what's happening next.",
    },
    {
      title: "Latest news",
      imageUrl: "bg-3.jpg",
      description:
        "Keep up to date with the latest happenings in our community. From announcements to testimonies, stay informed about what God is doing in our midst.",
    },
  ];
  return (
    <div className="">
      <div className="container m-[auto] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
        {content.map((item, index) => (
          <div key={index} className="border border-red-700">
            <div className="flex flex-col items-start p-1 ">
              <motion.img
                src={item.imageUrl}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                className="rounded-md w-full h-64 object-cover shadow-lg"
              />
              <h3 className="font-heading font-extrabold text-2xl text-semi_heading_color mt-4 mb-3">
                {item.title}
              </h3>
              <p className="font-heading_secondary">{item.description}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-brand_color hover:underline transition-colors italic "
            >
              Learn More
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpoweringComponent;
