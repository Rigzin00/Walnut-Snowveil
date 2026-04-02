import { useRef } from "react";

const services = [
  {
    title: "Dinning",
    description: "Enjoy fresh, seasonal flavors crafted with care. Our lodge offers a curated menu blending local and international cuisine, served in a warm and inviting setting.",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Meetings & Events",
    description: "From corporate gatherings to special celebrations, our lodge offers elegant spaces, modern amenities, and exceptional service for a seamless experience.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Recreations",
    description: "Enjoy a variety of recreational activities, from refreshing swims to nature walks and outdoor adventures. Whether you seek relaxation or excitement, our lodge offers the perfect blend of leisure.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2ae7615?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  }
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto md:px-[80px]">

        {/* Left Side: Scrolling Text Content with Sticky "Our Services" Header */}
        <div className="hidden md:flex flex-col w-1/2 relative px-[40px] md:px-0 pr-8">
          {/* Sticky Heading with solid white background to hide text as it scrolls up under it */}
          <div 
            className="sticky top-0 pt-[10vh] pb-[4vh] bg-white w-full z-20"
          >
            <h2
              className="text-left text-[#5c3115]"
              style={{
                fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
                fontSize: "clamp(48px, 6vw, 80px)",
                lineHeight: "1.1",
              }}
            >
              Our Services
            </h2>
            <div className="absolute bottom-[-30px] left-0 w-full h-[30px] bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          </div>

          <div className="relative z-10 pb-[20vh]">
            <div className="h-[50vh]"></div>
            {services.map((service, index) => (
              <div key={index} className="h-screen flex flex-col justify-center">
                <h3
                  className="text-[#5c3115] text-[48px] leading-[1.2] mb-4"
                  style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#5c3115] text-[18px] leading-[2] max-w-[380px]"
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
        <div className="hidden md:block w-1/2 relative pb-[20vh]">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`sticky top-0 flex flex-col items-end ${index === 0 ? 'h-[150vh]' : 'h-screen'}`}
            >
              {/* Image Container with shadow dropping onto previous image */}
              <div 
                className="relative w-full max-w-[650px] h-[85vh] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] bg-white overflow-hidden"
                style={{ marginTop: "7.5vh" }}
              >
                <div className="absolute inset-4 border border-white/40 z-10 pointer-events-none"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* --- Mobile View - Simple Stack --- */}
        <div className="md:hidden w-full px-[40px] py-[80px] flex flex-col gap-12">
          <h2
            className="text-left text-[#5c3115]"
            style={{
              fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
              fontSize: "clamp(48px, 6vw, 80px)",
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
                  className="text-[#5c3115] text-[2.5rem] md:text-[3rem] leading-[1.2] mb-4"
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
