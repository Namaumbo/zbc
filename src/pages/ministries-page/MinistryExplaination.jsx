import React from "react";
import { useLocation } from "react-router-dom";
import NavBarComponent from "../../components/NavBarComponent";

const MinistryExplaination = () => {
  const location = useLocation();
  const selectedMinistry = location.state?.selectedMinistry;

  return (
    <div className="relative bg-white">
      <NavBarComponent />
      <div className="min-h-screen bg-gray-50  ">
        <div className=" mx-auto">
          {selectedMinistry ? (
            <div className="bg-white rounded-sm shadow-xl overflow-hidden">
              {/* Header Section with Cover Image */}
              <div className="relative h-64 md:h-80 lg:h-96">
                <img
                  src={selectedMinistry.coverPage}
                  alt={selectedMinistry.ministry}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading lg:text-6xl font-bold text-white text-center">
                      {selectedMinistry.ministry}
                    </h1>

                    <p className="text-2xl pt-5 w-[70%] mx-auto text-center text-white leading-relaxed font-heading_secondary">
                      {selectedMinistry.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className=" container mx-auto p-8">
                {/* Ministry Description */}
                <div className="mb-8"></div>

                {/* Two Pictures Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={selectedMinistry.image1} // Add this field to your ministry data
                      alt="Ministry Activity 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={selectedMinistry.image2} // Add this field to your ministry data
                      alt="Ministry Activity 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Ministry Details */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                    Ministry Details
                  </h2>
                  <div className="space-y-4">
                    {selectedMinistry.details &&
                      selectedMinistry.details.map((detail, index) => (
                        <div key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-2 h-2 bg-second_brand_color rounded-full mt-2 mr-3"></span>
                          <p className="text-gray-700 text-lg font-heading_secondary">
                            {detail}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Bible Verse Section */}
                <div className="bg-slate-100 p-6 rounded-lg">
                  <p className="text-lg italic text-gray-700 font-heading_secondary">
                    "{selectedMinistry.verse}"
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-700">
                Please select a ministry to view details.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinistryExplaination;
