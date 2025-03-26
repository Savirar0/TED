import React from "react";
{/*import TEDxLanding from "../components/TEDxLanding";*/}
import WhatTEDx from "../components/WhatTEDx";
import CollegeImageGallerySection from "../components/CollegeImageGallerySection";

const Homepage = () => {
    return (
      <div className="h-full bg-black">
        {/*<TEDxLanding />*/}
        <WhatTEDx />
        <CollegeImageGallerySection />
      </div>
    );
};

export default Homepage;