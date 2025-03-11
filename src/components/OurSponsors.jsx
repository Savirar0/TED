import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const OurSponsors = () => {
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef(null);
  

  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: '/api/placeholder/180/100' },
    { id: 2, name: 'Sponsor 2', logo: '/api/placeholder/180/100' },
    { id: 3, name: 'Sponsor 3', logo: '/api/placeholder/180/100' },
    { id: 4, name: 'Sponsor 4', logo: '/api/placeholder/180/100' },
    { id: 5, name: 'Sponsor 5', logo: '/api/placeholder/180/100' },
    { id: 6, name: 'Sponsor 6', logo: '/api/placeholder/180/100' },
    { id: 7, name: 'Sponsor 7', logo: '/api/placeholder/180/100' },
    { id: 8, name: 'Sponsor 8', logo: '/api/placeholder/180/100' },
    { id: 9, name: 'Sponsor 9', logo: '/api/placeholder/180/100' },
    { id: 10, name: 'Sponsor 10', logo: '/api/placeholder/180/100' },
    { id: 11, name: 'Sponsor 11', logo: '/api/placeholder/180/100' },
    { id: 12, name: 'Sponsor 12', logo: '/api/placeholder/180/100' },
  ];


  const carouselVariants = {
    animate: {
      x: [0, -1800],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
    paused: {
      x: isHovering ? carouselRef.current?.offsetLeft * -1 : 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-red-900/10 to-transparent opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2/5 h-2/3 bg-gradient-to-tr from-red-700/5 to-transparent opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">
            Our <span className="text-red-600">Sponsors</span>
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-10" />
          <p className="text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-16">
            We extend 
          </p>
        </motion.div>
      </div>

      
      <div 
        className="w-full overflow-hidden relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        
        
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        
        <motion.div
          ref={carouselRef}
          className="flex items-center gap-16 py-8"
          variants={carouselVariants}
          animate={isHovering ? "paused" : "animate"}
        >
          
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <motion.div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 bg-gray-900/50 rounded-lg p-6 border border-gray-800 backdrop-blur-sm hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 w-44 h-32 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={sponsor.logo} 
                alt={`${sponsor.name} logo`} 
                className="max-w-full max-h-full opacity-80 hover:opacity-100 transition-opacity" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurSponsors;