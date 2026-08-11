import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ConnectSection from "../components/ConnectSection";

// ─── Gallery photo data — 8 unique images, no duplicates ────────────────────
const galleryPhotos = [
  { src: "/gallery/gall1.webp", alt: "Enjoying coffee with a mountain view", caption: "Morning Coffee Views", tag: "Relaxation" },
  { src: "/gallery/gall2.png", alt: "Bedroom window opening to Himalayan landscape", caption: "Scenic Room Views", tag: "Rooms" },
  { src: "/gallery/gall3.webp", alt: "Motorcycle parked against scenic mountain backdrop", caption: "Nubra Adventures", tag: "Experience" },
  { src: "/gallery/gall4.webp", alt: "Traditional Ladakhi style spacious bedroom", caption: "Comfortable Stays", tag: "Rooms" },
  { src: "/gallery/gall5.webp", alt: "View from Walnut Snowveil Residency balcony", caption: "Residency Views", tag: "Views" },
  { src: "/gallery/gall6.jpeg", alt: "Family posing outside Walnut Snowveil Residency", caption: "Happy Guests", tag: "Guests" },
  { src: "/gallery/gall7.jpeg", alt: "Guests enjoying dinner together at the residency", caption: "Shared Meals", tag: "Dining" },
  { src: "/gallery/gall8.jpeg", alt: "Friends posing outside the residency", caption: "Making Memories", tag: "Guests" },
];

// ─── Scroll-in animation wrapper ─────────────────────────────────────────────
const FadeInView = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: typeof galleryPhotos;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "rgba(12, 7, 3, 0.97)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center max-w-[92vw] max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2"
          aria-label="Close lightbox"
        >
          <span className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>Close</span>
          <span className="text-base leading-none">✕</span>
        </button>

        {/* Tag pill */}
        <span
          className="absolute -top-12 left-0 text-xs uppercase tracking-[0.2em] text-[#c49a6c]"
          style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 400 }}
        >
          {photo.tag}
        </span>

        {/* Image */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-[88vw] max-h-[72vh] object-contain shadow-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        />

        {/* Caption bar */}
        <div className="mt-5 flex items-center gap-8">
          <span
            className="text-white/80 text-sm tracking-widest uppercase"
            style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
          >
            {photo.caption}
          </span>
          <span className="text-white/25 text-xs" style={{ fontFamily: "Anek Bangla, sans-serif" }}>
            {index + 1} / {photos.length}
          </span>
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/50 transition-all duration-300"
        style={{ backgroundColor: "rgba(92, 49, 21, 0.35)" }}
        aria-label="Previous"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/50 transition-all duration-300"
        style={{ backgroundColor: "rgba(92, 49, 21, 0.35)" }}
        aria-label="Next"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

// ─── Single photo tile ────────────────────────────────────────────────────────
const PhotoTile = ({
  photo,
  index,
  onClick,
  className = "",
}: {
  photo: (typeof galleryPhotos)[0];
  index: number;
  onClick: () => void;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
        loading="lazy"
      />

      {/* Warm tone overlay — always faint, rich on hover */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? "linear-gradient(160deg, rgba(92,49,21,0.15) 0%, rgba(43,18,7,0.72) 100%)"
            : "linear-gradient(160deg, transparent 30%, rgba(43,18,7,0.38) 100%)",
          transition: "background 600ms ease",
        }}
      />

      {/* Tag pill top-left */}
      <span
        className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] text-white/70 border border-white/25 px-3 py-1 rounded-full backdrop-blur-sm"
        style={{
          fontFamily: "Anek Bangla, sans-serif",
          fontWeight: 400,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(-6px)",
          transition: "opacity 400ms ease 100ms, transform 400ms ease 100ms",
          backgroundColor: "rgba(43,18,7,0.3)",
        }}
      >
        {photo.tag}
      </span>

      {/* Caption bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 450ms ease, transform 450ms ease",
        }}
      >
        <span
          className="text-white text-sm tracking-widest uppercase"
          style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 400 }}
        >
          {photo.caption}
        </span>
        {/* View icon */}
        <span className="w-8 h-8 rounded-full bg-white/15 border border-white/25 flex items-center justify-center backdrop-blur-sm flex-shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </span>
      </div>

      {/* Subtle inset border on hover */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: hovered ? "inset 0 0 0 1px rgba(255,255,255,0.18)" : "inset 0 0 0 1px rgba(255,255,255,0)",
          transition: "box-shadow 500ms ease",
        }}
      />

      {/* Index number watermark */}
      <span
        className="absolute top-4 right-4 text-white/20 text-xs"
        style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300, letterSpacing: "0.1em" }}
      >
        0{index + 1}
      </span>
    </div>
  );
};

// ─── Main Gallery Page ────────────────────────────────────────────────────────
export default function Gallery() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length)), []);
  const nextPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryPhotos.length)), []);

  return (
    <main className="w-full bg-[#f8f5f0] min-h-screen">
      <Helmet>
        <title>Tourist Gallery | Walnut Snowveil Residency, Nubra Valley Ladakh</title>
        <meta name="description" content="Browse photos shared by guests at Walnut Snowveil Residency — scenic views of Nubra Valley, sand dunes, monasteries, and the beauty of Sumoor, Ladakh." />
        <meta name="keywords" content="Walnut Snowveil gallery, Nubra Valley photos, tourist photos Ladakh, Sumoor village photos, Nubra Valley scenery, Ladakh travel photos" />
        <link rel="canonical" href="https://walnutsnowveil.in/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tourist Gallery | Walnut Snowveil Residency" />
        <meta property="og:description" content="Guest photos from Walnut Snowveil Residency — Nubra Valley sand dunes, monasteries, mountain scenery and Sumoor village life." />
        <meta property="og:url" content="https://walnutsnowveil.in/gallery" />
        <meta property="og:image" content="https://walnutsnowveil.in/Logo_walnut.png" />
        <meta property="og:site_name" content="Walnut Snowveil Residency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tourist Gallery | Walnut Snowveil Residency" />
        <meta name="twitter:description" content="Real guest photos from Walnut Snowveil Residency, Nubra Valley Ladakh." />
        <meta name="twitter:image" content="https://walnutsnowveil.in/Logo_walnut.png" />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[60vh] min-h-[790px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        >
          <img
            src="/gallery/gall2.png"
            alt="Nubra Valley — Walnut Snowveil Gallery"
            className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out ${isHeroVisible ? "scale-100 opacity-80" : "scale-110 opacity-0"
              }`}
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-[20px] md:inset-[40px] border border-white/20 pointer-events-none z-10" />

        {/* Heading */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-5">
          <div
            className="flex items-center w-full max-w-[1200px] gap-4 mb-2"
            style={{
              transform: isHeroVisible ? "translateX(0)" : "translateX(-150px)",
              opacity: isHeroVisible ? 1 : 0,
              transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div className="flex-1 h-[1px] bg-white opacity-60" />
            <h1
              className="text-white text-[30px] sm:text-[42px] md:text-[64px] lg:text-[90px] leading-tight text-center px-2 sm:px-4 whitespace-nowrap"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              Tourist
            </h1>
            <div className="flex-1 h-[1px] bg-transparent" />
          </div>
          <div
            className="flex items-center w-full max-w-[1200px] gap-4"
            style={{
              transform: isHeroVisible ? "translateX(0)" : "translateX(150px)",
              opacity: isHeroVisible ? 1 : 0,
              transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
            }}
          >
            <div className="flex-1 h-[1px] bg-transparent" />
            <h1
              className="text-white text-[30px] sm:text-[42px] md:text-[64px] lg:text-[90px] leading-tight text-center px-2 sm:px-4 whitespace-nowrap"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif", fontWeight: 400 }}
            >
              Gallery
            </h1>
            <div className="flex-1 h-[1px] bg-white opacity-60" />
          </div>
        </div>
      </div>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#f8f5f0] py-[80px] md:py-[120px] px-6 md:px-12 lg:px-24">
        <div className="max-w-[1100px] mx-auto">
          <FadeInView>
            <h2
              className="text-[#5c3115] text-[34px] md:text-[52px] lg:text-[65px] leading-[1.1] mb-8 max-w-[780px]"
              style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
            >
              Moments from Our Guests
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            <FadeInView delay={100}>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] md:leading-[2.2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Every guest who stays at Walnut Snowveil Residency carries home a piece of Nubra Valley's magic. From the golden sand dunes of Sumoor to the ancient halls of Samstanling Monastery, the region's beauty reveals itself in quiet, unforgettable moments. This gallery is a celebration of those moments — shared by travelers who were moved enough to capture them.
              </p>
            </FadeInView>
            <FadeInView delay={200}>
              <p className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] md:leading-[2.2] opacity-80" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Whether you spent your mornings watching sunlight sweep across the valley mountains, joined a camel safari across the dunes at dusk, or simply sat on our terrace breathing the crisp Ladakhi air — we hope your photos here inspire the next adventurer to make the journey to Nubra Valley.
              </p>
            </FadeInView>
          </div>
          <FadeInView delay={280}>
            <div className="mt-14 flex items-center gap-5">
              <div className="flex-1 h-[1px] bg-[#5c3115]/20" />
              <span className="text-[#5c3115]/40 text-xs uppercase tracking-[0.25em]" style={{ fontFamily: "Anek Bangla, sans-serif" }}>
                {galleryPhotos.length} photos
              </span>
              <div className="flex-1 h-[1px] bg-[#5c3115]/20" />
            </div>
          </FadeInView>
        </div>
      </div>

      {/* ── Editorial Bento Grid ──────────────────────────────────────────── */}
      <div className="w-full bg-[#f8f5f0] pb-[80px] md:pb-[130px] px-4 md:px-8 lg:px-16">
        <div className="max-w-[1360px] mx-auto">

          {/* ── Row 1: Big feature left (tall 2-row) + 2 stacked right ── */}
          <FadeInView className="mb-3 md:mb-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridTemplateRows: "auto" }}>
              {/* BIG — spans 2 rows on desktop */}
              <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-2 h-[260px] sm:h-[320px] md:h-full md:min-h-[560px]">
                <PhotoTile photo={galleryPhotos[0]} index={0} onClick={() => openLightbox(0)} className="h-full" />
              </div>
              {/* Top-right */}
              <div className="h-[220px] sm:h-[260px] md:h-[272px]">
                <PhotoTile photo={galleryPhotos[1]} index={1} onClick={() => openLightbox(1)} className="h-full" />
              </div>
              {/* Bottom-right */}
              <div className="h-[220px] sm:h-[260px] md:h-[272px]">
                <PhotoTile photo={galleryPhotos[2]} index={2} onClick={() => openLightbox(2)} className="h-full" />
              </div>
              {/* Middle-right (only visible as part of row on md) */}
              <div className="hidden md:block h-[272px]">
                <PhotoTile photo={galleryPhotos[3]} index={3} onClick={() => openLightbox(3)} className="h-full" />
              </div>
              {/* Last of right column */}
              <div className="hidden md:block h-[272px]">
                <PhotoTile photo={galleryPhotos[4]} index={4} onClick={() => openLightbox(4)} className="h-full" />
              </div>
            </div>
          </FadeInView>

          {/* Row 1 mobile — show gall4 & gall5 on mobile only */}
          <FadeInView className="mb-3 md:hidden">
            <div className="grid grid-cols-2 gap-3">
              <div className="h-[200px] sm:h-[240px]">
                <PhotoTile photo={galleryPhotos[3]} index={3} onClick={() => openLightbox(3)} className="h-full" />
              </div>
              <div className="h-[200px] sm:h-[240px]">
                <PhotoTile photo={galleryPhotos[4]} index={4} onClick={() => openLightbox(4)} className="h-full" />
              </div>
            </div>
          </FadeInView>

          {/* ── Row 2: Wide panorama + portrait ── */}
          <FadeInView delay={80} className="mb-3 md:mb-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {/* Wide panorama — spans 2 cols on desktop */}
              <div className="col-span-2 h-[220px] sm:h-[280px] md:h-[380px]">
                <PhotoTile photo={galleryPhotos[5]} index={5} onClick={() => openLightbox(5)} className="h-full" />
              </div>
              {/* Portrait — right side */}
              <div className="hidden md:block h-[380px]">
                <PhotoTile photo={galleryPhotos[6]} index={6} onClick={() => openLightbox(6)} className="h-full" />
              </div>
            </div>
          </FadeInView>

          {/* ── Row 3: equal-width trio ── */}
          <FadeInView delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="h-[240px] sm:h-[280px] md:h-[340px]">
                <PhotoTile photo={galleryPhotos[6]} index={6} onClick={() => openLightbox(6)} className="h-full md:hidden" />
                <PhotoTile photo={galleryPhotos[7]} index={7} onClick={() => openLightbox(7)} className="h-full hidden md:block" />
              </div>
              <div className="h-[240px] sm:h-[280px] md:h-[340px]">
                <PhotoTile photo={galleryPhotos[7]} index={7} onClick={() => openLightbox(7)} className="h-full md:hidden" />
                <PhotoTile photo={galleryPhotos[0]} index={0} onClick={() => openLightbox(0)} className="h-full hidden md:block" />
              </div>
              <div className="h-[240px] sm:h-[280px] md:h-[340px] hidden sm:block">
                <PhotoTile photo={galleryPhotos[2]} index={2} onClick={() => openLightbox(2)} className="h-full md:hidden" />
                <PhotoTile photo={galleryPhotos[5]} index={5} onClick={() => openLightbox(5)} className="h-full hidden md:block" />
              </div>
            </div>
          </FadeInView>

        </div>
      </div>

      {/* ── Share Your Moment CTA ─────────────────────────────────────────── */}
      <div className="w-full px-6 md:px-12 lg:px-24 py-[80px] md:py-[110px]" style={{ backgroundColor: "#5c3115" }}>
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20">
          <div className="flex-1">
            <FadeInView>
              <h2
                className="text-white text-[36px] md:text-[52px] lg:text-[62px] leading-[1.1] mb-5"
                style={{ fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif" }}
              >
                Share Your Moment
              </h2>
            </FadeInView>
            <FadeInView delay={120}>
              <p className="text-white/75 text-[14px] md:text-[16px] leading-[2] max-w-[520px]" style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>
                Did you capture something beautiful during your stay? We'd love to feature your photos in our gallery. Send us your pictures via WhatsApp or email and become part of the Walnut Snowveil story.
              </p>
            </FadeInView>
          </div>
          <FadeInView delay={200} className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/916006672711"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-white border border-white/30 hover:bg-white hover:text-[#5c3115] transition-all duration-500 text-sm tracking-widest uppercase"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 500 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-[#5c3115] bg-white hover:bg-[#f8f5f0] transition-all duration-500 text-sm tracking-widest uppercase"
              style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 500 }}
            >
              Get in Touch
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </FadeInView>
        </div>
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={galleryPhotos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}

      <ConnectSection />
    </main>
  );
}
