import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
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
    <>
      {/* Desktop View */}
      <section ref={sectionRef} className="hidden md:flex relative w-full h-[100vh] min-h-[600px] items-center justify-start p-[80px] overflow-hidden">
        {/* Background Image Container - Taller than section to allow for parallax translate */}
        <div 
          className="absolute left-0 right-0 w-full h-[110%] bg-cover bg-center will-change-transform"
          style={{ 
            top: "-30%", // Offset so we have room to animate both up and down
            backgroundImage: `url('${import.meta.env.BASE_URL}exp/exp6.jpg')`,
            transform: `translateY(${offsetY}px)`,
          transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"// Smooths the React state jitter
          }}
        ></div>

        {/* Dark Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Thin inner border overlay */}
        <div className="absolute inset-[40px] border border-white/20 pointer-events-none z-10"></div>

        {/* Quote Content */}
       <div className="absolute bottom-12 left-12 z-10 max-w-[850px] text-white text-left">
          <p
            className="text-[40px] lg:text-[32px] leading-[1.3] font-normal tracking-wide flex"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            <span className="mr-4">“</span>
            <span>
              From golden sand dunes to ancient monasteries,
              <br className="block" />
              Nubra Valley offers adventures that stay with you forever.
            </span>
          </p>
        </div>
      </section>

      {/* Mobile View */}
      <section className="block md:hidden bg-[#f8f5f0] w-full">
        {/* Mobile Image */}
        <div className="relative w-full h-[360px] sm:h-[400px] p-4 text-center">
          <div 
            className="absolute inset-4 bg-cover bg-center"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}exp/exp6.jpg')` }}
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
            <span>
              From golden sand dunes to ancient monasteries, Nubra Valley offers adventures that stay with you forever.
            </span>
          </p>
        </div>
      </section>
    </>
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
      <Helmet>
        <title>Experiences in Nubra Valley | Walnut Snowveil Residency</title>
        <meta name="description" content="Discover unforgettable experiences in Nubra Valley Ladakh — sand dunes, monasteries, village walks, and mountain adventures. Based at Walnut Snowveil Residency, Sumoor." />
        <meta name="keywords" content="Nubra Valley experiences, things to do in Nubra Valley, Samstanling Monastery visit, Sumoor sand dunes, Nubra Valley adventure, Ladakh travel activities" />
        <link rel="canonical" href="https://walnutsnowveil.in/experience" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Experiences in Nubra Valley | Walnut Snowveil Residency" />
        <meta property="og:description" content="From golden sand dunes to ancient monasteries — explore the best of Nubra Valley Ladakh, staying at Walnut Snowveil Residency in Sumoor." />
        <meta property="og:url" content="https://walnutsnowveil.in/experience" />
        <meta property="og:image" content="https://walnutsnowveil.in/Logo_walnut.png" />
        <meta property="og:site_name" content="Walnut Snowveil Residency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Experiences in Nubra Valley | Walnut Snowveil Residency" />
        <meta name="twitter:description" content="Explore Nubra Valley — sand dunes, monasteries, and mountain adventures with Walnut Snowveil Residency." />
        <meta name="twitter:image" content="https://walnutsnowveil.in/Logo_walnut.png" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[790px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <img 
            src="exp/exp2.jpg" 
            alt="Mountain Biking Adventure" 
            className={`absolute w-full h-full object-cover object-top transition-all duration-[2000ms] ease-out ${
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
              Experiences 
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
              in Nubra Valley
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
          Discover Experiences in Nubra Valley
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 text-[#5c3115]">
            
            <p 
              className="text-[14px] md:text-[16px] leading-[2] md:leading-[2.2] opacity-80"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
            >
              Walnut Snowveil Residency offers more than just a stay — it is a gateway to the unforgettable experiences of Nubra Valley. Surrounded by dramatic mountain landscapes and peaceful villages, guests can explore the region’s rich culture, natural beauty, and timeless traditions.
              From visiting ancient monasteries to walking across the iconic sand dunes, every moment in Nubra Valley creates memories that last a lifetime. Whether you seek adventure, photography, or peaceful exploration, our location in Sumoor provides the perfect base to discover the wonders of Ladakh.
            </p>

                    <ul
            className="text-[14px] md:text-[16px] leading-[2] md:leading-[2.2] opacity-80 list-disc pl-5 space-y-3"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            <li>
              <strong>Samstanling Monastery:</strong> A beautiful monastery near Sumoor known for its peaceful surroundings and spiritual significance.
            </li>
            <li>
              <strong>Onpo Gompa:</strong> A historic monastery offering stunning views of the Nubra Valley landscape.
            </li>
            <li>
              <strong>Sumoor Sand Dunes:</strong> Explore the rare desert-like sand dunes surrounded by the dramatic mountains of Nubra Valley.
            </li>
            <li>
              <strong>Siachen Base Camp:</strong> Known as the world’s highest battlefield, where visitors can witness the gateway to the famous Siachen Glacier and learn about its historical importance.
            </li>
          </ul>
          </div>
        </div>
      </div>

      {/* Experiences List Section */}
      <div className="w-full bg-[#f8f5f0] pb-[100px] md:pb-[150px] px-6 md:px-12 lg:px-24">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-16 md:gap-32">
          
          {/* Monastery & Cultural Visits */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-[#5c3115] text-[32px] md:text-[42px] mb-4" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>Monastery & Cultural Visits</h3>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
              Explore the spiritual heritage of Nubra Valley by visiting nearby monasteries such as Samstanling Monastery and Onpo Gompa. These peaceful sites offer a glimpse into Ladakh’s rich Buddhist traditions, beautiful murals, and breathtaking valley views.
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full">
              <AnimatedImage src="exp/exp1.jpg" alt="Monastery & Cultural Visits" className="w-full aspect-[4/3] rounded-sm" />
            </div>
          </div>

          {/* Camel Safari at Sumoor Sand Dunes */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
            <div className="flex-1 order-1 md:order-1 w-full">
              <AnimatedImage src="exp/exp3.jpg" alt="Camel Safari" className="w-full aspect-[4/3] rounded-sm" />
            </div>
            <div className="flex-1 order-2 md:order-2">
              <h3 className="text-[#5c3115] text-[32px] md:text-[42px] mb-4" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>Camel Safari at Sumoor Sand Dunes</h3>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Embark on a unique camel safari through the golden sands of Sumoor. Experience the thrill of desert exploration while enjoying the serene beauty of the surrounding landscape.
              </p>
            </div>
          </div>

          {/* Local Ladakhi Fruits Experience */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-[#5c3115] text-[32px] md:text-[42px] mb-4" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}> Ladakhi Fruits & Sea Buckthorn Experience</h3>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
               Discover the unique taste of Ladakh’s locally grown fruits, cultivated in the pristine environment of Nubra Valley. Guests can enjoy seasonal produce such as apricots and the famous Sea Buckthorn, a nutrient-rich Himalayan berry known for its health benefits. This experience offers a glimpse into the region’s agricultural traditions while allowing visitors to taste fresh, locally sourced flavors of Ladakh.
              </p>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full">
              <AnimatedImage src="exp/exp4.jpg" alt="Local Ladakhi Fruits Experience" className="w-full aspect-[4/3] rounded-sm" />
            </div>
          </div>

          {/* Cycling & Village Walk */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24">
            <div className="flex-1 order-1 md:order-1 w-full">
              <AnimatedImage src="exp/exp5.jpg" alt="Cycling and Village Walk" className="w-full aspect-[4/3] rounded-sm" />
            </div>
            <div className="flex-1 order-2 md:order-2">
              <h3 className="text-[#5c3115] text-[32px] md:text-[42px] mb-4" style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}>Village Walks &amp; Cultural Life</h3>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Take peaceful walks through the charming village of Sumoor and experience everyday Ladakhi life. Meet friendly locals, see traditional homes, and enjoy the calm rhythm of village culture.
              </p>
            </div>
          </div>

        </div>
      </div>

      <ExperienceQuoteSection />
       <ConnectSection />
    </main>
  );
}
