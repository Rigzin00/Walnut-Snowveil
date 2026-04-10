import { useRef, useEffect, useState } from "react";

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
    <>
    {/* Desktop View */}
    <section ref={sectionRef} className="hidden md:block w-full bg-white py-[100px] mb-[120px] lg:mb-[150px]">
      <div className="w-full relative">
        
        {/* Main Large Image Container */}
        <div className="relative w-full md:h-[100vh] lg:h-[120vh] overflow-hidden">
          
          {/* Thin Inner Border / Grid Lines */}
          <div className="absolute md:inset-[40px] border-[1px] border-white/20 z-20 pointer-events-none"></div>

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          
          {/* Parallax Background Image */}
          <img 
            src="about/about4.jpg" 
            alt="Relaxing view from bed overlooking lake" 
            className="w-full h-[130%] -top-[50%] relative object-cover will-change-transform"
            style={{ 
              transform: `translateY(${offsetY * 0.25}px)`,
              transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
            }}
          />

          {/* Overlay Text */}
          <div className="absolute top-1/2 md:left-[10%] -translate-y-1/2 z-20 md:max-w-[45%]">
            <h2 
              className="text-white md:text-[50px] leading-[1.3] drop-shadow-md"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              <span className="md:text-[60px] leading-none inline-block align-top mt-[-5px] mr-2">“</span>
              Find peace, comfort, and the beauty of Nubra Valley in every stay.
            </h2>
          </div>

        </div>

        {/* Overlapping Secondary Image */}
        <div 
          className="absolute md:-bottom-[82px] lg:-bottom-[100px] md:right-[9%] lg:right-[12%] md:w-[24%] lg:w-[18%] aspect-[4/5] z-30 shadow-2xl bg-white md:p-[8px] lg:p-[10px]"
          style={{
            transform: `translateY(${-offsetY * 0.15}px) rotate(4deg)`,
            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
          }}
        >
          <img 
            src="about/about5.jpg" 
            alt="Bright serene bedroom interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>

    {/* Mobile View */}
    <section className="block md:hidden bg-white w-full">
      {/* Mobile Image */}
      <div className="relative w-full h-[360px] sm:h-[400px] p-4">
        <div 
          className="absolute inset-4 bg-cover bg-center"
          style={{ backgroundImage: "url('about/about4.jpg')" }}
        ></div>
        <div className="absolute inset-8 border border-white/20 pointer-events-none z-10"></div>
      </div>

      {/* Mobile Quote */}
      <div className="px-6 sm:px-8 py-12 sm:py-[60px] pb-14 sm:pb-[80px]">
        <p 
          className="text-[24px] sm:text-[32px] leading-[1.35] font-normal text-[#5c3115] text-left"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          <span className="inline-block text-[32px] sm:text-[40px] leading-none mr-2 align-top text-[#5c3115]">“</span>
          <span>Find peace, comfort, and the beauty of Nubra Valley in every stay.</span>
        </p>
      </div>
    </section>
    </>
  );
}