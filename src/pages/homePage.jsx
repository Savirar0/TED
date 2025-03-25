import React from "react";
import Mountains from "../components/Mountains.jsx";
import { WhatTEDx } from "../components/WhatTEDx";
import CollegeImageGallerySection from "../components/CollegeImageGallerySection.jsx";
import OurSponsors from "../components/OurSponsors.jsx";

const Homepage = () => {
    return (
      <div className="h-full bg-black">
        <Mountains />
        <WhatTEDx />
        <CollegeImageGallerySection />
        {/*<OurSponsors />*/}
      </div>
    );
};

export default Homepage;