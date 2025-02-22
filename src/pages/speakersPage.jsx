import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../components/Navbar';
import SpeakerCard from '../components/cards/SpeakerCard.jsx';

const SpeakersPage = () => {
  const speakers = [
    {
      name: "John Doe",
      bio: "John Doe is an entrepreneur and founder of Doe Industries. He is passionate about technology and innovation. John will share his journey and insights on entrepreneurship.",
      imageUrl: "/api/placeholder/400/400",
      role: "Founder & CEO",
    },
    {
      name: "Jane Smith",
      bio: "Jane Smith is a scientist and researcher at Smith Labs. She is dedicated to solving global challenges through science. Jane will share her research and discoveries.",
      imageUrl: "/api/placeholder/400/400",
      role: "Scientist & Researcher",
    },
    {
      name: "Alex Johnson",
      bio: "Alex Johnson is an artist and designer at Johnson Studios. He is known for his creative work and unique designs. Alex will share his creative process and inspiration.",
      imageUrl: "/api/placeholder/400/400",
      role: "Artist & Designer",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar activeLink="speakers" />
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
