import React, { useState } from 'react';
import SocialIcon from "../utils/SocialIcon";
import speakers from '../consts/speakers';

export const SpeakersSection = () => {
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);

  const nextSpeakers = () => {
    setCurrentSpeakerIndex((prev) => 
      prev + 3 < speakers.length ? prev + 1 : prev
    );
  };

  const prevSpeakers = () => {
    setCurrentSpeakerIndex((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  const displayedSpeakers = speakers.slice(currentSpeakerIndex, currentSpeakerIndex + 3);

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Our Speakers</h2>
        
        <div className="relative">
          
          <button 
            onClick={prevSpeakers} 
            disabled={currentSpeakerIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 
              bg-gray-700 text-white p-2 rounded-full disabled:opacity-50"
          >
            &lt;
          </button>
          
          <button 
            onClick={nextSpeakers} 
            disabled={currentSpeakerIndex + 3 >= speakers.length}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 
              bg-gray-700 text-white p-2 rounded-full disabled:opacity-50"
          >
            &gt;
          </button>

          
          <div className="grid grid-cols-3 gap-8">
            {displayedSpeakers.map((speaker, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={speaker.img} 
                  alt={speaker.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">{speaker.name}</h3>
                  <div className="flex justify-center space-x-4">
                    <SocialIcon 
                      href={speaker.instagram} 
                      type="instagram" 
                      className="text-2xl hover:text-pink-500 transition" 
                    />
                    <SocialIcon 
                      href={speaker.linkedin} 
                      type="linkedin" 
                      className="text-2xl hover:text-blue-500 transition" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;