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
    { title: "140-acres Estate", desc: "A vast retreat immersed in nature." },
    { title: "Farm-to-Table Dining", desc: "Fresh ingredients from fields." },
    { title: "Scenic Surroundings", desc: "Gardens, a bird sanctuary." },
    { title: "Seamless Luxury", desc: "Open spaces blending nature." },
    { title: "Exclusive Winery", desc: "Fine wines from Oasis Winery." },
    { title: "Lakeside Serenity", desc: "Stunning views and tranquility." },
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
            140 acres of pure bliss. With endless reasons to return to our lodge.
          </h2>
          
          <p 
            className="text-[#5c3115] text-[16px] md:text-[18px] opacity-80 mb-[30px] leading-[1.8]"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            Oasila, alongside Blue heaven winery, is a serene oasis
            nestled within a sprawling 140-hectare estate, embodying
            the natural luxury of The Living Circle. Surrounded by lush
            landscapes and the breathtaking beauty of Ticino, it offers
            a seamless retreat where nature and tranquility take center
            stage.
          </p>
          
          <p 
            className="text-[#5c3115] text-[16px] md:text-[18px] opacity-80 leading-[1.8]"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            With a bird sanctuary, botanical garden, and orchard along
            the shores of Lake Maggiore, it is a haven for unforgettable
            moments. Our "from our farm to your table" philosophy
            ensures that guests enjoy the freshest rice, corn, fruits,
            vegetables, and wines, harvested directly from our fields
            and gardens.
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