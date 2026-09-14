import React, { useState } from "react";
import PopupForm from "./PopupForm";
import {
  Building2,
  ArrowRight,
  Maximize2,
  Home,
} from "lucide-react";

import blocksABDEPlan from "./assets/block-a-b-d-e.png";
import blockCPlan from "./assets/block-c.png";

const pricingRows = [
  {
    tower: "Blocks A, B, D & E",
    price: "₹10,600 / SFT",
    image: blocksABDEPlan,
    imageAlt:
      "Typical Floor Plan for Jayabheri The Nirvana Blocks A B D and E",
    details: [
      {
        facing: "East",
        configuration: "3 BHK",
        size: "1920 SFT",
      },
      {
        facing: "East",
        configuration: "3 BHK",
        size: "2190 SFT",
      },
      {
        facing: "West",
        configuration: "3.5 BHK",
        size: "2225 SFT",
      },
    ],
  },
  {
    tower: "Block C",
    price: "₹10,850 / SFT",
    image: blockCPlan,
    imageAlt:
      "Typical Floor Plan for Jayabheri The Nirvana Block C",
    details: [
      {
        facing: "East",
        configuration: "3.5 BHK",
        size: "2225 SFT",
      },
      {
        facing: "West",
        configuration: "3.5 BHK",
        size: "2225 SFT",
      },
    ],
  },
];

const PricingSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPriceType, setSelectedPriceType] = useState("");

  const openPopup = (tower) => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "jayabheri_nirvana_price_request_click",
      project_name: "Jayabheri The Nirvana",
      project_location: "Financial District, Gachibowli",
      block: tower,
      lead_source: "Pricing Section",
      page_url: window.location.href,
    });

    setSelectedPriceType(tower);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPriceType("");
  };

  return (
    <section
      id="price"
      className="relative bg-gradient-to-br from-[#FFF7F7] via-white to-[#FDEBED] py-16 md:py-24 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_left,#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#E43E4C]/15 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#7D1F29]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#E43E4C] text-xs sm:text-sm uppercase tracking-[5px] font-semibold mb-3">
            Pricing & Floor Plans
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111827]">
            Choose Your
            <span className="italic text-[#E43E4C]"> Residence</span>
          </h2>

          <div className="w-24 h-[3px] bg-[#E43E4C] mx-auto mt-5 rounded-full" />

          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 mt-6 leading-relaxed">
            Explore available 3 & 3.5 BHK residences at Jayabheri The Nirvana
            with block-wise pricing, facing and floor-plan details.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-8">
          {pricingRows.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[2rem]
                overflow-hidden
                border
                border-[#E43E4C]/20
                shadow-xl
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              {/* Floor Plan Image */}
              <div className="relative bg-white overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="
                    w-full
                    h-[350px]
                    sm:h-[430px]
                    object-contain
                    p-4
                    transition-transform
                    duration-500
                    group-hover:scale-[1.02]
                  "
                  loading="lazy"
                />

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#111827]/90 text-white flex items-center justify-center">
                  <Maximize2 size={18} />
                </div>
              </div>

              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#171213] to-[#2A171A] px-6 py-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-14 h-14 rounded-full bg-[#E43E4C]/15 flex items-center justify-center shrink-0">
                      <Building2 className="w-7 h-7 text-[#E43E4C]" />
                    </div>

                    <div>
                      <h3 className="text-white text-xl sm:text-2xl font-bold">
                        {item.tower}
                      </h3>

                      
                    </div>
                  </div>
                  <div className="
                      shrink-0
                      inline-flex
                      items-center
                      justify-center
                      bg-[#E43E4C]
                      text-white
                      px-5
                      py-3
                      rounded-full
                      font-bold
                      text-sm
                      uppercase
                      tracking-wide
                      shadow-md
                    ">
                      ● READY TO MOVE
                    </div>
                 
                </div>
              </div>

              {/* Configuration Details */}
              <div className="p-5 sm:p-6">
                <div className="space-y-4">
                  {item.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="
                        grid
                        grid-cols-3
                        gap-3
                        rounded-2xl
                        bg-[#FFF5F5]
                        border
                        border-[#E43E4C]/15
                        p-4
                        hover:border-[#E43E4C]/40
                        transition
                      "
                    >
                      {/* Facing */}
                      <div>
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-500">
                          Facing
                        </p>

                        <p className="text-[#111827] text-sm sm:text-base font-bold mt-1">
                          {detail.facing}
                        </p>
                      </div>

                      {/* Configuration */}
                      <div>
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-500">
                          Configuration
                        </p>

                        <div className="flex items-center gap-1.5 mt-1">
                          <Home
                            size={15}
                            className="text-[#E43E4C] hidden sm:block"
                          />

                          <p className="text-[#111827] text-sm sm:text-base font-bold">
                            {detail.configuration}
                          </p>
                        </div>
                      </div>

                      {/* Size */}
                      <div>
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-500">
                          Size
                        </p>

                        <p className="text-[#111827] text-sm sm:text-base font-bold mt-1">
                          {detail.size}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

               
              </div>
            </div>
          ))}
        </div>

        {/* Starting Price Highlight */}
        

        {/* Disclaimer */}
        <div className="mt-7 p-5 rounded-2xl bg-white border border-[#E43E4C]/20">
          <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
            *Indicative base pricing is calculated on the applicable per SFT
            rate. Final property cost may vary depending on floor, unit,
            facing, availability, applicable taxes, registration, amenities,
            statutory charges and other charges.
          </p>
        </div>
      </div>

      {/* Popup */}
      <PopupForm
        show={showPopup}
        onClose={closePopup}
        popupTitle={
          selectedPriceType
            ? `Get Pricing - ${selectedPriceType}`
            : "Get Jayabheri The Nirvana Pricing"
        }
        submitButtonText="Get Latest Pricing"
        leadSource={
          selectedPriceType
            ? `Jayabheri The Nirvana Price Request - ${selectedPriceType}`
            : "Jayabheri The Nirvana Price Request"
        }
      />
    </section>
  );
};

export default PricingSection;
