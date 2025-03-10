import React from 'react';
import { motion } from 'framer-motion';

export const WhatTEDx = () => {
  return (
    <section className="bg-black text-white py-24 relative">
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
            What is <span className="text-red-600">TED</span>x?
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-10" />
          <p className="text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. 
            These events are driven by a passionate community who celebrate locally-driven ideas and elevate them to a global stage. 
            At TEDx Sreyas Institute, we believe in the power of ideas to inspire, challenge, and transform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatTEDx;