import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/cards/TeamMemberCard';
import teams from '../consts/teams';
import Navbar from '../components/Navbar';

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('CORE TEAM');
  const teamRoles = Object.keys(teams);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navbar activeLink="team" />
      <main className="relative">
        
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-red-900/10 to-transparent opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2/5 h-2/3 bg-gradient-to-tr from-red-700/5 to-transparent opacity-20 pointer-events-none" />
        
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

          
          <div className="flex justify-center mb-12 space-x-4 flex-wrap gap-4">
            {teamRoles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveTab(role)}
                className={`
                  px-6 py-3 rounded-full transition-all duration-300 
                  ${activeTab === role 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }
                `}
              >
                {role}
              </button>
            ))}
          </div>

          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {teams[activeTab].map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TeamPage;