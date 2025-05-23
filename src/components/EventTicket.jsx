import React, { useState } from 'react';

const EventTicket = ({ ticketNumber = "XXXXX01", date = "31/05/2025", issuedBy = "TEDxSreyasInstitute" }) => {
  const [hover, setHover] = useState(false);
  
  return (
    <div 
      className="flex justify-center items-center w-full max-w-3xl mx-auto my-8 transition-transform duration-300"
      style={{ transform: hover ? 'scale(1.02)' : 'scale(1)' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Stub */}
      <div className="relative bg-red-800 h-64 w-64 text-white p-5 flex flex-col">
        {/* Top corner decoration */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-l-8 border-t-red-700 border-l-red-600"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-8 border-l-8 border-b-red-700 border-l-red-600"></div>
        
        {/* Top section */}
        <div className="flex items-center text-xs uppercase">
          <span className="font-bold">TED</span>
          <span className="mx-2">|</span>
          <span>X Sreyas Institute</span>
        </div>
        
        {/* Number */}
        <div className="text-8xl font-bold opacity-80 mt-4">1</div>
        
        {/* Invite */}
        <div className="absolute bottom-12 right-5 text-right">
          <div className="w-10 h-0.5 bg-white mb-2 ml-auto"></div>
          <div className="text-sm">The<br />Enthusiasts<br />Dias</div>
        </div>
      </div>
      
      {/* Check */}
      <div className="relative bg-white h-64 w-96 p-8 text-black">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-8 border-r-8 border-t-red-700 border-r-white"></div>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-b-8 border-r-8 border-b-red-700 border-r-white"></div>
        
        {/* Big title */}
        <div className="text-4xl font-black leading-tight">
          You're <br/> Invited!
        </div>
        
        {/* Number */}
        <div className="absolute top-10 right-10 text-2xl text-red-600 font-bold">#1</div>
        
        {/* Info sections */}
        <div className="flex mt-6 text-sm">
          <div className="mr-6">
            <div className="w-10 h-0.5 bg-red-600 mb-1"></div>
            <div className="uppercase text-xs font-semibold">Date</div>
            <div>{date}</div>
          </div>
          
          <div className="mr-6">
            <div className="w-10 h-0.5 bg-red-600 mb-1"></div>
            <div className="uppercase text-xs font-semibold">Issued By</div>
            <div>{issuedBy}</div>
          </div>
          
          <div>
            <div className="w-10 h-0.5 bg-red-600 mb-1"></div>
            <div className="uppercase text-xs font-semibold">Ticket Number</div>
            <div>{ticketNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTicket;