import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              Privacy Policy
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
          ← Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111827] mb-5">
          Privacy Policy
        </h2>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
          Jayabheri The Nirvana respects your privacy and is committed to
          protecting your personal information. This Privacy Policy explains
          how information submitted through this website, enquiry forms,
          callback requests, brochure requests, WhatsApp interactions and site
          visit requests may be collected, used and safeguarded.
        </p>

        {[
          {
            title: "1. Information We Collect",
            text: "We may collect personal information including your name, mobile number, email address, city, property preferences, budget range and other details voluntarily provided through enquiry forms, brochure requests, WhatsApp chats, callback requests and site visit bookings.",
          },
          {
            title: "2. How We Use Your Information",
            text: "Your information is used to provide project details, share brochures, communicate pricing updates, explain floor plans and availability, schedule site visits, answer enquiries and keep you informed about Jayabheri The Nirvana.",
          },
          {
            title: "3. Lead Management and Communication",
            text: "By submitting your information, you consent to receive communication through phone calls, WhatsApp messages, SMS, emails and other digital channels from our sales team, authorized representatives, channel partners or project associates.",
          },
          {
            title: "4. Brochure Downloads and Site Visits",
            text: "Information submitted for brochure downloads, pricing requests, callback requests and site visit bookings may be used to provide relevant project information and personalized assistance regarding Jayabheri The Nirvana.",
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
            text: "Your information may be shared with authorized sales representatives, developers, CRM systems, marketing platforms and service providers strictly for responding to your enquiry and providing project-related assistance.",
          },
          {
            title: "8. Third-Party Services",
            text: "This website may contain links to external websites, maps, social media platforms, WhatsApp or third-party tools. We are not responsible for the privacy practices, content or policies of those external platforms.",
          },
          {
            title: "9. RERA and Project Verification",
            text: "Jayabheri The Nirvana is registered under TS RERA Registration No: P02400003566. Users are encouraged to independently verify project details, approvals, pricing and legal information through the official Telangana RERA portal and other authorized sources before making any purchase decision.",
          },
          {
            title: "10. Your Rights",
            text: "You may request access, correction, modification or deletion of your personal information by contacting us through the communication channels available on this website.",
          },
          {
            title: "11. Authorized Channel Partner Disclosure",
            text: "This website may be operated by an authorized channel partner for marketing and lead-generation purposes. Information submitted through this website may be used to assist you with project-related enquiries, brochure sharing, pricing information, availability, site visits and sales communication.",
          },
          {
            title: "12. Pricing and Availability Information",
            text: "Pricing, availability, unit sizes, floor plans and other project information displayed on this website are indicative and may change without prior notice. Users should confirm the latest details with the authorized sales team before making a booking or financial decision.",
          },
          {
            title: "13. Updates to This Privacy Policy",
            text: "We reserve the right to modify or update this Privacy Policy at any time. Updated versions will be published on this page and continued use of the website will constitute acceptance of the revised policy.",
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

            By using this website, requesting project information,
            downloading brochures, booking site visits or submitting enquiry
            forms, you acknowledge that you have read and accepted this Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;