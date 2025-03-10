import React from "react";
import SocialIcon from "../../utils/SocialIcon";
import { motion } from "framer-motion";
import '../../styles/teamMemberCard.css';

const TeamMemberCard = ({ member }) => (
  <motion.div
    className="relative bg-gradient-to-br from-black via-red-900 to-red-800 rounded-xl overflow-hidden
    transform transition-all duration-500 hover:shadow-2xl team-member-card"
    whileHover={{
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.4)"
    }}
  >
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-red-600 to-red-800" />
    <div className="px-6 pt-8 pb-6">
      <div className="team-image-container mb-6 overflow-hidden">
        <div className="team-image-spotlight" />
        <motion.img
          src={member.image}
          alt={`${member.name}'s profile picture`}
          className="team-member-image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="team-image-overlay">
          <span className="text-sm font-bold tracking-wider">TEDx</span>
        </div>
      </div>
      <div className="text-center relative z-10">
        <h3 className="text-2xl font-extrabold mb-2 tracking-wide text-white">{member.name}</h3>
        <div className="h-0.5 w-12 bg-red-500 mx-auto mb-3" />
        <p className="text-gray-200 font-medium mb-4 text-lg">{member.role}</p>
        <div className="flex justify-center space-x-3 mt-3">
            {Object.entries(member.socials).map(([platform, url]) => 
              url !== "#" && (
                <SocialIcon key={platform} href={url} type={platform} />
              )
            )}
          </div>
      </div>
    </div>
  </motion.div>
);

export default TeamMemberCard;