import React from 'react';
import { motion } from 'framer-motion';

const CollegeImageGallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      src: "src/assets/images/college_gallery/campus.jpg",
      alt: "Campus Life",
      caption: "CAMPUS LIFE",
    },
    {
      id: 2,
      src: "src/assets/images/college_gallery/auditorium.jpg",
      alt: "Academic Programs",
      caption: "AUDITORIUM",
    },
    {
      id: 3,
      src: "src/assets/images/college_gallery/college1.jpg",
      alt: "Alumni Network",
      caption: "College",
    },
    {
      id: 4,
      src: "src/assets/images/college_gallery/library.jpg",
      alt: "Research Opportunities",
      caption: "LIBRARY",
    },
    {
      id: 5,
      src: "src/assets/images/college_gallery/football_aiml1.jpeg",
      alt: "Athletics",
      caption: "ATHLETICS",
    },
    {
      id: 6,
      src: "/api/placeholder/400/420",
      alt: "Global Programs",
      caption: "GLOBAL",
    },
    {
      id: 7,
      src: "/api/placeholder/400/480",
      alt: "Arts & Culture",
      caption: "ARTS",
    },
    {
      id: 8,
      src: "/api/placeholder/400/450",
      alt: "Student Activities",
      caption: "ACTIVITIES",
    },
    {
      id: 9,
      src: "/api/placeholder/400/520",
      alt: "Innovation",
      caption: "INNOVATION",
    },
  ];

  return (
    <div className="w-full bg-black text-white relative py-16">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-red-900/10 to-transparent opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2/5 h-2/3 bg-gradient-to-tr from-red-700/5 to-transparent opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading section with animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter">
            Campus <span className="text-red-600">Gallery</span>
          </h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-8" />
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Experience the vibrant atmosphere of our campus through this visual journey.
            Each image captures the essence of student life and the diverse opportunities
            that await at our institution.
          </p>
        </motion.div>
        
        {/* Gallery section with animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4"
        >
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="mb-4 break-inside-avoid relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto rounded-lg transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-150 transform-gpu"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-30 p-4 w-full h-full flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20">
                    <h3 className="text-white text-xl font-bold tracking-wider text-center">
                      {item.caption}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollegeImageGallerySection;