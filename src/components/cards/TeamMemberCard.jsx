import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

const SocialIcon = ({ href, Icon, color }) => {
  if (href === '#') return null;
  
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
      whileHover={{ 
        scale: 1.2,
        color: color
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={24} />
    </motion.a>
  );
};

const socialPlatforms = {
  github: { Icon: Github, color: '#333' },
  linkedin: { Icon: Linkedin, color: '#0077B5' },
  instagram: { Icon: Instagram, color: '#E1306C' }
};

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100 
      }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-purple-600 
        rounded-2xl opacity-75 group-hover:opacity-100 transition duration-500 
        blur-sm group-hover:blur-lg animate-tilt"></div>
      
      <div className="relative bg-black rounded-2xl p-6 ring-1 ring-gray-900/5 
        transform transition-all duration-300 group-hover:scale-[1.02]">
        <div className="relative">
          
          <motion.div 
            className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-600/50"
            whileHover={{ 
              scale: 1.1,
              rotate: 3
            }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={member.image} 
              alt={`${member.name}`} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
              {member.name}
            </h3>
            <p className="text-red-400 font-medium mb-4">
              {member.role}
            </p>

            
            <div className="flex justify-center space-x-4 mt-4 h-8">
              {Object.entries(member.socials)
                .filter(([_, url]) => url !== '#')
                .map(([platform, url]) => {
                  const { Icon, color } = socialPlatforms[platform] || {};
                  return Icon ? (
                    <SocialIcon 
                      key={platform} 
                      href={url} 
                      Icon={Icon} 
                      color={color} 
                    />
                  ) : null;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;