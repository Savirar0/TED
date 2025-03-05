import React from "react";
import Mountains from "../components/Mountains.jsx";
import { WhatTEDx } from "../components/WhatTEDx";
import { SpeakersSection } from "../components/SpeakersSection";


const Homepage = () => {
    return (
      <div className="h-full bg-gray-50 pt-32">
        <Mountains />
        <WhatTEDx />
        <SpeakersSection />
      </div>
    );
};

export default Homepage;