export default function QuoteSection() {
  return (
    <section className="relative w-full h-[120vh] md:h-[130vh] min-h-[800px] flex items-end justify-end p-[40px] md:p-[80px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      
      {/* Dark Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Thin inner border overlay */}
      <div className="absolute inset-[20px] md:inset-[40px] border border-white/20 pointer-events-none"></div>

      {/* Quote Content */}
      <div className="relative z-10 max-w-[600px] text-white text-right md:text-left pr-[20px] md:pr-[40px] pb-[20px] md:pb-[40px]">
        <p 
          className="text-[24px] md:text-[36px] leading-[1.3] font-normal tracking-wide"
          style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
        >
          <span className="mr-3">“</span>
          Escape to breathtaking scenery, wildlife, and serenity to reconnect with what matters.
        </p>
      </div>
    </section>
  );
}