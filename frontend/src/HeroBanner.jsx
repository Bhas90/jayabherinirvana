import React, { useState } from "react";
import heroVideo from "./assets/jayabheri-pinnacle-kokapet.mp4";
import PopupForm from "./PopupForm";

const HeroBanner = () => {
const [showPopup, setShowPopup] = useState(false);

const handleEnquiryClick = () => {
window.dataLayer = window.dataLayer || [];

window.dataLayer.push({
  event: "jayabheri_hero_enquiry_click",
  project_name: "Jayabheri The Pinnacle",
  project_location: "Kokapet",
  lead_source: "Hero Banner CTA",
  page_url: window.location.href,
});

setShowPopup(true);

};

const handleViewDetails = () => {
window.dataLayer = window.dataLayer || [];

window.dataLayer.push({
  event: "jayabheri_view_details_click",
  project_name: "Jayabheri The Pinnacle",
  section_name: "Project Overview",
  page_url: window.location.href,
});

const section = document.getElementById("project-overview");

if (section) {
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

};

return (
<> <section className="w-full bg-[#061f24] mt-[60px] overflow-hidden"> <div className="flex flex-col-reverse lg:flex-row min-h-[calc(100vh-60px)]">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[32%] bg-gradient-to-br from-[#061f24] via-[#083E44] to-[#0B5C63] flex items-center justify-center lg:justify-start">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-10 xl:px-14 py-10 sm:py-12 lg:py-0 text-white text-center lg:text-left">

          <p className="text-[#d8f3f5] text-xs sm:text-sm md:text-base tracking-[3px] sm:tracking-[4px] uppercase font-semibold mb-3 sm:mb-4">
            Jayabheri The Pinnacle
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-serif font-bold uppercase leading-tight">
            A Private
            <br className="hidden lg:block" />
            World Of
            <br className="hidden lg:block" />
            Elegance
          </h1>

          <p className="mt-5 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
            Luxury residences in Kokapet designed to redefine elevated
            living with panoramic views, world-class amenities and
            exceptional connectivity.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-10 max-w-md mx-auto lg:mx-0">
            <div>
              <h3 className="text-[#8ed9df] text-2xl sm:text-3xl md:text-4xl font-bold">
                3.5 & 4.5
              </h3>

              <p className="text-[10px] sm:text-xs uppercase tracking-widest mt-2 text-white/90">
                BHK Residences
              </p>
            </div>

            <div>
              <h3 className="text-[#8ed9df] text-2xl sm:text-3xl md:text-4xl font-bold">
                ₹5.25 Cr*
              </h3>

              <p className="text-[10px] sm:text-xs uppercase tracking-widest mt-2 text-white/90">
                Starting Price
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-center lg:justify-start gap-3 sm:gap-4">

            <button
              onClick={handleEnquiryClick}
              className="bg-[#8ed9df] text-[#061f24] px-7 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wide hover:bg-white transition-all duration-300 shadow-lg"
            >
              Enquire Now
            </button>

            <button
              onClick={handleViewDetails}
              className="border border-[#8ed9df] text-[#8ed9df] px-7 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wide hover:bg-[#8ed9df] hover:text-[#061f24] transition-all duration-300"
            >
              View Details
            </button>

          </div>

          <p className="text-[10px] sm:text-[11px] text-white/70 mt-6 sm:mt-8 leading-relaxed">
            TG RERA No: P02400006797
            <br />
            Building Permit No:
            001689/BP/HMDA/0359/SKP/2023
          </p>

        </div>
      </div>

      {/* RIGHT VIDEO */}
      <div className="w-full lg:w-[68%] h-[320px] sm:h-[420px] md:h-[520px] lg:h-auto relative bg-[#061f24]">

        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061f24]/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#061f24]/40 lg:via-transparent lg:to-transparent" />

      </div>

    </div>
  </section>

  <PopupForm
    show={showPopup}
    onClose={() => setShowPopup(false)}
    popupTitle="Request Jayabheri The Pinnacle Details"
    submitButtonText="Submit Enquiry"
    leadSource="Hero Banner Enquiry"
  />
</>

);
};

export default HeroBanner;
