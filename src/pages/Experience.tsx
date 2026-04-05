import React, { useEffect, useRef, useState } from "react";
import ConnectSection from "../components/ConnectSection";

// Scroll animation wrapper component
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

// Parallax Quote Section for ATV
const ExperienceQuoteSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const scrolled = (windowHeight - rect.top) * 0.25; 
        setOffsetY(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[80vh] md:h-[100vh] min-h-[600px] flex items-center justify-start p-[40px] md:p-[80px] overflow-hidden">
      {/* Background Image Container - Taller than section to allow for parallax translate */}
      <div 
        className="absolute left-0 right-0 w-full h-[160%] bg-cover bg-center will-change-transform"
        style={{ 
          top: "-30%", // Offset so we have room to animate both up and down
          backgroundImage: `url('${import.meta.env.BASE_URL}landscape.jpg')`,
          transform: `translateY(${offsetY}px)`,
          transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooths the React state jitter
        }}
      ></div>

      {/* Dark Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Thin inner border overlay */}
      <div className="absolute inset-[20px] md:inset-[40px] border border-white/20 pointer-events-none z-10"></div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-[850px] text-white text-left pl-[5px] md:pl-[40px]">
        <p 
          className="text-[26px] md:text-[40px] lg:text-[48px] text-left leading-[1.3] font-normal tracking-wide flex"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          <span className="mr-3 md:mr-4">“</span>
          <span>
            ATV Experience offers thrilling<br className="hidden md:block" /> 
            off-road rides through scenic,<br className="hidden md:block" /> 
            rugged trails.
          </span>
        </p>
      </div>
    </section>
  );
};

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
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <img 
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Mountain Biking Adventure" 
            className={`w-full h-full object-cover object-bottom transition-all duration-[2000ms] ease-out ${
              isHeroVisible ? "scale-100 opacity-75" : "scale-110 opacity-0"
            }`} 
          />
        </div>

        {/* Text Content */}
        <div 
          className="relative z-10 flex flex-col items-center justify-center w-full px-4 pt-16"
        >
          {/* Top Line of Text */}
          <div 
            className="flex items-center w-full max-w-5xl justify-start md:justify-center md:-ml-40"
            style={{
              transform: isHeroVisible ? "translateX(0)" : "translateX(-150px)",
              opacity: isHeroVisible ? 1 : 0,
              transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <h1 
              className="text-white text-[40px] md:text-[90px] lg:text-[120px] leading-tight whitespace-nowrap"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Experience Our
            </h1>
          </div>
          
          {/* Bottom Line of Text */}
          <div 
            className="flex items-center w-full max-w-5xl justify-end md:justify-center md:ml-40 -mt-2 md:-mt-8"
            style={{
              transform: isHeroVisible ? "translateX(0)" : "translateX(150px)",
              opacity: isHeroVisible ? 1 : 0,
              transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
            }}
          >
            <h1 
              className="text-white text-[40px] md:text-[90px] lg:text-[120px] leading-tight whitespace-nowrap"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Luxury Adventure
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 z-10 flex flex-col items-center gap-2 transition-all duration-[1500ms] delay-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        >
          
        </div>

      </div>

      {/* Experience Intro Section */}
      <div className="w-full bg-[#f8f5f0] py-[100px] md:py-[150px] px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          
          <h2 
            className="text-[#5c3115] text-[40px] md:text-[60px] lg:text-[75px] leading-[1.1] mb-[60px] md:mb-[100px] max-w-[900px]"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            Experience why we are a trusted name in luxury hospitality.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 text-[#5c3115]">
            
            <p 
              className="text-[14px] md:text-[16px] leading-[2] md:leading-[2.2] opacity-80"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
            >
              For years, we have set the standard in luxury hospitality, delivering exceptional service and unforgettable experiences. Our commitment to excellence, attention to detail, and warm hospitality have earned us a reputation as a trusted name among travelers seeking comfort, elegance, and personalized care. From exquisite accommodations to world-class dining and thoughtful amenities, every aspect of our guest experience is designed to exceed expectations.
            </p>

            <p 
              className="text-[14px] md:text-[16px] leading-[2] md:leading-[2.2] opacity-80"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
            >
              What sets us apart is our dedication to creating memorable stays that go beyond just accommodations. Whether you're here for business or leisure, we ensure that every moment is marked by sophistication, relaxation, and seamless service. With a perfect blend of timeless charm and modern convenience, we invite you to discover why we have become a household name in luxury hospitality.
            </p>

          </div>

        </div>
      </div>

      {/* Experiences List Section */}
      <div className="w-full bg-[#f8f5f0] pb-[100px] md:pb-[150px] px-6 md:px-12 lg:px-24">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-16 md:gap-32">
          
          {/* Wellness Immersions */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-[#5c3115] text-[32px] md:text-[42px] mb-4" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>Wellness Immersions</h3>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                We offers transformative retreats and experiences designed to rejuvenate the mind, body, and soul. Through a blend of mindfulness, holistic healing, and immersive activities, we create spaces for deep relaxation, self-discovery, and personal growth. Whether it's a nature escape, a digital detox, or a wellness workshop, our programs are thoughtfully curated to help you reset, recharge, and reconnect with yourself.
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full">
              <AnimatedImage src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Wellness Immersions" className="w-full aspect-[4/3] rounded-sm" />
            </div>
          </div>

          {/* Hiking Trails Adventure */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
            <div className="flex-1 order-1 md:order-1 w-full">
              <AnimatedImage src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hiking Trails Adventure" className="w-full aspect-[4/3] rounded-sm" />
            </div>
            <div className="flex-1 order-2 md:order-2">
              <h3 className="text-[#5c3115] text-[32px] md:text-[42px] mb-4" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>Hiking Trails Adventure</h3>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Hiking Trails Adventure offers exhilarating outdoor experiences for nature enthusiasts and adventure seekers. Explore scenic trails, breathtaking landscapes, and hidden gems with expert guides leading the way. Whether you're a beginner or a seasoned hiker, our curated adventures provide the perfect blend of challenge, exploration, and unforgettable memories in the great outdoors.
              </p>
            </div>
          </div>

          {/* Live Cooking Class */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-[#5c3115] text-[32px] md:text-[42px] mb-4" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>Live Cooking Class</h3>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                We offers transformative retreats and experiences designed to rejuvenate the mind, body, and soul. Through a blend of mindfulness, holistic healing, and immersive activities, we create spaces for deep relaxation, self-discovery, and personal growth. Whether it's a nature escape, a digital detox, or a wellness workshop, our programs are thoughtfully curated to help you reset, recharge, and reconnect with yourself.
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full">
              <AnimatedImage src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Live Cooking Class" className="w-full aspect-[4/3] rounded-sm" />
            </div>
          </div>

          {/* Cycling & Village Walk */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
            <div className="flex-1 order-1 md:order-1 w-full">
              <AnimatedImage src="https://images.unsplash.com/photo-1541625602330-2277a4c4618c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cycling and Village Walk" className="w-full aspect-[4/3] rounded-sm" />
            </div>
            <div className="flex-1 order-2 md:order-2">
              <h3 className="text-[#5c3115] text-[32px] md:text-[42px] mb-4" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>Cycling &amp; Village Walk</h3>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Hiking Trails Adventure offers exhilarating outdoor experiences for nature enthusiasts and adventure seekers. Explore scenic trails, breathtaking landscapes, and hidden gems with expert guides leading the way. Whether you're a beginner or a seasoned hiker, our curated adventures provide the perfect blend of challenge, exploration, and unforgettable memories in the great outdoors.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ATV Experience Parallax Quote Section */}
      <ExperienceQuoteSection />

      {/* Featured Adventure Activities Section */}
      <div className="w-full bg-[#f8f5f0] py-[100px] md:py-[150px] px-4 md:px-8 lg:px-12">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 lg:gap-28 px-6 md:px-12 lg:px-24">
            
            {/* The Gardens: Walk */}
            <div className="flex flex-col text-left">
              <div className="w-full aspect-[5/4] mb-12 overflow-hidden rounded-lg">
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="The Gardens: Walk" 
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-[#6D3207] text-[36px] md:text-[40px] lg:text-[44px] mb-6 leading-tight" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>
                The Gardens: Walk
              </h3>
              <p className="text-[#5c3115] text-[16px] md:text-[18px] lg:text-[19px] leading-[1.85] opacity-85" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Garden Walk is a peaceful escape into nature, where you can stroll through lush landscapes, vibrant blooms, and serene pathways. Enjoy fresh air, tranquility, and the beauty of the outdoors.
              </p>
            </div>

            {/* Jungle Walk */}
            <div className="flex flex-col text-left">
              <div className="w-full aspect-[5/4] mb-12 overflow-hidden rounded-lg">
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Jungle Walk" 
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-[#6D3207] text-[36px] md:text-[40px] lg:text-[44px] mb-6 leading-tight" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>
                Jungle Walk
              </h3>
              <p className="text-[#5c3115] text-[16px] md:text-[18px] lg:text-[19px] leading-[1.85] opacity-85" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Jungle Walk offers an immersive trek through dense forests, rich wildlife, and scenic trails. Experience nature up close, guided by experts who unveil the jungle's hidden wonders.
              </p>
            </div>

            {/* Horse Ride */}
            <div className="flex flex-col text-left">
              <div className="w-full aspect-[5/4] mb-12 overflow-hidden rounded-lg">
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Horse Ride" 
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-[#6D3207] text-[36px] md:text-[40px] lg:text-[44px] mb-6 leading-tight" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>
                Horse Ride
              </h3>
              <p className="text-[#5c3115] text-[16px] md:text-[18px] lg:text-[19px] leading-[1.85] opacity-85" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Horse Ride offers a scenic and relaxing journey through nature on horseback. Whether you're a beginner or an experienced rider, enjoy a guided adventure through picturesque trails.
              </p>
            </div>

          </div>
        </div>
      </div>
       <ConnectSection />
    </main>
  );
}
