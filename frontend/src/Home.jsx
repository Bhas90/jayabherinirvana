import React, { useEffect, useState } from "react";

import AdvantageSection from "./AdvantageSection";
import ProjectOverview from "./ProjectOverview";
import AmenitiesSection from "./AmenitiesSection";

import ConnectivitySection from "./ConnectivitySection";
import WhatsAppButton from "./WhatsAppButton";
import PopupForm from "./PopupForm";
import AttentionGrabberButton from "./AttentionGrabberButton";
import StudyAbroad from "./StudyAbroad";

import FaqSection from "./FaqSection";
import HeroBanner from "./HeroBanner";
import GallerySection from "./GallerySection"

import DownloadBrochureButton from "./DownloadBrochureButton"
import PricingSection from "./PricingSection";
import LocationAdvantages from "./LocationAdvantages";


const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
      <HeroBanner />
      <AttentionGrabberButton/>
      <div id="project-overview">
        <h2 className="section-heading"></h2>
        <ProjectOverview />
      </div>
      
      <div id="amenities">
        <h2 className="section-heading"></h2>
        <AmenitiesSection />
      </div>
      <GallerySection/>
      <DownloadBrochureButton/>
     
      
       <PricingSection/>
      <div id="NRI-support">
        <h2 className="section-heading"></h2>
        <AdvantageSection />
      </div>
      
      <div id="connectivity">
        <h2 className="section-heading"></h2>
        <ConnectivitySection />
        <LocationAdvantages/>
      </div>
      
      <div id="faq">
        <h2 className="section-heading"></h2>
        <FaqSection />
      </div>
      
      <WhatsAppButton />
      <PopupForm show={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Home;
