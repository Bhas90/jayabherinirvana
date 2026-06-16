import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import mlogo from "./assets/the-pinnacle-logo.png";

const sections = [
  { id: "project-overview", label: "Overview" },
  { id: "amenities", label: "Amenities" },
  { id: "gallery", label: "Gallery" },
  { id: "floor-plans", label: "Floor Plans" },
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pushToDataLayer = (eventName, extraData = {}) => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: eventName,
      project_name: "Jayabheri The Pinnacle",
      project_location: "Kokapet",
      project_type: "Luxury Apartments",
      website_domain: "jayabheripinnacle.com",
      page_url: window.location.href,
      ...extraData,
    });
  };

  const trackMenuClick = (sectionName) => {
    pushToDataLayer("jayabheri_nav_click", {
      menu_item: sectionName,
    });
  };

  const trackCallClick = () => {
    pushToDataLayer("jayabheri_call_click", {
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
          ? "bg-white/95 backdrop-blur-md shadow-[0_8px_28px_rgba(6,31,36,0.18)] py-1.5"
          : "bg-white shadow-sm py-2"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <a
          href="/"
          onClick={() =>
            pushToDataLayer("jayabheri_logo_click", {
              lead_source: "Navbar Logo",
            })
          }
        >
          <img
            src={mlogo}
            alt="Jayabheri The Pinnacle Logo"
            className="w-[150px] sm:w-[170px] md:w-[180px] xl:w-[190px] h-auto object-contain"
          />
        </a>
      </div>

      {/* Mobile Actions */}
      <div className="md:hidden flex items-center gap-2">
        <a
          href={`tel:${phoneNumber}`}
          onClick={trackCallClick}
          className="w-10 h-10 rounded-full bg-[#0B5C63] text-white flex items-center justify-center shadow-md"
          aria-label="Call Jayabheri The Pinnacle"
        >
          <FaPhoneAlt size={14} />
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 rounded-full border border-[#0B5C63]/20 text-[#0B5C63] flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1 text-[#061f24]">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id, label)}
            className="px-2.5 xl:px-3 py-2 rounded-lg hover:text-[#0B5C63] hover:bg-[#0B5C63]/5 font-medium text-sm xl:text-base transition-all duration-300"
          >
            {label}
          </button>
        ))}

        <a
          href={`tel:${phoneNumber}`}
          onClick={trackCallClick}
          className="ml-2 px-4 xl:px-5 py-2 rounded-full shadow-md text-white bg-[#0B5C63] hover:bg-[#083E44] transition inline-flex items-center gap-2 text-sm xl:text-base"
        >
          <FaPhoneAlt size={13} />
          Call {displayPhone}
        </a>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[66px] left-0 w-full bg-white/98 backdrop-blur-md shadow-2xl md:hidden z-40 border-t border-[#0B5C63]/10">
          <div className="px-5 pt-8 pb-5 grid grid-cols-2 gap-3">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id, label)}
                className="text-left px-4 py-3 rounded-xl bg-[#f4f9fa] text-[#061f24] font-medium hover:bg-[#0B5C63] hover:text-white transition"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="px-5 pb-6">
            <a
              href={`tel:${phoneNumber}`}
              onClick={trackCallClick}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-2xl shadow-md text-white bg-[#0B5C63] hover:bg-[#083E44] transition"
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