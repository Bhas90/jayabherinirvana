import React, { useState } from "react";
import {
  Trees,
  Activity,
  Baby,
  Dumbbell,
  Users,
  Coffee,
  ShieldCheck,
  Waves,
  Gamepad2,
  Landmark,
  Leaf,
  Utensils,
  BookOpen,
  Volleyball,
  Store,
  Sparkles,
  HeartPulse,
  Theater,
  BedDouble,
  BriefcaseBusiness,
  Scissors,
  BadgeDollarSign,
} from "lucide-react";

const amenities = [
  {
    icon: <Waves size={32} />,
    label: "Swimming Pool",
  },
  {
    icon: <Baby size={32} />,
    label: "Children's Pool",
  },
  {
    icon: <Coffee size={32} />,
    label: "Cafeteria",
  },
  {
    icon: <Baby size={32} />,
    label: "Crèche",
  },
  {
    icon: <Users size={32} />,
    label: "A/C Multipurpose Hall",
  },

  {
    icon: <Volleyball size={32} />,
    label: "Squash & Badminton Courts",
  },
  {
    icon: <Dumbbell size={32} />,
    label: "Gym & Exercise Deck",
  },
  {
    icon: <HeartPulse size={32} />,
    label: "Sauna & Spa",
  },
  {
    icon: <Scissors size={32} />,
    label: "Salon",
  },
  {
    icon: <Gamepad2 size={32} />,
    label: "Indoor Games",
  },

  {
    icon: <Leaf size={32} />,
    label: "Yoga & Meditation Hall",
  },
  {
    icon: <Activity size={32} />,
    label: "Aerobics Hall",
  },
  {
    icon: <BriefcaseBusiness size={32} />,
    label: "Conference Halls",
  },
  {
    icon: <BookOpen size={32} />,
    label: "Business / Reading Lounge",
  },
  {
    icon: <Theater size={32} />,
    label: "Preview Theatre",
  },

  {
    icon: <BedDouble size={32} />,
    label: "A/C Guest Rooms",
  },
  {
    icon: <BadgeDollarSign size={32} />,
    label: "ATM Facility",
  },
  {
    icon: <Store size={32} />,
    label: "Convenience Store",
  },
  {
    icon: <Activity size={32} />,
    label: "Jogging Track",
  },
  {
    icon: <Trees size={32} />,
    label: "Landscaped Open Spaces",
  },

  {
    icon: <Landmark size={32} />,
    label: "Amphitheatre",
  },
  {
    icon: <Volleyball size={32} />,
    label: "Basketball Court",
  },
  {
    icon: <Dumbbell size={32} />,
    label: "Outdoor Fitness Station",
  },
  {
    icon: <ShieldCheck size={32} />,
    label: "24-Hour Security",
  },
];

const AmenitiesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleAmenities = showMore
    ? amenities
    : amenities.slice(0, 10);

  return (
    <section
      id="amenities"
      className="relative bg-[#151012] py-16 md:py-24 px-4 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top_left,#ffffff_1px,transparent_1px)] [background-size:26px_26px]" />

      {/* Nirvana red glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E43E4C]/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#7D1F29]/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-12">
          <div className="lg:col-span-5 text-center lg:text-left">
            <p className="text-[#E43E4C] text-xs md:text-sm uppercase tracking-[5px] font-semibold">
              Lifestyle Amenities
            </p>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4 leading-tight">
              Crafted for
              <br />

              <span className="italic text-[#E43E4C]">
                Elevated Living
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="border-l-4 border-[#E43E4C] pl-5 md:pl-7">
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                Jayabheri The Nirvana brings together leisure, fitness,
                wellness, recreation and social spaces through a thoughtfully
                planned clubhouse and landscaped outdoor environment designed
                for a refined contemporary lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {visibleAmenities.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.6rem]
                bg-white/[0.06]
                border
                border-white/10
                p-5
                text-center
                hover:bg-[#E43E4C]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="absolute -right-8 -top-8 w-20 h-20 rounded-full bg-[#E43E4C]/10 group-hover:bg-black/10 transition-all" />

              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-[#E43E4C]/15
                  text-[#E43E4C]
                  flex
                  items-center
                  justify-center
                  mb-4
                  group-hover:bg-black
                  group-hover:text-[#E43E4C]
                  transition-all
                  duration-300
                "
              >
                {item.icon}
              </div>

              <p className="text-sm md:text-[15px] font-semibold text-white/90 leading-snug group-hover:text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              px-8
              py-3
              rounded-full
              bg-[#E43E4C]
              text-white
              font-semibold
              shadow-lg
              hover:bg-white
              hover:text-[#E43E4C]
              transition-all
              duration-300
              inline-flex
              items-center
              gap-2
            "
          >
            <Sparkles size={18} />

            {showMore
              ? "Show Less Amenities"
              : "View All Amenities"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;