import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/cards/TeamMemberCard';
import teams from '../consts/teams';
import Navbar from '../components/Navbar';

const TeamHeader = ({ title }) => {
  return (
    <div className="relative my-16">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent top-1/2 -z-0"></div>
      <motion.h1 
        className="text-6xl md:text-7xl font-extrabold text-center relative z-10 tracking-tight inline-block bg-black px-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">{title}</span>
      </motion.h1>
    </div>
  );
};

const TeamGrid = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offset = 30;
      
      document.querySelectorAll('.team-image-container').forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const distanceX = (clientX - cardCenterX) / 25;
        const distanceY = (clientY - cardCenterY) / 25;
        
        if (card.matches(':hover')) {
          card.style.transform = `perspective(1000px) rotateX(${-distanceY}deg) rotateY(${distanceX}deg) scale3d(1.05, 1.05, 1.05)`;
        } else {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="space-y-24" ref={containerRef}>
      {Object.entries(teams).map(([teamName, members], index) => (
        <motion.div
          key={teamName}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="space-y-12"
        >
          <TeamHeader title={teamName} />
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {members.map((member, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ 
                  duration: 0.7,
                  type: "spring",
                  stiffness: 50
                }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeLink="team" />
      
      <main className="relative">
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-red-900/10 to-transparent opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2/5 h-2/3 bg-gradient-to-tr from-red-700/5 to-transparent opacity-20 pointer-events-none" />
        
        <div className="h-24" />
        
        <div className="container mx-auto px-6 py-16 max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter">
              <span className="text-red-600">Meet</span> Our Team
            </h1>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-8" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              The brilliant minds behind TEDx, bringing ideas worth spreading to life through dedication, 
              creativity, and a passion for transformative experiences.
            </p>
          </motion.div>
          
          <TeamGrid />
        </div>
      </main>
    </div>
  );
};

export default TeamPage;