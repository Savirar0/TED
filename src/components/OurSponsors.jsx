import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Rotoract from '../assets/logos/spons/outreach/rache3.png';

export const TieredSponsors = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState(null);
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const [carouselPosition, setCarouselPosition] = useState(0);


  const sponsorsByTier = {
    platinum: [
      { id: 1, name: 'Rotaract', logo: { src: Rotoract }, website: 'https://www.instagram.com/rchyderabadeast/', description: 'Rotaract Club Hyderabad East' }

    ],
    gold: [
      { id: 2, name: 'Gold Sponsor 1', logo: '/api/placeholder/220/120', website: 'https://gold1.example.com' },
      { id: 3, name: 'Gold Sponsor 2', logo: '/api/placeholder/220/120', website: 'https://gold2.example.com' },
      { id: 4, name: 'Gold Sponsor 3', logo: '/api/placeholder/220/120', website: 'https://gold3.example.com' },
      { id: 5, name: 'Gold Sponsor 4', logo: '/api/placeholder/220/120', website: 'https://gold4.example.com' },
    ],
    silver: [
      { id: 6, name: 'Silver Sponsor 1', logo: '/api/placeholder/200/110', website: 'https://silver1.example.com' },
      { id: 7, name: 'Silver Sponsor 2', logo: '/api/placeholder/200/110', website: 'https://silver2.example.com' },
      { id: 8, name: 'Silver Sponsor 3', logo: '/api/placeholder/200/110', website: 'https://silver3.example.com' },
      { id: 9, name: 'Silver Sponsor 4', logo: '/api/placeholder/200/110', website: 'https://silver4.example.com' },
    ]
  };


  const additionalSponsors = [
    { id: 10, name: 'Sponsor 1', logo: '/api/placeholder/180/100', website: 'https://sponsor1.example.com' },
    { id: 11, name: 'Sponsor 2', logo: '/api/placeholder/180/100', website: 'https://sponsor2.example.com' },
    { id: 12, name: 'Sponsor 3', logo: '/api/placeholder/180/100', website: 'https://sponsor3.example.com' },
    { id: 13, name: 'Sponsor 4', logo: '/api/placeholder/180/100', website: 'https://sponsor4.example.com' },
    { id: 14, name: 'Sponsor 5', logo: '/api/placeholder/180/100', website: 'https://sponsor5.example.com' },
    { id: 15, name: 'Sponsor 6', logo: '/api/placeholder/180/100', website: 'https://sponsor6.example.com' },
    { id: 16, name: 'Sponsor 7', logo: '/api/placeholder/180/100', website: 'https://sponsor7.example.com' },
    { id: 17, name: 'Sponsor 8', logo: '/api/placeholder/180/100', website: 'https://sponsor8.example.com' },
  ];

  useEffect(() => {
    let interval;
    
    if (!isHovering && !selectedSponsor) {
      interval = setInterval(() => {
        setCarouselPosition(prev => {
          const carouselWidth = additionalSponsors.length * 60; 
          if (prev <= -carouselWidth) return 0;
          return prev - 2;
        });
      }, 20);
    }
    
    return () => clearInterval(interval);
  }, [isHovering, selectedSponsor, additionalSponsors.length]);

  useEffect(() => {
    controls.start({
      x: carouselPosition,
      transition: {
        duration: 0,
        ease: "linear"
      }
    });
  }, [carouselPosition, controls]);

  const handleSponsorClick = (sponsor, isPlatinum = false) => {
    if (!isPlatinum) {
      setSelectedSponsor(sponsor);
    }
  };

  const handleCloseDetail = () => {
    setSelectedSponsor(null);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const renderTierSection = (tier, sponsors, tierColor) => {
    const tierName = tier.charAt(0).toUpperCase() + tier.slice(1);
    const isPlatinum = tier === 'outreach';
    
    return (
      <div className={`mb-24 ${isPlatinum ? 'pt-4' : ''}`}>
        <div className="text-center mb-12">
          <h3 className={`text-4xl font-bold mb-2 ${tierColor}`}>Community Outreach Partner</h3>
          <div className={`h-1 w-20 ${tierColor.replace('text-', 'bg-')} mx-auto mb-8`} />
        </div>
        
        <div className={`grid ${isPlatinum ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-6 px-4`}>
          {sponsors.map(sponsor => (
            <motion.div
              key={sponsor.id}
              className={`
                ${isPlatinum ? 'col-span-1 max-w-2xl mx-auto' : ''}
                flex-shrink-0 bg-gray-900/50 rounded-lg p-6 border border-gray-800 backdrop-blur-sm
                transition-all duration-300 flex items-center justify-center cursor-pointer h-full
                ${!isPlatinum ? 'hover:shadow-lg hover:shadow-gray-800/50' : ''}
              `}
              whileHover={{ scale: 1.03, borderColor: isPlatinum ? '#ffd700' : tier === 'gold' ? '#ffd700' : '#c0c0c0' }}
              onClick={() => isPlatinum ? null : handleSponsorClick(sponsor)}
            >
              {isPlatinum ? (
                <div className="flex flex-col md:flex-row items-center gap-8 py-6">
                  <div className="flex-shrink-0 p-4 bg-black/40 rounded-lg border border-yellow-500/30">
                    <img 
                      src={Rotoract} 
                      alt={`${sponsor.name} logo`} 
                      className="max-w-full w-24 h-24 object-contain opacity-90 hover:opacity-100 transition-opacity" 
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold mb-3 text-yellow-400">{sponsor.name}</h4>
                    <p className="text-gray-300 mb-4">{sponsor.description}</p>
                    <a 
                      href={sponsor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Visit Website
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              ) : (
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`} 
                  className="max-w-full max-h-full opacity-80 hover:opacity-100 transition-opacity" 
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
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
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">
            Our <span className="text-red-600">Partners</span>
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-10" />
          <p className="text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            We extend our heartfelt gratitude to our sponsors for their generous support and contribution to our event.
          </p>
        </motion.div>

        {renderTierSection('outreach', sponsorsByTier.platinum, 'text-gray-300')}
        
        {/* {renderTierSection('gold', sponsorsByTier.gold, 'text-yellow-500')}
        
        {renderTierSection('silver', sponsorsByTier.silver, 'text-gray-400')} */}
        
        {/* <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">We Also Thank</h3>
            <div className="h-0.5 w-16 bg-gray-600 mx-auto mb-8" />
            <p className="text-gray-400 mb-8">These partners have also contributed to the success of our event</p>
          </div>
          
          <div 
            className="w-full overflow-hidden relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div
              ref={carouselRef}
              className="flex items-center gap-12 py-8"
              animate={controls}
            >
              {[...additionalSponsors, ...additionalSponsors].map((sponsor, index) => (
                <motion.div
                  key={`${sponsor.id}-${index}`}
                  className="flex-shrink-0 bg-gray-900/30 rounded-lg p-4 border border-gray-800/50 backdrop-blur-sm transition-all duration-300 w-40 h-28 flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.05, borderColor: '#dc2626' }}
                  onClick={() => handleSponsorClick(sponsor)}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity" 
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div> */}
      </div>

      <AnimatePresence>
        {selectedSponsor && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseDetail}
          >
            <motion.div
              className="bg-gray-900 border-2 border-red-600 rounded-xl p-8 max-w-lg w-full mx-4"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white">{selectedSponsor.name}</h3>
                <button 
                  onClick={handleCloseDetail}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex-shrink-0">
                  <img 
                    src={selectedSponsor.logo} 
                    alt={`${selectedSponsor.name} logo`} 
                    className="w-48 h-32 object-contain" 
                  />
                </div>
                <div>
                  <p className="text-gray-300 mb-4">
                    {selectedSponsor.description || `${selectedSponsor.name} is one of our valued partners who has contributed significantly to making this event possible.`}
                  </p>
                  <a 
                    href={selectedSponsor.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
                  Click outside to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TieredSponsors;