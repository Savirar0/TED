import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CollegeImageGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      src: "src/assets/images/college_gallery/campus.jpg",
      alt: "Campus Life",
      caption: "CAMPUS LIFE",
      description: "Experience the vibrant atmosphere of our beautiful campus grounds, where students gather to study, socialize, and enjoy college life."
    },
    {
      id: 2,
      src: "src/assets/images/college_gallery/auditorium.jpg",
      alt: "Academic Programs",
      caption: "AUDITORIUM",
      description: "Our state-of-the-art auditorium hosts lectures, performances, and special events throughout the academic year."
    },
    {
      id: 3,
      src: "src/assets/images/college_gallery/sa_2.jpeg",
      alt: "college image",
      caption: "STUDENT EVENTS",
      description: "Students participate in a variety of cultural and social events that enhance their college experience and build lasting memories."
    },
    {
      id: 4,
      src: "src/assets/images/college_gallery/library.jpg",
      alt: "Research Opportunities",
      caption: "LIBRARY",
      description: "Our expansive library provides access to thousands of resources, quiet study spaces, and research assistance."
    },
    {
      id: 5,
      src: "src/assets/images/college_gallery/football_aiml1.jpeg",
      alt: "Athletics",
      caption: "ATHLETICS",
      description: "The athletics program offers competitive sports opportunities and promotes physical fitness and team building skills."
    },
    {
      id: 6,
      src: "src/assets/images/college_gallery/seminar.jpeg",
      alt: "Global Programs",
      caption: "SEMINARIES",
      description: "Interactive seminars provide students with opportunities to engage with industry experts and expand their knowledge."
    },
    {
      id: 7,
      src: "src/assets/images/college_gallery/faculty_pp.jpg",
      alt: "Faculty image",
      caption: "FACULTY",
      description: "Our distinguished faculty members are leaders in their fields, dedicated to student success and academic excellence."
    },
    {
      id: 8,
      src: "src/assets/images/college_gallery/pasttedx.jpg",
      alt: "Student Activities",
      caption: "ACTIVITIES",
      description: "Students get to experience a variety of extracurricular activities that develop leadership skills and foster community."
    },
    {
      id: 9,
      src: "src/assets/images/college_gallery/student_activites.jpeg",
      alt: "Innovation",
      caption: "STUDENT ACTIVITIES",
      description: "Engaging student activities create a dynamic campus atmosphere and provide opportunities for personal growth."
    },
  ];

  const handleImageClick = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex]);
  };

  return (
    <div className="w-full bg-black text-white relative py-16">
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-red-900/10 to-transparent opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2/5 h-2/3 bg-gradient-to-tr from-red-700/5 to-transparent opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl">
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
                className="mb-4 break-inside-avoid relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg group cursor-pointer"
                onClick={() => handleImageClick(item, index)}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto rounded-2xl transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 transform-gpu"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-30 p-4 w-full h-full flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20 rounded-2xl">
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 relative bg-gray-800 flex items-center justify-center">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[600px] object-contain"
                  />
                  
                  <button
                    className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    onClick={handlePrev}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  
                  <button
                    className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    onClick={handleNext}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
                
                <div className="w-full md:w-1/3 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">                    
                    <button onClick={handleClose} className="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="mb-4 pb-4">
                    <h3 className="text-xl font-bold mb-2">{selectedImage.caption}</h3>
                    <p className="text-gray-300">{selectedImage.description}</p>
                  </div> 
                  
                  <div className="mt-auto">
                    <p className="text-gray-400 text-sm">
                      {currentIndex + 1} of {galleryItems.length} • Campus Gallery
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollegeImageGallerySection;