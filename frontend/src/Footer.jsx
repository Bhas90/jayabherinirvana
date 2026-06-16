import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white border-t border-gray-800">
      <div className="w-full px-4 md:px-8 lg:px-10 py-6">
        <div className="text-center">
          <h4 className="text-base md:text-lg font-semibold text-white">
            Jayabheri The Pinnacle
          </h4>

          <div className="mt-3 space-y-1">
            <p className="text-xs text-[#c8b27c] font-medium">
              TG RERA Registration No: P02400006797
            </p>

            <p className="text-xs text-[#c8b27c] font-medium">
              Authorized Channel Partner Landrise Realty (RERA: A02500002729)
            </p>

            <p className="text-xs text-gray-400">
              Location: Kokapet, Hyderabad, Telangana
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-4">
          <div className="text-[10px] md:text-[11px] text-gray-400 leading-relaxed text-center">
            <strong>Disclaimer:</strong> This website is operated by an
            Authorized Channel Partner for marketing and lead generation
            purposes only. The information provided on this website, including
            prices, specifications, floor plans, layouts, images, amenities,
            availability, and offers, is for informational purposes only and is
            subject to change without prior notice. Images shown are artistic
            impressions and may differ from the actual development. Prospective
            buyers are advised to verify all project details, approvals,
            specifications, pricing, and availability directly with the
            developer before making any purchase decision. The project is
            registered under TG RERA Registration No: P02400006797. For more
            details, please visit the official Telangana RERA website:{" "}
            <a
              href="https://rera.telangana.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8b27c] hover:text-white transition"
            >
              rera.telangana.gov.in
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
          <Link
            to="/privacy-policy"
            className="text-xs text-gray-300 hover:text-white transition"
          >
            Privacy Policy
          </Link>

          <span className="text-gray-600">|</span>

          <Link
            to="/terms-conditions"
            className="text-xs text-gray-300 hover:text-white transition"
          >
            Terms & Conditions
          </Link>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-[11px] text-gray-500 text-center md:text-left">
              © 2026 Jayabheri Group. All Rights Reserved.
            </p>

            <p className="text-[11px] text-gray-500 text-center md:text-right">
              Crafted with ❤️ by{" "}
              <a
                href="https://www.vr2tech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8b27c] hover:text-white transition"
              >
                VR2Tech.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;