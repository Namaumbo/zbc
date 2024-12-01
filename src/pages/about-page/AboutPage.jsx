import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import TeamComponent from "../../components/TeamComponent";
import { Button } from "flowbite-react";

const AboutPage = () => {
  // const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      // const position = window.pageYOffset;
      // setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative bg-white">
        <NavBarComponent />
       
      <div
        className="relative h-[40rem] mb-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/events.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/30 ">
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="text-5xl md:text-5xl sm:text-3xl xs:text-3xl font-bold mb-4 w-[34rem] text-white">
              Join Our Community Church Ministries
            </h2>
            <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white">
              Experience the joy of giving back and making a difference. At
              Zomba Baptist, we are dedicated to spreading love and hope through
              our community service programs. Get involved and help us create a
              positive impact.
            </p>
            <Button className="mt-4 p-3 bg-[#008cd0]">Learn More</Button>
          </div>
        </div>
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
            Zomba bapist stared in 1979 by the Southen Baptist Convention
            Missionaries. Late Pastor Kachase Gama, together with the
            Missionaries, planted the church right in the city of zomba. Late
            Pastor Kachasu Gama became the first pastor.In its first days, the
            church was meeting in a garage of one of the Missionaries before
            relocating to Zomba Community ground.
          </p>
          <Button>Learn More</Button>
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
          <div>
            <TeamComponent
              fullName="Pastor Richard Makhenjera"
              position="Resident Pastor"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            <TeamComponent
              fullName="Gartron Kamchedzera"
              position="Chief Elder"
            />
            <TeamComponent fullName="Kelvin Gunya" position="Elder" />
            <TeamComponent fullName="Mary Mlenga" position="Elder" />
            <TeamComponent fullName="Nales Petro" position="Deaconess" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-1">
            <TeamComponent fullName="Laston Simenti" position="Chief Deacon" />
            <TeamComponent fullName="Humphrey Topesa" position="Deacon" />
            <TeamComponent fullName="Mark Chande" position="Deacon" />
            <TeamComponent fullName="Albert Botomai" position="Deacon" />
            <TeamComponent fullName="Chrissy Kubwalo" position="Deaconess" />
            <TeamComponent fullName="Sakina ktunga" position="Deaconess" />
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
                <h3 className="text-xl font-semibold mb-4 text-black">
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
                  We believe the Bible is the inspired and infallible Word of
                  God, serving as our ultimate guide for faith and practice.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Salvation
                </h3>
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
                  We believe the Church is the body of Christ, called to
                  worship, fellowship, and serve together.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Two Ordinaces (Baptist and Lords's Supper)
                </h3>
                <p className="text-gray-700 font-paragraph">
                  We believe in sharing the love of Christ and making disciples
                  of all nations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Individaul sour liberty of the believer
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
