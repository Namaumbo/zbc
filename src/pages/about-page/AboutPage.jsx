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
    {
      fullName: "Garton Kamchedzera",
      position: "Chief Elder",
      image: "/placeholder.jpg",
    },
    { fullName: "Mr Kelvin Gunya", position: "Elder", image: "/zbc-images/WhatsApp Image 2025-01-28 at 16.51.27.jpeg" },
    { fullName: "Mr Me Mopiha", position: "Church Secretary", image: "/zbc-images/WhatsApp Image 2025-01-28 at 16.49.02.jpeg" },
    {
      fullName: "Nales Petro",
      position: "Deaconess",
      image: "/placeholder.jpg",
    },
  ];
  const third_rank = [
    {
      fullName: "Laston Simenti",
      position: "Chief Deacon",
      image: "/placeholder.jpg",
    },
    {
      fullName: "Humphrey Topesa",
      position: "Deacon",
      image: "/placeholder.jpg",
    },
    {
      fullName: "Mark Chande",
      position: "Deacon",
      image: "/placeholder.jpg",
    },
    {
      fullName: "Albert Botomani",
      position: "Deaconess",
      image: "/placeholder.jpg",
    },
    {
      fullName: "Chrissy Kubwalo",
      position: "Deaconess",
      image: "/placeholder.jpg",
    },
    {
      fullName: "Sakina Mtunga",
      position: "Deaconess",
      image: "/placeholder.jpg",
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


      <div className="container mx-auto px-12 py-16 md:flex md:items-center md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-gray-400 font-heading">
            Our Story
          </h2>
          <h1 className="text-semi_heading_color text-4xl md:text-5xl font-bold mb-6 font-heading bg-gradient-to-r from-brand_color to-blue-600 bg-clip-text ">
            <span className="">Membership</span>
          </h1>
          <p className="mb-8 font-heading_secondary space-y-4 text-gray-700">
            <span className="flex items-center">
              <span className="text-brand_color mr-2">•</span> Over 500 active
              members in our vibrant community
            </span>
            <span className="flex items-center">
              <span className="text-brand_color mr-2">•</span> Diverse
              congregation united in faith and worship
            </span>
            <span className="flex items-center">
              <span className="text-brand_color mr-2">•</span> Led by dedicated
              pastoral leadership
            </span>
            <span className="flex items-center">
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
                    image={person.image}
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
                    image={person.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full  md:mb-0 p-8 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-semi_heading_color mb-4 md:pr-8 font-heading text-center">
            Our <span className="">Identity,</span> Work and Values
          </h1>
          <div class="mt-2 flex justify-end ">
            <span class="relative mt-3 whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                class="absolute top-[-2.3rem] float-right right-[13rem] h-[2.5em] w-fit fill-brand_color"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-12 ">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl   transition-all duration-300 transform  border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 border border-brand_color rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-brand_color"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-border font-semi_heading ">
                Identity
              </h3>
            </div>
            <p className="text-lg font-heading_secondary text-gray-700">
              We are a Christ-centred church growing in the Word of God.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl   transition-all duration-300 transform  border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 border border-brand_color rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-brand_color"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-border font-semi_heading ">
                Our Mission
              </h3>
            </div>
            <p className="text-lg font-heading_secondary text-gray-700">
              As a body of Christ, we let the Holy Spirit to make us give and
              serve God and other people in the City of Zomba, the District of
              Zomba, and beyond.
            </p>
            <p className="text-sm italic mt-4 font-heading_secondary text-gray-500">
              (Mathew 20:28; Mathew 28:18-20, and Acts 1:8)
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl   transition-all duration-300 transform  border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 border border-brand_color rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-brand_color"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-border font-semi_heading ">
                Our Values
              </h3>
            </div>
            <p className="text-lg font-heading_secondary text-gray-700">
              Love, joy, peace, patience, kindness, goodness, faithfulness,
              gentleness, and self-control
            </p>
            <p className="text-sm italic font-heading_secondary mt-4 text-gray-500">
              (Galatians 5:22-23)
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl   transition-all duration-300 transform  border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 border border-brand_color rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-brand_color"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-border font-semi_heading ">
                Our Association
              </h3>
            </div>
            <p className="text-lg font-heading_secondary text-gray-700">
              ZBC is a member of the Baptist Convention of Malawi (BACOMA) and
              further closely works with:
            </p>
            <ul className="list-disc ml-6 mt-4 text-lg font-heading_secondary  space-y-2 text-gray-700">
              <li>Mtendere Baptist Church</li>
              <li>Heidelberg Baptist Church (Germany)</li>
              <li>UBIA Ministries (United States of America)</li>
            </ul>
            <div className="pt-4 flex justify-end">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-second_brand_color py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
                onClick={() => {
                  window.location.href = "/about/association";
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
