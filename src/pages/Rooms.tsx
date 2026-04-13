import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import RoomsListSection from "../components/RoomsListSection";
import ConnectSection from "../components/ConnectSection";

export default function Rooms() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger entry animations upon mount
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Rooms – Walnut Snowveil Residency</title>
        <meta name="description" content="Comfortable rooms in Walnut Snowveil Residency, Sumoor Nubra Valley Ladakh with mountain views and peaceful stay." />
      </Helmet>
      {/* Hero Section for Rooms */}
      <div className="relative w-full h-[60vh] min-h-[790px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 w-full h-[100%] will-change-transform"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        >
          <img 
            src="room/room1.jpg" 
            alt="Rooms and Suites Hero Bedroom" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        
        {/* Text and Line Structure Container */}
        <div className="relative z-10 w-full mt-[60px] md:mt-[100px]">
          
          {/* Main Row For Left Line & Title */}
          <div className="w-full flex flex-row items-center justify-center">
             {/* Left Line */}
             <div 
               className="h-[1px] bg-white hidden sm:block w-[15%] md:w-[20%] mr-[5%] md:mr-[8%] opacity-80 origin-right transition-transform duration-[1500ms] delay-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
               style={{ transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)' }}
             ></div>
             
             {/* Title */}
             <div className="overflow-hidden">
               <h1 
                  className={`text-white text-[50px] md:text-[80px] lg:text-[100px] leading-none drop-shadow-md text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
                  }`}
                  style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
                >
                  Rooms & Suites
                </h1>
             </div>

             {/* Spacer block (right side of title) so the title stays perfectly centered */}
             <div className="hidden sm:block w-[15%] md:w-[20%] ml-[5%] md:ml-[8%]"></div>
          </div>
          
          {/* Main Row For Subtext & Right Line */}
          <div className="w-full flex flex-row items-center justify-center mt-[30px] md:mt-[40px]">
             
             {/* Spacer block (left side of text) so it sits centered below the Title */}
             <div className="hidden sm:block w-[15%] md:w-[20%] mr-[5%] md:mr-[8%]"></div>

             {/* Subtext */}
             <div className="overflow-hidden max-w-[500px]">
               <p 
                className={`text-white text-[16px] md:text-[20px] leading-[1.6] text-center transition-all duration-[1200ms] delay-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
                }`}
                style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
              >
                Comfortable rooms designed for a relaxing stay in <br className="hidden md:block"/>
               the peaceful surroundings of Nubra Valley.
              </p>
             </div>

            {/* Right Line (connecting immediately to the right of the paragraph) */}
            <div 
              className="h-[1px] bg-white hidden sm:block w-[15%] md:w-[20%] ml-[5%] md:ml-[8%] opacity-80 origin-left transition-transform duration-[1500ms] delay-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)' }}
            ></div>
          </div>
        </div>

      </div>

      <RoomsListSection />
      <ConnectSection />
    </div>
  );
}