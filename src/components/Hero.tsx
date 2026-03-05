import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/1454496/pexels-photo-1454496.jpeg?auto=compress&cs=tinysrgb&w=1920",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide})`,
              backgroundPosition: "center 40%",
            }}
          >
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>
      ))}

      {/* TEXT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
  <div className="text-white leading-tight">

    <h1 className="hero-left">
      Where Luxury
    </h1>

    <h1 className="hero-right">
      Meets Wanderlust
    </h1>

  </div>
</div>

      {/* Scroll Text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-xs tracking-[0.2em] opacity-70">
        SCROLL DOWN
      </div>

    </section>
  );
};

export default Hero;