import { AlignJustify } from "lucide-react";
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
      className="w-full bg-[#fffefd] py-16 md:py-28 px-4 md:px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-[2000px] w-full text-center">

        {/* Heading */}
        <div className="overflow-hidden px-4 md:px-0">
          <h2
            className="text-[40px] sm:text-[48px] md:text-[72px] lg:text-[90px] font-medium leading-tight tracking-tight text-[#6D3207] mb-6 md:mb-6"
            style={{
              fontFamily: "Jomolhari",
              transform: visible ? "translateY(0)" : "translateY(80px)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
              transitionDelay: "0.1s",
            }}
          >
            Experience Nubra Valley at
            <br className="hidden md:block" />
            Walnut Snowveil Residency
          </h2>
        </div>

        {/* Paragraph */}
        <div className="overflow-hidden">
          <p
            className="max-w-[1000px] mx-auto text-base md:text-[20px] font-light leading-relaxed text-[#6d4326]"
            style={{
              fontFamily:"Anek Bangla",
              textAlign: "justify",
              lineHeight: "1.55",
              transform: visible ? "translateY(0)" : "translateY(60px)",
              opacity: visible ? 1 : 0,
              fontSize: "clamp(16px, 2.2vw, 20px)",
              transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
              transitionDelay: "0.35s",
            }}
          >
                      Nestled in the peaceful village of Sumoor in Nubra Valley, Walnut Snowveil Residency offers travelers a comfortable and welcoming stay surrounded by the breathtaking landscapes of Ladakh. Our residency combines the warmth of traditional Ladakhi hospitality with modern comforts, creating a relaxing space for guests exploring Nubra Valley.
                      Wake up to stunning mountain views, fresh mountain air, and the calm atmosphere of the valley. Whether you are visiting Diskit Monastery, Hunder Sand Dunes, or the beautiful villages of Nubra, our location provides a perfect base for discovering the natural beauty and culture of the region.
                      Guests can enjoy clean and spacious rooms, home-cooked meals, and a peaceful environment that makes every stay memorable. At Walnut Snowveil Residency, we focus on offering a genuine Ladakhi experience where comfort, nature, and hospitality come together.
                      </p>
        </div>

      </div>
    </section>
  );
}