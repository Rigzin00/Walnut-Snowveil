export default function ConnectSection() {
  return (
    <section className="relative z-20 w-full flex flex-col md:flex-row min-h-[500px] md:min-h-[700px] bg-white">
      {/* Left Column - Image with Overlay */}
      <div className="relative w-full md:w-1/2 flex items-end justify-center p-[40px]">
        <img 
          src="/10.jpg" 
          alt="Travel" 
          className="absolute inset w-full h-full object-cover"
        />
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Inner thin border */}
        <div className="absolute inset-[20px] md:inset-[40px] border border-white/30 pointer-events-none"></div>

        {/* Text */}
        <h2 
          className="relative z-10 text-white text-[40px] md:text-[60px] lg:text-[72px] leading-tight text-center"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          Let's Connect
        </h2>
      </div>

      {/* Right Column - Contact Information */}
      <div className="relative w-full md:w-1/2 bg-[#f4efea] flex flex-col justify-center py-[80px] px-[40px] md:px-[60px] lg:px-[100px]">
        <div className="flex flex-col gap-[60px] w-full max-w-[600px] mx-auto">
          
          {/* Visit */}
          <div className="flex flex-row items-center justify-between">
            <h3 
              className="text-[#5c3115] text-[28px] md:text-[36px] lg:text-[40px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Visit
            </h3>
            <span className="text-[#a89f91] mx-[20px] md:mx-[40px]">→</span>
            <p 
              className="text-[#5c3115] text-[14px] md:text-[15px] leading-[1.8] text-left flex-1"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300, minWidth: "160px" }}
            >
              Walnut Snowveil Residency<br />
              Sumoor Village, Nubra Valley<br />
              Leh, Ladakh – 194404<br />
               India

            </p>
          </div>

          {/* Write */}
          <div className="flex flex-row items-center justify-between">
            <h3 
              className="text-[#5c3115] text-[28px] md:text-[36px] lg:text-[40px] w-[80px] md:w-[100px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Write
            </h3>
            <span className="text-[#a89f91] mx-[20px] md:mx-[40px]">→</span>
            <p 
              className="text-[#5c3115] text-[14px] md:text-[15px] leading-[1.8] text-left flex-1"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300, minWidth: "160px" }}
            >
              info.walnutsnowveilres@gmail.com<br />
              
            </p>
          </div>

          {/* Call */}
          <div className="flex flex-row items-center justify-between">
            <h3 
              className="text-[#5c3115] text-[28px] md:text-[36px] lg:text-[40px] w-[80px] md:w-[100px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Call
            </h3>
            <span className="text-[#a89f91] mx-[20px] md:mx-[40px]">→</span>
            <p 
              className="text-[#5c3115] text-[14px] md:text-[15px] leading-[1.8] text-left flex-1"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300, minWidth: "160px" }}
            >
              +91 6006672711<br />
              +91 6005643874
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}