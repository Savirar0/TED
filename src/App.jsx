import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Homepage from './pages/homePage';
import Footer from "./components/Footer";
import TeamPage from './pages/teamPage';
import SpeakersTWD from './pages/SpeakersTWD';
import { motion } from "framer-motion";
import TBDPage from './pages/TBDPage';
import ScheduleTWD from './pages/ScheduleTWD';
import BookingsPage from './pages/bookingsPage';
import Speakers from './pages/Speakers'; 
import SchedulePage from './pages/schedulePage';

const App = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === "/" ? "home" : path.substring(1));
  }, [location]);

  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div>
      {!animationComplete && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-red-700 to-black flex items-center justify-center overflow-hidden">
          <svg
            className="absolute w-full h-full z-10"
            viewBox="0 0 50 20"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0,10 
                C 15,0 30,20 45,10 
                S 75,10 90,10"
              stroke="#fff"
              strokeDasharray="4, 2"  
              strokeWidth="0.5"  
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut"
              }}
            />
          </svg>
          
          <motion.div
            className="absolute w-full h-1/2 bg-red-700"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 w-full h-1/2 bg-black"
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
            onAnimationComplete={() => setAnimationComplete(true)}
          />
        </div>
      )}
      {animationComplete && (
       <>
       <Navbar activeLink='home' />
       <div className="h-full bg-gray-50">
         <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/speakers" element={<Speakers />} />
           <Route path="/schedule" element={<SchedulePage />} />
           <Route path="/team" element={<TeamPage />} />
           <Route path="/bookings" element={<BookingsPage />} />

           
           
         </Routes>
       </div>
       <Footer />
     </>
      )}
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
