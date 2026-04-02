import React, { useRef, useEffect, useState } from "react";

export default function RetreatSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  // Handle continuous parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset when in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const scrolled = (windowHeight - rect.top);
        setOffsetY(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-[60px] md:py-[100px] mb-[60px] md:mb-[150px]">
      <div className="w-full relative">
        
        {/* Main Large Image Container */}
        <div className="relative w-full h-[80vh] md:h-[120vh] overflow-hidden">
          
          {/* Thin Inner Border / Grid Lines */}
          <div className="absolute inset-[20px] md:inset-[40px] border-[1px] border-white/20 z-20 pointer-events-none"></div>

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          
          {/* Parallax Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Relaxing view from bed overlooking lake" 
            className="w-full h-[160%] -top-[30%] relative object-cover will-change-transform"
            style={{ 
              transform: `translateY(${offsetY * 0.25}px)`,
              transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
            }}
          />

          {/* Overlay Text */}
          <div className="absolute top-1/2 left-[8%] md:left-[10%] -translate-y-1/2 z-20 max-w-[85%] md:max-w-[45%]">
            <h2 
              className="text-white text-[32px] md:text-[50px] leading-[1.3] drop-shadow-md"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              <span className="text-[40px] md:text-[60px] leading-none inline-block align-top mt-[-5px] mr-2">“</span>
              Every guest will find their own personal haven of peace, a retreat that is uniquely.
            </h2>
          </div>

        </div>

        {/* Overlapping Secondary Image */}
        <div 
          className="absolute -bottom-[60px] md:-bottom-[100px] right-[5%] md:right-[12%] w-[40%] md:w-[18%] aspect-[4/5] z-30 shadow-2xl bg-white p-[5px] md:p-[10px]"
          style={{
            transform: `translateY(${-offsetY * 0.15}px) rotate(4deg)`,
            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Bright serene bedroom interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
}