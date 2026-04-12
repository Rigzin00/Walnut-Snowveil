import { useRef } from "react";

const services = [
  {
    title: "Home-Cooked Dining",
    description: "Enjoy fresh and delicious home-style meals prepared with care. Our dining experience offers simple, comforting food that reflects the warmth of Ladakhi hospitality.",
    image: "/Dinning.png",
  },
  {
    title: "Comfortable Accommodation",
    description: "Our rooms are designed to provide a cozy and peaceful environment where guests can relax after exploring the beautiful landscapes of Nubra Valley.",
    image: "/room1.jpeg",
  },
  {
    title: "Local Travel Guidance",
    description: "We help guests explore the best attractions in Nubra Valley, including Samstanling Monastery, Sumur Sand Dunes, and nearby villages.",
    image: "/hm-things-2.webp",
  }
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-white text-[#5c3115]">
      <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto lg:px-[80px]">

        {/* Left Side: Scrolling Text Content with Sticky "Our Services" Header */}
        <div className="hidden lg:flex w-1/2 relative pr-8 flex-col">
          
          {/* Sticky Heading Container - stays fully fixed as text scrolls cleanly under it */}
          <div className="sticky top-0 z-30 w-full bg-white pt-[12vh] pb-[4vh]">
            <h2
              className="text-left"
              style={{
                fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
                fontSize: "clamp(48px, 6vw, 80px)",
                lineHeight: "1.1",
              }}
            >
              Our Services
            </h2>
          </div>

          <div className="relative z-10 w-full pb-[15vh]">
            {/* spacer so the first text aligns with the first image immediately */}
            <div className="h-[20vh]"></div>
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col justify-center h-[100vh]"
              >
                <h3
                  className="text-[48px] leading-[1.2] mb-4"
                  style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[18px] leading-[2] max-w-[380px]"
                  style={{
                    fontFamily: "Anek Bangla, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Sticky Overlapping Images */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="w-full pt-[25vh] pb-[25vh]">
            {services.map((service, index) => (
              <div
                key={index}
                className="sticky w-full max-w-[650px] ml-auto shadow-[0_-25px_50px_rgba(0,0,0,0.15)] bg-white overflow-hidden origin-bottom"
                style={{
                  top: "15vh", // Exact height from ceiling it freezes at
                  height: "75vh", // Portrait height
                  marginBottom: index === services.length - 1 ? "0" : "25vh", // Spacing matches the left column scroll distance
                  zIndex: index + 1 // Forces next image ON TOP of previous
                }}
              >
                <div className="absolute inset-[24px] border border-white/50 z-10 pointer-events-none"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Mobile View - Simple Stack --- */}
        <div className="lg:hidden w-full px-6 sm:px-8 md:px-12 py-12 sm:py-16 flex flex-col gap-12">
          <h2
            className="text-left text-[#5c3115]"
            style={{
              fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
              fontSize: "clamp(40px, 11vw, 64px)",
              lineHeight: "1.1",
            }}
          >
            Our Services
          </h2>

          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative">
                <div className="absolute inset-4 border border-white/30 z-10 pointer-events-none"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-2">
                <h3
                  className="text-[#5c3115] text-[34px] sm:text-[40px] leading-[1.2] mb-4"
                  style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#5c3115] text-[16px] leading-[1.8]"
                  style={{
                    fontFamily: "Anek Bangla, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
