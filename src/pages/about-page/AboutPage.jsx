import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import TeamComponent from "../../components/TeamComponent";
import { Button } from "flowbite-react";
// import CoreValuesComponent from "../../components/About/CoreValuesComponent";

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

  const second_rank = [
    { fullName: "Garton Kamchedzera", position: "Chief Elder" },
    { fullName: "Kelvin Gunya", position: "Elder" },
    { fullName: "Mary Mlenga", position: "Elder" },
    { fullName: "Nales Petro", position: "Deaconess" },
  ];
  const third_rank = [
    {
      fullName: "Laston Simenti",
      position: "Chief Deacon",
    },
    {
      fullName: "Humphrey Topesa",
      position: "Deacon",
    },
    {
      fullName: "Mark Chande",
      position: "Deacon",
    },
    {
      fullName: "Albert Botomani",
      position: "Deaconess",
    },
    {
      fullName: "Chrissy Kubwalo",
      position: "Deaconess",
    },
    {
      fullName: "Sakina Mtunga",
      position: "Deaconess",
    },
  ];

  return (
    <>
      <div className="">
        <NavBarComponent />

        <div
          className="relative h-[40rem] mb-8 bg-cover bg-center"
          style={{
            backgroundImage: "url(/congregation1.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/60">
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <h2 className=" font-heading text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold mb-4 w-[60%]">
                About Zomba Baptist Church, Malawi
              </h2>
              <p className="text-xl md:text-lg sm:text-base xs:text-sm max-w-2xl text-white font-heading_secondary">
                We are a Jesus-centered church committed to sharing God's love
                and grace. Founded in 1979, we have grown into a vibrant
                community of believers dedicated to worship, fellowship, and
                serving our community in Zomba.
              </p>
              <Button className="mt-4 p-2 bg-brand_color hover:bg-inherit">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* core values  */}
      {/* <div>
        <CoreValuesComponent />
      </div> */}
      <div className="container mx-auto px-12 py-16 md:flex md:items-center md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-gray-400 font-heading">
            Our Story
          </h2>
          <h1 className="text-semi_heading_color text-4xl md:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-brand_color to-blue-600 bg-clip-text ">
            <span className="">Membership</span>
          </h1>
          <p className="mb-8 font-heading_secondary space-y-4 text-gray-700">
            <span className="block flex items-center">
              <span className="text-brand_color mr-2">•</span> Over 500 active
              members in our vibrant community
            </span>
            <span className="block flex items-center">
              <span className="text-brand_color mr-2">•</span> Diverse
              congregation united in faith and worship
            </span>
            <span className="block flex items-center">
              <span className="text-brand_color mr-2">•</span> Led by dedicated
              pastoral leadership
            </span>
            <span className="block flex items-center">
              <span className="text-brand_color mr-2">•</span> Inclusive
              membership structure comprising:
            </span>
            <ul className="pl-8 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-brand_color mr-3"></span>
                Senior Pastor
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-brand_color mr-3"></span>
                Full Members
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-brand_color mr-3"></span>
                Associate Members
              </li>
            </ul>
          </p>
        </div>{" "}
        <div className="md:w-1/2 ">
          {/* <video controls className="w-full">
            <source src="https://youtu.be/QXowrFiSPwo?si=oompmbQ2WbpD2dt3" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QXowrFiSPwo?si=oVS5122f0SXLVnrI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>

      <div className="bg-black ">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl md:text-4xl font-bold  text-white font-heading text-center pb-4">
            Our Structures
          </h2>
          <div>
            <TeamComponent
              fullName="Pastor Richard Makhenjera"
              position="Resident Pastor"
              image="/pastor.jpg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1  mb-6 mt-16">
            {second_rank.map((person) => {
              return (
                <div>
                  <TeamComponent
                    fullName={person.fullName}
                    position={person.position}
                    image="/pastor.jpg"
                  />
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-1 mb-6 mt-16">
            {third_rank.map((person, index) => {
              return (
                <div key={index}>
                  <TeamComponent
                    fullName={person.fullName}
                    position={person.position}
                    image="/pastor.jpg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
