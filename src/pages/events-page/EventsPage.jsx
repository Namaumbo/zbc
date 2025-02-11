import React from "react";
import NavBarComponent from "../../components/NavBarComponent";
import EventCardComponent from "../../components/EventCardComponent";
import axios from "axios";

const EventsPage = () => {
  const API_URL = process.env.REACT_APP_API_STRAPI_URL;
  const [events, setEvents] = React.useState([]);
// 
  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        
        // Fetch events from API
        const response = await axios.get(
          `${API_URL}events?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_KEY}`,
            },
          }
        );
        console.log(response.data)
        setEvents(response.data.data);
      } catch (err) {
        // setEvents([]);

        console.log("erero =>>>>>",err);
      } finally {
        // setEvents([]);
      }
    };

    fetchEvents();
  }, [API_URL]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[40rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/events.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h2 className="font-heading text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transform transition-transform hover:scale-105">
              Upcoming News &amp; Church Messages
            </h2>
            <p className="text-lg sm:text-xl text-white font-heading_secondary leading-relaxed">
              Join us for our vibrant church events and activities that bring
              our community together. From worship services to fellowship
              gatherings, youth programs to special celebrations, there's
              something for everyone at Zomba Baptist Church.
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-semi_heading_color text-center mb-12 font-heading">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hello this is ok",
                date: "2 January",
                location: "Zomba Central Business Area",
                imageUrl: "/bg-5.jpg",
                time: "08 : 00am - 09 : 30am"
              },

              {
                title: "Evangelism Exhibition",
                date: "13 march ",
                location: "Zomba Central Business Area",
                imageUrl: "/evangelism.jpg",
                description:"lorem  ipsum indure manuofp alrigt",
                time: "08 : 00am - 09 : 30am"

              },
              {
                title: "Hello this is ok",
                date: "13 December",
                location: "Zomba Central Business Area",
                imageUrl: "/bg-3.jpg",
                time: "08 : 00am - 09 : 30am"

              },
            ].map((event, index) => (
              <div
                key={index}
                className="transform transition-transform hover:scale-105"
              >
                <EventCardComponent data={event} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Anniversary Section */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-semi_heading_color text-center mb-8 font-heading">
            Successful 45th Anniversary Commemoration
          </h3>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="font-heading_secondary">
              The Zomba Baptist Church celebrated its 45th Anniversary on 16th
              November 2024, marking a significant milestone in reflecting on
              God’s faithfulness and the church’s accomplishments. Under the
              theme &quot;Ebenezer: Celebrating God’s Faithfulness,&quot; this
              event commemorated achievements such as the successful repayment
              of the church house loan, excellent leading academic results
              through the Church's schools, and other ministry milestones.
            </p>
            <p className="font-heading_secondary">
              Key activities during the celebration included:
              <ul className="list-disc list-inside mt-4 space-y-2 font-heading_secondary">
                <li>
                  A celebration march from the District Health Office (DHO),
                  through Zomba central business area, to our Church.
                </li>
                <li>
                  An evangelism open-air sermon by Brother Boniface Petulo.
                </li>
                <li>
                  A beautiful worship service, with Kamuzu Barracks Singers from
                  Lilongwe leading the praise and worship.
                </li>
                <li>
                  A powerful sermon on going forward by Rev. Dr. Vincent Chirwa,
                  the Senior Pastor of Blantyre Baptist Church, who was the
                  guest speaker.
                </li>
              </ul>
            </p>

            {/* Image Section */}
            <div className="mt-12 flex justify-center">
              <div className="max-w-4xl w-full">
                <img
                  src="/zbc-images/WhatsApp Image 2025-01-27 at 16.40.38.jpeg" // Replace with your image path
                  alt="45th Anniversary Celebration"
                  className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
                />
                <p className="mt-4 text-center text-gray-600 italic">
                  The 45th Anniversary Celebration at Zomba Baptist Church.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsPage;
