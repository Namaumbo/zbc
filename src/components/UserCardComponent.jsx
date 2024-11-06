import React from "react";
import { Rating } from "flowbite-react";
import { FiUser } from "react-icons/fi";

const UserCardComponent = () => {
  return (
    <div className="border border-black">
      <div className="p-5">
        <section className="text-left mb-5">
          Being part of Zomba Baptist has truly changed my life. The community
          is so welcoming and supportive!
        </section>
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
        <div className="flex flex-row items-center pb-10 pt-5">
          <FiUser className="border border-gray-500 rounded-full p-2" size={55} />
          <div className="ml-2">
            <h5 className=" text-xl font-medium text-gray-900 dark:text-white">
              Limbani Jambo
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCardComponent;
