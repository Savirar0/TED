import React from "react";
{/*import TEDxLanding from "../components/TEDxLanding";*/}
import WhatTEDx from "../components/WhatTEDx";
import CollegeImageGallerySection from "../components/CollegeImageGallerySection";
import MountainSection from "../components/Mountains";

const Homepage = () => {
    return (
      <div className="h-full bg-black">
        {/*<TEDxLanding />*/}
        <MountainSection />
        <WhatTEDx />
        <CollegeImageGallerySection />
      </div>
    );
};

export default Homepage;