import React, { useState } from "react";
import desktopBanner from "./assets/nirvana-banner.png";
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

        {/* =====================================================
            DESKTOP / TABLET HERO
        ===================================================== */}
        <div className="hidden md:block relative min-h-[600px] xl:min-h-[650px] bg-[#161012] overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={desktopBanner}
              alt="Jayabheri The Nirvana luxury apartments near Wipro Junction, Financial District"
              className="
                absolute
                left-0
                top-0
                w-full
                h-full
                object-cover
                object-left-center
              "
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 min-h-[600px] xl:min-h-[650px] flex items-center">
            <div className="max-w-7xl mx-auto w-full px-5 lg:px-8 xl:px-12">

              <div className="flex justify-end">

                <div className="w-full max-w-[580px] py-10">

                  {/* MAIN HEADING */}
                  <h1
                    className="
                      font-serif
                      font-bold
                      leading-[1.04]
                      text-[38px]
                      lg:text-[52px]
                      xl:text-[62px]
                      text-[#E43E4C]
                    "
                  >
                    Taking Your
                    <br />
                    Aspirations Higher
                  </h1>

                  {/* TAGLINE */}
                  <p
                    className="
                      mt-3
                      text-xl
                      lg:text-2xl
                      italic
                      font-serif
                      text-[#E43E4C]
                    "
                  >
                    A Life Above the Ordinary
                  </p>

                  {/* STATS */}
                  <div className="grid grid-cols-3 gap-3 mt-7">

                    <div
                      className="
                        border
                        border-[#E43E4C]/50
                        rounded-2xl
                        p-4
                        text-center
                      "
                    >
                      <h3 className="text-[#E43E4C] text-xl lg:text-2xl font-bold">
                        ₹2.04 Cr*
                      </h3>

                      <p className="text-[9px] lg:text-[10px] uppercase tracking-widest mt-1 text-[#E43E4C]">
                        Onwards
                      </p>
                    </div>

                    <div
                      className="
                        border
                        border-[#E43E4C]/50
                        rounded-2xl
                        p-4
                        text-center
                      "
                    >
                      <h3 className="text-[#E43E4C] text-xl lg:text-2xl font-bold">
                        3 & 3.5
                      </h3>

                      <p className="text-[9px] lg:text-[10px] uppercase tracking-widest mt-1 text-[#E43E4C]">
                        BHK Homes
                      </p>
                    </div>

                    <div
                      className="
                        border
                        border-[#E43E4C]/50
                        rounded-2xl
                        p-4
                        text-center
                      "
                    >
                      <h3 className="text-[#E43E4C] text-xl lg:text-2xl font-bold">
                        693
                      </h3>

                      <p className="text-[9px] lg:text-[10px] uppercase tracking-widest mt-1 text-[#E43E4C]">
                        Residences
                      </p>
                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="mt-6 flex flex-wrap gap-3">

                    <button
                      onClick={handleEnquiryClick}
                      className="
                        bg-[#E43E4C]
                        text-white
                        px-8
                        py-3
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wide
                        hover:bg-white
                        hover:text-[#E43E4C]
                        transition-all
                        duration-300
                        shadow-lg
                      "
                    >
                      Enquire Now
                    </button>

                    <button
                      onClick={handleViewDetails}
                      className="
                        border
                        border-[#E43E4C]
                        text-[#E43E4C]
                        px-8
                        py-3
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wide
                        hover:bg-[#E43E4C]
                        hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      View Details
                    </button>

                  </div>

                  {/* RERA */}
                  <p className="text-[11px] text-[#E43E4C] mt-6 leading-relaxed">
                    TS RERA No: P02400003566
                    <br />
                    Images shown are for representation purposes only. T&C Apply.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>


        {/* =====================================================
            MOBILE HERO
        ===================================================== */}
        <div className="md:hidden bg-[#161012]">

          {/* MOBILE IMAGE */}
          <div className="w-full bg-black overflow-hidden">

            <img
              src={mobileBanner}
              alt="Jayabheri The Nirvana luxury apartments near Wipro Junction, Financial District"
              className="
                w-full
                h-auto
                object-contain
                block
              "
              loading="eager"
              fetchPriority="high"
            />

          </div>


          {/* MOBILE CONTENT */}
          <div
            className="
              relative
              -mt-7
              z-10
              px-5
              pt-7
              pb-8
              text-center
              bg-[#161012]
              rounded-t-[30px]
            "
          >

            {/* MAIN HEADING */}
            <h1
              className="
                font-serif
                font-bold
                leading-[1.1]
                text-[36px]
                text-[#E43E4C]
              "
            >
              Taking Your
              <br />
              Aspirations Higher
            </h1>

            {/* TAGLINE */}
            <p
              className="
                mt-4
                text-lg
                italic
                font-serif
                text-[#E43E4C]
              "
            >
              A Life Above the Ordinary
            </p>


            {/* MOBILE STATS */}
            <div className="grid grid-cols-2 gap-3 mt-7">

              <div
                className="
                  border
                  border-[#E43E4C]/50
                  rounded-2xl
                  p-4
                "
              >
                <h3 className="text-[#E43E4C] text-xl font-bold">
                  ₹2.04 Cr*
                </h3>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-widest
                    mt-1
                    text-[#E43E4C]
                  "
                >
                  Onwards
                </p>
              </div>

              <div
                className="
                  border
                  border-[#E43E4C]/50
                  rounded-2xl
                  p-4
                "
              >
                <h3 className="text-[#E43E4C] text-xl font-bold">
                  3 & 3.5
                </h3>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-widest
                    mt-1
                    text-[#E43E4C]
                  "
                >
                  BHK Homes
                </p>
              </div>

              <div
                className="
                  border
                  border-[#E43E4C]/50
                  rounded-2xl
                  p-4
                "
              >
                <h3 className="text-[#E43E4C] text-xl font-bold">
                  7
                </h3>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-widest
                    mt-1
                    text-[#E43E4C]
                  "
                >
                  Acres
                </p>
              </div>

              <div
                className="
                  border
                  border-[#E43E4C]/50
                  rounded-2xl
                  p-4
                "
              >
                <h3 className="text-[#E43E4C] text-xl font-bold">
                  693
                </h3>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-widest
                    mt-1
                    text-[#E43E4C]
                  "
                >
                  Residences
                </p>
              </div>

            </div>


            {/* MOBILE BUTTONS */}
            <div className="mt-7 flex flex-col gap-3">

              <button
                onClick={handleEnquiryClick}
                className="
                  bg-[#E43E4C]
                  text-white
                  px-8
                  py-3.5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  hover:bg-white
                  hover:text-[#E43E4C]
                  transition-all
                  duration-300
                "
              >
                Enquire Now
              </button>

              <button
                onClick={handleViewDetails}
                className="
                  border
                  border-[#E43E4C]
                  text-[#E43E4C]
                  px-8
                  py-3.5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  hover:bg-[#E43E4C]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                View Details
              </button>

            </div>


            {/* MOBILE RERA */}
            <p
              className="
                text-[10px]
                text-[#E43E4C]
                mt-6
                leading-relaxed
              "
            >
              TS RERA No: P02400003566
              <br />
              Images shown are for representation purposes only. T&C Apply.
            </p>

          </div>
        </div>

      </section>


      {/* =====================================================
          POPUP FORM
      ===================================================== */}
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
