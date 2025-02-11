import "./App.css";
import "./index.css";
import "flowbite";
import "flowbite-react";

import LandingPage from "./pages/landing-page/LandingPage";
import AboutPage from "./pages/about-page/AboutPage";
import MinistriesPage from "./pages/ministries-page/MinistriesPage.jsx";
import ContactPage from "./pages/contact-page/ContactPage.jsx";
import EventsPage from "./pages/events-page/EventsPage.jsx";
import SermonArchive from "./pages/sermon-archive/SermonArchive.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent.jsx";
import { AboutPageExplaination } from "./pages/about-explaination-page/AboutPageExplaination.jsx";
import MinistryExplaination from "./pages/ministries-page/MinistryExplaination.jsx";
import NavBarComponent from "./components/NavBarComponent.jsx";

function App() {
  return (
    <Router>
      <div>
        <div >
          <NavBarComponent/>
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/services" element={<SermonArchive />} />
          <Route
            path="/about/association"
            element={<AboutPageExplaination />}
          />
          <Route
          path="ministries/ministry-details"
          element={<MinistryExplaination />}
          />
        </Routes>
        <div className="mt-10">
          <FooterComponent />
        </div>
      </div>
    </Router>
  );
}

export default App;
