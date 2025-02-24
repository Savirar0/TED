import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/cards/TeamMemberCard';
import teams from '../consts/teams';
import Navbar from '../components/Navbar';

const TeamGrid = () => (
  <div className="space-y-20">
    {Object.entries(teams).map(([teamName, members], index) => (
      <motion.div
        key={teamName}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.3 }}
        className="space-y-12"
      >
        <h1 className="text-6xl font-bold text-center relative z-10 tracking-wide">
          {teamName}
        </h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    ))}
  </div>
);

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeLink="team" />
      <div className='h-36' />
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <TeamGrid />
      </main>
    </div>
  );
};

export default TeamPage;
