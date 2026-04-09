import { useEffect, useRef, useState } from "react";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate parallax. 
        // A slower multiplier (0.15) and a CSS transition will make this much smoother
        const scrolled = (windowHeight - rect.top) * 0.25; 
        setOffsetY(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="block md:hidden bg-white w-full">
        {/* Mobile Image */}
        <div className="relative w-full h-[360px] sm:h-[400px] p-4">
          <div 
            className="absolute inset-4 bg-cover bg-center"
            style={{ backgroundImage: "url('/tour12.jpeg')" }}
          ></div>
          <div className="absolute inset-8 border border-white/20 pointer-events-none"></div>
        </div>

        {/* Mobile Quote */}
        <div className="px-6 sm:px-8 py-12 sm:py-[60px] pb-14 sm:pb-[80px]">
          <p 
            className="text-[24px] sm:text-[32px] leading-[1.35] font-normal text-[#5c3115] text-left"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            <span className="inline-block text-[32px] sm:text-[40px] leading-none mr-1 align-top text-[#5c3115]">“</span>
            <span>Wake up to the beauty of Nubra Valley and experience the warmth of Ladakhi hospitality.</span>
          </p>

          {/* Mobile-only image stack under quote */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              alt="Green valley view"
              className="w-full max-w-[360px] h-[180px] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              alt="Mountain and lake"
              className="w-full max-w-[360px] h-[180px] object-cover"
            />
            <img
              src="/Home.png"
              alt="Residency exterior"
              className="w-full max-w-[360px] h-[180px] object-cover"
            />
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="hidden md:flex relative w-full h-[120vh] lg:h-[130vh] min-h-[700px] lg:min-h-[800px] items-end justify-end p-10 lg:p-[80px] overflow-hidden">
        {/* Background Image Container - Taller than section to allow for parallax translate */}
        <div 
          className="absolute left-0 right-0 w-full h-[160%] bg-cover bg-center will-change-transform"
          style={{ 
            top: "-80%", // Offset so we have room to animate both up and down
            backgroundImage: "url('/tour12.jpeg')",
            transform: `translateY(${offsetY}px)`,
            transition: "transform 0.4s cubic-bezier(0.25, 10.46, 0.45, 0.94)", // Smooths the React state jitter
          }}
        ></div>

        
        {/* Thin inner border overlay */}
        <div className="absolute inset-6 lg:inset-[40px] border border-white/20 pointer-events-none"></div>

        {/* Quote Content */}
        <div className="relative z-10 max-w-[800px] ml-auto text-white text-right pr-5 lg:pr-[40px] pb-8 lg:pb-[60px]">
          <p 
            className="text-[32px] lg:text-[40px] text-right leading-[1.3] font-normal tracking-wide"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            <span className="mr-4">“</span>
            Wake up to the beauty of Nubra Valley and experience the warmth of Ladakhi hospitality.
          </p>
        </div>
      </section>
    </>
  );
}