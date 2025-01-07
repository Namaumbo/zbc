import React from "react";
import { motion } from "framer-motion";
const CoreValuesComponent = () => {
  const coreBeliefs = [
    {
      title: "Priesthood of all believers",
      description:
        "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
    },
    {
      title: "Autonomy of the Local church",
      description:
        "We believe the Bible is the inspired and infallible Word of God, serving as our ultimate guide for faith and practice.",
    },
    {
      title: "Salvation",
      description:
        "We believe salvation is a is by grace through faith and Christ alone.",
    },
    {
      title: "Authority of the Bible",
      description:
        "We believe the Church is the body of Christ, called to worship, fellowship, and serve together.",
    },
    {
      title: "Two Ordinaces (Baptist and Lords's Supper)",
      description:
        "We believe in sharing the love of Christ and making disciples of all nations.",
    },
    {
      title: "Individaul sour liberty of the believer",
      description:
        "We believe in the indwelling and empowering presence of the Holy Spirit in the lives of believers.",
    },
  ];

  return (
    <div className="container mx-auto px-12 py-16">
      <h2 className="text-semi_heading_color text-4xl md:text-5xl font-bold mb-4 font-heading text-center">
        Our Core Beliefs
      </h2>
      <p className="text-center mb-8 text-lg font-heading_secondary">
        At Zomba Baptist Church, we embrace a distinctive tapestry of core
        beliefs that weave together our Baptist identity, creating a vibrant
        community of faith that stands firm on these foundational truths.
      </p>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {coreBeliefs.map((belief, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:bg-white hover:cursor-pointer"
          >
            {" "}
            <h3 className="text-xl  mb-4 text-semi_heading_color font-heading font-extrabold">
              {belief.title}
            </h3>
            <p className=" font-heading_secondary">{belief.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoreValuesComponent;
