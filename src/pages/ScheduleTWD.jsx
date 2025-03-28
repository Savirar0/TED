import React from 'react';
import NavigationBar from '../components/Navbar';

const ScheduleTWD = () => {
    return (
      <div className="min-h-screen bg-black text-white">
          <NavigationBar activeLink="schedule" />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-4 mt-24 text-white">
        
        <div className="w-full max-w-4xl mx-auto">
        
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
          
        
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-2">
              <span className="text-red-600">TEDx</span>
              <span className="font-light">Sreyas Institute</span>
            </h1>
            <p className="text-xl text-gray-400 mt-4">Ideas Worth Spreading</p>
          </div>
          
        
          <div className="flex justify-center mb-16">
            <div className="relative w-64 h-64">
              <div className="absolute w-full h-full rounded-full bg-red-600 opacity-10 animate-pulse"></div>
              <div className="absolute w-48 h-48 top-8 left-8 rounded-full border-2 border-red-600"></div>
              <div className="absolute w-32 h-32 top-16 left-16 rounded-full bg-red-600 opacity-20"></div>
            </div>
          </div>
          
        
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-8 leading-tight">
              All Shall Be <span className="text-red-600 font-bold">Revealed</span>...
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A confluence of ideas, innovation, and inspiration awaits. 
              Where minds connect and perspectives transform.
            </p>
            <p className="text-2xl font-semibold mt-10 text-red-600">
              Stay Tuned!
            </p>
          </div>
          
        
         
          
        
          
        </div>
      </div>
      </div>
    );
  };

export default ScheduleTWD;