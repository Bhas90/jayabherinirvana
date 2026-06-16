import React from "react";
import {
  Route,
  BriefcaseBusiness,
  HeartPulse,
  GraduationCap,
  Clock,
} from "lucide-react";

const advantageGroups = [
  {
    icon: <Route className="w-6 h-6" />,
    title: "Access & Connectivity",
    items: [
      "Financial District - 9 mins",
      "Gachibowli - 14 mins",
      "Nanakramguda - 10 mins",
      "Narsingi - 9 mins",
      "Hitech City - 20 mins",
      "Airport - 30 mins",
    ],
  },
  {
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    title: "IT Hubs & Corporates",
    items: [
      "Wipro Corporate Office - 20 mins",
      "Infosys Campus - 25 mins",
      "WaveRock IT Park - 20 mins",
      "TCS - 18 mins",
      "Microsoft IDC - 25 mins",
    ],
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Health Care",
    items: [
      "Continental Hospitals - 10 mins",
      "CARE Hospitals - 15 mins",
      "Sankara Eye Hospital - 4 mins",
      "Star & Rainbow Hospitals - 10 mins",
      "Ankura Hospitals - 12 mins",
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Educational Institutions",
    items: [
      "Phoenix Greens - 5 mins",
      "Global Edge School - 6 mins",
      "Sattva Academy - 2 mins",
      "Rockwell International - 7 mins",
      "DPS & Oakridge International - 15 mins",
    ],
  },
];

const LocationAdvantages = () => {
  return (
    <section
      id="location-advantages"
      className="relative bg-gradient-to-b from-[#f4f9fa] via-white to-[#edf7f8] py-16 md:py-20 px-4 overflow-hidden"
    >
      <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[4px] text-[#0B5C63] font-semibold mb-3">
            Location Benefits
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#061f24]">
            The Advantages
          </h2>

          <div className="w-24 h-[3px] bg-[#0B5C63] mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {advantageGroups.map((group, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-[#0B5C63]/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="bg-[#061f24] px-6 py-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8ed9df]/15 text-[#8ed9df] flex items-center justify-center">
                  {group.icon}
                </div>

                <h3 className="text-white text-lg font-semibold">
                  {group.title}
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-4">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 w-6 h-6 rounded-full bg-[#0B5C63]/10 text-[#0B5C63] flex items-center justify-center flex-shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                      </span>

                      <span className="text-sm md:text-[15px] text-[#061f24] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantages;