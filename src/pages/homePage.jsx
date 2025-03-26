import React from "react";
{/*import TEDxLanding from "../components/TEDxLanding";*/}
import WhatTEDx from "../components/WhatTEDx";
import CollegeImageGallerySection from "../components/CollegeImageGallerySection";
import MountainSection from "../components/Mountains";
import TieredSponsors from "../components/OurSponsors";

const Homepage = () => {
    return (
      <div className="h-full bg-black">
        {/*<TEDxLanding />*/}
        <MountainSection />
        <WhatTEDx />
        <CollegeImageGallerySection />
        <TieredSponsors />
      </div>
    );
};

export default Homepage;