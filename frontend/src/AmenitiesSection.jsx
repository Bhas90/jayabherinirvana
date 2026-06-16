import React, { useState } from "react";
import {
  Building2,
  Trees,
  Activity,
  Baby,
  Home,
  Dumbbell,
  Users,
  Coffee,
  Bike,
  ShieldCheck,
  Waves,
  Gamepad2,
  Car,
  Landmark,
  Leaf,
  Cctv,
  Droplets,
  BriefcaseBusiness,
} from "lucide-react";

const amenities = [
  { icon: <Building2 size={34} />, label: "55-Storey Twin Towers" },
  { icon: <Waves size={34} />, label: "Infinity Swimming Pool" },
  { icon: <Dumbbell size={34} />, label: "Premium Fitness Center" },

  { icon: <BriefcaseBusiness size={34} />, label: "Business Lounge" },
  { icon: <Coffee size={34} />, label: "Café & Lounge Spaces" },
  { icon: <Users size={34} />, label: "Multipurpose Hall" },
  { icon: <Gamepad2 size={34} />, label: "Indoor Games Zone" },
  { icon: <Baby size={34} />, label: "Kids Activity Area" },

  { icon: <Activity size={34} />, label: "Jogging Track" },
  { icon: <Bike size={34} />, label: "Outdoor Fitness Deck" },
  { icon: <Trees size={34} />, label: "Biophilic Landscaping" },
  { icon: <Leaf size={34} />, label: "Lush Green Spaces" },
  { icon: <Car size={34} />, label: "Dedicated Parking" },

  { icon: <ShieldCheck size={34} />, label: "24x7 Security" },
  { icon: <Cctv size={34} />, label: "CCTV Surveillance" },
  { icon: <Droplets size={34} />, label: "Water Features & Gardens" },
];

const AmenitiesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleAmenities = showMore
    ? amenities
    : amenities.slice(0, 10);

  return (
    <section
      id="amenities"
      className="relative bg-gradient-to-b from-[#f4f9fa] via-white to-[#edf7f8] py-16 md:py-20 px-4 overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[4px] text-[#0B5C63] font-semibold mb-3">
          World-Class Amenities
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-5">
          Elevated Lifestyle at{" "}
          <span className="text-[#0B5C63]">
            Jayabheri The Pinnacle
          </span>
        </h2>

        <div className="w-24 h-[3px] bg-[#0B5C63] mx-auto rounded-full mb-6"></div>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed mb-12">
          Experience luxury living with thoughtfully curated amenities,
          premium recreational spaces, wellness zones, landscaped
          environments, and exclusive lifestyle experiences designed for
          modern urban families.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {visibleAmenities.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-5 border border-[#0B5C63]/10 shadow-sm hover:shadow-2xl hover:border-[#0B5C63]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0B5C63]/10 text-[#0B5C63] flex items-center justify-center mb-4 group-hover:bg-[#0B5C63] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <p className="text-sm md:text-[15px] font-semibold text-gray-800 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 rounded-full bg-[#0B5C63] text-white font-semibold shadow-md hover:bg-[#083E44] hover:shadow-xl transition-all duration-300"
          >
            {showMore
              ? "Show Less Amenities"
              : "View All Amenities"}
          </button>
        </div>

        {/* Bottom Highlight */}
       
      </div>
    </section>
  );
};

export default AmenitiesSection;

