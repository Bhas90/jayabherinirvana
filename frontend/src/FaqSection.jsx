import React, { useState } from "react";

const faqs = [
{
question: "Where is Jayabheri The Pinnacle located?",
answer:
"Jayabheri The Pinnacle is strategically located at Kokapet, Hyderabad, offering seamless connectivity to Financial District, Gachibowli, HITEC City, ORR, premium schools, hospitals and business hubs.",
},
{
question: "What amenities are available?",
answer:
"The project offers 75,000 SFT of premium lifestyle amenities including clubhouse, swimming pool, fitness center, co-working spaces, amphitheatre, indoor games, outdoor fitness zones, toddler room, landscaped gardens and more.",
},
{
question: "What types of flats are available?",
answer:
"Jayabheri The Pinnacle offers luxury 3.5 BHK and 4.5 BHK residences thoughtfully designed with spacious layouts, premium specifications and panoramic views.",
},
{
question: "What is the size range of flats?",
answer:
"Residences range from approximately 3587 SFT to 4622 SFT, providing spacious and comfortable living environments for modern families.",
},
{
question: "What is the possession date?",
answer:
"Please contact our sales team for the latest construction updates, possession schedules, inventory availability and tower-wise details.",
},
{
question:
"Why is Kokapet a popular location for apartments in Hyderabad?",
answer:
"Kokapet has emerged as Hyderabad's most sought-after luxury residential destination due to its proximity to Financial District, Gachibowli, ORR, international schools, healthcare facilities and IT hubs.",
},
{
question:
"How far is it from major IT hubs like Gachibowli and Financial District?",
answer:
"Jayabheri The Pinnacle is located just minutes away from Financial District, Gachibowli and major technology campuses, ensuring effortless daily commuting.",
},
{
question:
"What are the location highlights of Jayabheri The Pinnacle in Kokapet?",
answer:
"The project enjoys excellent connectivity to ORR, Financial District, Gachibowli, HITEC City, international schools, hospitals, shopping destinations and Rajiv Gandhi International Airport.",
},
];

const FaqSection = () => {
const leftFaqs = faqs.slice(0, 4);
const rightFaqs = faqs.slice(4);

// First FAQ in each column open by default
const [openIndexes, setOpenIndexes] = useState([0, 4]);

const toggleFaq = (index) => {
setOpenIndexes((prev) =>
prev.includes(index)
? prev.filter((item) => item !== index)
: [...prev, index]
);
};

const renderFaq = (faq, index) => {
const isOpen = openIndexes.includes(index);

return (
  <div
    key={index}
    className="bg-white border border-[#0B5C63]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
  >
    <button
      onClick={() => toggleFaq(index)}
      className="w-full flex justify-between items-center px-5 md:px-6 py-5 text-left"
    >
      <div className="flex items-start gap-3">
        <div className="min-w-8 h-8 rounded-full bg-[#0B5C63]/10 text-[#0B5C63] flex items-center justify-center text-sm font-bold">
          {index + 1}
        </div>

        <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#061f24] leading-relaxed">
          {faq.question}
        </h3>
      </div>

      <div
        className={`min-w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-[#0B5C63] text-white rotate-180"
            : "bg-[#0B5C63]/10 text-[#0B5C63]"
        }`}
      >
        ▼
      </div>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-[250px]" : "max-h-0"
      }`}
    >
      <div className="px-5 md:px-6 pb-5">
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  </div>
);

};

return ( <section
   id="faqs"
   className="bg-gradient-to-b from-white via-[#f4f9fa] to-[#edf7f8] py-20 md:py-24 px-4 overflow-hidden"
 > <div className="max-w-7xl mx-auto"> <div className="text-center mb-14"> <p className="text-sm uppercase tracking-[4px] text-[#0B5C63] font-semibold mb-3">
FAQ'S </p>

      <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#061f24]">
        Frequently Asked Questions
      </h2>

      <div className="w-24 h-[3px] bg-[#0B5C63] mx-auto mt-5 rounded-full"></div>

      <p className="text-gray-500 mt-5 max-w-3xl mx-auto text-sm md:text-base">
        Find answers about Jayabheri The Pinnacle, Kokapet location,
        amenities, floor plans, connectivity, pricing and investment
        potential.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
      <div className="space-y-5">
        {leftFaqs.map((faq, idx) => renderFaq(faq, idx))}
      </div>

      <div className="space-y-5">
        {rightFaqs.map((faq, idx) =>
          renderFaq(faq, idx + 4)
        )}
      </div>
    </div>
  </div>
</section>

);
};

export default FaqSection;
