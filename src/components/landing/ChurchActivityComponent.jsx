"use client";
import React from "react";

function ChurchActivityComponent() {
  const churchPoints = [
    {
      id: 1,
      title: "Weekly Service",
      description:
        "Join us every Sunday for an uplifting worship service where we come together as a community to praise God, hear His word, and grow in our faith and love.",
      image: "/day.png",
    },
    {
      id: 2,
      title: "Bible Study",
      description:
        "Deepen your understanding of Scripture through our engaging Bible study sessions where we explore God's word, share insights, and apply biblical teachings to daily life.",
      image: "/bible.png",
    },
    {
      id: 3,
      title: "Prayer Meeting",
      description:
        "Gather with fellow believers for powerful prayer sessions where we lift up our needs, intercede for others, and experience the transformative power of corporate prayer.",
      image: "/foldedHands.png",
    },
    {
      id: 4,
      title: "Community Outreach",
      description:
        "Serve and connect with our local community through various outreach programs, showing God's love in practical ways and making a positive impact in people's lives.",
      image: "/church.png",
    },
  ];
  return (
    <>
      <div className="container mx-auto flex flex-row justify-center items-center p-5 mt-10 ">
        <div className="flex flex-col md:flex-row justify-center items-center p-4">
          {churchPoints.map((point) => (
            <div
              key={point.id}
              className=" hover:bg-gray-100 hover:cursor-pointer flex flex-col items-center mb-8 md:mb-0 md:mx-4 p-4 shadow-lg rounded-lg  w-full md:w-1/3"
            >
              <img
                src={point.image}
                alt={point.title}
                className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-lg mb-4"
              />
              <h3 className=" font-heading font-extrabold text-2xl text-semi_heading_color mt-4 mb-3">
                {point.title}
              </h3>
              <p className=" font-heading_secondary">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChurchActivityComponent;
