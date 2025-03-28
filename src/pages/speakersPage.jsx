import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../components/Navbar';
import SpeakerCard from '../components/cards/SpeakerCard.jsx';
import speakers from '../consts/speakers.jsx';

const SpeakersPage = () => { 
  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar activeLink="speakers" />
      <div className='h-36' />
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div 
          className="flex flex-col gap-8 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <SpeakerCard {...speaker} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default SpeakersPage;




