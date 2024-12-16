import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import TeamComponent from "../../components/TeamComponent";
import { Button } from "flowbite-react";
import CoreValuesComponent from "../../components/About/CoreValuesComponent";

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
                About Zomba Baptist Church, Mw
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

      <div className="container mx-auto px-12 py-16 md:flex md:items-center md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-gray-400 font-heading">
            Our Vision
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            we desire to be a Jesus church.
          </h1>
          <p className="mb-6 font-heading_secondary">
            Zomba bapist stared in 1979 by the Southen Baptist Convention
            Missionaries. Late Pastor Kachase Gama, together with the
            Missionaries, planted the church right in the city of zomba. Late
            Pastor Kachasu Gama became the first pastor.In its first days, the
            church was meeting in a garage of one of the Missionaries before
            relocating to Zomba Community ground.
          </p>
          <Button className="bg-brand_color">Learn More</Button>
        </div>
        <div className="md:w-1/2 ">
          <video controls className="w-full">
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl md:text-4xl font-bold  text-white font-heading text-center">
            Our Team
          </h2>
          <div>
            <TeamComponent
              fullName="Pastor Richard Makhenjera"
              position="Resident Pastor"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {second_rank.map((person) => {
              return (
                <div>
                  <TeamComponent
                    fullName={person.fullName}
                    position={person.position}
                  />
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-1">
            {third_rank.map((person, index) => {
              return (
                <div key={index}>
                  <TeamComponent
                    fullName={person.fullName}
                    position={person.position}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <CoreValuesComponent />
      </div>
    </>
  );
};

export default AboutPage;
