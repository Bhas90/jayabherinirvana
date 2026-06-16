import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

/* ================= TOWER A FLOOR PLANS ================= */
import towerAUnit1 from "./assets/tower-a-unit-1-3bhk-3587.PNG";
import towerAUnit2 from "./assets/tower-a-unit-2-3bhk-3617.PNG";
import towerAUnit3 from "./assets/tower-a-unit-3-3bhk-3678.PNG";
import towerAUnit4 from "./assets/tower-a-unit-4-3bhk-3671.PNG";

/* ================= TOWER B FLOOR PLANS ================= */
import towerBUnit1 from "./assets/tower-b-unit-1-4bhk-4545.PNG";
import towerBUnit2 from "./assets/tower-b-unit-2-4bhk-4549.PNG";
import towerBUnit3 from "./assets/tower-b-unit-3-4bhk-4622.PNG";
import towerBUnit4 from "./assets/tower-b-unit-4-4bhk-4621.PNG";

const floorPlanData = [
  {
    id: "tower-a",
    label: "Tower A",
    subtitle: "3 BHK Residences",
    plans: [
      {
        img: towerAUnit1,
        title: "Tower A - Unit 1",
        type: "3 BHK",
        size: "3,587 SFT",
        facing: "East Facing",
      },
      {
        img: towerAUnit2,
        title: "Tower A - Unit 2",
        type: "3 BHK",
        size: "3,617 SFT",
        facing: "West Facing",
      },
      {
        img: towerAUnit3,
        title: "Tower A - Unit 3",
        type: "3 BHK",
        size: "3,678 SFT",
        facing: "East Facing",
      },
      {
        img: towerAUnit4,
        title: "Tower A - Unit 4",
        type: "3 BHK",
        size: "3,671 SFT",
        facing: "West Facing",
      },
    ],
  },
  {
    id: "tower-b",
    label: "Tower B",
    subtitle: "4 BHK Residences",
    plans: [
      {
        img: towerBUnit1,
        title: "Tower B - Unit 1",
        type: "4 BHK",
        size: "4,545 SFT",
        facing: "East Facing",
      },
      {
        img: towerBUnit2,
        title: "Tower B - Unit 2",
        type: "4 BHK",
        size: "4,549 SFT",
        facing: "West Facing",
      },
      {
        img: towerBUnit3,
        title: "Tower B - Unit 3",
        type: "4 BHK",
        size: "4,622 SFT",
        facing: "East Facing",
      },
      {
        img: towerBUnit4,
        title: "Tower B - Unit 4",
        type: "4 BHK",
        size: "4,621 SFT",
        facing: "West Facing",
      },
    ],
  },
];

const FloorPlans = () => {
  const [activeTower, setActiveTower] = useState("tower-a");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const activeData = floorPlanData.find((item) => item.id === activeTower);
  const plans = activeData.plans;

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeTower]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, plans.length]);

  return (
    <section
      id="floor-plans"
      className="relative bg-gradient-to-b from-white via-[#f4f9fa] to-[#edf7f8] py-16 md:py-20 px-4 overflow-hidden"
    >
      <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[4px] text-[#0B5C63] font-semibold mb-3">
            Floor Plans
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#061f24]">
            Explore Tower-Wise Layouts
          </h2>

          <div className="w-24 h-[3px] bg-[#0B5C63] mx-auto mt-5 rounded-full"></div>

          <p className="max-w-3xl mx-auto mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
            View spacious unit-wise floor plans at Jayabheri The Pinnacle,
            Kokapet with premium layouts, large balconies, home office spaces,
            and thoughtfully planned residences.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {floorPlanData.map((tower) => (
            <button
              key={tower.id}
              onClick={() => setActiveTower(tower.id)}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTower === tower.id
                  ? "bg-[#0B5C63] text-white shadow-lg"
                  : "bg-white text-[#061f24] border border-[#0B5C63]/20 hover:border-[#0B5C63] hover:text-[#0B5C63]"
              }`}
            >
              {tower.label} - {tower.subtitle}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-[#0B5C63]/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <button
                onClick={() => openLightbox(index)}
                className="relative w-full bg-white overflow-hidden"
              >
                <img
                  src={plan.img}
                  alt={`${plan.title} ${plan.type} ${plan.size}`}
                  className="w-full h-[260px] object-contain p-3 group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#061f24]/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Maximize2 size={18} />
                </div>
              </button>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-[#061f24]">
                    {plan.title}
                  </h3>

                  <span className="text-xs bg-[#0B5C63]/10 text-[#0B5C63] px-3 py-1 rounded-full font-semibold">
                    {plan.facing}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#f4f9fa] p-3">
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">
                      Type
                    </p>
                    <p className="text-sm font-bold text-[#061f24]">
                      {plan.type}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f4f9fa] p-3">
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">
                      Size
                    </p>
                    <p className="text-sm font-bold text-[#061f24]">
                      {plan.size}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => openLightbox(index)}
                  className="mt-5 w-full py-3 rounded-xl bg-[#0B5C63] text-white text-sm font-semibold hover:bg-[#083E44] transition"
                >
                  View Floor Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-[#061f24] flex items-center justify-center hover:bg-[#8ed9df] transition"
            aria-label="Close floor plan"
          >
            <X size={26} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/90 text-[#061f24] flex items-center justify-center hover:bg-[#8ed9df] transition"
            aria-label="Previous floor plan"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-6xl w-full text-center">
            <img
              src={plans[selectedIndex].img}
              alt={plans[selectedIndex].title}
              className="w-full max-h-[78vh] object-contain rounded-2xl bg-white shadow-2xl"
            />

            <div className="mt-5">
              <h3 className="text-white text-lg md:text-2xl font-semibold">
                {plans[selectedIndex].title}
              </h3>

              <p className="text-white/70 mt-2 text-sm">
                {plans[selectedIndex].type} • {plans[selectedIndex].size} •{" "}
                {plans[selectedIndex].facing}
              </p>

              <p className="text-[#8ed9df] mt-3 text-sm">
                {selectedIndex + 1} / {plans.length}
              </p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/90 text-[#061f24] flex items-center justify-center hover:bg-[#8ed9df] transition"
            aria-label="Next floor plan"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;