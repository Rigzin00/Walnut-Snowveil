import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ target, suffix, label }: { target: number, suffix: string, label: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrameId: number;
    const duration = 1500; // 1.5 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutExpo function for smooth deceleration
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * Math.min(percentage, 1));
      
      setCount(Math.floor(easeProgress * target));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center w-full md:w-1/3 py-[30px] sm:py-[40px] md:py-0">
      <div className="flex flex-row items-start text-[#5c3115]">
        <span 
          className="text-[65px] md:text-[80px] leading-none"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          {count}
        </span>
        <span 
          className="text-[35px] md:text-[40px] leading-none tracking-tight -translate-y-1 md:-translate-y-0 pt-0 md:pt-3 ml-1"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          {suffix}
        </span>
      </div>
      <p 
        className="text-[#5c3115] text-[16px] md:text-[18px] opacity-80 mt-1 md:mt-2 text-center whitespace-normal md:whitespace-nowrap max-w-[230px]"
        style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
      >
        {label}
      </p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-[60px] md:py-[100px] px-[20px] md:px-[80px]">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-[10px] md:gap-0">
        
        <AnimatedCounter target={10} suffix="+" label="Rooms Available" />
        
        {/* Divider 1 */}
        <div className="w-[85%] max-w-[350px] h-[1px] md:w-[1px] md:h-[80px] bg-[#5c3115]/20 md:bg-[#5c3115]/10"></div>
        
        <AnimatedCounter target={5} suffix="+" label="Nearby Attractions" />
        
        {/* Divider 2 */}
        <div className="w-[85%] max-w-[350px] h-[1px] md:w-[1px] md:h-[80px] bg-[#5c3115]/20 md:bg-[#5c3115]/10"></div>
        
        <AnimatedCounter target={100} suffix="+" label="Happy Guests Every Season" />
        
      </div>
    </section>
  );
}