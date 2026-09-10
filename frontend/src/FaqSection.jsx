import React, { useState } from "react";

const faqs = [
  {
    question: "Where is Jayabheri The Nirvana located?",
    answer:
      "Jayabheri The Nirvana is located in Hyderabad's Financial District, approximately 1.6 km from Wipro Junction on Q-City Road and right adjacent to Jayabheri Four Seasons.",
  },
  {
    question: "What type of residences are available at Jayabheri The Nirvana?",
    answer:
      "Jayabheri The Nirvana offers premium 3 BHK and 3.5 BHK residences designed for spacious high-rise living.",
  },
  {
    question: "What are the available apartment sizes?",
    answer:
      "The available residence sizes are 1920 SFT, 2190 SFT and 2225 SFT, depending on the block, facing and configuration selected.",
  },
  {
    question: "What is the starting price of Jayabheri The Nirvana?",
    answer:
      "Indicative pricing starts from approximately ₹2.04 Cr* onwards, based on a 1920 SFT residence at ₹10,600 per SFT. Final cost may vary depending on floor, facing, availability, taxes and other applicable charges.",
  },
  {
    question: "What is the total project area?",
    answer:
      "Jayabheri The Nirvana is spread across approximately 7 acres with 79% open space, landscaped areas, lifestyle amenities and premium residential towers.",
  },
  {
    question: "How many towers and residences are there?",
    answer:
      "The project comprises five high-rise towers with 29 floors and a total of approximately 693 premium residences.",
  },
  {
    question: "What is the pricing for Blocks A, B, D and E?",
    answer:
      "Blocks A, B, D and E are currently priced at ₹10,600 per SFT. Available options include east-facing 3 BHK residences of 1920 SFT and 2190 SFT, and west-facing 3.5 BHK residences of 2225 SFT.",
  },
  {
    question: "What is the pricing for Block C?",
    answer:
      "Block C is currently priced at ₹10,850 per SFT, with east-facing and west-facing 3.5 BHK residences of 2225 SFT.",
  },
  {
    question: "What amenities are available at Jayabheri The Nirvana?",
    answer:
      "Amenities include a swimming pool with children's pool, cafeteria, crèche, multipurpose hall, squash and badminton courts, gym and exercise deck, sauna, spa, salon, indoor games, yoga and meditation hall, aerobics hall, conference halls, business and reading lounge, preview theatre, guest rooms, ATM, convenience store, jogging track, amphitheatre, basketball court, outdoor fitness areas and landscaped open spaces.",
  },
  {
    question: "What is the RERA number of Jayabheri The Nirvana?",
    answer:
      "Jayabheri The Nirvana is registered under TS RERA No: P02400003566.",
  },
];

const FaqSection = () => {
  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

  const [openIndexes, setOpenIndexes] = useState([0, 5]);

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
        className="group bg-[#151012] border border-[#E43E4C]/20 rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <button
          onClick={() => toggleFaq(index)}
          className="w-full flex justify-between items-center px-5 md:px-6 py-5 text-left"
        >
          <div className="flex items-start gap-3">
            <div
              className={`min-w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                isOpen
                  ? "bg-[#E43E4C] text-white"
                  : "bg-white/10 text-[#E43E4C]"
              }`}
            >
              {index + 1}
            </div>

            <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white leading-relaxed">
              {faq.question}
            </h3>
          </div>

          <div
            className={`min-w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-[#E43E4C] text-white rotate-180"
                : "bg-white/10 text-[#E43E4C]"
            }`}
          >
            ▼
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[340px]" : "max-h-0"
          }`}
        >
          <div className="px-5 md:px-6 pb-5">
            <p className="text-sm md:text-base text-white/65 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="faqs"
      className="relative bg-[#FFF7F7] py-20 md:py-24 px-4 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_top_left,#000_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Nirvana Red Glow */}
      <div className="absolute -top-28 -right-28 w-96 h-96 bg-[#E43E4C]/15 rounded-full blur-3xl" />

      <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-[#7D1F29]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14">
          <div className="lg:col-span-5 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[5px] text-[#E43E4C] font-semibold mb-3">
              FAQ&apos;s
            </p>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#151012] leading-tight">
              Frequently Asked
              <br />

              <span className="italic text-[#E43E4C]">
                Questions
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="border-l-4 border-[#E43E4C] pl-5 md:pl-7">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Find answers about Jayabheri The Nirvana, its Financial
                District location, apartment sizes, pricing, available blocks,
                amenities, connectivity and project highlights.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-5">
            {leftFaqs.map((faq, idx) =>
              renderFaq(faq, idx)
            )}
          </div>

          <div className="space-y-5">
            {rightFaqs.map((faq, idx) =>
              renderFaq(faq, idx + 5)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;