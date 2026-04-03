import React, { useEffect, useState } from "react";

export default function Experience() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  // Scroll to top & trigger hero appearance
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-[#f8f5f0] min-h-screen">
      
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541819586105-021b388b13d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Mountain Biking Adventure" 
            className="w-full h-full object-cover object-center brightness-[0.75]" 
          />
        </div>

        {/* Text Content */}
        <div 
          className={`relative z-10 flex flex-col items-center justify-center w-full px-4 pt-16 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
          }`}
        >
          {/* Top Line of Text */}
          <div className="flex items-center gap-4 md:gap-8 justify-end w-full max-w-4xl md:-ml-20">
            <div className="w-[50px] md:w-[150px] lg:w-[250px] h-[1px] bg-white opacity-60 hidden md:block"></div>
            <h1 
              className="text-white text-[40px] md:text-[80px] lg:text-[110px] leading-tight whitespace-nowrap"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Experience Our
            </h1>
          </div>
          
          {/* Bottom Line of Text */}
          <div className="flex items-center gap-4 md:gap-8 justify-start w-full max-w-4xl md:ml-10 -mt-2 md:-mt-6">
            <h1 
              className="text-white text-[40px] md:text-[80px] lg:text-[110px] leading-tight whitespace-nowrap"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Luxury Adventure
            </h1>
            <div className="w-[50px] md:w-[150px] lg:w-[250px] h-[1px] bg-white opacity-60 hidden md:block"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 z-10 flex flex-col items-center gap-2 transition-all duration-[1500ms] delay-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="w-5 h-8 border border-white rounded-full flex flex-col items-center pt-1 animate-bounce opacity-80">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
          <span 
            className="text-white text-[10px] md:text-[12px] uppercase tracking-[3px] opacity-80"
            style={{ fontFamily: "Anek Bangla, sans-serif" }}
          >
            SCROLL DOWN
          </span>
        </div>

      </div>

      {/* Further sections will go here... added a placeholder spacer */}
      <div className="h-screen bg-[#f8f5f0]"></div>

    </main>
  );
}
