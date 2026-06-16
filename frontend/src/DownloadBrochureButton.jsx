import React, { useState } from "react";
import PopupForm from "./PopupForm";
import { Download } from "lucide-react";

const DownloadBrochureButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadBrochure = () => {
  const link = document.createElement("a");
  link.href = "/Jayabheri-the-pinnaclebrochure.pdf";
  link.download = "Jayabheri-the-pinnacle-brochure.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "jayabheri_brochure_downloaded",
    project_name: "Jayabheri The Pinnacle",
    lead_source: "Sticky Brochure Button",
    page_url: window.location.href,
  });
};

    const openPopup = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "jayabheri_brochure_button_click",
      project_name: "Jayabheri The Pinnacle",
      lead_source: "Sticky Brochure Button",
      page_url: window.location.href,
    });

    setShowPopup(true);
  };

  return (
    <>
      {/* Sticky Vertical Button */}
      <button
  onClick={openPopup}
  aria-label="Download Brochure"
  className="
    fixed
    right-0
    top-1/2
    -translate-y-1/2
    z-[999]
    w-[60px]
    h-[70px]
    rounded-l-2xl
    bg-[#061f24]
    border-l-2
    border-t-2
    border-b-2
    border-[#C8B27C]
    text-[#C8B27C]
    shadow-2xl
    flex
    items-center
    justify-center
    transition-all
    duration-300
    hover:w-[70px]
    hover:bg-[#0B5C63]
  "
>
  <Download size={28} strokeWidth={2.2} />
</button>

      {/* Popup */}
      <PopupForm
        show={showPopup}
        onClose={() => setShowPopup(false)}
        popupTitle="Download Jayabheri The Pinnacle Brochure"
        submitButtonText="Submit & Download Brochure"
        leadSource="Jayabheri Pinnacle Brochure Download"
        onSuccess={handleDownloadBrochure}
      />
    </>
  );
};

export default DownloadBrochureButton;