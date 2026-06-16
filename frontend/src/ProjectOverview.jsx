import React from "react";
import {
  Building2,
  Home,
  MapPin,
  Layers,
  Landmark,
  Crown,
} from "lucide-react";

const projectStats = [
  {
    icon: <Crown className="w-7 h-7" />,
    title: "₹5.25 Cr*",
    subtitle: "Starting Price",
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: "3.5 & 4.5 BHK",
    subtitle: "Luxury Residences",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "2692 - 4622 SFT",
    subtitle: "Spacious Homes",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "2 Towers",
    subtitle: "55 Floors",
  },
  {
    icon: <Landmark className="w-7 h-7" />,
    title: "4.75 Acres",
    subtitle: "Premium Development",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Kokapet",
    subtitle: "Hyderabad",
  },
];

const ProjectOverview = () => {
  return (
    <section
      id="project-overview"
      className="relative bg-gradient-to-b from-[#f4f9fa] via-white to-[#edf7f8] py-16 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0B5C63]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#0B5C63]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#0B5C63] text-xs md:text-sm uppercase tracking-[5px] font-semibold">
            Project Overview
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] mt-3">
            Jayabheri The Pinnacle
          </h2>

          <div className="w-24 h-[3px] bg-[#0B5C63] mx-auto mt-5 rounded-full"></div>

          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 mt-6 leading-relaxed">
            An iconic luxury high-rise development in Kokapet offering
            panoramic skyline views, spacious residences, world-class
            amenities and unmatched connectivity to Hyderabad's
            Financial District.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {projectStats.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 border border-[#0B5C63]/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#0B5C63]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0B5C63]/10 flex items-center justify-center text-[#0B5C63] mb-5 group-hover:bg-[#0B5C63] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-base md:text-lg font-bold text-[#111111] text-center">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 text-center mt-2">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Bar */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#083E44] to-[#0B5C63] px-6 py-6 text-center shadow-xl">
          <p className="text-white text-sm md:text-base font-medium leading-relaxed">
            425 Vaastu-Compliant Residences • 4 Flats Per Floor •
            75,000 SFT Premium Amenities • Unobstructed Panoramic Views •
            Prime Kokapet Location
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProjectOverview;
