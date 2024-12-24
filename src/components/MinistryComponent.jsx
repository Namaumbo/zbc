"use client";

import MinistriesExplaination from "../core/MinistryExplainations";

export default function MinistryComponent() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {MinistriesExplaination.map((ministry, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-4"
            >
              <div className="relative mx-4 -mt-6 h-[14rem] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                  src={ministry.coverPage}
                  alt={ministry.ministry}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 cursor-pointer hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="p-4">
                <h5 className="block font-heading font-extrabold text-2xl text-semi_heading_color mt-4 mb-3 antialiased">
                  {ministry.ministry}
                </h5>
                <p className="block text-base font-light leading-relaxed font-heading_secondary antialiased">
                  {ministry.description}
                </p>
              </div>
              <div className="p-4 pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-second_brand_color py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
