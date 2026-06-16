import React from "react";
import {
  BadgeCheck,
  Building2,
  Trees,
  Waves,
  BriefcaseBusiness,
  Eye,
} from "lucide-react";

const features = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Iconic High-Rise Living",
    text: "2 premium residential towers rising 55 floors in the heart of Kokapet.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Vaastu-Compliant Homes",
    text: "425 thoughtfully designed residences with spacious 3.5 & 4.5 BHK layouts.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Panoramic Views",
    text: "Every home is designed to offer unobstructed skyline and landscape views.",
  },
  {
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    title: "Detached Home Office",
    text: "Select residences include a dedicated home office for private and productive living.",
  },
  {
    icon: <Waves className="w-6 h-6" />,
    title: "75,000 SFT Amenities",
    text: "Tower amenities, clubhouse, terrace pool, sports zones, lounge spaces and more.",
  },
  {
    icon: <Trees className="w-6 h-6" />,
    title: "Biophilic Landscaping",
    text: "Lush outdoor spaces, gardens, activity zones, pathways and peaceful sit-out areas.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-jayabheri-pinnacle"
      className="relative w-full bg-[#061f24] py-16 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(142,217,223,0.18),transparent_35%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-[#8ed9df] text-xs md:text-sm uppercase tracking-[4px] font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight mt-3">
              Why Choose <br />
              <span className="text-[#8ed9df]">
                Jayabheri The Pinnacle?
              </span>
            </h2>

            <div className="w-20 h-[3px] bg-[#8ed9df] mt-5 rounded-full"></div>

            <p className="text-white/70 text-sm md:text-base leading-relaxed mt-6 max-w-md">
              A luxury residential landmark in Kokapet, crafted for those who
              seek privacy, panoramic views, premium amenities and effortless
              connectivity.
            </p>

            <div className="mt-8 rounded-2xl border border-[#8ed9df]/30 bg-white/5 p-5">
              <h3 className="text-[#8ed9df] text-2xl md:text-3xl font-bold">
                4.75 Acres
              </h3>
              <p className="text-white/70 text-sm mt-1">
                Premium high-rise development with 2 towers, 55 floors and
                only 425 residences.
              </p>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-5 md:p-6 border border-[#8ed9df]/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B5C63]/10 text-[#0B5C63] flex items-center justify-center mb-4 group-hover:bg-[#0B5C63] group-hover:text-white transition">
                  {item.icon}
                </div>

                <h3 className="text-base md:text-lg font-bold text-[#061f24]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;