import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";

// Scroll animation wrapper component
const AnimatedImage = ({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"
      } ${className || ""}`}
      style={style}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105" />
    </div>
  );
};

import { allRooms } from "../data/roomsData";

export default function RoomDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  const room = state?.room || allRooms.find(r => r.title.toLowerCase().replace(/\s+/g, '-') === id) || {
    title: id?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    img: "room/room4.jpeg",
    guests: "2 Adults & a Child",
    bed: "King size bed",
    size: "Spacious Room",
    description: "A larger room designed for families or small groups visiting Nubra Valley, providing extra space and comfort for a memorable stay.",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "King bed with extra bedding option",
      "Spacious room for families",
      "Private bathroom with hot water",
      "High-speed Wi-Fi and smart TV",
      "Comfortable seating area",
      "24/7 room service and housekeeping"
    ],
    quote: {
      text: `The ${id?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "room"} is a perfect blend of comfort and elegance. The brilliant design, cozy bed, and premium amenities made my stay exceptional. I didn't want to leave!`,
      author: "Guest Review"
    }
  };

  // Scroll to top when room loads
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsHeroVisible(false);
    const timer = setTimeout(() => setIsHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <main className="w-full bg-[#f8f5f0] min-h-screen">
      
      {/* 1. Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[790px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={room.img.startsWith('http') ? room.img : `${import.meta.env.BASE_URL}${room.img}`} alt={room.title} className="w-full h-full object-cover brightness-[0.6]" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-white mt-10">
          {/* Decorative lines could go here */}
          <h1 
            className={`text-[50px] md:text-[80px] lg:text-[110px] leading-tight mb-4 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
            }`} 
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            {room.title}
          </h1>
          <p 
            className={`text-base md:text-xl max-w-2xl font-light tracking-wide opacity-90 transition-all duration-[1500ms] delay-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
            }`}
            style={{ fontFamily: "Anek Bangla, sans-serif" }}
          >
            The {room.title} combines style and comfort, offering<br />a spacious layout, premium amenities, and refined stay.
          </p>
        </div>
      </div>

      {/* Container for content */}
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] py-[80px] md:py-[80px]">
        
        {/* 2. Intro Text */}
        <div className="text-center mb-[80px] md:mb-[120px]">
          <button 
            onClick={() => navigate(-1)}
            className="uppercase tracking-[3px] text-[#5c3115] opacity-60 text-[14px] md:text-[16px] font-semibold mb-10 hover:opacity-100 transition-opacity"
          >
            GO BACK
          </button>
          <h2 
            className="text-[#5c3115] text-[32px] md:text-[46px] leading-[1.2] mb-8 max-w-4xl mx-auto"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            The {room.title}: A perfect blend of comfort and elegance
          </h2>
          <p 
            className="text-[#5c3115] opacity-80 text-[16px] md:text-[18px] leading-relaxed max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            {room.description}
          </p>
          <button 
            className="border border-[#5c3115]/40 text-[#5c3115] px-6 py-3 uppercase tracking-[2px] text-[13px] md:text-[14px] font-medium hover:bg-[#5c3115] hover:text-white transition-colors"
            style={{ fontFamily: "Anek Bangla, sans-serif" }}
          >
            Book Room &rarr;
          </button>
        </div>

        {/* 3. Image Grid First Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-[40px] md:gap-[80px] mb-[80px] md:mb-[120px]">
          <div className="w-full md:w-[45%]">
            <AnimatedImage
              src={room.gallery[0]} 
              alt={`${room.title} view 1`} 
              className="w-full aspect-[4/3] md:aspect-[3/2]"
            />
          </div>
          <div className="w-full md:w-[45%] md:mt-24">
            <AnimatedImage
              src={room.gallery[1]} 
              alt={`${room.title} view 2`} 
              className="w-full aspect-square md:aspect-[4/5]"
            />
          </div>
        </div>

        {/* 4. Room Amenities */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-[40px] md:gap-[80px] mb-[80px] md:mb-[120px]">
          <div className="w-full md:w-[45%]">
            <h3 
              className="text-[#5c3115] text-[32px] md:text-[40px] mb-8"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Room amenities
            </h3>
            <ul 
              className="text-[#5c3115] opacity-80 text-[16px] md:text-[18px] space-y-4 list-disc pl-5"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
            >
              {room.amenities.map((amenity: string, index: number) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-[45%]">
            <AnimatedImage
              src={room.gallery[2]} 
              alt={`${room.title} amenities`} 
              className="w-full aspect-[4/3]"
            />
          </div>
        </div>

        {/* 4. Room Gallery (Wide Image) */}
        <div className="w-full relative mb-[80px] md:mb-[120px]">
          <AnimatedImage
            src={room.gallery[3]} 
            alt="Room Gallery Wide" 
            className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh]"
          />
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 pointer-events-none">
            <h3 
              className="text-white text-[24px] md:text-[36px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Room Gallery
            </h3>
          </div>
        </div>

        {/* 5. Quote Section */}
        <div className="text-center max-w-4xl mx-auto mb-[100px] md:mb-[150px]">
          <div className="text-[#5c3115] text-[40px] leading-none mb-4 font-serif">"</div>
          <p 
            className="text-[#5c3115] text-[24px] md:text-[32px] leading-snug mb-8"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            {room.quote.text}
          </p>
          <p 
            className="text-[#5c3115] opacity-60 uppercase tracking-[2px] text-[14px] md:text-[16px] font-medium"
            style={{ fontFamily: "Anek Bangla, sans-serif" }}
          >
            - {room.quote.author}
          </p>
        </div>
      </div>

      {/* 6. Exclusive Highlight (Common across all rooms) */}
      <div className="w-full bg-white py-[80px] md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-[20px] md:px-[60px] lg:px-[100px]">
          <h2 
            className="text-[#5c3115] text-[36px] md:text-[50px] lg:text-[60px] text-center leading-tight mb-[80px]"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
          Signature Experiences of Your<br/>Stay Our Residency
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Box 1 */}
            <div className="border border-[#5c3115]/30 p-8 md:p-12 lg:p-14 transition-colors hover:border-[#5c3115]/60 h-full flex flex-col">
              <h3 
                className="text-[#5c3115] text-[26px] md:text-[32px] mb-8 leading-tight"
                style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
              >
                Nubra Valley <br/>Tranquility
              </h3>
              <p 
                className="text-[#5c3115] opacity-80 text-[16px] md:text-[18px] leading-[1.8] flex-grow"
                style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
              >
                Located in the serene village of Sumoor, Walnut Snowveil Residency offers a peaceful retreat surrounded by the dramatic landscapes of Nubra Valley. Guests can enjoy quiet mornings, fresh mountain air, and breathtaking views of the valley that create a truly relaxing atmosphere away from busy city life.
              </p>
            </div>
            {/* Box 2 */}
            <div className="border border-[#5c3115]/30 p-8 md:p-12 lg:p-14 transition-colors hover:border-[#5c3115]/60 h-full flex flex-col">
              <h3 
                className="text-[#5c3115] text-[26px] md:text-[32px] mb-8 leading-tight"
                style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
              >
                Authentic Ladakhi<br/>Hospitality
              </h3>
              <p 
                className="text-[#5c3115] opacity-80 text-[16px] md:text-[18px] leading-[1.8] flex-grow"
                style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
              >
                At Walnut Snowveil Residency, hospitality is rooted in the traditions of Ladakh. Guests are welcomed with warmth and genuine care, ensuring a stay that feels both comfortable and personal. Our goal is to create an environment where visitors experience the culture, kindness, and simplicity of local life.
              </p>
            </div>
            {/* Box 3 */}
            <div className="border border-[#5c3115]/30 p-8 md:p-12 lg:p-14 transition-colors hover:border-[#5c3115]/60 h-full flex flex-col">
              <h3 
                className="text-[#5c3115] text-[26px] md:text-[32px] mb-8 leading-tight"
                style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
              >
                Gateway to Nubra Adventures
              </h3>
              <p 
                className="text-[#5c3115] opacity-80 text-[16px] md:text-[18px] leading-[1.8] flex-grow"
                style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
              >
                Walnut Snowveil Residency serves as an ideal base for discovering the natural and cultural wonders of Nubra Valley. From scenic drives and monastery visits to peaceful village walks and photography opportunities, every experience allows guests to connect with the region’s extraordinary landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Other Accommodations */}
      <div className="w-full bg-[#f4f1ec] py-[80px] md:py-[120px] px-[20px] md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="text-[#5c3115] text-[32px] md:text-[40px] text-center mb-[60px]"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            Other Rooms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allRooms
              .filter(r => r.title !== room.title)
              .slice(0, 3)
              .map((otherRoom, index) => (
                <Link 
                  key={index} 
                  to={`/room/${encodeURIComponent(otherRoom.title.toLowerCase().replace(/\s+/g, '-'))}`} 
                  state={{ room: otherRoom }}
                  className="group cursor-pointer"
                >
                  <AnimatedImage
                    src={otherRoom.img} 
                    alt={otherRoom.title} 
                    className="w-full aspect-[4/3] mb-4"
                  />
                  <p 
                    className="text-[#5c3115] text-[18px] md:text-[20px] group-hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
                  >
                    {otherRoom.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
