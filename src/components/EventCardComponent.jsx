import { Button } from "flowbite-react";
import React from "react";

const EventCardComponent = ({ event }) => {
  return (
    <>
      <div className="bg-white rounded-r-md relative p-5 rounded-md shadow-lg">
        <div className="bg-white rounded-md absolute p-2 top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-orange-500 font-bold">November 1, 2024</span>
        </div>
        <img
          src="/events.jpg"
          alt="Church Event"
          className="w-full h-full object-cover rounded-md "
        />
        <div>
        <h2 className="pt-5">Holiday Care</h2>
        <p className="pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          iste libero..
        </p>
        <Button className="mt-4">Read More</Button>
      </div>
      </div>
    </>
  );
};

export default EventCardComponent;
