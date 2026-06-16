import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
  Building2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const advantages = [
  "Iconic 55-storey twin towers in Kokapet",
  "425 vaastu-compliant luxury residences",
  "Spacious 3 BHK & 4 BHK unit layouts",
  "Premium residences from 3587 to 4622 SFT",
  "Prime connectivity to Financial District & ORR",
  "75,000 SFT premium tower amenities",
  "Panoramic skyline and landscape views",
  "Dedicated home office in select residences",
];

const quickStats = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "2 Towers",
    text: "55 Floors",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "75,000 SFT",
    text: "Amenities",
  },
  
];

const AdvantageSection = () => {
  const phoneNumber = "919652143222";
  const displayPhone = "+91 96521 43222";

  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in Jayabheri The Pinnacle at Kokapet. Please share the brochure, latest price list, floor plans, availability, and site visit details."
  );

  const handleCallClick = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden bg-[#061f24]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(142,217,223,0.18),transparent_35%)]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0B5C63]/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Premium CTA Card */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8 text-white shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-[#8ed9df]/10 border border-[#8ed9df]/30 rounded-full px-4 py-2 text-xs sm:text-sm text-[#8ed9df]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8ed9df]" />
                Premium High-Rise Living
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
                Why Choose <br />
                <span className="text-[#8ed9df]">
                  Jayabheri The Pinnacle?
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed">
                Experience elevated luxury living in Kokapet with spacious
                residences, panoramic views, premium tower amenities, excellent
                connectivity and a landmark address near Hyderabad’s Financial
                District.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-7">
                {quickStats.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/10 border border-white/10 p-4"
                  >
                    <div className="text-[#8ed9df] mb-2">{item.icon}</div>
                    <p className="text-white font-bold">{item.title}</p>
                    <p className="text-white/60 text-xs mt-1">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCallClick}
                  className="group bg-[#8ed9df] hover:bg-white text-[#061f24] px-6 py-3.5 rounded-2xl flex items-center justify-center gap-3 shadow-md transition-all"
                >
                  <span className="bg-[#061f24]/10 rounded-xl p-2">
                    <FaPhoneAlt />
                  </span>

                  <div className="text-left">
                    <div className="font-semibold">Call Now</div>
                    <div className="text-xs opacity-80">{displayPhone}</div>
                  </div>
                </button>

                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3.5 rounded-2xl flex items-center justify-center gap-3 shadow-md transition-all"
                >
                  <span className="bg-white/10 rounded-xl p-2">
                    <FaWhatsapp />
                  </span>

                  <div className="text-left">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-xs opacity-90">Quick Response</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white/10 border border-white/10">
                <p className="text-sm text-white/75">
                  For brochure, latest price, availability and site visit:
                </p>
                <p className="text-[#8ed9df] font-bold mt-1">
                  Call / WhatsApp: {displayPhone}
                </p>
              </div>
            </div>
          </div>

          {/* Right Advantages */}
          <div className="lg:col-span-7">
            <div className="h-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-[#0B5C63]/10">
              <div className="px-6 sm:px-8 py-6 bg-gradient-to-r from-[#f4f9fa] to-white border-b border-[#0B5C63]/10">
                <p className="text-[#0B5C63] text-xs uppercase tracking-[3px] font-semibold mb-2">
                  Key Advantages
                </p>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#061f24]">
                  Crafted for Elite Urban Living
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  Everything you need for a premium home buying decision at
                  Jayabheri The Pinnacle.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {advantages.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex gap-3 p-4 rounded-2xl bg-[#f4f9fa] border border-[#0B5C63]/10 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all"
                    >
                      <div className="mt-0.5 text-[#0B5C63] group-hover:text-[#083E44]">
                        <FaCheckCircle />
                      </div>

                      <p className="text-sm sm:text-[15px] text-[#061f24] font-medium leading-snug">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[#061f24] px-5 py-5">
                  <p className="text-[#8ed9df] font-semibold text-sm">
                    Starting From ₹5.25 Cr*
                  </p>
                  <p className="text-white/70 text-xs mt-2 leading-relaxed">
                    *Site visits are subject to prior appointment. Price,
                    availability and offers are subject to change without prior
                    notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;