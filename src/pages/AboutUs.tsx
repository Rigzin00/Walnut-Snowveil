import { useEffect, useState } from "react";
import MissionSection from "../components/MissionSection";
import StatsSection from "../components/StatsSection";

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section for About Us */}
      <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-[120%] will-change-transform"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="About Us Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated Text Container */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-[20px]">
          <div className="flex items-center w-full max-w-[1200px] gap-4 mb-2">
            <div className="flex-1 h-[1px] bg-white opacity-70"></div>
            <h1 
              className="text-white text-[40px] md:text-[70px] lg:text-[90px] leading-tight text-center whitespace-nowrap px-4"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              About Our Lodge
            </h1>
            <div className="flex-1 h-[1px] bg-transparent"></div>
          </div>
          
          <div className="flex items-center w-full max-w-[1200px] gap-4">
            <div className="flex-1 h-[1px] bg-transparent"></div>
            <h1 
              className="text-white text-[40px] md:text-[70px] lg:text-[90px] leading-tight text-center whitespace-nowrap px-4"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              Legacy of Luxury
            </h1>
            <div className="flex-1 h-[1px] bg-white opacity-70"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-[1200px] mx-auto py-[100px] md:py-[150px] px-[40px] md:px-[80px]">
        <h2 
          className="text-[#5c3115] text-[36px] md:text-[50px] lg:text-[60px] leading-[1.1] mb-[60px] md:mb-[80px] max-w-[900px]"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
        >
          Where every stay becomes an unforgettable experience
        </h2>
        
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px]">
          <p 
            className="flex-1 text-[#5c3115] text-[16px] md:text-[18px] leading-[1.8] opacity-80"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            Inspired by nature's beauty and a passion for hospitality, Oasila was created as a sanctuary where luxury meets tranquility. Our vision was to craft an escape that blends refined elegance with the warmth of personalized service, offering guests an unforgettable retreat.
          </p>
          <p 
            className="flex-1 text-[#5c3115] text-[16px] md:text-[18px] leading-[1.8] opacity-80"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            From breathtaking landscapes to carefully curated experiences, every detail is designed to provide comfort, relaxation, and adventure. Whether you seek a peaceful getaway or a taste of the extraordinary, Oasila invites you to indulge in the art of luxury.
          </p>
        </div>
      </div>

      <MissionSection />
      <StatsSection />
    </div>
  );
}