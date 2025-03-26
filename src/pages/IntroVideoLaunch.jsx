import React, { useRef, useState, useEffect } from 'react';
import { Share2, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import QRCodeSVG from '../assets/images/tedxlinkqr.svg';

const TEDxLaunchPage = ({ 
  videoSrc, 
  websiteUrl = "https://tedxsreyasinstitute.in", 
  description = "Ideas Worth Spreading" 
}) => {
  const videoRef = useRef(null);
  const [videoState, setVideoState] = useState({
    ended: false,
    error: null,
    canPlay: false
  });

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => {
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Autoplay prevented or failed:', error);
          setVideoState(prev => ({ ...prev, error: error.message }));
        });
      }
    };

    const handleError = (e) => {
      console.error('Video Error:', e);
      setVideoState(prev => ({ ...prev, error: e.message }));
    };

    const handleEnded = () => {
      setVideoState(prev => ({ ...prev, ended: true }));
    };

    videoElement.addEventListener('canplay', handleCanPlay);
    videoElement.addEventListener('error', handleError);
    videoElement.addEventListener('ended', handleEnded);

    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
      videoElement.removeEventListener('error', handleError);
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, [videoSrc]);

  const handleLaunchWebsite = () => {
    window.open(websiteUrl, '_blank');
  };

  const BackgroundSVG = () => (
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1440 810" 
      className="absolute inset-0 w-full h-full opacity-10 z-0"
    >
      <motion.path
        d="M0,270L48,264C96,258,192,246,288,240C384,234,480,234,576,256.5C672,279,768,325,864,349.5C960,374,1056,374,1152,353.5C1248,333,1344,292,1392,271.5L1440,251L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        fill="#d9534f"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.svg>
  );

  const StarConstellation = () => {
    const stars = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 2
    }));

    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              delay: star.delay,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </div>
    );
  };

  if (videoState.error) {
    return (
      <div className="min-h-screen bg-red-500 text-white flex flex-col items-center justify-center p-4 relative">
        <BackgroundSVG />
        <h2 className="text-2xl mb-4 z-10">Video Error</h2>
        <p className="z-10">{videoState.error}</p>
        <button 
          onClick={handleLaunchWebsite}
          className="mt-4 px-6 py-3 bg-white text-red-500 rounded-full z-10"
        >
          Visit Website
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">
      <BackgroundSVG />
      <StarConstellation />

      {!videoState.ended ? (
        <video 
          ref={videoRef}
          src={videoSrc}
          className="max-w-full max-h-screen relative z-20"
          playsInline
          autoPlay
          controlsList="nodownload"
          preload="auto"
        />
      ) : (
        <div className="text-center w-full max-w-xl px-4 relative z-30">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              delay: 0.2
            }}
          >
            <span className='text-red-50'>TEDx</span> Sreyas Institute
          </motion.h1>

          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10,
              delay: 0.4
            }}
            whileHover={{ scale: 1.05 }}
          >
            {description}
          </motion.p>
          
          <div className="flex flex-col items-center space-y-6">
            <motion.div 
              className="bg-white p-4 rounded-lg cursor-pointer group"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 10,
                delay: 0.6
              }}
              whileHover={{ 
                rotate: [0, -5, 5, -5, 0],
                scale: 1.05
              }}
              onClick={() => window.open(websiteUrl, '_blank')}
            >
              <img 
                src={QRCodeSVG} 
                alt="TEDx Sreyas QR Code" 
                className="w-[200px] h-[200px] object-contain" 
              />
              <div className="text-xs text-gray-600 mt-2 text-center">
                Scan to Explore
              </div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                delay: 0.8
              }}
            >
            </motion.div>

            <motion.div 
              className="flex items-center space-x-2 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Star className="text-yellow-400" size={16} />
              <span>Join the TEDx Sreyas Experience</span>
              <Star className="text-yellow-400" size={16} />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TEDxLaunchPage;