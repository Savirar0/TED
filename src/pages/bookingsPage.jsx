import React, { useState } from 'react';
import NavigationBar from '../components/Navbar';
import EventTicket from '../components/EventTicket';

const BookingsPage = () => {
  const [tickets, setTickets] = useState([
    {
      ticketNumber: "XXXXX01",
      date: "31/05/2025",
      issuedBy: "TEDxSreyasInstitute"
    }
  ]);
  const [ticketsAvailable, setTicketsAvailable] = useState(true);

  const handleBookClick = () => {
    window.open("https://unstop.com/o/tUTik8s?utm_medium=Share&utm_source=shortUrl","_blank"); //need to change this**
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationBar activeLink="bookings" />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-2 sm:p-4 mt-16 sm:mt-24 text-white">
       
        <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
         
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className="text-red-600">TEDx</span>
              <span className="font-light">Sreyas Institute</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mt-4">Ideas Worth Spreading</p>
          </div>
         
          {ticketsAvailable ? (
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">Available Tickets</h2>
              <div className="w-full overflow-hidden">
                {tickets.map((ticket, index) => (
                  <div key={index} className="w-full flex justify-center mb-4">
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                      <EventTicket
                        ticketNumber={ticket.ticketNumber}
                        date={ticket.date}
                        issuedBy={ticket.issuedBy}
                      />
                    </div>
                  </div>
                ))}
              </div>
             
              <div className="text-center mt-8 sm:mt-10">
                <button 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base" 
                  onClick={handleBookClick}
                >
                  Book Your Ticket Now
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-12 sm:mb-16">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                  <div className="absolute w-full h-full rounded-full bg-red-600 opacity-10 animate-pulse"></div>
                  <div className="absolute w-36 h-36 sm:w-48 sm:h-48 top-6 left-6 sm:top-8 sm:left-8 rounded-full border-2 border-red-600"></div>
                  <div className="absolute w-24 h-24 sm:w-32 sm:h-32 top-12 left-12 sm:top-16 sm:left-16 rounded-full bg-red-600 opacity-20"></div>
                </div>
              </div>
             
              <div className="text-center mb-12 sm:mb-16 px-2">
                <h6 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 leading-tight">
                  Get ready to experience TEDx at its finest! Ticket bookings for our upcoming event will be revealed soon. Stay tuned for updates and be among the first to secure your spot for an inspiring day of ideas, innovation, and conversations that matter. <span className="text-red-600 font-bold">Stay tuned.</span>
                </h6>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
                  Follow us for announcements and be prepared to book your tickets before they sell out!
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-8 sm:mt-10 text-red-600">
                  TEDx Sreyas Institute Team
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;