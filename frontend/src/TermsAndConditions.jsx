import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[390px] overflow-hidden bg-gradient-to-br from-[#161012] via-[#241417] to-[#32191F]">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top_left,#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E43E4C]/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E43E4C]/15 rounded-full blur-3xl" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-[#E43E4C] text-xs md:text-sm uppercase tracking-[4px] font-semibold mb-3">
              Jayabheri The Nirvana
            </p>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Terms & Conditions
            </h1>

            <p className="text-white/70 text-sm md:text-base mt-4">
              Financial District, Hyderabad
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#E43E4C] hover:bg-[#C9323F] text-white px-5 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg font-semibold"
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111827] mb-5">
          Terms and Conditions
        </h2>

        <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
          Welcome to the Jayabheri The Nirvana project information website.
          These Terms and Conditions govern your use of this website and the
          enquiry services offered in relation to Jayabheri The Nirvana,
          a premium residential development in Hyderabad&apos;s Financial
          District.
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            text: "By accessing this website, submitting an enquiry, requesting a brochure, requesting pricing details, checking unit availability or booking a site visit, you agree to these Terms and Conditions. If you do not agree, please discontinue use of this website.",
          },
          {
            title: "2. Project Information",
            text: "This website provides information about Jayabheri The Nirvana, including project highlights, apartment configurations, unit sizes, amenities, location advantages, indicative pricing, brochure information, gallery images, floor plans and site visit assistance.",
          },
          {
            title: "3. Website Purpose",
            text: "This website is intended for project marketing, information and enquiry-generation purposes. Project information displayed on this website should be independently verified with the developer or authorized sales team before making any booking, payment or purchase decision.",
          },
          {
            title: "4. User Responsibilities",
            text: "Users are expected to provide correct and accurate information, including name, mobile number, email address and enquiry details, while submitting forms. Incorrect, false or misleading information may affect our ability to provide enquiry support.",
          },
          {
            title: "5. Pricing and Availability",
            text: "Prices, unit availability, offers, floor plans, specifications, payment plans and other project information may change without prior notice. Any pricing displayed on this website is indicative and should not be treated as a final offer. Final pricing must be confirmed with the authorized sales team.",
          },
          {
            title: "6. Site Visit and Booking Assistance",
            text: "Site visits may be arranged based on customer interest, project access and prior confirmation. Booking assistance is subject to current inventory, pricing, payment terms, documentation and other applicable conditions communicated by the developer or authorized sales team.",
          },
          {
            title: "7. Brochure, Images and Floor Plans",
            text: "Brochures, images, layouts, elevations, floor plans, renders and visual representations displayed on this website are provided for information and reference purposes. They may be revised, updated or modified by the developer.",
          },
          {
            title: "8. RERA and Regulatory Information",
            text: "Jayabheri The Nirvana is registered under TS RERA Registration No: P02400003566. Users are encouraged to independently verify project registration, approvals and legal information through the official Telangana RERA portal before making a purchase decision.",
          },
          {
            title: "9. Limitation of Liability",
            text: "This website is intended for informational and lead-generation purposes. We are not responsible for changes made by the developer relating to pricing, construction timelines, possession timelines, approvals, availability, specifications, amenities, payment plans, offers or other project-related matters.",
          },
          {
            title: "10. Communication Consent",
            text: "By submitting your details, you consent to being contacted through phone calls, WhatsApp, SMS, email or other digital communication channels regarding Jayabheri The Nirvana, brochure requests, pricing, availability, site visits and other related project information.",
          },
          {
            title: "11. No Final Offer or Contract",
            text: "Information displayed on this website does not constitute a final offer, allotment confirmation, booking confirmation, legal commitment or contractual agreement. Buyers should verify all project documents, approvals, pricing, specifications and terms before completing any transaction.",
          },
          {
            title: "12. Third-Party Services",
            text: "This website may use or link to third-party services such as Google Maps, WhatsApp, analytics platforms, advertising platforms and other external services. Their use may be governed by separate terms and privacy policies.",
          },
          {
            title: "13. Intellectual Property",
            text: "Project names, logos, brochures, images, floor plans, graphics, text and other materials displayed on this website may belong to their respective owners. They may not be copied, reproduced or commercially used without appropriate authorization.",
          },
          {
            title: "14. Changes to Terms",
            text: "We may modify or update these Terms and Conditions from time to time. Updated terms will be published on this page, and continued use of the website after changes are published will constitute acceptance of the revised terms.",
          },
        ].map((item, index) => (
          <div key={index}>
            <h3 className="text-lg md:text-xl font-semibold text-[#111827] mt-6">
              {item.title}
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-2">
              {item.text}
            </p>
          </div>
        ))}

        {/* Final Disclosure */}
        <div className="mt-8 p-5 bg-[#FFF5F5] border border-[#E43E4C]/25 rounded-2xl">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-[#111827]">
              Jayabheri The Nirvana – Financial District, Hyderabad
            </strong>

            <br />

            TS RERA Registration No: P02400003566

            <br />

            Website: jayabherinirvana.in

            <br />

            This website is intended for project marketing, information and
            enquiry-generation purposes.

            <br />

            By using this website, submitting an enquiry, requesting the
            brochure, requesting pricing information or booking a site visit,
            you acknowledge that you have read and accepted these Terms and
            Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;