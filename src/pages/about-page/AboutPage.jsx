import React from "react";
import NavBarComponent from "../../components/NavBarComponent";

const AboutPage = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="about-page"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/evangelism.jpg)`,
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
          backgroundPosition: `center ${scrollPosition * -0.5}px`,
        }}
      >
        <NavBarComponent />
        <div className="p-8 mx-auto my-8 max-w-3xl">
          <h1 className="text-center mb-4 text-2xl sm:text-3xl md:text-4xl font-bold font-coiny text-orange-700">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-paragraph text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nunc id aliquam tincidunt, nisl nunc tincidunt urna, nec
            tincidunt nunc nunc id nunc. Sed euismod, nunc id aliquam tincidunt,
            nisl nunc tincidunt urna, nec tincidunt nunc nunc id nunc. Sed
            euismod, nunc id aliquam tincidunt, nisl nunc tincidunt urna, nec
            tincidunt nunc nunc id nunc.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-12 py-16 md:flex md:items-center md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-gray-400 font-coiny">
            Our Vision
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-coiny">
            we desire to be a Jesus church.
          </h1>
          <p className="mb-6 font-paragraph">
            We want our church to encounter the living God, be a place of
            discipleship, serve the local community and the world creating
            impact through the name of Jesus Christ.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            PLAN YOUR VISIT
          </button>
        </div>
        <div className="md:w-1/2 ">
          <video controls className="w-full">
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto px-12 py-8">
          <h2 className="text-3xl md:text-4xl font-bold  text-white font-coiny text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={`${process.env.PUBLIC_URL}/team-member-1.jpg`}
                alt="Team Member 1"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-white font-coiny">
                John Doe
              </h3>
              <p className="text-gray-400 font-paragraph">Senior Pastor</p>
            </div>
            <div className="text-center">
              <img
                src={`${process.env.PUBLIC_URL}/team-member-2.jpg`}
                alt="Team Member 2"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-white font-coiny">
                Jane Smith
              </h3>
              <p className="text-gray-400 font-paragraph">Worship Leader</p>
            </div>
            <div className="text-center">
              <img
                src={`${process.env.PUBLIC_URL}/team-member-3.jpg`}
                alt="Team Member 3"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-white font-coiny">
                Mike Johnson
              </h3>
              <p className="text-gray-400 font-paragraph">Youth Pastor</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-100">
          <div className="container mx-auto px-12 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-coiny text-center mb-8">
              Our Core Beliefs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-black font-coiny">
                  Faith in God
                </h3>
                <p className="text-gray-700 font-paragraph">
                  We believe in one God, eternally existing in three persons:
                  Father, Son, and Holy Spirit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-black font-coiny">
                  The Bible
                </h3>
                <p className="text-gray-700 font-paragraph">
                  We believe the Bible is the inspired and infallible Word of
                  God, serving as our ultimate guide for faith and practice.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-black font-coiny">
                  Salvation
                </h3>
                <p className="text-gray-700 font-paragraph">
                  We believe salvation is a gift of God's grace, received
                  through faith in Jesus Christ alone.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-black font-coiny">
                  The Church
                </h3>
                <p className="text-gray-700 font-paragraph">
                  We believe the Church is the body of Christ, called to
                  worship, fellowship, and serve together.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-black font-coiny">
                  Mission
                </h3>
                <p className="text-gray-700 font-paragraph">
                  We believe in sharing the love of Christ and making disciples
                  of all nations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-black font-coiny">
                  Holy Spirit
                </h3>
                <p className="text-gray-700 font-paragraph">
                  We believe in the indwelling and empowering presence of the
                  Holy Spirit in the lives of believers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
