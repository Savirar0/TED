import React, { useState, useEffect } from 'react';

const TedxCountdown = ({ eventDate }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const countdownDate = new Date(eventDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        setIsEventStarted(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, [eventDate]);

  if (isEventStarted) {
    return (
      <div className="text-center text-white bg-red-600 p-6 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold">The Event Has Begun!</h2>
        <p className="text-xl mt-2">Join us and be inspired!</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        {Object.entries(countdown).map(([unit, value]) => (
          <div 
            key={unit} 
            className="bg-black text-white p-4 rounded-lg shadow-xl transform transition-all hover:scale-105"
          >
            <div className="text-5xl font-bold">{value.toString().padStart(2, '0')}</div>
            <div className="text-sm uppercase text-red-500 mt-2">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TedxCountdown;