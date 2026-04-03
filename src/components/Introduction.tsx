import { useEffect, useRef, useState } from "react";

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fffefd] py-28 px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-[2000px] w-full text-center">

        {/* Heading */}
        <div className="overflow-hidden px-4 md:px-0">
          <h2
            className="text-4xl md:text-[90px] font-medium leading-tight tracking-tight text-[#6D3207] mb-6 md:mb-6"
            style={{
              fontFamily: "Jomolhari",
              transform: visible ? "translateY(0)" : "translateY(80px)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
              transitionDelay: "0.1s",
            }}
          >
            An exclusive retreat of comfort
            <br className="hidden md:block" />
            and sophistication
          </h2>
        </div>

        {/* Paragraph */}
        <div className="overflow-hidden">
          <p
            className="max-w-[1000px] mx-auto text-base md:text-[20px] font-light leading-relaxed text-[#6d4326]"
            style={{
              fontFamily:"Anek Bangla",
              lineHeight: "1.85",
              transform: visible ? "translateY(0)" : "translateY(60px)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
              transitionDelay: "0.35s",
            }}
          >
            Nestled in a serene setting, our luxury lodge and hotel offer a perfect
            blend of elegance, comfort, and world-class hospitality. Designed for
            discerning travelers, each space is crafted with refined interiors,
            modern amenities, and breathtaking views. Whether you seek a tranquil
            escape, a romantic getaway, or a premium business stay, we ensure an
            unparalleled experience marked by personalized service and timeless
            sophistication. Indulge in fine dining, rejuvenate in our wellness
            spaces, and immerse yourself in an ambiance of pure luxury.
          </p>
        </div>

      </div>
    </section>
  );
}