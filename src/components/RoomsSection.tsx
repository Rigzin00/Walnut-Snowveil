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
  const [parallaxY, setParallaxY] = useState(0);

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

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (!cardRef.current) {
        ticking = false;
        return;
      }

      const rect = cardRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;

      // Opposite-direction parallax: while the page content moves up,
      // the image drifts slightly down for a subtle depth effect.
      const nextY = (viewportCenter - elementCenter) * 0.08;
      const clampedY = Math.max(-22, Math.min(22, nextY));
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
      ref={cardRef}
      className="flex flex-col items-center w-full px-4 md:px-0"
      style={{
        transform: visible ? "translateY(0)" : "translateY(60px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.85s ease`,
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Card Image */}
      <div
        className="overflow-hidden rounded-[8px] w-full max-w-[400px] h-[280px] sm:h-[350px] md:h-[452px]"
        style={{
          boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 2px 10px rgba(0,0,0,0.10)",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            transform: `translateY(${parallaxY}px)`,
            transition: "transform 200ms linear",
            willChange: "transform",
          }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-[112%] -mt-[6%] object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* Card Title */}
      <p
        className="mt-4 text-2xl md:text-[30px] text-[#7A3E16] tracking-wide w-full max-w-[400px] text-left md:text-center"
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
        className="relative w-full h-[300px] sm:h-[400px] md:h-[880px]"
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
          style={{ bottom: "130px", left: "80px" }}
        >
          <h2
            className="text-white text-[60px] font-medium leading-tight"
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
        className="relative z-10 flex flex-col md:flex-row flex-nowrap md:justify-center items-center gap-10 md:gap-16 px-0 md:px-8 mt-4 md:-mt-[100px] pb-16 md:pb-[80px]"
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