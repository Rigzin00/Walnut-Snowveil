import React, { useEffect, useState, useRef } from "react";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { title: "Authentic Ladakhi Hospitality", desc: "Warm and welcoming service for guests." },
    { title: "Peaceful Village Location", desc: "Located in the serene village of Sumoor." },
    { title: "Comfortable Accommodation", desc: "Cozy rooms designed for relaxation." },
    { title: "Local Culture & Tradition", desc: "Experience the charm of Ladakhi lifestyle." },
    { title: "Scenic Mountain Views", desc: "Surrounded by the dramatic landscapes of Nubra Valley." },
    { title: "A Home Away From Home", desc: "A relaxing retreat for travelers exploring Ladakh." },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-[80px] md:py-[120px] px-[20px] md:px-[80px] overflow-hidden">
      <div 
        className={`max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-[60px] md:gap-[100px] transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}
      >
        
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h2
            className="text-[40px] md:text-[50px] leading-[1.3] text-[#5c3115] mb-[30px]"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
           A place inspired by the beauty of Nubra Valley.
          </h2>
          
          <p 
            className="text-[#5c3115] text-[16px] md:text-[18px] opacity-80 mb-[30px] leading-[1.8]"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            Walnut Snowveil Residency was created to offer travelers a peaceful and welcoming stay in the 
            heart of Sumoor, Nubra Valley. Surrounded by the dramatic landscapes of Ladakh and the quiet 
            charm of village life, the residency reflects the spirit of the region—simple, warm, and deeply 
            connected to nature.
            Inspired by Ladakh’s rich culture and timeless hospitality, Walnut Snowveil Residency combines 
            traditional warmth with modern comfort to create a relaxing retreat for travelers from around the 
            world. Guests wake up to breathtaking mountain views, fresh Himalayan air, and the calm atmosphere 
            that makes Nubra Valley one of Ladakh’s most treasured destinations.
          </p>
          
          <p 
            className="text-[#5c3115] text-[16px] md:text-[18px] opacity-80 leading-[1.8]"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            Whether you are visiting nearby monasteries, exploring the sand dunes, or simply enjoying 
            the peaceful surroundings, every stay at Walnut Snowveil Residency is designed to feel 
            welcoming and memorable. More than just a place to stay, it is a place where guests can 
            experience the beauty, culture, and hospitality that make Nubra Valley truly special.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start pt-0 md:pt-[20px]">
          <div className="w-full h-[1px] bg-[#5c3115]/10 mb-[25px]"></div>
          
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div 
                className="w-full flex flex-col sm:flex-row items-start sm:items-center py-[2px] text-[#5c3115] opacity-80 gap-1 sm:gap-2 mb-[25px]"
                style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
              >
                <span className="text-[16px] md:text-[18px] font-normal">{feature.title}</span>
                <span className="hidden sm:inline-block">-</span>
                <span className="text-[16px] md:text-[18px]">{feature.desc}</span>
              </div>
              <div className="w-full h-[1px] bg-[#5c3115]/10 mb-[25px]"></div>
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
}