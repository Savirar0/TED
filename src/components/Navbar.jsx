import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logos/newlogo.png";
import { Link } from "react-router-dom";

const Navbar = ({ activeLink }) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navbarAnimation = {
    initial: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 }, 
    visible: { y: 0, opacity: 1 } 
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      
      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsVisible(!scrollingDown);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-center h-16 items-center">
            <img className="h-12 w-auto" src={logo} alt="TEDx Sreyas Logo" />
        </div>
      </nav>


      <motion.div 
        className="bg-gray-900/95 backdrop-blur-sm w-full absolute top-16 z-0" 
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={navbarAnimation}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4">
        <NavLink href="/" label="Home" active={activeLink === 'home'} />
            <NavLink href='/speakers' label="Speakers" active={activeLink === 'speakers'} />
            <NavLink href="/schedule" label="Schedule" active={activeLink === 'schedule'} />
            <NavLink href='/team' label="Team" active={activeLink === 'team'} />
        </div>
      </motion.div>
    </header>
  );
};


const NavLink = ({ href, label, active }) => (
  <Link
      to={href}
      className={`px-4 py-2 rounded-md ${
          active ? 'text-red-500' : 'text-gray-300'
      } hover:text-red-500 transition-colors duration-200 font-medium`}
  >
      {label}
  </Link>
);

export default Navbar;
