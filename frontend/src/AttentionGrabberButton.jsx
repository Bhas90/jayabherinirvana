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
    event: "jayabheri_call_button_visible",
    project_name: "Jayabheri The Pinnacle",
    project_location: "Kokapet",
    lead_source: "Floating Call Button",
  });
}, 10000);

return () => clearTimeout(timer);


}, []);

const handleClick = () => {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "jayabheri_call_click",
project_name: "Jayabheri The Pinnacle",
project_location: "Kokapet",
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
aria-label="Call Now"
className="
fixed
left-0
top-1/2
-translate-y-1/2
z-[999]
w-[60px]
h-[70px]
rounded-r-2xl
bg-[#061f24]
border-r-2
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
> <PhoneCall
     size={28}
     strokeWidth={2.2}
     className="animate-pulse"
   /> </a>
);
};

export default AttentionGrabberButton;
