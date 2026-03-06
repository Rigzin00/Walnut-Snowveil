import { useEffect, useRef, useState } from "react";

// ─── RoomCard Component ───────────────────────────────────────────────────────

interface RoomCardProps {
  image: string;
  title: string;
  delay?: number;
}

function RoomCard({ image, title, delay = 0 }: RoomCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
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

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center"
      style={{
        transform: visible ? "translateY(0)" : "translateY(60px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.85s ease`,
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Card Image */}
      <div
        className="overflow-hidden rounded-[8px]"
        style={{
          width: "400px",
          height: "452px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 2px 10px rgba(0,0,0,0.10)",
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Card Title */}
      <p
        className="mt-4 text-[30px] text-[#7A3E16] tracking-wide"
        style={{ fontFamily: "Jomolhari, Georgia, serif" }}
      >
        {title}
      </p>
    </div>
  );
}

// ─── RoomsSection Component ───────────────────────────────────────────────────

const rooms = [
  {
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=640&q=80",
    title: "— Family Suite",
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=640&q=80",
    title: "— Executive Junior Suite",
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=640&q=80",
    title: "— Retreat Loggia Suite",
  },
];

export default function RoomsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
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
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F2F2F2]">

      {/* ── Background Hero Image ── */}
      <div
        className="relative w-full"
        style={{
          height: "880px",
          backgroundImage: `url('Public/Sitting Room.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.05) 100%)" }}
        />

        {/* Section Title — bottom left */}
        <div
          ref={titleRef}
          className="absolute overflow-hidden"
          style={{ bottom: "130px", left: "80px" }}
        >
          <h2
            className="text-white text-[80px] font-medium leading-tight"
            style={{
              fontFamily: "Jomolhari, Georgia, serif",
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

      {/* ── Floating Cards Row ── */}
      <div
        className="relative z-10 flex flex-wrap justify-center gap-16 px-8"
        style={{ marginTop: "-100px", paddingBottom: "80px"  }}
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