import React, { useState } from "react";
import PopupForm from "./PopupForm";
import { Download } from "lucide-react";

const DownloadBrochureButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");

    link.href = "/Nirvana_Brochure.pdf";
    link.download = "Jayabheri-The-Nirvana-Brochure.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "jayabheri_nirvana_brochure_downloaded",
      project_name: "Jayabheri The Nirvana",
      project_location: "Financial District, Gachibowli",
      lead_source: "Sticky Brochure Button",
      page_url: window.location.href,
    });
  };

  const openPopup = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "jayabheri_nirvana_brochure_button_click",
      project_name: "Jayabheri The Nirvana",
      project_location: "Financial District, Gachibowli",
      lead_source: "Sticky Brochure Button",
      page_url: window.location.href,
    });

    setShowPopup(true);
  };

  return (
    <>
      {/* Sticky Brochure Button */}
      <button
        onClick={openPopup}
        aria-label="Download Jayabheri The Nirvana Brochure"
        className="
          fixed
          right-0
          top-[52%]
          -translate-y-1/2
          z-[999]
          w-[60px]
          h-[70px]
          bg-[#111827]
          text-[#E43E4C]
          border-l
          border-t
          border-b
          border-[#E43E4C]/40
          shadow-2xl
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:w-[72px]
          hover:bg-[#E43E4C]
          hover:text-white
        "
      >
        <Download size={28} strokeWidth={2.2} />
      </button>

      {/* Popup Form */}
      <PopupForm
        show={showPopup}
        onClose={() => setShowPopup(false)}
        popupTitle="Download Jayabheri The Nirvana Brochure"
        submitButtonText="Submit & Download Brochure"
        leadSource="Jayabheri The Nirvana Brochure Download"
        onSuccess={handleDownloadBrochure}
      />
    </>
  );
};

export default DownloadBrochureButton;