import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationBar from '../components/Navbar';
import schedule from '../consts/schedule';

const SchedulePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar activeLink="schedule" />

      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8">
          {schedule.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className={`bg-gray-900 rounded-lg p-6 cursor-pointer transition-transform duration-200 ${
                expandedIndex === index ? "shadow-lg border border-red-600" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <motion.div
                  className={`rounded-lg flex items-center justify-center transition-all ${
                    expandedIndex === index ? "h-32 w-32 bg-red-600" : "h-16 w-16 bg-red-600 rounded-full"
                  }`}
                >
                  {expandedIndex === index ? (
                    <img src={event.image} alt={event.title} className="h-full w-full object-cover rounded-lg" />
                  ) : event.type === "Talk" ? (
                    <Mic className="h-8 w-8" />
                  ) : event.type === "Break" ? (
                    <Clock className="h-8 w-8" />
                  ) : (
                    <Calendar className="h-8 w-8" />
                  )}
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="md:text-right">
                  <div className="text-2xl font-bold text-red-600">{event.time}</div>
                  <div className="text-gray-400">{event.type}</div>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-300"
                  >
                    <p className="mt-2 text-lg">{event.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
