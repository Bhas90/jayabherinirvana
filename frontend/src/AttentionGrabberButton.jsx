import React, { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";

const AttentionGrabberButton = () => {
  const [showButton, setShowButton] = useState(false);

  const phoneNumber = "+919652143222";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);

      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "jayabheri_nirvana_call_button_visible",
        project_name: "Jayabheri The Nirvana",
        project_location: "Financial District, Gachibowli",
        website_domain: "jayabherinirvana.in",
        phone_number: phoneNumber,
        lead_source: "Floating Call Button",
        page_url: window.location.href,
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "jayabheri_nirvana_call_click",
      project_name: "Jayabheri The Nirvana",
      project_location: "Financial District, Gachibowli",
      website_domain: "jayabherinirvana.in",
      phone_number: phoneNumber,
      lead_source: "Floating Call Button",
      page_url: window.location.href,
    });
  };

  if (!showButton) return null;

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      aria-label="Call Jayabheri The Nirvana"
      className="
        fixed
        right-0
        top-[40%]
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
      <PhoneCall
        size={28}
        strokeWidth={2.2}
        className="animate-pulse"
      />
    </a>
  );
};

export default AttentionGrabberButton;