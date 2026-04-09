import React, { useEffect, useRef, useState, CSSProperties } from "react";

const values = [
  {
    image: "https://images.unsplash.com/photo-1592424001807-55df93bb2768?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    label: "HOMELY",
    title: "Warm Hospitality",
    description: "At Walnut Snowveil Residency, we believe every guest should feel welcomed and cared for. Our team focuses on creating a friendly and comfortable environment where travelers can truly relax during their stay in Nubra Valley."
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Ndtz-Z99axsyDEI3bcUjZdwfrCVScgJ-Q&s",
    label: "COMFORT STAY",
    title: "Comfortable Accommodation",
    description: "Our rooms are thoughtfully prepared to provide a peaceful and comfortable space after a day of exploring Ladakh. Clean interiors, cozy bedding, and a calm atmosphere ensure a restful experience for every guest."
  },
  {
    image: "download.jpg",
    label: "AUTHENTICITY",
    title: "Cultural Experience",
    description: "Guests can enjoy delicious home-style meals prepared with fresh ingredients. We aim to offer a simple yet authentic taste of Ladakhi hospitality during your stay."
  },
  {
    image: "/2.jpg",
    label: "SIMPLICITY",
    title: "Scenic Surroundings",
    description: "Located in the beautiful village of Sumoor, our residency is surrounded by breathtaking mountain landscapes and peaceful natural views, offering guests a quiet escape in the heart of Nubra Valley."
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
    <section className="w-full bg-[#F3F3F3] pb-16 md:pb-[120px]">
      <div className="w-full px-6 md:px-[80px]" ref={sectionRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[40px] lg:gap-x-[60px] gap-y-10 md:gap-y-[60px]">
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
                  fontSize: "clamp(30px, 3vw, 36px)",
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
                  fontSize: "clamp(16px, 1.8vw, 18px)",
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
