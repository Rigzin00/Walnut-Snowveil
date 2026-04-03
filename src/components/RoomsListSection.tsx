import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ room, index }: { room: any; index: number }) => {
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
      className={`flex flex-col w-full transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden mb-[30px] cursor-pointer">
        <Link to={`/room/${encodeURIComponent(room.title.toLowerCase().replace(/\s+/g, '-'))}`} state={{ room }}>
          <img
            src={room.img}
            alt={room.title}
            className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105"
          />
        </Link>
      </div>

      {/* Title */}
      <div className="flex items-center mb-[20px] cursor-pointer">
        <span className="w-[15px] h-[1px] bg-[#5c3115] opacity-60 mr-3"></span>
        <Link to={`/room/${encodeURIComponent(room.title.toLowerCase().replace(/\s+/g, '-'))}`} state={{ room }}>
          <h3
            className="text-[#5c3115] text-[24px] md:text-[28px] leading-none hover:opacity-80 transition-opacity"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            {room.title}
          </h3>
        </Link>
      </div>

      {/* Details Row */}
      <div className="flex flex-row justify-between items-start gap-2 border-t border-[#5c3115]/10 pt-[20px]">
        
        {/* Detail 1: Guests */}
        <div className="flex items-start gap-2 flex-1">
          <svg className="w-[14px] h-[14px] mt-[4px] text-[#5c3115] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <p
            className="text-[#5c3115] opacity-70 text-[13px] md:text-[14px] leading-tight"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            {room.guests}
          </p>
        </div>

        {/* Detail 2: Bed */}
        <div className="flex items-start gap-2 flex-1">
          <svg className="w-[14px] h-[14px] mt-[4px] text-[#5c3115] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 14v7M20 14v7M4 14V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7M4 14h16" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 10h12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p
            className="text-[#5c3115] opacity-70 text-[13px] md:text-[14px] leading-tight"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            {room.bed}
          </p>
        </div>

        {/* Detail 3: Size */}
        <div className="flex items-start gap-2 flex-1">
          <svg className="w-[14px] h-[14px] mt-[4px] text-[#5c3115] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16v16H4zM10 4v16M4 10h16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p
            className="text-[#5c3115] opacity-70 text-[13px] md:text-[14px] leading-tight"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            {room.size}
          </p>
        </div>

      </div>
    </div>
  );
};

export default function RoomsListSection() {
  const rooms = [
    {
      title: "Family Suite",
      guests: "2 Adults & 2 Children",
      bed: "King size & Twin beds",
      size: "50.00 meter",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "The Family Suite provides a spacious and welcoming environment for your entire family. With separate sleeping areas, child-friendly amenities, and a warm, inviting living space, it is the ideal home away from home. Parents can relax in the luxurious master bedroom while the kids enjoy their own cozy corner, ensuring comfort for everyone.",
      gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490359854-dfba196f3044?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      amenities: [
        "Spacious two-bedroom interior",
        "Premium king-size and twin beds",
        "Child-friendly bath amenities",
        "High-speed Wi-Fi and family streaming TV",
        "Fully equipped kitchenette",
        "24/7 family room service"
      ],
      quote: {
        text: "The Family Suite was absolutely perfect. The kids had their own space, and we could finally relax in peace. Truly a stress-free experience!",
        author: "SARAH JENKINS - LONDON, UK"
      }
    },
    {
      title: "Executive Junior Suite",
      guests: "2 Adults",
      bed: "King size bed",
      size: "45.00 meter",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Step into the Executive Junior Suite, where modern sophistication meets timeless elegance. Featuring a masterfully designed open-plan layout, an oversized workspace, and panoramic windows, it caters perfectly to discerning professionals and luxury lovers. Experience a refined tranquility enhanced by premium fabrics and ambient lighting.",
      gallery: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      amenities: [
        "Elegant open-plan living layout",
        "Signature king-size bed",
        "Marble bathroom with walk-in shower",
        "High-speed Wi-Fi and executive desk",
        "Nespresso coffee machine",
        "Complimentary lounge access"
      ],
      quote: {
        text: "The Executive Junior Suite gave me the space I needed to work and the comfort I deserved to unwind. The attention to detail is remarkable.",
        author: "MICHAEL CHANG - TORONTO, CA"
      }
    },
    {
      title: "Executive Studio",
      guests: "2 Adults & 1 Child",
      bed: "King size bed for couple",
      size: "39.56 meter",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "The Executive Studio is a perfect blend of style, comfort, and functionality, offering a spacious layout with premium amenities and modern decor. Designed for both business and leisure travelers, it provides a refined stay with elegant furnishings and thoughtful details, ensuring a seamless and enjoyable experience.",
      gallery: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      amenities: [
        "Spacious, elegantly designed interior",
        "Premium king-size or queen-size bed",
        "Luxurious en-suite bathroom with premium toiletries",
        "High-speed Wi-Fi and smart TV",
        "Fully equipped kitchenette or mini-bar",
        "24/7 room service and housekeeping"
      ],
      quote: {
        text: "The Executive Studio is a perfect blend of comfort and elegance. The brilliant design, cozy bed, and premium amenities made my stay exceptional. I didn't want to leave!",
        author: "JOHN DOE - NEW YORK, USA"
      }
    },
    {
      title: "Retreat Loggia Suite",
      guests: "2 Adults",
      bed: "King size bed",
      size: "55.00 meter",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Discover ultimate serenity in the Retreat Loggia Suite. Featuring a beautifully appointed private loggia, this suite bridges the gap between indoor luxury and outdoor tranquility. Enjoy breathtaking views of the surrounding landscapes, plush seating areas, and a deeply relaxing ambiance that makes it an idyllic private sanctuary.",
      gallery: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      amenities: [
        "Private outdoor loggia with seating",
        "Ultra-premium king-size bed",
        "Deep soaking tub and dual vanities",
        "High-speed Wi-Fi and entertainment system",
        "Curated minibar and wine selection",
        "Exclusive spa access"
      ],
      quote: {
        text: "Waking up and stepping out onto the private loggia was breathtaking. This suite isn't just a place to sleep; it's a destination in itself.",
        author: "EMILY RIVERS - SYDNEY, AUS"
      }
    },
  ];

  return (
    <section className="w-full bg-white py-[80px] md:py-[150px] px-[20px] md:px-[60px] lg:px-[100px]">
      <div className="max-w-[1400px] mx-auto relative">
        
        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[80px] md:gap-x-[100px] md:gap-y-[120px]">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="w-full flex justify-center mt-[80px] md:mt-[120px]">
          <button 
            className="uppercase tracking-[2px] text-[#5c3115] opacity-50 hover:opacity-100 transition-opacity duration-300 text-[12px] md:text-[13px] font-medium"
            style={{ fontFamily: "Anek Bangla, sans-serif" }}
          >
            Load More
          </button>
        </div>

      </div>
    </section>
  );
}