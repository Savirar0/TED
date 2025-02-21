import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "./assets/newlogo.png"; 

const Navbar = () => {
  const [hideBottomNav, setHideBottomNav] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setHideBottomNav(true); 
      } else {
        setHideBottomNav(false); 
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar-container">
      
      <nav className="top-navbar">
      <img className="logo" src={logo} alt="TEDx Sreyas Logo" />
      </nav>

      
      <nav className={`bottom-navbar ${hideBottomNav ? "hidden" : "visible"}`}>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#speakers">SPEAKERS</a></li>
          <li><a href="#schedule">SCHEDULE</a></li>
          <li><a href="#team">TEAM</a></li>
          <li><a href="#about">ABOUT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
