export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section for About Us */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d142410a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="About Us Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 
          className="relative z-10 text-white text-[50px] md:text-[80px] font-normal"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          About Us
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-[1000px] mx-auto py-[100px] px-[40px] flex flex-col gap-[60px]">
        <h2 
          className="text-[#5c3115] text-[36px] md:text-[48px] text-center"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          Our Story
        </h2>
        <p 
          className="text-[#5c3115] text-[18px] md:text-[20px] leading-[1.8] opacity-90 text-center max-w-[800px] mx-auto"
          style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
        >
          Nestled in the heart of breathtaking scenery, our resort has been a sanctuary for travelers seeking peace and luxury. We believe in harmonizing with nature, offering an experience that rejuvenates the soul while preserving the environment around us.
        </p>
        <p 
          className="text-[#5c3115] text-[18px] md:text-[20px] leading-[1.8] opacity-90 text-center max-w-[800px] mx-auto"
          style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
        >
          From the finest dining to unparalleled service, every detail is crafted to ensure your stay is unforgettable. Our dedicated staff works tirelessly to curate moments that will echo in your memories long after you leave.
        </p>
      </div>
    </div>
  );
}