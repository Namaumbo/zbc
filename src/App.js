import './App.css';
import './index.css';
import LandingPage from './pages/landing-page/LandingPage';
import AboutPage from './pages/about-page/AboutPage';
import MinistriesPage from './pages/ministries-page/MinistriesPage.jsx';
import ContactPage from './pages/contact-page/ContactPage.jsx';
import EventsPage from './pages/events-page/EventsPage.jsx';
import SermonArchive from './pages/sermon-archive/SermonArchive.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/sermons" element={<SermonArchive />} />
        </Routes>
        <FooterComponent/>
      </div>
    </Router>
  );
}

export default App;
