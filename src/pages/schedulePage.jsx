import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Mic, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationBar from '../components/Navbar';
import schedule from '../consts/schedule';

const SchedulePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const getEventIcon = (type) => {
    switch(type) {
      case "Talk":
        return <Mic className="h-8 w-8" />;
      case "Break":
        return <Clock className="h-8 w-8" />;
      case "Workshop":
        return <Calendar className="h-8 w-8" />;
      case "Check-in":
        return <Calendar className="h-8 w-8" />;
      case "Ceremony":
        return <Calendar className="h-8 w-8" />;
      default:
        return <Calendar className="h-8 w-8" />;
    }
  };
  
  const getEventColor = (type) => {
    switch(type) {
      case "Talk":
        return "bg-red-600";
      case "Break":
        return "bg-blue-600";
      case "Workshop":
        return "bg-green-600";
      case "Check-in":
        return "bg-purple-600";
      case "Ceremony":
        return "bg-yellow-600";
      default:
        return "bg-red-600";
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar activeLink="schedule" />
      <main className="relative">
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-red-900/10 to-transparent opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2/5 h-2/3 bg-gradient-to-tr from-red-700/5 to-transparent opacity-20 pointer-events-none" />
        <div className="h-24" />
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter">
              <span className="text-red-600">Event</span> Schedule
            </h1>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-8" />
            <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Join us for a series of inspiring talks, engaging workshops, and networking opportunities
              that will challenge your thinking and expand your perspective.
            </p>
          </motion.div>
          
          <div className="relative pb-12">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-red-800 via-red-600 to-red-800"></div>
            
            <div className="grid gap-8">
              {schedule.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} md:w-1/2`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className={`hidden md:block absolute -left-3 md:left-auto ${index % 2 === 0 ? 'md:-right-3' : 'md:-left-3'} top-8 w-6 h-6 rounded-full ${getEventColor(event.type)} z-10`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                  ></motion.div>
                  
                  <motion.div
                    className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                      expandedIndex === index 
                        ? "bg-gradient-to-br from-black via-red-950 to-red-900" 
                        : "bg-gradient-to-br from-gray-950 to-gray-900"
                    }`}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: expandedIndex === index 
                        ? "0 25px 50px -12px rgba(220, 38, 38, 0.35)" 
                        : "0 20px 25px -5px rgba(0, 0, 0, 0.2)" 
                    }}
                  >
                    {/* Decorative line */}
                    <div className={`absolute top-0 left-0 w-2 h-full ${getEventColor(event.type)}`}></div>
                    
                    <div
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="p-6 pl-8 cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                          <motion.div
                            className={`flex items-center justify-center transition-all ${
                              expandedIndex === index 
                                ? "h-16 w-16 bg-red-700 rounded-full ring-4 ring-red-500/20" 
                                : "h-14 w-14 bg-red-800 rounded-full"
                            }`}
                            layout
                          >
                            {getEventIcon(event.type)}
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">{event.title}</h3>
                            <div className="flex items-center gap-2 text-gray-400 mt-1">
                              <MapPin className="h-4 w-4" />
                              <span className="text-lg">{event.location}</span>
                            </div>
                            {event.speaker && (
                              <div className="mt-1 text-red-400 font-medium">
                                {event.speaker}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="md:text-right flex md:block items-center justify-between">
                          <div className="text-2xl font-bold text-red-500">{event.time}</div>
                          <div className="text-gray-400 flex items-center gap-1 mt-1">
                            <span>{event.type}</span>
                            <motion.div
                              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-8"
                          >
                            <div className="h-px bg-gradient-to-r from-red-800/30 to-transparent mb-6" />
                            
                            <div className="grid md:grid-cols-3 gap-8">
                              <div className="md:col-span-2">
                                <p className="text-lg text-gray-300 leading-relaxed">{event.description}</p>
                                
                                {event.topics && (
                                  <div className="mt-6 flex flex-wrap gap-2">
                                    {event.topics.map((topic, i) => (
                                      <span 
                                        key={i}
                                        className="px-3 py-1 rounded-full text-sm font-medium bg-red-900/50 text-red-200"
                                      >
                                        {topic}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                              
                              {event.image && (
                                <div className="relative overflow-hidden rounded-lg h-48">
                                  <img 
                                    src={event.image} 
                                    alt={event.title} 
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                </div>
                              )}
                            </div>
                            
                            {event.callToAction && (
                              <motion.button
                                className="mt-6 group flex items-center gap-2 font-bold text-red-500 hover:text-red-400 transition-colors"
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <span>{event.callToAction}</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </motion.button>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchedulePage;