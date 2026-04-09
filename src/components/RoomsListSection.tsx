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
      title: "Standard Room",
      guests: "2 Guests",
      bed: "Double Bed",
      size: "Mountain / Village View",
      img: "/room.jpg",
      description: "A cozy and comfortable room ideal for travelers exploring Nubra Valley. Designed with warm interiors and peaceful surroundings for a relaxing stay.",
      gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490359854-dfba196f3044?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      amenities: [
        "Comfortable double bed",
        "Clean attached bathroom with hot water",
        "Room heating (seasonal)",
        "High-speed Wi-Fi and family streaming TV",
        "Fresh towels and toiletries",
        "Peaceful village surroundings"
      ],
      quote: {
        text: "A peaceful stay surrounded by mountains and fresh Nubra Valley air.",
        author: "Guest Review"
      }
    },
    {
      title: "Double Room",
      guests: "2 Guests",
      bed: "King size bed",
      size: "Mountain View",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "The Double Room is perfect for couples or friends seeking a comfortable and relaxing stay in Nubra Valley. Designed with spacious interiors and cozy bedding, the room offers a welcoming atmosphere to unwind and enjoy the mountain surroundings.",
      gallery: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      amenities: [
        "King size bed",
        "Private bathroom with hot water",
        "Comfortable seating area",
        "High-speed Wi-Fi and executive desk",
        "Daily housekeeping",
        "Mountain or village view"
      ],
      quote: {
        text: "Perfect comfort after a long journey through the breathtaking valleys of Ladakh.",
        author: "Guest Review"
      }
    },
    {
      title: "Family Room",
      guests: "2 Adults & a Child",
      bed: "King size bed",
      size: "Spacious Room",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
        text: "A warm and welcoming place where our family felt at home in the heart of Nubra.",
        author: "Guest Review"
      }
    },
    {
      title: "Deluxe Room",
      guests: "2 Guests",
      bed: "King size bed",
      size: "Mountain View",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "A spacious and comfortable room offering a relaxing atmosphere with beautiful views of the surrounding mountains of Nubra Valley. Perfect for guests seeking extra comfort during their stay.",
      gallery: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      amenities: [
        "King size bed",
        "Spacious room layout",
        "Private bathroom with hot water",
        "High-speed Wi-Fi and entertainment system",
        "Comfortable sitting area",
        "Scenic mountain surroundings"
      ],
      quote: {
        text: "Waking up to the quiet beauty of Nubra Valley made the stay truly unforgettable.",
        author: "Guest Review"
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