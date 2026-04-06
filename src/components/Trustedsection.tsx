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
          Why Stay With Us
            <br className="hidden md:block" />
           
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
             At Walnut Snowveil Residency, we focus on offering guests a peaceful and comfortable stay in the heart of
              Nubra Valley. Our rooms are thoughtfully designed to provide a relaxing space where travelers can unwind 
              after a day of exploring the beautiful landscapes, monasteries, and villages of the region. Surrounded by 
              mountains and the calm atmosphere of Sumoor village, our residency creates a perfect environment for rest 
              and relaxation.
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
              What makes our residency special is the warmth of traditional Ladakhi hospitality combined with a comfortable 
              and welcoming environment. Guests can enjoy scenic views, fresh mountain air, and a quiet setting that makes 
              every stay memorable. Whether you are traveling with family, friends, or on a solo adventure, Walnut Snowveil
               Residency offers a simple and authentic Ladakh experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}