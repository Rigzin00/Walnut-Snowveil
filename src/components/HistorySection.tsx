import React, { useEffect, useRef, useState } from "react";

export default function HistorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline is scrolled through
      const totalScrollDistance = rect.height + windowHeight;
      const currentScroll = windowHeight - rect.top;
      
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const historyData = [
    {
      title: "Leh Airport",
      desc: "Your journey begins at Kushok Bakula Rimpochee Airport, Leh, the main gateway to Ladakh. After arriving in Leh, travelers can explore the town or begin their scenic drive towards Nubra Valley.",
      img: "about/about6.jpg",
      side: "left",
    },
    {
      title: "Khardung La Pass",
      desc: "The route to Nubra Valley takes you through the famous Khardung La Pass, one of the highest motorable roads in the world. Surrounded by dramatic Himalayan landscapes, the journey itself becomes an unforgettable experience.",
      img: "about/about7.jpg",
      side: "right",
    },
    {
      title: "Sumoor, Nubra Valley",
      desc: "After descending into Nubra Valley, the road leads to the peaceful village of Sumoor, home to Walnut Snowveil Residency. Here, guests are welcomed with warm Ladakhi hospitality and breathtaking views of the surrounding mountains.",
      img: "about/about8.jpg",
      side: "left",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-[80px] md:py-[120px] px-[20px] md:px-[40px] overflow-hidden">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        
        {/* Main Title */}
        <h2 
          className={`text-[#5c3115] text-[36px] md:text-[46px] leading-[1.2] text-center mb-[80px] md:mb-[120px] transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          Journey to Walnut Snowveil<br />
          Residency
        </h2>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative w-full flex flex-col gap-[60px] md:gap-[120px]">
          
          {historyData.map((item, index) => {
            const isLeft = item.side === "left";

            // Calculate drawing fractions based on scroll progress mapping roughly per row
            // There are 3 items. 
            // 1st to 2nd: scrollProgress 0.1 to 0.5
            // 2nd to 3rd: scrollProgress 0.5 to 0.9

            let drawH1 = 0;
            let drawV1 = 0;
            let drawH2 = 0;
            let drawV2 = 0;
            let drawV3 = 0;

            if (scrollProgress > 0.05) drawH1 = Math.min(1, (scrollProgress - 0.05) / 0.10);
            if (scrollProgress > 0.15) drawV1 = Math.min(1, (scrollProgress - 0.15) / 0.25);
            if (scrollProgress > 0.40) drawH2 = Math.min(1, (scrollProgress - 0.40) / 0.10);
            if (scrollProgress > 0.50) drawV2 = Math.min(1, (scrollProgress - 0.50) / 0.25);
            if (scrollProgress > 0.75) drawV3 = Math.min(1, (scrollProgress - 0.75) / 0.20);


            return (
              <div 
                key={index}
                className={`relative w-full flex flex-col md:flex-row ${isLeft ? "justify-start" : "justify-end"} transition-all duration-1000 delay-${index * 100} transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"}`}
              >
                
                {/* Decorative Timeline Lines & Circles (Desktop Only) */}
                <div className="hidden md:block">
                  {index === 0 && (
                    <>
                      {/* Horizontal from right of image to right edge */}
                      <div className="absolute top-[60%] left-[50%] right-[-1px] h-[1px] bg-[#5c3115]/30 origin-left" style={{ transform: `scaleX(${drawH1})`, transition: 'none' }}></div>
                      {/* Circle on right edge */}
                      <div className={`absolute top-[60%] -translate-y-1/2 right-[-6px] w-[12px] h-[12px] rounded-full border-[1px] border-[#5c3115]/50 bg-white z-10 transition-opacity duration-300 ${drawH1 >= 1 ? 'opacity-100' : 'opacity-0'}`}></div>
                      {/* Vertical line dropping down to row 2 */}
                      <div className="absolute top-[60%] right-[-1px] w-[1px] bg-[#5c3115]/30 origin-top" style={{ height: 'calc(100% + 120px)', transform: `scaleY(${drawV1})`, transition: 'none' }}></div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      {/* Horizontal from right edge (where the previous vertical line ends) across to the left edge */}
                      <div className="absolute top-[40%] right-[-1px] left-0 h-[1px] bg-[#5c3115]/30 origin-right" style={{ transform: `scaleX(${drawH2})`, transition: 'none' }}></div>
                      {/* Circle on left edge */}
                      <div className={`absolute top-[40%] -translate-y-1/2 left-[-6px] w-[12px] h-[12px] rounded-full border-[1px] border-[#5c3115]/50 bg-white z-10 transition-opacity duration-300 ${drawH2 >= 1 ? 'opacity-100' : 'opacity-0'}`}></div>
                      {/* Vertical line dropping down to row 3 */}
                      <div className="absolute top-[40%] left-[-1px] w-[1px] bg-[#5c3115]/30 hidden md:block origin-top" style={{ height: 'calc(100% + 120px)', transform: `scaleY(${drawV2})`, transition: 'none' }}></div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      {/* Final vertical leg dropping to the bottom of the section */}
                      <div className="absolute top-[40%] left-[-1px] w-[1px] bg-[#5c3115]/30 hidden md:block origin-top" style={{ height: 'calc(60% + 50px)', transform: `scaleY(${drawV3})`, transition: 'none' }}></div>
                    </>
                  )}
                </div>

                {/* Content Block */}
                <div className="w-full md:w-[48%] flex flex-col relative z-20">
                  <div className="w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden mb-[25px]">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <div className="w-full pr-0 md:pr-[20px]">
                    <h3 
                      className="text-[#5c3115] text-[22px] md:text-[26px] mb-[15px] leading-[1.3]"
                      style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-[#5c3115] text-[15px] md:text-[16px] opacity-80 leading-[1.8]"
                      style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}