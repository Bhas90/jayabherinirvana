import React from "react";
import { Link } from "react-router-dom";

import heroDesktop from "./assets/jayabheri-pinnacle-external-view-day.webp";
import heroMobile from "./assets/jayabheri-pinnacle-external-view.webp";

const PrivacyPolicy = () => {
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
              Privacy Policy
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
          Privacy Policy
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          Jayabheri The Pinnacle values your privacy and is committed to
          protecting your personal information. This Privacy Policy explains how
          information submitted through this website, enquiry forms, callback
          requests, brochure requests, WhatsApp interactions and site visit
          requests may be collected, used and safeguarded.
        </p>

        {[
          {
            title: "1. Information We Collect",
            text: "We may collect personal information including your name, mobile number, email address, city, property preferences, budget range and other details voluntarily provided through enquiry forms, brochure requests, WhatsApp chats, callback requests and site visit bookings.",
          },
          {
            title: "2. How We Use Your Information",
            text: "Your information is used to provide project details, share brochures, communicate pricing updates, schedule site visits, answer enquiries and keep you informed about availability, offers and project-related updates for Jayabheri The Pinnacle.",
          },
          {
            title: "3. Lead Management and Communication",
            text: "By submitting your information, you consent to receive communication through phone calls, WhatsApp messages, SMS, emails and other digital channels from our sales team, authorized representatives, channel partners or project associates.",
          },
          {
            title: "4. Brochure Downloads and Site Visits",
            text: "Information submitted for brochure downloads, pricing requests, callback requests and site visit bookings may be used to provide relevant project information and personalized assistance regarding Jayabheri The Pinnacle.",
          },
          {
            title: "5. Cookies and Analytics",
            text: "Our website may use cookies, Google Analytics, Google Tag Manager, Meta Pixel and similar technologies to understand visitor behavior, improve website performance, enhance user experience and measure marketing effectiveness.",
          },
          {
            title: "6. Data Security",
            text: "We implement reasonable administrative, technical and physical security measures to protect your information against unauthorized access, disclosure, alteration, misuse or destruction.",
          },
          {
            title: "7. Information Sharing",
            text: "Your information may be shared with authorized sales representatives, developers, CRM platforms, marketing systems and service providers strictly for responding to your enquiry and providing project-related assistance.",
          },
          {
            title: "8. Third-Party Services",
            text: "This website may contain links to external websites, maps, social media platforms or third-party tools. We are not responsible for the privacy practices, content or policies of those external platforms.",
          },
          {
            title: "9. RERA and Project Verification",
            text: "Jayabheri The Pinnacle is registered under TG RERA Registration No: P02400006797. Building Permit No: 001689/BP/HMDA/0359/SKP/2023. Users may verify project details on the official Telangana RERA website: https://rera.telangana.gov.in/.",
          },
          {
            title: "10. Your Rights",
            text: "You may request access, correction, modification or deletion of your personal information by contacting us through the communication channels available on this website.",
          },
          {
            title: "11. Authorized Channel Partner Disclosure",
            text: "This website may be operated by an authorized channel partner for marketing and lead generation purposes. Information submitted through this website may be used to assist you with project-related enquiries, site visits, brochure sharing and sales communication.",
          },
          {
            title: "12. Updates to This Privacy Policy",
            text: "We reserve the right to modify or update this Privacy Policy at any time. Updated versions will be published on this page, and continued use of the website will constitute acceptance of the revised policy.",
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
            By using this website, requesting project information, downloading
            brochures, booking site visits, or submitting enquiry forms, you
            acknowledge that you have read and accepted this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;