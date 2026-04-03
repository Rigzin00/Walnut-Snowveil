import { useEffect, useRef, useState, CSSProperties } from "react";

export default function TrustedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number): CSSProperties => ({
    transform: visible ? "translateY(0)" : "translateY(50px)",
    opacity: visible ? 1 : 0,
    transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
    transitionDelay: `${delay}s`,
  });

  return (
    <section className="w-full bg-[#F3F3F3] py-16 md:py-[100px]">
      <div
        ref={sectionRef}
        className="w-full px-5 md:px-[80px]"
      >

        {/* ── Heading — left aligned, very large ── */}
        <div className="overflow-hidden mb-8 md:mb-[70px]">
          <h2
            className="text-left text-[#7A3E16] font-medium leading-[1.15]"
            style={{
              fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
              fontSize: "clamp(36px, 8vw, 88px)",
              ...fadeUp(0.05),
            }}
          >
            Experience why we are a trusted
            <br className="hidden md:block" />
            name in luxury hospitality.
          </h2>
        </div>

        {/* ── Two Column Paragraphs ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-[80px]">

          {/* Left Column */}
          <div className="overflow-hidden">
            <p
              className="text-left text-[#4B2205] leading-[1.65]"
              style={{
                fontFamily: "Anek Bangla",
                fontSize: "clamp(25px, 1.1vw, 18px)",
                fontWeight: 300,
                ...fadeUp(0.25),
              }}
            >
              For years, we have set the standard in luxury hospitality,
              delivering exceptional service and unforgettable experiences. Our
              commitment to excellence, attention to detail, and warm hospitality
              have earned us a reputation as a trusted name among travelers
              seeking comfort, elegance, and personalized care. From exquisite
              accommodations to world-class dining and thoughtful amenities,
              every aspect of our guest experience is designed to exceed
              expectations.
            </p>
          </div>

          {/* Right Column */}
          <div className="overflow-hidden">
            <p
              className="text-left text-[#4B2205] leading-[1.65]"
              style={{
                fontFamily: "Anek Bangla",
                fontSize: "clamp(25px, 1.1vw, 18px)",
                fontWeight: 300,
                ...fadeUp(0.4),
              }}
            >
              What sets us apart is our dedication to creating memorable stays
              that go beyond just accommodations. Whether you're here for
              business or leisure, we ensure that every moment is marked by
              sophistication, relaxation, and seamless service. With a perfect
              blend of timeless charm and modern convenience, we invite you to
              discover why we have become a household name in luxury hospitality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}