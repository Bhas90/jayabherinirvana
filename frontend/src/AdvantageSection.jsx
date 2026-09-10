import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
  Building2,
  ShieldCheck,
  Sparkles,
  Globe2,
  FileCheck2,
  Video,
  Landmark,
  MapPin,
  KeyRound,
} from "lucide-react";

const advantages = [
  
  "Project brochure, pricing and floor plans shared digitally",
  "Support with shortlist selection based on facing, size and budget",
  "Guidance on booking documentation and project-related paperwork",
  "Direct support through WhatsApp and phone for faster communication",
];

const quickStats = [
  {
    icon: <Globe2 className="w-5 h-5" />,
    title: "NRI Assistance",
    text: "Remote Support",
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "Video Guidance",
    text: "Project Walkthrough",
  },
];

const AdvantageSection = () => {
  const phoneNumber = "919652143222";
  const displayPhone = "+91 96521 43222";

  const whatsappMessage = encodeURIComponent(
    "Hi, I am an NRI interested in Jayabheri The Nirvana. Please share the brochure, latest pricing, floor plans, available units and booking details."
  );

  const handleCallClick = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "jayabheri_nirvana_nri_call_click",
      project_name: "Jayabheri The Nirvana",
      project_location: "Financial District, Gachibowli",
      phone_number: phoneNumber,
      lead_source: "NRI Support Section Call",
      page_url: window.location.href,
    });

    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "jayabheri_nirvana_nri_whatsapp_click",
      project_name: "Jayabheri The Nirvana",
      project_location: "Financial District, Gachibowli",
      phone_number: phoneNumber,
      lead_source: "NRI Support Section WhatsApp",
      page_url: window.location.href,
    });
  };

  return (
    <section
      id="NRI-support"
      className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-br from-[#121012] via-[#191214] to-[#251519]"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_left,#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-[#E43E4C]/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-[#7D1F29]/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* LEFT - NRI CTA */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-[2rem] bg-white/[0.06] backdrop-blur-md border border-white/10 p-6 md:p-8 text-white shadow-2xl">

              <div className="inline-flex items-center gap-2 bg-[#E43E4C]/10 border border-[#E43E4C]/30 rounded-full px-4 py-2 text-xs sm:text-sm text-[#E43E4C]">
                <Globe2 className="w-4 h-4" />

                NRI Customer Support
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
                Buying from
                <br />

                <span className="text-[#E43E4C]">
                  Overseas?
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed">
                Explore Jayabheri The Nirvana from anywhere in the world.
                Our team can assist NRI customers with project information,
                available configurations, pricing, floor plans and the
                initial booking process through convenient remote
                communication.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mt-7">
                {quickStats.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/10 border border-white/10 p-3 hover:border-[#E43E4C]/40 transition"
                  >
                    <div className="text-[#E43E4C] mb-2">
                      {item.icon}
                    </div>

                    <p className="text-white font-bold">
                      {item.title}
                    </p>

                    <p className="text-white/60 text-xs mt-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <button
                  onClick={handleCallClick}
                  className="group bg-[#E43E4C] hover:bg-white hover:text-[#E43E4C] text-white px-8 py-3.5 rounded-2xl flex items-center justify-center gap-3 shadow-md transition-all"
                >
                  <span className="bg-black/10 rounded-xl p-2">
                    <FaPhoneAlt />
                  </span>

                  <div className="text-left">
                    <div className="font-semibold">
                      Call Us
                    </div>

                    <div className="text-xs opacity-80">
                      {displayPhone}
                    </div>
                  </div>
                </button>

                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="group bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-3 rounded-2xl flex items-center justify-center gap-3 shadow-md transition-all"
                >
                  <span className="bg-white/10 rounded-xl p-2">
                    <FaWhatsapp />
                  </span>

                  <div className="text-left">
                    <div className="font-semibold">
                      WhatsApp
                    </div>

                    <div className="text-xs opacity-90">
                      NRI Enquiry
                    </div>
                  </div>
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-6 p-4 rounded-2xl bg-white/10 border border-white/10">

                <p className="text-sm text-white/75">
                  Need brochure, pricing, floor plans or availability?
                </p>

                <p className="text-[#E43E4C] font-bold mt-1">
                  Call / WhatsApp: {displayPhone}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - NRI SERVICES */}
          <div className="lg:col-span-7">
            <div className="h-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-[#E43E4C]/20">

              {/* Right Header */}
              <div className="px-6 sm:px-8 py-6 bg-gradient-to-r from-[#FFF1F2] to-white border-b border-[#E43E4C]/20">

                <p className="text-[#E43E4C] text-xs uppercase tracking-[3px] font-semibold mb-2">
                  NRI Buyer Assistance
                </p>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#111827]">
                  Property Buying Made Easier from Abroad
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Our team helps you understand Jayabheri The Nirvana
                  remotely so you can evaluate your options before making
                  your next decision.
                </p>
              </div>

              {/* NRI Benefits */}
              <div className="p-6 sm:p-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {advantages.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex gap-3 p-4 rounded-2xl bg-[#FFF5F5] border border-[#E43E4C]/15 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all"
                    >
                      <div className="mt-0.5 text-[#E43E4C] shrink-0">
                        <FaCheckCircle />
                      </div>

                      <p className="text-sm sm:text-[15px] text-[#111827] font-medium leading-snug">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* RERA */}
                <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#161012] to-[#2A171A] px-4 py-4">

                  <p className="text-[#E43E4C] font-semibold text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />

                    TS RERA No: P02400003566
                  </p>
                </div>

                {/* Bottom Support Points */}
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">

                  <div className="rounded-2xl border border-[#E43E4C]/20 bg-white p-4 flex items-center gap-3">
                    <FileCheck2 className="w-5 h-5 text-[#E43E4C] shrink-0" />

                    <p className="text-sm font-bold text-[#111827]">
                      Document Support
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E43E4C]/20 bg-white p-4 flex items-center gap-3">
                    <Video className="w-5 h-5 text-[#E43E4C] shrink-0" />

                    <p className="text-sm font-bold text-[#111827]">
                      Video Assistance
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E43E4C]/20 bg-white p-4 flex items-center gap-3">
                    <KeyRound className="w-5 h-5 text-[#E43E4C] shrink-0" />

                    <p className="text-sm font-bold text-[#111827]">
                      Booking Support
                    </p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-[#FFF5F5] p-4 flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-[#E43E4C]" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Project
                      </p>

                      <p className="text-sm font-bold text-[#111827]">
                        Jayabheri The Nirvana
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#FFF5F5] p-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#E43E4C]" />

                    <div>
                      <p className="text-xs text-gray-500">
                        Location
                      </p>

                      <p className="text-sm font-bold text-[#111827]">
                        Near Wipro Junction
                      </p>
                    </div>
                  </div>
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