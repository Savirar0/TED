import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Homepage from './pages/homePage';
import Footer from "./components/Footer";
import TeamPage from './pages/teamPage';
import SpeakersPage from './pages/speakersPage';
import SchedulePage from './pages/schedulePage';

const App = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === "/" ? "home" : path.substring(1));
  }, [location]);

  return (
    <>
      <Navbar activeLink='home' />
      <div className="h-full bg-gray-50">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
