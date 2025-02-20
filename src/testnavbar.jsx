import React from "react";
import logo from "./assets/newlogo.png"; // Ensure this path is correct
import "./Navbar.css";

const Testnavbar = () => {
  return (
    <header className="navbar-container">
      <nav className="top-navbar">
        <img className="logo" src={logo} alt="TEDxSreyas Logo" />
      </nav>
    </header>
  );
};

export default Testnavbar;
