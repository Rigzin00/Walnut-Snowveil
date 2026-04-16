import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MissionSection from "../components/MissionSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import RetreatSection from "../components/RetreatSection";
import HistorySection from "../components/HistorySection";
import ConnectSection from "../components/ConnectSection";

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
      <Helmet>
        <title>About Us | Walnut Snowveil Residency, Sumoor Nubra Valley</title>
        <meta name="description" content="Learn about Walnut Snowveil Residency in Sumoor, Nubra Valley Ladakh. Discover our story, mission, and commitment to authentic Ladakhi hospitality near Samstanling Monastery." />
        <meta name="keywords" content="about Walnut Snowveil, Nubra Valley hotel history, Sumoor Ladakh residency, Ladakhi hospitality, hotel near Samstanling Monastery" />
        <link rel="canonical" href="https://walnutsnowveil.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Walnut Snowveil Residency" />
        <meta property="og:description" content="Discover the story behind Walnut Snowveil Residency — a peaceful retreat in Sumoor, Nubra Valley Ladakh near Samstanling Monastery." />
        <meta property="og:url" content="https://walnutsnowveil.in/about" />
        <meta property="og:image" content="https://walnutsnowveil.in/Logo_walnut.png" />
        <meta property="og:site_name" content="Walnut Snowveil Residency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Walnut Snowveil Residency" />
        <meta name="twitter:description" content="Discover the story behind Walnut Snowveil Residency in Sumoor, Nubra Valley Ladakh." />
        <meta name="twitter:image" content="https://walnutsnowveil.in/Logo_walnut.png" />
      </Helmet>
      {/* Hero Section for About Us */}
      <div className="relative w-full h-[60vh] min-h-[790px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-[100%] will-change-transform"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        >
          <img 
            src="about/about1.jpg" 
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
              className="text-white text-[30px] sm:text-[40px] md:text-[58px] lg:text-[90px] leading-tight text-center px-2 sm:px-4"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              About Our Residency
            </h1>
            <div className="flex-1 h-[1px] bg-transparent"></div>
          </div>
          
          <div className="flex items-center w-full max-w-[1200px] gap-4">
            <div className="flex-1 h-[1px] bg-transparent"></div>
            <h1 
              className="text-white text-[30px] sm:text-[40px] md:text-[58px] lg:text-[90px] leading-tight text-center px-2 sm:px-4"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              Nature's Retreat
            </h1>
            <div className="flex-1 h-[1px] bg-white opacity-70"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-[1200px] mx-auto py-[100px] md:py-[150px] px-5 sm:px-8 md:px-[60px] lg:px-[80px]">
        <h2 
          className="text-[#5c3115] text-[36px] md:text-[50px] lg:text-[60px] leading-[1.1] mb-[60px] md:mb-[80px] max-w-[900px]"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
        >
          Location & The Residency
        </h2>
        
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px]">
          <p 
            className="flex-1 text-[#5c3115] text-[16px] md:text-[18px] leading-[1.8] opacity-80"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            Nubra Valley is one of Ladakh’s most breathtaking regions, known for its dramatic mountain landscapes,
            peaceful villages, and ancient monasteries. Surrounded by towering Himalayan ranges and clear blue skies,
            the valley offers a unique blend of nature, culture, and adventure for travelers exploring Ladakh.
            Located in the serene village of Sumoor, Walnut Snowveil Residency provides a peaceful retreat in the 
            heart of Nubra Valley. The residency combines traditional Ladakhi hospitality with modern comfort, creating a
            welcoming space for guests looking to relax and enjoy the beauty of the region.
            </p>
          <p 
            className="flex-1 text-[#5c3115] text-[16px] md:text-[18px] leading-[1.8] opacity-80"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
           Guests staying at Walnut Snowveil Residency can easily explore some of Nubra Valley’s beautiful cultural and natural
           attractions. The peaceful Samstanling Monastery (about 1 km) from the residency offers a glimpse into Ladakh’s rich 
           Buddhist heritage, while the historic Onpo Gompa (around 3 km) provides a quiet spiritual retreat surrounded by 
           stunning mountain views.Nature lovers can also visit the nearby Sumoor Sand Dunes (about 2 km), where the dramatic 
           high-altitude desert landscape creates a unique and memorable experience. After a day of exploring monasteries, scenic 
           valleys, and local villages, guests can return to the comfort and warm hospitality of Walnut Snowveil Residency, making 
           every stay relaxing and memorable.
          </p>
        </div>
      </div>

      <MissionSection />
      <StatsSection />
      <FeaturesSection />
      <RetreatSection />
      <HistorySection />
      <ConnectSection />
    </div>
  );
}