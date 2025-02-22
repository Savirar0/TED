import React from "react";
import icons from "../utils/Icons";

const SocialIcon = ({ href, type }) => {  
    return (
      <a href={href} className="text-white hover:text-red-600 transition-colors duration-200">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d={icons[type]} />
        </svg>
      </a>
    );
  };

  
export default SocialIcon;