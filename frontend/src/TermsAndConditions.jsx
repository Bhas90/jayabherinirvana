import React from "react";
import { Link } from "react-router-dom";

import heroDesktop from "./assets/jayabheri-pinnacle-external-view-day.webp";
import heroMobile from "./assets/jayabheri-pinnacle-external-view.webp";

const TermsAndConditions = () => {
  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroMobile} />
          <img
            src={heroDesktop}
            alt="Jayabheri The Pinnacle luxury apartments at Kokapet Hyderabad"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <div className="absolute inset-0 bg-[#061f24]/65"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-[#8ed9df] text-xs md:text-sm uppercase tracking-[4px] font-semibold mb-3">
              Jayabheri The Pinnacle
            </p>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0B5C63] hover:bg-[#083E44] text-white px-5 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.75.75 0 0 1-.75.75H3.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06L3.56 7.25h10.69A.75.75 0 0 1 15 8Z"
            />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#061f24] mb-5">
          Terms and Conditions
        </h2>

        <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
          Welcome to the Jayabheri The Pinnacle project information page. These
          Terms and Conditions govern your use of this website and the enquiry
          services offered for Jayabheri The Pinnacle at Kokapet, Hyderabad.
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            text: "By accessing this website, submitting an enquiry, requesting a brochure, requesting pricing details, or booking a site visit, you agree to follow these Terms and Conditions. If you do not agree, please avoid using this website.",
          },
          {
            title: "2. Project Information",
            text: "This website provides information about Jayabheri The Pinnacle at Kokapet, Hyderabad, including project overview, apartment configurations, amenities, location advantages, pricing indications, brochure details, floor plans and site visit assistance.",
          },
          {
            title: "3. Authorized Channel Partner",
            text: "This website is operated by an authorized channel partner for marketing and lead generation purposes only. It is not the official developer website unless specifically stated. All project-related details should be verified directly with the developer before making any purchase decision.",
          },
          {
            title: "4. User Responsibilities",
            text: "Users are expected to provide correct name, mobile number, email address and enquiry details while submitting forms. Any false, incorrect or misleading information may result in cancellation of enquiry support.",
          },
          {
            title: "5. Pricing and Availability",
            text: "Prices, availability, offers, floor plans, specifications, payment plans and project details are subject to change without prior notice. Starting price information is indicative only and final pricing must be confirmed directly with the developer or authorized sales representative.",
          },
          {
            title: "6. Site Visit and Booking Assistance",
            text: "Site visits are arranged based on customer interest, project team availability and prior confirmation. Booking assistance is provided only after confirmation of current availability, pricing, payment terms and applicable conditions.",
          },
          {
            title: "7. Brochure, Images and Floor Plans",
            text: "Brochures, images, layouts, floor plans, elevations, renders and project details available on this website are provided for informational and representational purposes only. They may be updated, revised or changed by the developer at any time.",
          },
          {
            title: "8. RERA and Regulatory Information",
            text: "Jayabheri The Pinnacle is registered under TG RERA Registration No: P02400006797. Building Permit No: 001689/BP/HMDA/0359/SKP/2023. Users are advised to verify project details on the official Telangana RERA website: https://rera.telangana.gov.in/.",
          },
          {
            title: "9. Limitation of Liability",
            text: "This website is intended for project information and lead generation purposes only. We are not responsible for changes in pricing, construction timelines, legal approvals, possession timelines, availability, specifications or developer-side decisions.",
          },
          {
            title: "10. Communication Consent",
            text: "By submitting your details, you agree to be contacted through phone, WhatsApp, SMS or email regarding Jayabheri The Pinnacle, brochure requests, pricing details, site visits, offers and related project information.",
          },
          {
            title: "11. No Official Offer",
            text: "Information on this website should not be treated as a final offer, legal commitment, allotment confirmation or booking confirmation. Buyers are advised to verify all details and documents before making any purchase decision.",
          },
          {
            title: "12. Changes to Terms",
            text: "We may update these Terms and Conditions at any time without prior notice. Continued use of this website means you accept the updated terms.",
          },
        ].map((item, index) => (
          <div key={index}>
            <h3 className="text-lg md:text-xl font-semibold text-[#061f24] mt-6">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-2">
              {item.text}
            </p>
          </div>
        ))}

        <div className="mt-8 p-5 bg-[#f4f9fa] border border-[#0B5C63]/20 rounded-2xl">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-[#061f24]">
              Jayabheri The Pinnacle – Kokapet, Hyderabad
            </strong>
            <br />
            TG RERA Registration No: P02400006797
            <br />
            Building Permit No: 001689/BP/HMDA/0359/SKP/2023
            <br />
            By using this website, submitting your enquiry, requesting the
            brochure, or booking a site visit, you acknowledge that you have
            read and accepted these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;