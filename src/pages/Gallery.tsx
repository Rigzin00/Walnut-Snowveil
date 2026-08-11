import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ConnectSection from "../components/ConnectSection";

// ─── Gallery photo data ───────────────────────────────────────────────────────
const galleryPhotos = [
  { src: "/gallery/gall4.webp", alt: "Nubra Valley Landscape", caption: "Rooms" },
  { src: "/gallery/gall5.webp", alt: "Scenic Mountain Vista", caption: "Mountain Serenity" },
  { src: "/gallery/gall6.jpeg", alt: "Camel Safari at Sand Dunes", caption: "Sand Dune Safari" },
  { src: "/gallery/gall7.jpeg", alt: "Himalayan Landscape", caption: "Himalayan Horizons" },
  { src: "/gallery/gall8.jpeg", alt: "Samstanling Monastery", caption: "Monastery Visits" },
  { src: "/gallery/gall1.webp", alt: "Sumoor Village View", caption: "Sumoor Village" },
  { src: "/gallery/gall5.webp", alt: "Local Ladakhi Fruits", caption: "Ladakhi Culture" },
  { src: "/gallery/gall1.webp", alt: "Nubra Valley Trek", caption: "Valley Treks" },
  { src: "/gallery/gall5.webp", alt: "Scenic Ladakh", caption: "Scenic Ladakh" },
  { src: "/gallery/gall3.webp", alt: "Village Walk", caption: "Village Life" },
  { src: "/gallery/gall4.webp", alt: "Walnut Snowveil Residency", caption: "Our Residency" },
  { src: "/gallery/gall5.webp", alt: "Mountain View", caption: "Mountain Views" },
  { src: "/gallery/gall6.jpeg ", alt: "Nubra Valley Scenery", caption: "Valley Scenery" },
  { src: "/gallery/gall7.jpeg", alt: "Nature in Nubra", caption: "Nature & Peace" },
  { src: "/gallery/gall8.jpeg", alt: "Ladakh Travel", caption: "Ladakh Travels" },
  { src: "/gallery/gall3.webp", alt: "Residency Interior", caption: "Our Interiors" },
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
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"
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
  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "rgba(18, 10, 5, 0.96)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Inner content — stop propagation so clicking image doesn't close */}
      <div
        className="relative flex flex-col items-center max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center gap-2"
          aria-label="Close lightbox"
        >
          <span style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}>Close</span>
          <span className="text-lg leading-none">✕</span>
        </button>

        {/* Image */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-[85vw] max-h-[75vh] object-contain rounded-sm shadow-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        />

        {/* Caption */}
        <p
          className="mt-4 text-white/70 text-sm tracking-widest uppercase"
          style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
        >
          {photo.caption}
        </p>

        {/* Counter */}
        <p
          className="mt-1 text-white/40 text-xs tracking-widest"
          style={{ fontFamily: "Anek Bangla, sans-serif" }}
        >
          {index + 1} / {photos.length}
        </p>
      </div>

      {/* Prev Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-all duration-300"
        aria-label="Previous photo"
        style={{ backgroundColor: "rgba(90, 49, 21, 0.4)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-all duration-300"
        aria-label="Next photo"
        style={{ backgroundColor: "rgba(90, 49, 21, 0.4)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

// ─── Gallery Card ─────────────────────────────────────────────────────────────
const GalleryCard = ({
  photo,
  index,
  onClick,
}: {
  photo: (typeof galleryPhotos)[0];
  index: number;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeInView delay={index * 60} className="break-inside-avoid mb-4 md:mb-5">
      <div
        className="relative overflow-hidden cursor-pointer group rounded-sm"
        style={{ border: "1px solid rgba(92, 49, 21, 0.12)" }}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-auto block"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
          loading="lazy"
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-end p-4"
          style={{
            background: hovered
              ? "linear-gradient(to top, rgba(43,18,7,0.75) 0%, rgba(43,18,7,0.2) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(43,18,7,0.3) 0%, transparent 60%)",
            transition: "background 500ms ease",
          }}
        >
          <span
            className="text-white text-xs tracking-widest uppercase"
            style={{
              fontFamily: "Anek Bangla, sans-serif",
              fontWeight: 400,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 400ms ease, transform 400ms ease",
            }}
          >
            {photo.caption}
          </span>
        </div>

        {/* Thin border overlay on hover */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 400ms ease",
          }}
        />
      </div>
    </FadeInView>
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
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length)),
    []
  );
  const nextPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryPhotos.length)),
    []
  );

  return (
    <main className="w-full bg-[#f8f5f0] min-h-screen">
      <Helmet>
        <title>Tourist Gallery | Walnut Snowveil Residency, Nubra Valley Ladakh</title>
        <meta
          name="description"
          content="Browse photos shared by guests at Walnut Snowveil Residency — scenic views of Nubra Valley, sand dunes, monasteries, and the beauty of Sumoor, Ladakh."
        />
        <meta
          name="keywords"
          content="Walnut Snowveil gallery, Nubra Valley photos, tourist photos Ladakh, Sumoor village photos, Nubra Valley scenery, Ladakh travel photos"
        />
        <link rel="canonical" href="https://walnutsnowveil.in/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tourist Gallery | Walnut Snowveil Residency" />
        <meta
          property="og:description"
          content="Guest photos from Walnut Snowveil Residency — Nubra Valley sand dunes, monasteries, mountain scenery and Sumoor village life."
        />
        <meta property="og:url" content="https://walnutsnowveil.in/gallery" />
        <meta property="og:image" content="https://walnutsnowveil.in/Logo_walnut.png" />
        <meta property="og:site_name" content="Walnut Snowveil Residency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tourist Gallery | Walnut Snowveil Residency" />
        <meta name="twitter:description" content="Real guest photos from Walnut Snowveil Residency, Nubra Valley Ladakh." />
        <meta name="twitter:image" content="https://walnutsnowveil.in/Logo_walnut.png" />
      </Helmet>

      {/* ── Hero Section ──────────────────────────────────────────────────── */}
      <div className="relative w-full h-[60vh] min-h-[790px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Parallax background */}
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Thin inner border */}
        <div className="absolute inset-[20px] md:inset-[40px] border border-white/20 pointer-events-none z-10" />

        {/* Animated heading */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-5">
          {/* Line 1 — left slide */}
          <div
            className="flex items-center w-full max-w-[1200px] gap-4 mb-2"
            style={{
              transform: isHeroVisible ? "translateX(0)" : "translateX(-150px)",
              opacity: isHeroVisible ? 1 : 0,
              transition:
                "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div className="flex-1 h-[1px] bg-white opacity-60" />
            <h1
              className="text-white text-[30px] sm:text-[42px] md:text-[64px] lg:text-[90px] leading-tight text-center px-2 sm:px-4 whitespace-nowrap"
              style={{
                fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Tourist
            </h1>
            <div className="flex-1 h-[1px] bg-transparent" />
          </div>

          {/* Line 2 — right slide */}
          <div
            className="flex items-center w-full max-w-[1200px] gap-4"
            style={{
              transform: isHeroVisible ? "translateX(0)" : "translateX(150px)",
              opacity: isHeroVisible ? 1 : 0,
              transition:
                "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
            }}
          >
            <div className="flex-1 h-[1px] bg-transparent" />
            <h1
              className="text-white text-[30px] sm:text-[42px] md:text-[64px] lg:text-[90px] leading-tight text-center px-2 sm:px-4 whitespace-nowrap"
              style={{
                fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Gallery
            </h1>
            <div className="flex-1 h-[1px] bg-white opacity-60" />
          </div>
        </div>
      </div>

      {/* ── Intro Section ─────────────────────────────────────────────────── */}
      <div className="w-full bg-[#f8f5f0] py-[80px] md:py-[130px] px-6 md:px-12 lg:px-24">
        <div className="max-w-[1100px] mx-auto">
          <FadeInView>
            <h2
              className="text-[#5c3115] text-[36px] md:text-[54px] lg:text-[68px] leading-[1.1] mb-8 md:mb-10 max-w-[820px]"
              style={{
                fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
              }}
            >
              Moments from Our Guests
            </h2>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
            <FadeInView delay={120}>
              <p
                className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] md:leading-[2.2] opacity-80"
                style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
              >
                Every guest who stays at Walnut Snowveil Residency carries home a piece of Nubra Valley's magic.
                From the golden sand dunes of Sumoor to the ancient halls of Samstanling Monastery, the region's
                beauty reveals itself in quiet, unforgettable moments. This gallery is a celebration of those
                moments — shared by travelers who were moved enough to capture them.
              </p>
            </FadeInView>

            <FadeInView delay={220}>
              <p
                className="text-[#5c3115] text-[14px] md:text-[16px] leading-[2] md:leading-[2.2] opacity-80"
                style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
              >
                Whether you spent your mornings watching sunlight sweep across the valley mountains, joined a camel
                safari across the dunes at dusk, or simply sat on our terrace breathing the crisp Ladakhi air —
                we hope your photos here inspire the next adventurer to make the journey to Nubra Valley.
              </p>
            </FadeInView>
          </div>

          {/* Decorative divider */}
          <FadeInView delay={300}>
            <div className="mt-16 md:mt-20 flex items-center gap-6">
              <div className="flex-1 h-[1px] bg-[#5c3115]/20" />
              <span
                className="text-[#5c3115]/40 text-xs uppercase tracking-[0.25em]"
                style={{ fontFamily: "Anek Bangla, sans-serif" }}
              >
                {galleryPhotos.length} photos
              </span>
              <div className="flex-1 h-[1px] bg-[#5c3115]/20" />
            </div>
          </FadeInView>
        </div>
      </div>

      {/* ── Gallery Grid ──────────────────────────────────────────────────── */}
      <div className="w-full bg-[#f8f5f0] pb-[80px] md:pb-[130px] px-4 md:px-8 lg:px-16">
        <div
          className="max-w-[1400px] mx-auto"
          style={{
            columns: "2",
            columnGap: "12px",
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .gallery-masonry { columns: 3 !important; column-gap: 16px !important; }
            }
            @media (min-width: 1024px) {
              .gallery-masonry { columns: 4 !important; column-gap: 20px !important; }
            }
          `}</style>

          <div
            className="gallery-masonry"
            style={{ columns: "2", columnGap: "12px" }}
          >
            {galleryPhotos.map((photo, index) => (
              <GalleryCard
                key={photo.src}
                photo={photo}
                index={index}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Share Your Moment CTA ─────────────────────────────────────────── */}
      <div
        className="w-full px-6 md:px-12 lg:px-24 py-[80px] md:py-[110px]"
        style={{ backgroundColor: "#5c3115" }}
      >
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20">
          <div className="flex-1">
            <FadeInView>
              <h2
                className="text-white text-[36px] md:text-[54px] lg:text-[64px] leading-[1.1] mb-5"
                style={{
                  fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
                }}
              >
                Share Your Moment
              </h2>
            </FadeInView>
            <FadeInView delay={120}>
              <p
                className="text-white/75 text-[14px] md:text-[16px] leading-[2] max-w-[540px]"
                style={{ fontFamily: "Anek Bangla, sans-serif", fontWeight: 300 }}
              >
                Did you capture something beautiful during your stay? We'd love to feature your photos in our
                gallery. Send us your pictures via WhatsApp or email and become part of the Walnut Snowveil story.
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
              {/* WhatsApp icon */}
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
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

      {/* ── Connect Section ───────────────────────────────────────────────── */}
      <ConnectSection />
    </main>
  );
}
