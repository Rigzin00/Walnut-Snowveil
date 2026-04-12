import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ─── RoomCard Component ───────────────────────────────────────────────────────

interface RoomCardProps {
  image: string;
  title: string;
  delay?: number;
}

function RoomCard({ image, title, delay = 0 }: RoomCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const slug = title.replace('— ', '').trim().toLowerCase().replace(/\s+/g, '-');

  return (
    <Link
      to={`/room/${slug}`}
      ref={cardRef}
      className="flex flex-col items-center w-full px-4 md:px-0 min-[1140px]:w-[31%] cursor-pointer group"
      style={{
        transform: visible ? "translateY(0)" : "translateY(60px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.85s ease`,
        transitionDelay: `${delay}s`,
      }}
      aria-label={`View details for ${title.replace('— ', '')}`}
    >
      {/* Card Image */}
      <div
        className="overflow-hidden rounded-[8px] w-full max-w-[400px] md:max-w-none h-[280px] sm:h-[350px] md:h-[300px] lg:h-[360px] min-[1400px]:h-[452px]"
        style={{
          boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 2px 10px rgba(0,0,0,0.10)",
        }}
      >
        <img
          src={image}
          alt={title.replace('— ', '')}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Card Title */}
      <p
        className="mt-4 text-2xl md:text-[26px] lg:text-[30px] text-[#7A3E16] tracking-wide w-full max-w-[400px] md:max-w-none text-left group-hover:text-[#5c2e10] transition-colors"
        style={{ fontFamily: "Jomolhari, Georgia, serif" }}
      >
        {title}
      </p>
    </Link>
  );
}

// ─── RoomsSection Component ───────────────────────────────────────────────────

const rooms = [
  {
    image: `${import.meta.env.BASE_URL}room/room2.jpeg`,
    title: "— Standard Room",
  },
  {
    image: `${import.meta.env.BASE_URL}room/room11.jpeg`,
    title: "— Double Room",
  },
  {
    image: `${import.meta.env.BASE_URL}room/room4.jpeg`,
    title: "— Family Room",
  },
];

export default function RoomsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white md:bg-[#F2F2F2]">

      {/* ── Background Hero Image ── */}
      <div
        className="relative w-full h-[400px] sm:h-[450px] md:h-[880px]"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}5.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.05) 100%)" }}
        />

        {/* Section Title — bottom left (Desktop) */}
        <div
          className="hidden md:block absolute overflow-hidden"
          style={{ bottom: "clamp(56px, 7vw, 130px)", left: "clamp(24px, 6vw, 80px)" }}
        >
            <h2
            className="text-white font-medium leading-tight"
              style={{
                fontFamily: "Jomolhari, Georgia, serif",
              fontSize: "clamp(42px, 5.6vw, 60px)",
                transform: titleVisible ? "translateY(0)" : "translateY(50px)",
                opacity: titleVisible ? 1 : 0,
                transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
                transitionDelay: "0.1s",
              }}
            >
              Rooms &amp; Suites
            </h2>
        </div>
      </div>

      {/* Section Title (Mobile) */}
      <div className="block md:hidden px-4 pt-10 pb-6 w-full max-w-[400px] mx-auto">
        <h2
          className="text-[#7A3E16] text-[42px] font-medium leading-tight tracking-wide"
              style={{
            fontFamily: "Jomolhari, Georgia, serif",
            transform: titleVisible ? "translateY(0)" : "translateY(30px)",
                opacity: titleVisible ? 1 : 0,
                transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
              }}
            >
          Rooms &amp; Suites
        </h2>
      </div>

      {/* ── Floating Cards Row ── */}
      <div
        className="relative z-10 flex flex-col md:grid md:grid-cols-2 md:justify-items-center md:items-start min-[1140px]:flex min-[1140px]:flex-row min-[1140px]:flex-nowrap min-[1140px]:justify-center items-center gap-12 md:gap-8 min-[1140px]:gap-10 min-[1400px]:gap-16 px-4 md:px-6 min-[1400px]:px-8 mt-12 md:mt-8 min-[1140px]:-mt-[70px] min-[1400px]:-mt-[100px] pb-16 md:pb-[80px]"
      >
        {rooms.map((room, i) => (
          <RoomCard
            key={room.title}
            image={room.image}
            title={room.title}
            delay={0.15 + i * 0.15}
          />
        ))}
      </div>

    </section>
  );
}