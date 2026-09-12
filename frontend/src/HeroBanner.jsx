import React, { useState } from "react";
import desktopBanner from "./assets/popupimg.png";
import mobileBanner from "./assets/Nirvana_mobile.jpg";
import PopupForm from "./PopupForm";

const HeroBanner = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleEnquiryClick = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "jayabheri_nirvana_hero_enquiry_click",
      project_name: "Jayabheri The Nirvana",
      project_location: "Financial District, Gachibowli",
      lead_source: "Hero Banner CTA",
      page_url: window.location.href,
    });

    setShowPopup(true);
  };

  const handleViewDetails = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "jayabheri_nirvana_view_details_click",
      project_name: "Jayabheri The Nirvana",
      project_location: "Financial District, Gachibowli",
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
    <>
      <section className="w-full mt-[80px] bg-[#161012] overflow-hidden">
        {/* DESKTOP / TABLET HERO */}
        <div className="hidden md:block relative h-[600px] xl:h-[650px] overflow-hidden">
          <img
          src={desktopBanner}
          alt="Jayabheri The Nirvana luxury apartments near Wipro Junction, Financial District"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />

          {/* Dark gradient from right to left */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          <div className="relative z-10 min-h-[calc(100vh-140px)] flex items-center pt-10">
            <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 xl:px-12">
              <div className="flex justify-end">
                <div className="w-full max-w-xl text-white">
                  <p className="text-[#E43E4C] text-sm uppercase tracking-[6px] font-semibold mb-4">
                    Jayabheri The Nirvana
                  </p>

                  <h1 className="font-serif font-bold leading-[1.05] text-[38px] lg:text-[52px] xl:text-[64px]">
                    Taking Your
                    <br />
                    Aspirations Higher
                  </h1>

                  <p className="mt-2 text-xl lg:text-2xl italic font-serif text-white/90">
                    A Life Above the Ordinary
                  </p>

                  <p className="mt-2 text-base text-white/80 leading-relaxed max-w-xl">
                    Premium 3 & 3.5 BHK residences across a 7-acre gated
                    community with 79% open space, located just 1.6 km from
                    Wipro Junction on Q-City Road.
                  </p>

                  {/* 4 cards in 1 row */}
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center">
                      <h3 className="text-[#E43E4C] text-xl lg:text-2xl font-bold">
                        ₹2.04 Cr*
                      </h3>
                      <p className="text-[9px] lg:text-[10px] uppercase tracking-widest mt-1 text-white/80">
                        Onwards
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center">
                      <h3 className="text-[#E43E4C] text-xl lg:text-2xl font-bold">
                        3 & 3.5
                      </h3>
                      <p className="text-[9px] lg:text-[10px] uppercase tracking-widest mt-1 text-white/80">
                        BHK Homes
                      </p>
                    </div>

                    

                    <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center">
                      <h3 className="text-[#E43E4C] text-xl lg:text-2xl font-bold">
                        693
                      </h3>
                      <p className="text-[9px] lg:text-[10px] uppercase tracking-widest mt-1 text-white/80">
                        Residences
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={handleEnquiryClick}
                      className="bg-[#E43E4C] text-white px-8 py-2.5 text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-[#E43E4C] transition-all duration-300 shadow-lg"
                    >
                      Enquire Now
                    </button>

                    <button
                      onClick={handleViewDetails}
                      className="border border-[#E43E4C] text-[#E43E4C] px-8 py-2.5 text-sm font-semibold uppercase tracking-wide hover:bg-[#E43E4C] hover:text-white transition-all duration-300"
                    >
                      View Details
                    </button>
                  </div>

                  <p className="text-[11px] text-white/65 mt-7 leading-relaxed">
                    TS RERA No: P02400003566
                    <br />
                    Images shown are for representation purposes only. T&C Apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE HERO */}
        <div className="md:hidden bg-[#161012]">
          <div className="w-full bg-black">
            <img
              src={mobileBanner}
              alt="Jayabheri The Nirvana luxury apartments near Wipro Junction, Financial District"
              className="w-full h-auto object-cover block"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="relative -mt-10 z-10 px-5 pt-5 pb-8 text-white text-center bg-gradient-to-b from-[#161012] via-[#211619] to-[#161012] rounded-t-[30px]">
            <p className="text-[#E43E4C] text-xs uppercase tracking-[4px] font-semibold mb-3">
              Jayabheri The Nirvana
            </p>

            <h1 className="font-serif font-bold leading-[1.1] text-[38px]">
              Taking Your
              <br />
              Aspirations Higher
            </h1>

            <p className="mt-4 text-lg italic font-serif text-white/90">
              A Life Above the Ordinary
            </p>

            <p className="mt-5 text-sm text-white/75 leading-relaxed">
              Premium 3 & 3.5 BHK residences across a 7-acre gated community
              with 79% open space, just 1.6 km from Wipro Junction on Q-City
              Road.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-7">
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                <h3 className="text-[#E43E4C] text-xl font-bold">
                  ₹2.04 Cr*
                </h3>
                <p className="text-[10px] uppercase tracking-widest mt-1 text-white/80">
                  Onwards
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                <h3 className="text-[#E43E4C] text-xl font-bold">
                  3 & 3.5
                </h3>
                <p className="text-[10px] uppercase tracking-widest mt-1 text-white/80">
                  BHK Homes
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                <h3 className="text-[#E43E4C] text-xl font-bold">
                  7
                </h3>
                <p className="text-[10px] uppercase tracking-widest mt-1 text-white/80">
                  Acres
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                <h3 className="text-[#E43E4C] text-xl font-bold">
                  693
                </h3>
                <p className="text-[10px] uppercase tracking-widest mt-1 text-white/80">
                  Residences
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3">
              <button
                onClick={handleEnquiryClick}
                className="bg-[#E43E4C] text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-[#E43E4C] transition-all duration-300"
              >
                Enquire Now
              </button>

              <button
                onClick={handleViewDetails}
                className="border border-[#E43E4C] text-[#E43E4C] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-[#E43E4C] hover:text-white transition-all duration-300"
              >
                View Details
              </button>
            </div>

            <p className="text-[10px] text-white/55 mt-6 leading-relaxed">
              TS RERA No: P02400003566
              <br />
              Images shown are for representation purposes only. T&C Apply.
            </p>
          </div>
        </div>
      </section>

      <PopupForm
        show={showPopup}
        onClose={() => setShowPopup(false)}
        popupTitle="Request Jayabheri The Nirvana Details"
        submitButtonText="Submit Enquiry"
        leadSource="Jayabheri The Nirvana Hero Banner Enquiry"
      />
    </>
  );
};

export default HeroBanner;
