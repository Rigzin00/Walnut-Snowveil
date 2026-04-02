import React, { useEffect, useRef, useState, CSSProperties } from "react";

const values = [
  {
    image: "https://images.unsplash.com/photo-1592424001807-55df93bb2768?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    label: "HOMELY",
    title: "Family\nOwned",
    description: "As a family, we take great pride in preserving the lakeside retreat our parents lovingly built long before our time. Though they have officially stepped back, don't be surprised if Jackup stops for a friendly chat while keeping a watchful eye on everything!"
  },
  {
    image: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    label: "AUTHENTIC",
    title: "Keep it\nLocal",
    description: "Oasila exists to honor this extraordinary place we call home, embracing authenticity in every detail. We source locally, highlight seasonal flavors, and create genuine experiences to ensure every moment with us is meaningful and memorable."
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    label: "WELLNESS",
    title: "Earth and\nOurs",
    description: "Wellness is at the heart of everything we do. We strive to create a space where guests leave feeling refreshed while minimizing our impact on the planet through mindful, sustainable practices."
  },
  {
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    label: "SIMPLICITY",
    title: "Within\nNature",
    description: "We believe true luxury lies in nature’s elegant simplicity, guiding everything we do. Using natural materials like wood and stone, we blend sustainability with character, incorporating reclaimed and upcycled pieces into every space."
  }
];

export default function CoreValuesSection() {
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

  const slideRight = (delay: number): CSSProperties => ({
    transform: visible ? "translateX(0)" : "translateX(-80px)",
    opacity: visible ? 1 : 0,
    transition: "transform 1.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease-out",
    transitionDelay: `${delay}s`,
  });

  return (
    <section className="w-full bg-[#F3F3F3] pb-[120px]">
      <div className="w-full px-[80px]" ref={sectionRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[40px] lg:gap-x-[60px] gap-y-[60px]">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col group cursor-pointer"
              style={slideRight(index * 0.15)}
            >
              {/* Image Container with Label */}
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
                <img
                  src={item.image}
                  alt={item.title.replace('\n', ' ')}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 bg-white px-6 py-4 text-[#4B2205] text-xs tracking-[0.2em] font-bold uppercase" style={{ fontFamily: "Anek Bangla, sans-serif" }}>
                  {item.label}
                </div>
              </div>
              
              {/* Heading below image */}
              <h3 
                className="text-left text-[#5c3115]"
                style={{ 
                  fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
                  fontSize: "36px",
                  lineHeight: "1.2",
                  fontWeight: 400
                }}
              >
                {item.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>

              {/* Description below heading */}
              <p
                className="mt-6 text-left text-[#5c3115]"
                style={{
                  fontFamily: "Anek Bangla, sans-serif",
                  fontSize: "18px",
                  lineHeight: "2",
                  fontWeight: 400,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
