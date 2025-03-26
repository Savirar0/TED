import React from "react";
import IntroVideoLaunch from "./IntroVideoLaunch.jsx";
import video from '../assets/videos/intro.mp4'

const Homepage = () => {
    return (
      <div className="h-full bg-black">
        {/* <TEDxLanding />
        <WhatTEDx />
        <CollegeImageGallerySection /> */}
        <IntroVideoLaunch
        websiteUrl="https://www.tedxsreyasinstitute.in"
        videoSrc={video}
         />
      </div>
    );
};

export default Homepage;