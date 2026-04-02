import React, { useRef, useEffect, useState } from "react";

export default function EnvironmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  // Handle entry animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle continuous parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset when in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Reduced multiplier for subtle effect
        const scrolled = (windowHeight - rect.top);
        setOffsetY(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-[80px] md:py-[150px] px-[20px] md:px-[80px]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-[40px] md:gap-[80px] relative">
        
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          
          {/* Top Left Image */}
          <div 
            className={`w-[85%] md:w-[75%] aspect-[4/3] overflow-hidden transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Lush green valley mountain view" 
              className="w-full h-[140%] -top-[20%] relative object-cover will-change-transform"
              style={{ 
                transform: `translateY(${-offsetY * 0.15}px)`,
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
              }}
            />
          </div>

          {/* Spacer to push text down */}
          <div className="h-[100px] md:h-[200px] hidden md:block"></div>

          {/* Text Content */}
          <div 
            className={`pr-0 md:pr-[40px] lg:pr-[60px] mt-[60px] md:mt-[100px] transition-all duration-1000 delay-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
            }`}
          >
            <h2 
              className="text-[#5c3115] text-[40px] md:text-[52px] lg:text-[50px] leading-[1.1] mb-[30px] md:mb-[40px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              An environmentally<br />responsible experience
            </h2>
            <p 
              className="text-[#5c3115] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.8] mb-[40px] opacity-90"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
            >
              Oasila offers more than just a place to relax and unwind—it embodies a deep commitment to environmental stewardship. With a focus on sustainability, the resort strives to minimize its ecological footprint, safeguarding its delicate ecosystem and preserving the breathtaking natural beauty that surrounds it.
            </p>
            <a 
              href="#" 
              className="inline-block uppercase tracking-[1px] text-[13px] md:text-[14px] text-[#5c3115] border-b-[2px] border-[#5c3115]/50 pb-1 font-medium hover:border-[#5c3115] transition-colors" 
              style={{ fontFamily: "Anek Bangla, sans-serif" }}
            >
              LEARN MORE
            </a>
          </div>

        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col md:pt-[100px]">
          
          {/* Middle Right Portrait Image */}
          <div 
            className={`w-[80%] md:w-[70%] ml-auto aspect-[3/4] overflow-hidden transition-all duration-1000 delay-150 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mountain peak reflected in turquoise lake" 
              className="w-full h-[140%] -top-[20%] relative object-cover will-change-transform"
              style={{ 
                transform: `translateY(${offsetY * 0.15}px)`,  // Scrolls down (positive offset)
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
              }}
            />
          </div>

          {/* Bottom Right Landscape Image */}
          <div 
            className={`w-full aspect-[16/10] mt-[60px] md:mt-[150px] overflow-hidden transition-all duration-1000 delay-500 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Outdoor dining table overlooking valley" 
              className="w-full h-[140%] -top-[20%] relative object-cover will-change-transform"
              style={{ 
                transform: `translateY(${-offsetY * 0.05}px)`, // Very slow multiplier
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}