import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "./assets/newlogo.png"; 

const Navbar = () => {
  const [hideBottomNav, setHideBottomNav] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setHideBottomNav(true); // Move bottom navbar behind on scroll down
      } else {
        setHideBottomNav(false); // Show bottom navbar on scroll up
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar-container">
      {/* Top Navbar - Always Fixed */}
      <nav className="top-navbar">
      <img className="logo" src={logo} alt="TEDx Sreyas Logo" />
      </nav>

      {/* Bottom Navbar - Moves Behind on Scroll */}
      <nav className={`bottom-navbar ${hideBottomNav ? "hidden" : "visible"}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
