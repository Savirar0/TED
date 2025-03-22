import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logos/newlogo.png";
import { Link } from "react-router-dom";

const Navbar = ({ activeLink }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        if (scrollingDown) {
          setMobileMenuOpen(false);
        }
      }
     
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookClick = () => {
    window.location.href = "https://unstop.com"; //need to change this**
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center bg-black backdrop-blur-sm border-b border-gray-700 relative z-10">      
        <div className="max-w-7xl mx-auto px-4 flex items-center w-full h-16 justify-between">
          <div className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="TEDx Sreyas Logo" />
          </div>
          
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              className="text-gray-300 hover:text-red-500 focus:outline-none mr-4"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <button 
              type="button" 
              className="px-3 py-1.5 text-xs text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-center"
              onClick={handleBookClick}
            >
              Get Passes
            </button>
          </div>
          
          
          <div className="hidden md:flex md:items-center">
            <div className="flex space-x-6 mr-8">
              <NavLink href="/" label="Home" active={activeLink === 'home'} />
              <NavLink href='/speakers' label="Speakers" active={activeLink === 'speakers'} />
              <NavLink href="/schedule" label="Schedule" active={activeLink === 'schedule'} />
              <NavLink href='/team' label="Team" active={activeLink === 'team'} />
            </div>
            
            <button 
              type="button" 
              className="px-4 py-2 text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center"
              onClick={handleBookClick}
            >
              Get your Passes
            </button>
          </div>
        </div>
      </nav>
      
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black backdrop-blur-sm border-b border-gray-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" label="Home" active={activeLink === 'home'} />
            <MobileNavLink href='/speakers' label="Speakers" active={activeLink === 'speakers'} />
            <MobileNavLink href="/schedule" label="Schedule" active={activeLink === 'schedule'} />
            <MobileNavLink href='/team' label="Team" active={activeLink === 'team'} />
          </div>
        </motion.div>
      )}
      
      <motion.div
        className="hidden md:block bg-black backdrop-blur-sm w-full absolute top-16 z-0"
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={navbarAnimation}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8 py-3">
        </div>
      </motion.div>
    </header>
  );
};

const NavLink = ({ href, label, active }) => (
  <Link
    to={href}
    className={`px-3 py-2 rounded-md ${
      active ? 'text-red-500' : 'text-gray-300'
    } hover:text-red-500 transition-colors duration-200 font-medium`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ href, label, active }) => (
  <Link
    to={href}
    className={`block px-3 py-2 rounded-md ${
      active ? 'bg-gray-900 text-red-500' : 'text-gray-300'
    } hover:bg-gray-800 hover:text-red-500 transition-colors duration-200 font-medium`}
  >
    {label}
  </Link>
);

export default Navbar;