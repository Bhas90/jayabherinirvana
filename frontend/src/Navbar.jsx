import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

const sections = [
  { id: "project-overview", label: "Overview" },
  { id: "amenities", label: "Amenities" },
  { id: "gallery", label: "Gallery" },
  { id: "price", label: "Pricing" },
  { id: "NRI-support", label: "NRI Support" },
  { id: "connectivity", label: "Location" },
  { id: "faqs", label: "FAQs" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phoneNumber = "+919652143222";
  const displayPhone = "+91 96521 43222";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pushToDataLayer = (eventName, extraData = {}) => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: eventName,
      project_name: "Jayabheri The Nirvana",
      project_location: "Financial District, Gachibowli",
      project_type: "Luxury Apartments",
      website_domain: "jayabherithenirvana.com",
      page_url: window.location.href,
      ...extraData,
    });
  };

  const trackMenuClick = (sectionName) => {
    pushToDataLayer("jayabheri_nirvana_nav_click", {
      menu_item: sectionName,
    });
  };

  const trackCallClick = () => {
    pushToDataLayer("jayabheri_nirvana_call_click", {
      phone_number: phoneNumber,
      lead_source: "Navbar Call Button",
    });
  };

  const scrollToSection = (id, label) => {
    trackMenuClick(label);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 xl:px-10 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_8px_28px_rgba(17,24,39,0.16)] py-1.5"
          : "bg-white shadow-sm py-2"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center">
        <a
          href="/"
          onClick={() =>
            pushToDataLayer("jayabheri_nirvana_logo_click", {
              lead_source: "Navbar Logo",
            })
          }
        >
          <img
            src="/nirvana-logo.png"
            alt="Jayabheri The Nirvana Logo"
            className="w-[170px] sm:w-[190px] md:w-[190px] xl:w-[210px] h-[70px] object-contain"
          />
        </a>
      </div>

      {/* MOBILE ACTIONS */}
      <div className="md:hidden flex items-center gap-2">
        <a
          href={`tel:${phoneNumber}`}
          onClick={trackCallClick}
          className="w-10 h-10 rounded-full bg-[#111827] text-[#E43E4C] flex items-center justify-center shadow-md"
          aria-label="Call Jayabheri The Nirvana"
        >
          <FaPhoneAlt size={14} />
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 rounded-full border border-[#E43E4C]/50 text-[#111827] flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center space-x-1 text-[#111827]">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id, label)}
            className="px-2.5 xl:px-3 py-2 rounded-lg hover:text-[#E43E4C] hover:bg-[#E43E4C]/10 font-medium text-sm xl:text-base transition-all duration-300"
          >
            {label}
          </button>
        ))}

        <a
          href={`tel:${phoneNumber}`}
          onClick={trackCallClick}
          className="ml-2 px-4 xl:px-5 py-2 rounded-full shadow-md text-white bg-[#E43E4C] hover:bg-[#C9323F] transition inline-flex items-center gap-2 text-sm xl:text-base font-semibold"
        >
          <FaPhoneAlt size={13} />
          Call {displayPhone}
        </a>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed top-[78px] left-0 w-full bg-white/98 backdrop-blur-md shadow-2xl md:hidden z-40 border-t border-[#E43E4C]/20">
          <div className="px-5 pt-8 pb-5 grid grid-cols-2 gap-3">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id, label)}
                className="text-left px-4 py-2 rounded-xl bg-[#FFF1F2] text-[#111827] font-medium hover:bg-[#E43E4C] hover:text-white transition"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="px-5 pb-6">
            <a
              href={`tel:${phoneNumber}`}
              onClick={trackCallClick}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-2xl shadow-md text-white bg-[#E43E4C] hover:bg-[#C9323F] transition font-semibold"
            >
              <FaPhoneAlt />
              Call {displayPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;