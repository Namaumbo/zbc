import React from "react";
import { motion } from "framer-motion";

const EmpoweringComponent = () => {
  const content = [
    {
      title: "Next sermon",
      imageUrl: "https://scontent.fblz1-1.fna.fbcdn.net/v/t39.30808-6/324846389_690034912660064_147388300608665273_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH7X-KHfQSfCR49W3lAN7aQey9GtD7YWGd7L0a0PthYZ6awBNPD6uFv8q_d0aeUZKYb9QVnx28Zzvi83NYhCiST&_nc_ohc=VjJU6PEwHpkQ7kNvgF4HvBB&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fblz1-1.fna&_nc_gid=A7TVwLqvcEPS62lQ3N9TKi3&oh=00_AYDY9oz6f-x19GZY-IbL5u8uG8W8sFzm2NNfNVnu8n5EnQ&oe=675E8BF9",
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
          <div key={index}>
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
