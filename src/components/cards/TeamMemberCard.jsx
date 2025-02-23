import React from "react";
import SocialIcon from "../../utils/SocialIcon";
import '../../styles/teamMemberCard.css';

const TeamMemberCard = ({ member }) => (
    <div className="relative bg-red-800 border-2 border-red-600 rounded-xl overflow-hidden p-6 
                    transform hover:scale-105 transition-transform duration-300 hover:border-red-400 group">
      <div className="w-full h-72 bg-black rounded-lg mb-6 overflow-hidden relative team-member-card">
        <img 
            src={member.image} 
            alt={`${member.name}'s profile picture`}
            className="w-full h-full object-cover rounded-lg transition-all duration-300 team-member-image"
          />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 tracking-wide text-white">{member.name}</h3>
        <p className="text-gray-200 italic mb-6 text-lg">{member.role}</p>
        
        <div className="flex justify-center space-x-6">
          <SocialIcon href={member.socials.github} type="github" />
          <SocialIcon href={member.socials.linkedin} type="linkedin" />
          <SocialIcon href={member.socials.instagram} type="instagram" />
        </div>
      </div>
    </div>
);

export default TeamMemberCard;
