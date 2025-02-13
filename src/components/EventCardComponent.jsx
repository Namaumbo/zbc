import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "flowbite-react";
const EventCardComponent = ({ data }) => {
  console.log(process.env.REACT_APP_API_STRAPI_URL+data?.imageUrl.url)

  return (
    <div className="flex items-center justify-center">
      <div className="w-[35rem] h-[30rem] rounded-[20px] bg-gradient-to-br from-gray-800/60 to-gray-900 relative shadow-2xl cursor-pointer transition-all duration-300 overflow-hidden group">
        {/* Image container */}
        <div className="absolute inset-0">
          <img
            src={data?.imageUrl?.url ?" http://localhost:1337/"+ data.imageUrl.url : "/api/placeholder/300/250"}
            alt={data?.title || "Event image"}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>


        {/* Gradient overlay */}
        <div className="absolute inset-0 ">
          {/* You can add title or other content here */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold truncate">
              {data?.title || "Event Title"}
            </h3>
            <p className="text-sm text-gray-300 mt-1 truncate">
              {data?.eventDescription || "Event description"}
            </p>
            <span>{data?.time}</span>
            <p>{data?.location}</p>
            <Button
              pill
              className="mt-2 bg-brand_color group"
              onClick={()=>(window.location.href = "/contact")}
            >
              <span className="flex justify-center items-center gap-2 transition-all duration-300 group-hover:gap-3">
                Learn More
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>

        {/* Date ribbon */}
        <div className="absolute overflow-hidden w-[150px] h-[150px] -top-[10px] -left-[10px] flex items-center justify-center">
          <div className="absolute w-[150%] h-[40px] bg-gradient-to-r from-brand_color via-brand_color/10 to-brand_color -rotate-45 -translate-y-5 flex items-center justify-center text-white font-semibold tracking-wider uppercase shadow-md">
            {data?.date}
          </div>
          {/* Corner decoration */}
          <div className="absolute w-[10px] h-[10px] bottom-0 left-0 -z-10">
            <div className="absolute w-[10px] h-[10px] translate-x-[140px] -translate-y-[140px] bg-brand_color"></div>
            <div className="w-full h-full bg-gradient-to-r from-brand_color via-brand_color/10 to-brand_color"></div>
          </div>
        </div>
      </div>



      {data.imageUrl && <img src={`http://localhost:1337/${data?.imageUrl?.url}`} alt="hilo"/>}

    </div>
  );
};

export default EventCardComponent;
