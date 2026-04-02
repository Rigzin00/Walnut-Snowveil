import React, { useEffect, useRef, useState } from "react";

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
      <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden mb-[30px]">
        <img
          src={room.img}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105"
        />
      </div>

      {/* Title */}
      <div className="flex items-center mb-[20px]">
        <span className="w-[15px] h-[1px] bg-[#5c3115] opacity-60 mr-3"></span>
        <h3
          className="text-[#5c3115] text-[24px] md:text-[28px] leading-none"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          {room.title}
        </h3>
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
      guests: "2 Adults & 1 Child",
      bed: "King size bed for couple",
      size: "39.56 meter",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Executive Junior Suite",
      guests: "2 Adults & 1 Child",
      bed: "King size bed for couple",
      size: "39.56 meter",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Executive Studio",
      guests: "2 Adults & 1 Child",
      bed: "King size bed for couple",
      size: "39.56 meter",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Retreat Loggia Suite",
      guests: "2 Adults & 1 Child",
      bed: "King size bed for couple",
      size: "39.56 meter",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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