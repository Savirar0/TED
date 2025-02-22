import React from "react";

const SpeakerCard = ({ name, bio, imageUrl, role }) => (
  <div className="group flex flex-col sm:flex-row bg-gray-800 rounded-xl border-2 border-red-900 hover:border-red-700 transition-colors duration-200 overflow-hidden p-4">
    <div className="flex flex-col items-center p-4 border-2 border-red-700 rounded-lg bg-black">
      <div className="w-64 h-64 relative flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={imageUrl || "/api/placeholder/400/400"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full bg-red-700 text-white text-lg font-bold text-center py-2 mt-2 rounded-b-lg">
        {name}
      </div>
    </div>
    <div className="w-px bg-red-900/20 hidden sm:block" />
    <div className="p-6 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-white">{role}</h2>
      <p className="text-xl text-white mt-2">{bio}</p>
    </div>
  </div>
);

export default SpeakerCard;
