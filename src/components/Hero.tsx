import { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    `${import.meta.env.BASE_URL}homebanner6.jpg`,
    `${import.meta.env.BASE_URL}room1.jpeg`,
    `${import.meta.env.BASE_URL}4.jpg`,
    `${import.meta.env.BASE_URL}IMG_0403.JPG.jpeg`,
  ];

  const extendedSlides = [...slides, ...slides];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentSlide(0);

        setTimeout(() => {
          setTransitionEnabled(true);
        }, 50);
      }, 2000);
    }
  }, [currentSlide]);

  return (
    <section className="relative h-[85vh] md:h-screen overflow-hidden">

      {/* Background Slides */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: transitionEnabled ? "transform 2000ms ease-in-out" : "none",
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className="h-full min-w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide})`,
                backgroundPosition: "center 40%",
              }}
            >
              <div className="absolute inset-0 " />
            </div>
          ))}
        </div>
      </div>

      {/* TEXT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="text-white leading-tight flex flex-col items-center">

          <h1 className="hero-left text-center">
           Experience the
          </h1>

          <h1 className="hero-right text-center mt-2 md:mt-0">
            Beauty <br className="block md:hidden" /> of Nubra Valley
          </h1>

        </div>
      </div>

      {/* Scroll Indicator */}
      

    </section>
  );
};

export default Hero;