import { useRef, useEffect, useState } from "react";

export default function EnvironmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-[120px] lg:py-[150px] px-5 sm:px-6 md:px-[80px]">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Text Content */}
        <div 
          className={`max-w-[860px] transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
          }`}
        >
            <h2 
              className="text-[#5c3115] text-[36px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[1.1] mb-[24px] md:mb-[40px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
             Our Story
            </h2>
            <p 
              className="text-[#5c3115] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.8] mb-[34px] md:mb-[40px] opacity-90"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
            >
              Walnut Snowveil Residency was created to offer travelers a peaceful and comfortable place to stay while exploring the beauty of Nubra Valley. Inspired by the simplicity and warmth of Ladakhi culture, our residency focuses on providing genuine hospitality and a welcoming atmosphere for every guest.
              We believe that a great stay is not only about the room but about the experience. From the calm surroundings of Sumoor village to the friendly interactions with our guests, every moment is meant to reflect the warmth and authenticity of Ladakh.
            </p>
            <a 
              href="about" 
              className="inline-block uppercase tracking-[1px] text-[13px] md:text-[14px] text-[#5c3115] border-b-[2px] border-[#5c3115]/50 pb-1 font-medium hover:border-[#5c3115] transition-colors" 
              style={{ fontFamily: "Anek Bangla, sans-serif" }}
            >
              LEARN MORE
            </a>
        </div>
      </div>
    </section>
  );
}