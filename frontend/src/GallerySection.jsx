import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Images,
} from "lucide-react";

import nirvanaMain from "./assets/jayabheri_nirvana.png";
import nirvana1 from "./assets/jayabheri_nirvana_1.png";
import nirvana2 from "./assets/jayabheri_nirvana_2.png";
import nirvana3 from "./assets/jayabheri_nirvana_3.png";
import nirvana4 from "./assets/jayabheri_nirvana_4.png";
import nirvana5 from "./assets/jayabheri_nirvana_5.png";

const galleryImages = [
  {
    img: nirvana3,
    title: "Recreation Spaces",
  },
  {
    img: nirvanaMain,
    title: "The Nirvana Lifestyle",
  },
  {
    img: nirvana1,
    title: "Premium Amenities",
  },
  {
    img: nirvana2,
    title: "Clubhouse Experience",
  },
  
  {
    img: nirvana4,
    title: "Wellness & Leisure",
  },
  {
    img: nirvana5,
    title: "Landscaped Living",
  },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section
      id="gallery"
      className="relative bg-[#FFF7F7] py-16 md:py-24 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_left,#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-[#E43E4C]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <p className="text-[#E43E4C] text-xs md:text-sm uppercase tracking-[5px] font-semibold">
            Project Gallery
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#181818] mt-3">
            Experience
            <span className="italic text-[#E43E4C]"> The Nirvana</span>
          </h2>

          <div className="w-20 h-[3px] bg-[#E43E4C] mx-auto mt-5 rounded-full" />

          <p className="text-sm md:text-base text-gray-600 mt-5 leading-relaxed">
            Discover thoughtfully designed lifestyle spaces, recreation zones
            and premium amenities at Jayabheri The Nirvana.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {galleryImages.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className={`
                group
                relative
                overflow-hidden
                rounded-[1.5rem]
                shadow-lg
                bg-[#181818]
                ${
                  index === 0
                    ? "md:col-span-2 lg:col-span-2 lg:row-span-2"
                    : ""
                }
              `}
            >
              <img
                src={item.img}
                alt={`${item.title} - Jayabheri The Nirvana`}
                className={`
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                  ${
                    index === 0
                      ? "h-[320px] md:h-[450px] lg:h-full min-h-[500px]"
                      : "h-[240px] md:h-[270px]"
                  }
                `}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <p className="text-white font-serif font-semibold text-lg md:text-xl">
                  {item.title}
                </p>
              </div>

              {/* View icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#E43E4C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Images size={18} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center px-4">

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white text-[#181818] flex items-center justify-center hover:bg-[#E43E4C] hover:text-white transition"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {/* Previous */}
          <button
            onClick={prevImage}
            className="absolute left-3 md:left-8 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/90 text-[#181818] flex items-center justify-center hover:bg-[#E43E4C] hover:text-white transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Image */}
          <div className="text-center max-w-6xl">
            <img
              src={galleryImages[selectedIndex].img}
              alt={galleryImages[selectedIndex].title}
              className="max-w-[92vw] max-h-[82vh] object-contain rounded-xl shadow-2xl"
            />

            <p className="text-white text-base md:text-lg font-serif font-semibold mt-4">
              {galleryImages[selectedIndex].title}
            </p>

            <p className="text-white/50 text-xs mt-1">
              {selectedIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-3 md:right-8 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/90 text-[#181818] flex items-center justify-center hover:bg-[#E43E4C] hover:text-white transition"
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;