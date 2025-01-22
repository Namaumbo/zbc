import { Button } from "flowbite-react";
import NavBarComponent from "../../components/NavBarComponent";
import SquareDots from "../../components/SquareDots";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutPageExplaination() {
  const headingStyle =
    " text-semi_heading_color font-heading text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold mb-2";
  return (
    <>
      <NavBarComponent />
      <div className="bg-[#F1F5F9] flex flex-row">
        <motion.div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-[5rem]">
          <motion.div className="w-full md:flex-1 p-4">
            <h1 className={headingStyle}>
              Baptist Convetion of Malawi
              <span className="relative z-[1] inline-block ml-1 text-white px-4 py-2">
                BACOMA
                <span
                  className="absolute bg-brand_color inset-0 ml-2 skew-x-[-15deg]"
                  aria-hidden="true"
                  style={{
                    zIndex: -1,
                    transformOrigin: "right",
                  }}
                ></span>
              </span>
            </h1>

            <p className="font-heading_secondary text-lg md:text-xl mt-6 mb-8 text-gray-700 leading-relaxed">
              The Baptist Convention of Malawi is committed to building a robust
              network of collaboration among Baptist Churches, both within
              Malawi and internationally. This initiative aims to strengthen
              ties and promote unity among congregations. By extending its
              outreach beyond national borders, the Convention seeks to share
              resources, support missionary work, and enhance the spiritual
              growth of its members.
            </p>
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-second_brand_color py-4 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
              onClick={() => {
                window.open("https://bacoma.org/", "_blank");
              }}
            >
              Read More
            </button>
          </motion.div>
          <motion.div className="w-full md:flex-1 px-4 md:px-0">
            <div className="relative">
              <img
                src="/bacoma.jpeg"
                alt="worship"
                className="z-50 rounded-lg w-full"
              />
            </div>
            <SquareDots />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
