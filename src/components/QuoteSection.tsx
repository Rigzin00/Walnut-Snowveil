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
    <section ref={sectionRef} className="relative w-full h-[120vh] md:h-[130vh] min-h-[800px] flex items-end justify-end p-[40px] md:p-[80px] overflow-hidden">
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
      <div className="absolute inset-[20px] md:inset-[40px] border border-white/20 pointer-events-none"></div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-[800px] text-white text-right pr-[20px] md:pr-[40px] pb-[30px] md:pb-[60px]">
        <p 
          className="text-[28px] md:text-[40px] lg:text-[40px] text-justify leading-[1.3] font-normal tracking-wide"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          <span className="mr-3 md:mr-4">“</span>
          Wake up to the beauty of Nubra Valley and experience the warmth of Ladakhi hospitality.
        </p>
      </div>
    </section>
  );
}