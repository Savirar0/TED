import React from "react";
import icons from "../assets/Icons";

const SocialIcon = ({ href, type, target = "_blank" }) => {
    return (
      <a href={href} className="text-white hover:text-red-600 transition-colors duration-200" target={target}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d={icons[type]} />
        </svg>
      </a>
    );
  };

  
export default SocialIcon;