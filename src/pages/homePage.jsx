import React from "react";
import Mountains from "../components/Mountains.jsx";
import { WhatTEDx } from "../components/WhatTEDx";
import CollegeImageGallerySection from "../components/CollegeImageGallerySection.jsx";
import SpeakerCard from "../components/cards/SpeakerCard.jsx";
//import ParallaxMountains from "./scratch/ParallaxMountains.jsx";

const Homepage = () => {
    return (
      <div className="h-full bg-black">
        <Mountains />
        <WhatTEDx />
        
        <CollegeImageGallerySection />
      </div>
    );
};

export default Homepage;