import React from "react";
import {
  Building2,
  Home,
  MapPin,
  Layers,
  Landmark,
  Crown,
  Leaf,
  Trees,
  ParkingCircle,
} from "lucide-react";

const projectStats = [
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Starting Price",
    subtitle: "₹2.04 Cr* Onwards",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "3 & 3.5 BHK",
    subtitle: "Premium Residences",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "1920 - 2225 SFT",
    subtitle: "Spacious Homes",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "5 Towers",
    subtitle: "29 Floors",
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "7 Acres",
    subtitle: "Gated Community",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Financial District",
    subtitle: "Near Wipro Junction",
  },
];


const ProjectOverview = () => {
  return (
    <section
      id="project-overview"
      className="relative bg-[#FFF6F6] py-16 md:py-24 overflow-hidden"
    >
      {/* Editorial background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_top_left,#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="absolute top-0 right-0 w-[340px] h-[340px] bg-[#E43E4C]/15 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-[#821F2A]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Top editorial layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14">
          <div className="lg:col-span-5">
            <p className="text-[#E43E4C] text-xs md:text-sm uppercase tracking-[6px] font-semibold">
              Project Overview
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#181818] leading-tight">
              Jayabheri
              <br />

              <span className="italic text-[#E43E4C]">
                The Nirvana
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="border-l-4 border-[#E43E4C] pl-5 md:pl-7">
              <p className="text-lg md:text-2xl font-serif italic text-[#821F2A] mb-3">
                Taking Your Aspirations to New Zeniths
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Jayabheri The Nirvana is a premium residential community in
                Hyderabad's Financial District, located approximately 1.6 km
                from Wipro Junction on Q-City Road and adjacent to Jayabheri
                Four Seasons. Spread across 7 acres with 79% open space, the
                development comprises five 29-floor towers featuring 693
                premium 3 & 3.5 BHK residences designed for elevated urban
                living.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-[#E43E4C]/25 bg-white/80 backdrop-blur-sm shadow-xl">
          {projectStats.map((item, index) => (
            <div
              key={index}
              className="
                group
                min-h-[150px]
                p-5
                md:p-6
                border-b
                md:border-b
                lg:border-b-0
                lg:border-r
                border-[#E43E4C]/15
                last:border-r-0
                hover:bg-[#E43E4C]
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#FFF1F2]
                  text-[#E43E4C]
                  flex
                  items-center
                  justify-center
                  mb-5
                  group-hover:bg-white
                  group-hover:text-[#E43E4C]
                  transition-all
                  duration-300
                "
              >
                {item.icon}
              </div>

              <h3 className="text-base md:text-lg font-bold text-[#181818] group-hover:text-white">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 mt-2 group-hover:text-white/80">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ProjectOverview;