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
      "Wipro Junction - 1.6 km",
      "Q-City Road - Immediate Access",
      "Financial District - 0.5 km",
      "Gachibowli IT Hub - 3.4 km",
      "ORR - Convenient Connectivity",
      "RGIA Airport - Approx. 30 km",
    ],
  },
  {
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    title: "Business & IT Hubs",
    items: [
      "Financial District - 0.5 km",
      "Gachibowli IT Hub - 3.4 km",
      "Wipro Junction - 1.6 km",
      "Microsoft India - Nearby",
      "Infosys Campus - Nearby",
      "ICICI Towers - Nearby",
    ],
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Healthcare Nearby",
    items: [
      "Continental Hospital - 2 km",
      "AIG Hospital - 7 km",
      "Leading Hospitals in Gachibowli - Easy Access",
      "Healthcare Facilities Across Financial District",
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Education Around",
    items: [
      "Kairos International School - 0.8 km",
      "Keystone International School - 3.8 km",
      "Oakridge International School - 4.8 km",
      "Future Kids School - 5 km",
      "Delhi Public School - 5.2 km",
    ],
  },
];

const LocationAdvantages = () => {
  return (
    <section
      id="location-advantages"
      className="relative bg-[#151012] py-16 md:py-24 px-4 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top_left,#ffffff_1px,transparent_1px)] [background-size:26px_26px]" />

      {/* Nirvana Red Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#E43E4C]/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#7D1F29]/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-12">
          <div className="lg:col-span-5 text-center lg:text-left">
            <p className="text-[#E43E4C] text-xs md:text-sm uppercase tracking-[5px] font-semibold">
              Location Benefits
            </p>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 leading-tight">
              At the Heart of
              <br />

              <span className="italic text-[#E43E4C]">
                Financial District
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="border-l-4 border-[#E43E4C] pl-5 md:pl-7">
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                Jayabheri The Nirvana is strategically located on Q-City Road,
                approximately 1.6 km from Wipro Junction and adjacent to
                Jayabheri Four Seasons, offering excellent connectivity to
                Financial District, Gachibowli, major IT campuses, schools,
                hospitals and everyday conveniences.
              </p>
            </div>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {advantageGroups.map((group, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-[2rem]
                overflow-hidden
                bg-white/[0.06]
                border
                border-white/10
                hover:border-[#E43E4C]/50
                shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* Decorative Circle */}
              <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[#E43E4C]/10 group-hover:bg-[#E43E4C]/20 transition-all" />

              {/* Card Header */}
              <div className="p-6 border-b border-white/10">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-[#E43E4C]/15
                    text-[#E43E4C]
                    flex
                    items-center
                    justify-center
                    mb-5
                    group-hover:bg-[#E43E4C]
                    group-hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  {group.icon}
                </div>

                <h3 className="text-white text-xl font-serif font-bold">
                  {group.title}
                </h3>
              </div>

              {/* Locations */}
              <div className="p-6">
                <ul className="space-y-4">
                  {group.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="
                          mt-1
                          w-7
                          h-7
                          rounded-full
                          bg-[#E43E4C]/15
                          text-[#E43E4C]
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                        "
                      >
                        <Clock className="w-3.5 h-3.5" />
                      </span>

                      <span className="text-sm md:text-[15px] text-white/75 font-medium leading-relaxed">
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