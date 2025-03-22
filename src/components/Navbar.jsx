import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logos/newlogo.png";
import { Link } from "react-router-dom";

const Navbar = ({ activeLink }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  
  const navbarAnimation = {
    initial: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 }, 
    visible: { y: 0, opacity: 1 } 
  };
  
  const mobileMenuAnimation = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      
      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsVisible(!scrollingDown);
        // Close mobile menu when scrolling down
        if (scrollingDown && isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);
  
  const handleBookClick = () => {
    window.location.href = "https://unstop.com"; //need to change this**
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center bg-black backdrop-blur-sm border-b border-gray-700 relative z-10">       
        <div className="max-w-7xl mx-auto px-4 flex items-center w-full h-16 justify-between">
          <div className="fmax-w-7xl mx-auto px-4 flex items-center w-full h-16 justify-center">
            <img className="h-10 w-auto mx-auto md:mx-0" src={logo} alt="TEDx Sreyas Logo" /> 
          </div>
          
          <button 
            type="button" 
            className="md:hidden absolute left-4 text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <button 
            type="button" 
            className="absolute right-4 text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs md:text-sm px-3 py-1.5 md:px-5 md:py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" 
            onClick={handleBookClick}
          >
            <span className="hidden md:inline">Get your Passes</span>
            <span className="md:hidden">Get Passes</span>
          </button>
        </div>
      </nav>
      
      <motion.div 
        className="md:hidden bg-black backdrop-blur-sm w-full border-b border-gray-700 overflow-hidden"
        initial="hidden"
        animate={isMobileMenuOpen ? "visible" : "hidden"}
        variants={mobileMenuAnimation}
        transition={{ duration: 0.2 }}
      >
        <div className="py-2">
          <NavLink href="/" label="Home" active={activeLink === 'home'} mobile={true} />
          <NavLink href='/speakers' label="Speakers" active={activeLink === 'speakers'} mobile={true} />
          <NavLink href="/schedule" label="Schedule" active={activeLink === 'schedule'} mobile={true} />
          <NavLink href='/team' label="Team" active={activeLink === 'team'} mobile={true} />
        </div>
      </motion.div>
      
      <motion.div 
        className="hidden md:block bg-black backdrop-blur-sm w-full absolute top-16 z-0" 
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={navbarAnimation}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8 py-3">
          <NavLink href="/" label="Home" active={activeLink === 'home'} />
          <NavLink href='/speakers' label="Speakers" active={activeLink === 'speakers'} />
          <NavLink href="/schedule" label="Schedule" active={activeLink === 'schedule'} />
          <NavLink href='/team' label="Team" active={activeLink === 'team'} />
        </div>
      </motion.div>
    </header>
  );
};

const NavLink = ({ href, label, active, mobile }) => (
  <Link
    to={href}
    className={`
      ${mobile ? 'block w-full text-center py-3' : 'px-4 py-2 rounded-md'} 
      ${active ? 'text-red-500' : 'text-gray-300'} 
      hover:text-red-500 transition-colors duration-200 font-medium
    `}
  >
    {label}
  </Link>
);

export default Navbar;