import React from "react";

const CoreValuesComponent = () => {
  return (
    <div className="container">
      <div className="container mx-auto px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black font-coiny text-center mb-8">
          Our Core Beliefs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-black font-heading">
              Priesthood of all believers
            </h3>
            <p className="text-gray-700 font-paragraph">
              We believe in one God, eternally existing in three persons:
              Father, Son, and Holy Spirit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Autonomy of the Local church
            </h3>
            <p className="text-gray-700 font-paragraph">
              We believe the Bible is the inspired and infallible Word of God,
              serving as our ultimate guide for faith and practice.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-black">Salvation</h3>
            <p className="text-gray-700 font-paragraph">
              We believe salvation is a is by grace through faith and Christ
              alone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Authority of the Bible
            </h3>
            <p className="text-gray-700 font-paragraph">
              We believe the Church is the body of Christ, called to worship,
              fellowship, and serve together.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Two Ordinaces (Baptist and Lords's Supper)
            </h3>
            <p className="text-gray-700 font-paragraph">
              We believe in sharing the love of Christ and making disciples of
              all nations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Individaul sour liberty of the believer
            </h3>
            <p className="text-gray-700 font-paragraph">
              We believe in the indwelling and empowering presence of the Holy
              Spirit in the lives of believers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesComponent;
