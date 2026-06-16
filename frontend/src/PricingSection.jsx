import React, { useState } from "react";
import PopupForm from "./PopupForm";
import { Building2, ArrowRight } from "lucide-react";

const pricingRows = [
  {
    tower: "Tower A",
    configuration: "3 BHK Residences",
    size: "3587 - 3678 SFT",
    units: "Unit 1, 2, 3 & 4",
    facing: "East & West Facing",
    price: "₹5.25 Cr*",
    description:
      "Premium residences with large balconies, home office space and panoramic views.",
  },
  {
    tower: "Tower B",
    configuration: "4 BHK Residences",
    size: "4545 - 4622 SFT",
    units: "Unit 1, 2, 3 & 4",
    facing: "East & West Facing",
    price: "₹6.65 Cr*",
    description:
      "Ultra-luxury residences designed for spacious family living and premium comfort.",
  },
];

const PricingSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPriceType, setSelectedPriceType] = useState("");

  const openPopup = (type) => {
    setSelectedPriceType(type);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPriceType("");
  };

  return (
    <section
      id="price"
      className="relative bg-gradient-to-b from-white via-[#f4f9fa] to-[#edf7f8] py-16 md:py-20 px-4 overflow-hidden"
    >
      <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[4px] text-[#0B5C63] font-semibold mb-3">
            Pricing & Availability
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#061f24]">
            Request Latest Price
          </h2>

          <div className="w-24 h-[3px] bg-[#0B5C63] mx-auto mt-5 rounded-full"></div>

          <p className="max-w-3xl mx-auto text-gray-600 mt-6">
            Get updated pricing, availability, floor plans, payment plans,
            brochure and exclusive offers for Jayabheri The Pinnacle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {pricingRows.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-[#0B5C63]/10 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-[#061f24] px-6 py-5">
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#8ed9df]/10 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-[#8ed9df]" />
                  </div>

                  <div>
                    <h3 className="text-white text-2xl font-bold">
                      {item.tower}
                    </h3>

                    <p className="text-[#8ed9df] text-sm">
                      {item.configuration}
                    </p>
                  </div>

                </div>
              </div>

              <div className="p-6">

                <div className="grid grid-cols-2 gap-4">

                  <div className="bg-[#f4f9fa] rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Size
                    </p>

                    <p className="text-[#061f24] font-bold mt-1">
                      {item.size}
                    </p>
                  </div>

                  <div className="bg-[#f4f9fa] rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Units
                    </p>

                    <p className="text-[#061f24] font-bold mt-1">
                      {item.units}
                    </p>
                  </div>

                  <div className="bg-[#f4f9fa] rounded-2xl p-4 col-span-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Facing
                    </p>

                    <p className="text-[#061f24] font-bold mt-1">
                      {item.facing}
                    </p>
                  </div>

                </div>

                <p className="text-gray-600 text-sm leading-relaxed mt-5">
                  {item.description}
                </p>

                <div className="mt-6 flex justify-between items-center">

                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      Starting From
                    </p>

                    <h4 className="text-3xl font-bold text-[#0B5C63]">
                      {item.price}
                    </h4>
                  </div>

                  <button
                    onClick={() => openPopup(item.configuration)}
                    className="inline-flex items-center gap-2 bg-[#0B5C63] hover:bg-[#083E44] text-white px-6 py-3 rounded-full transition"
                  >
                    Request Price
                    <ArrowRight size={18} />
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

       

        <div className="mt-8 p-5 rounded-2xl bg-[#f4f9fa] border border-[#0B5C63]/10">
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            *Prices are indicative and subject to change without prior notice.
            Final pricing depends on unit selection, floor, facing,
            availability, applicable taxes and statutory charges.
          </p>
        </div>

      </div>

      <PopupForm
        show={showPopup}
        onClose={closePopup}
        popupTitle={
          selectedPriceType
            ? `Request Price - ${selectedPriceType}`
            : "Request Price"
        }
        submitButtonText="Get Latest Pricing"
        leadSource={
          selectedPriceType
            ? `Price Request - ${selectedPriceType}`
            : "Jayabheri The Pinnacle Price Request"
        }
      />
    </section>
  );
};

export default PricingSection;
