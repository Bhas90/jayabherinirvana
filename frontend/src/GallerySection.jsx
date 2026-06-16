import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/* ================= AMENITIES IMAGES ================= */
import amphitheatre from "./assets/jayabheri-pinnacle-amphitheatre.webp";
import coworkingLobby from "./assets/jayabheri-pinnacle-coworking-lobby.webp";
import eldersMeeting from "./assets/jayabheri-pinnacle-elders-meeting-room.webp";
import hobbyRoom from "./assets/jayabheri-pinnacle-hobby-room.webp";
import huddleRoom from "./assets/jayabheri-pinnacle-huddle-room.webp";
import outdoorFitness from "./assets/jayabheri-pinnacle-outdoor-fitness.webp";
import toddlerRoom from "./assets/jayabheri-pinnacle-toddler-room.webp";
import tuitionRoom from "./assets/jayabheri-pinnacle-cloubhouse.webp";
import volleyBall from "./assets/jayabheri-pinnacle-volly-ball.webp";

/* ================= EXTERNAL VIEW IMAGES ================= */
import externalView from "./assets/jayabheri-pinnacle-external-view.webp";
import externalView1 from "./assets/jayabheri-pinnacle-external-view-1.webp";
import externalView2 from "./assets/jayabheri-pinnacle-external-view-2.webp";
import externalView3 from "./assets/jayabheri-pinnacle-external-view-3.webp";
import externalView4 from "./assets/jayabheri-pinnacle-external-view-4.webp";
import externalDay from "./assets/jayabheri-pinnacle-external-view-day.webp";

const galleryData = [
  {
    id: "amenities",
    label: "Amenities",
    
    images: [
      { img: amphitheatre, title: "Amphitheatre" },
      { img: coworkingLobby, title: "Co-working Lobby" },
      { img: eldersMeeting, title: "Elders’ Meeting Room" },
      { img: hobbyRoom, title: "Hobby Room" },
      { img: huddleRoom, title: "Huddle Room" },
      { img: outdoorFitness, title: "Outdoor Fitness Zone" },
      { img: toddlerRoom, title: "Toddler Room" },
      { img: tuitionRoom, title: "Clubhouse" },
      { img: volleyBall, title: "Volleyball Court" },
    ],
  },
  {
    id: "external",
    label: "External Views",
    
    images: [
      { img: externalView1, title: "Tower View" },
      { img: externalView2, title: "Elevation View" },
      { img: externalView3, title: "High-Rise View" },
      { img: externalView4, title: "Skyline View" },
      { img: externalDay, title: "Day View" },
    ],
  },
];

const GallerySection = () => {
  const [selected, setSelected] = useState("amenities");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeTab = galleryData.find((item) => item.id === selected);
  const images = activeTab.images;

  useEffect(() => {
    setCurrentIndex(0);
  }, [selected]);

  useEffect(() => {
    if (lightboxOpen) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length, lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <section
      id="gallery"
      className="relative bg-gradient-to-b from-[#f4f9fa] via-white to-[#edf7f8] py-16 md:py-20 px-4 overflow-hidden"
    >
      <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[4px] text-[#0B5C63] font-semibold mb-3">
          Project Gallery
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061f24] mb-5">
          Jayabheri The Pinnacle
          <br />
          <span className="text-[#0B5C63]">
            Amenities & External Views
          </span>
        </h2>

        <div className="w-24 h-[3px] bg-[#0B5C63] mx-auto rounded-full mb-6"></div>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed mb-10">
          A visual glimpse into premium amenities, lifestyle spaces, iconic
          architecture and luxury high-rise living at Kokapet, Hyderabad.
        </p>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {galleryData.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`px-7 py-3 rounded-full text-sm font-semibold transition-all shadow-sm ${
                selected === id
                  ? "bg-[#0B5C63] text-white"
                  : "bg-white text-[#061f24] border border-[#0B5C63]/20 hover:border-[#0B5C63] hover:text-[#0B5C63]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="max-w-2xl mx-auto text-sm text-gray-500 mb-10">
          {activeTab.description}
        </p>

        <div className="relative">
          <button
            onClick={prevImage}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg text-[#061f24] items-center justify-center hover:bg-[#8ed9df] transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextImage}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg text-[#061f24] items-center justify-center hover:bg-[#8ed9df] transition"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-16">
            {visibleImages.map((item, index) => {
              const actualIndex = (currentIndex + index) % images.length;

              return (
                <button
                  key={`${selected}-${actualIndex}`}
                  onClick={() => openLightbox(actualIndex)}
                  className="relative overflow-hidden rounded-3xl shadow-lg group border border-[#0B5C63]/10 bg-white text-left"
                >
                  <img
                    src={item.img}
                    alt={`${item.title} - Jayabheri The Pinnacle Kokapet`}
                    className="w-full h-[250px] md:h-[320px] object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061f24]/85 via-[#061f24]/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-semibold text-base md:text-lg">
                      {item.title}
                    </p>
                    <p className="text-white/80 text-xs md:text-sm mt-1">
                      Jayabheri The Pinnacle, Kokapet
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevImage}
              className="w-12 h-12 rounded-full bg-[#0B5C63] text-white flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextImage}
              className="w-12 h-12 rounded-full bg-[#0B5C63] text-white flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {images.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              title={item.title}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex === index
                  ? "w-8 bg-[#0B5C63]"
                  : "w-2.5 bg-gray-300 hover:bg-[#0B5C63]/60"
              }`}
              aria-label={`View ${item.title}`}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center px-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-[#061f24] flex items-center justify-center hover:bg-[#8ed9df] transition"
            aria-label="Close gallery"
          >
            <X size={26} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/90 text-[#061f24] flex items-center justify-center hover:bg-[#8ed9df] transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={images[currentIndex].img}
            alt={images[currentIndex].title}
            className="max-w-[92vw] max-h-[82vh] object-contain rounded-2xl shadow-2xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/90 text-[#061f24] flex items-center justify-center hover:bg-[#8ed9df] transition"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-sm md:text-base font-semibold">
              {images[currentIndex].title}
            </p>
            <p className="text-white/60 text-xs mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;