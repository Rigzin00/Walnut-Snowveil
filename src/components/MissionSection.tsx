import React, { useRef, useEffect, useState } from "react";

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset when in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Amount of pixels scrolled past the top entering the viewport
        const scrolled = windowHeight - rect.top;
        setOffsetY(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-[80px] md:py-[150px] px-[20px] md:px-[80px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-[40px] md:gap-[80px] items-center md:items-start">
        
        {/* Left Column - Portrait Image (Moves Down) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-[500px] aspect-[3/4] relative overflow-hidden border border-gray-200 p-2">
            <div className="absolute inset-[10px] md:inset-[20px] border border-white/40 z-10 pointer-events-none"></div>
            {/* The image shifts down meaning positive translateY */}
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Lobby interior with sun rays" 
              className="w-full h-[130%] -top-[15%] relative object-cover will-change-transform"
              style={{
                transform: `translateY(${offsetY * 0.15}px)`,
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              }}
            />
          </div>
        </div>

        {/* Right Column - Landscape Image (Moves Up) + Text */}
        <div className="w-full md:w-1/2 flex flex-col pt-0 md:pt-[60px] gap-[60px] md:gap-[100px]">
          
          <div className="w-full max-w-[600px] aspect-[16/10] relative overflow-hidden border border-gray-200">
            <div className="absolute inset-[10px] md:inset-[20px] border border-white/40 z-10 pointer-events-none"></div>
            {/* The image shifts up meaning negative translateY */}
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Bright minimalist sitting area" 
              className="w-full h-[130%] -top-[15%] relative object-cover will-change-transform"
              style={{
                transform: `translateY(${-offsetY * 0.15}px)`,
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              }}
            />
          </div>

          {/* Quote Text */}
          <div className="w-full max-w-[500px]">
            <div 
              className="text-[#5c3115] text-[40px] leading-none mb-2"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              “
            </div>
            <p 
              className="text-[#5c3115] text-[20px] md:text-[26px] leading-[1.6]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              Our mission is to provide a luxurious and serene retreat where nature, comfort, and personalized hospitality come together for an unforgettable experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}