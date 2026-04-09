export default function ConnectSection() {
  return (
    <section className="relative z-20 w-full bg-[#f4efea] py-6 md:py-8 px-4 md:px-8">
      <div className="min-[1200px]:flex min-[1200px]:items-stretch min-[1200px]:gap-8">
        {/* Banner Image */}
        <div className="relative w-full min-h-[350px] md:min-h-[420px] lg:min-h-[460px] min-[1200px]:w-1/2 min-[1200px]:min-h-[620px] flex items-end justify-end p-6 md:p-[36px] lg:p-[42px] overflow-hidden">
          <img
            src="/10.jpg"
            alt="Travel"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute inset-[12px] md:inset-[16px] lg:inset-[14px] border border-white/30 pointer-events-none"></div>

          <h2
            className="relative z-10 text-white text-[44px] md:text-[56px] lg:text-[64px] leading-tight text-right"
            style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
          >
            Let's Connect
          </h2>
        </div>

        {/* Contact Information */}
        <div className="w-full min-[1200px]:w-1/2 py-8 md:py-[56px] lg:py-[64px] min-[1200px]:py-2 px-4 md:px-[24px] lg:px-[28px] min-[1200px]:px-0 min-[1200px]:flex min-[1200px]:items-center">
          <div className="flex flex-col gap-8 md:gap-[46px] lg:gap-[56px] min-[1200px]:gap-10 w-full">
          
            {/* Visit */}
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-start md:gap-[28px] lg:gap-[36px]">
            <h3 
              className="text-[#5c3115] text-[36px] md:text-[52px] lg:text-[58px] md:min-w-[170px] lg:min-w-[190px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", lineHeight: 1 }}
            >
              Visit
            </h3>
            <span className="hidden md:inline text-[#b9b1a8] text-[36px] lg:text-[42px] leading-none">→</span>
            <p 
              className="text-[#5c3115] text-[16px] md:text-[20px] lg:text-[24px] leading-[1.45] text-left md:flex-1"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
            >
              Walnut Snowveil Residency<br />
              Sumoor Village, Nubra Valley<br />
              Leh, Ladakh – 194404<br />
              India
            </p>
            </div>

            {/* Write */}
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-start md:gap-[28px] lg:gap-[36px]">
            <h3 
              className="text-[#5c3115] text-[36px] md:text-[52px] lg:text-[58px] md:min-w-[170px] lg:min-w-[190px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", lineHeight: 1 }}
            >
              Write
            </h3>
            <span className="hidden md:inline text-[#b9b1a8] text-[36px] lg:text-[42px] leading-none">→</span>
            <p 
              className="text-[#5c3115] text-[16px] md:text-[20px] lg:text-[24px] leading-[1.45] text-left md:flex-1"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
            >
              info.walnutsnowveilres@gmail.com
            </p>
            </div>
          {/* ewjfni */}

            {/* Call */}
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-start md:gap-[28px] lg:gap-[36px]">
            <h3 
              className="text-[#5c3115] text-[36px] md:text-[52px] lg:text-[58px] md:min-w-[170px] lg:min-w-[190px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", lineHeight: 1 }}
            >
              Call
            </h3>
            <span className="hidden md:inline text-[#b9b1a8] text-[36px] lg:text-[42px] leading-none">→</span>
            <p 
              className="text-[#5c3115] text-[16px] md:text-[20px] lg:text-[24px] leading-[1.45] text-left md:flex-1"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
            >
              +91 6006672711<br />
              +91 6005643874
            </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}