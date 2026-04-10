import React, { useRef, useEffect, useState } from "react";

const AnimatedImage = ({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

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

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (!ref.current) {
        ticking = false;
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;

      // Parallax effect: image translates slightly based on scroll
      const nextY = (viewportCenter - elementCenter) * 0.08;
      const clampedY = Math.max(-25, Math.min(25, nextY));
      setParallaxY(clampedY);
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };

    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"
      } ${className || ""}`}
      style={style}
    >
      <div 
        className="w-full h-full"
        style={{
          transform: `translateY(${parallaxY}px)`,
          transition: "transform 200ms linear",
          willChange: "transform"
        }}
      >
        <img src={src} alt={alt} className="w-full h-[115%] -mt-[7.5%] object-cover transition-transform duration-[2000ms] hover:scale-105" />
      </div>
    </div>
  );
};

export default function MissionSection() {
  return (
    <section className="w-full bg-white py-[80px] md:py-[150px] px-[20px] md:px-[80px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-[40px] md:gap-[80px] items-center md:items-start">
        
        {/* Left Column - Portrait Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <AnimatedImage src="about/about2.jpg" alt="Lobby interior with sun rays" className="w-full aspect-[4/3] rounded-sm" />
        </div>

        {/* Right Column - Landscape Image + Text */}
        <div className="w-full md:w-1/2 flex flex-col pt-0 md:pt-[60px] gap-[60px] md:gap-[100px]">
          
          <AnimatedImage src="about/about3.jpg" alt="Bright minimalist sitting area" className="w-full aspect-[4/3] rounded-sm" />

          {/* Quote Text */}
          <div className="w-full max-w-[500px]">
            <div 
              className="text-[#5c3115] text-[40px] leading-none mb-2"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              “
            </div>
            <p 
              className="text-[#5c3115] text-[20px] md:text-[26px] leading-[1.6]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
             Our mission is to create a welcoming retreat where guests can experience the beauty of Nubra Valley with comfort, culture, and genuine Ladakhi hospitality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
