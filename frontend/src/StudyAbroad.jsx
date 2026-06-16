import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
        id="about-builder"
        className="bg-gray-100 py-12 w-full scroll-mt-24"
      >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About <span style={{ color: "#2c5f3f" }}>Developer</span>
        </h2>

        <div className="mt-5 text-gray-700 text-sm md:text-base leading-7">
          <p>
            <strong>Sree Chaitanya Constructions</strong> presents{" "}
            <strong>Urban Woods Villas</strong>, a premium gated villa community
            located at Thimmapur, Hyderabad. The project is designed for families
            looking for peaceful villa living with modern amenities, spacious
            layouts, and smooth connectivity to ORR, RGIA Airport, Shamshabad,
            Kokapet, and Financial District.
          </p>

          {expanded && (
            <div className="mt-4 space-y-4">
              <p>
                Urban Woods Villas is planned across a serene residential
                environment with exclusive villas, landscaped surroundings,
                clubhouse facilities, swimming pool, gym, children’s play area,
                badminton court, security, and internal roads. The community
                brings together privacy, comfort, and long-term lifestyle value.
              </p>

              <p>
                The developer focuses on practical planning, quality
                construction, usable spaces, and customer-focused project
                delivery. With villa sizes ranging from spacious family layouts
                to larger premium configurations, Urban Woods is positioned as a
                strong choice for homebuyers looking for villas near Hyderabad’s
                fast-growing southern corridor.
              </p>
            </div>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 inline-flex items-center gap-2 bg-[#2c5f3f] hover:bg-[#21482f] text-white px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default StudyAbroad;