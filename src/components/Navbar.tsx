import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Experiences', href: '/experience' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [clickedLink, setClickedLink] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLinkClick = (link: any) => {
    setHoveredLink(link.label);
    setClickedLink(link.label);
    // Let the hover animation play briefly, then navigate
    setTimeout(() => {
      setIsMenuOpen(false);
      setClickedLink(null);
      navigate(link.href);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white' : 'bg-transparent'
        }`}
        style={{ height: '100px' }}
      >
        <div className="h-full flex items-center justify-between px-4 md:px-20">
          <Link
            to="/"
            className="flex items-center"
          >
            <img 
              src={`${import.meta.env.BASE_URL}Logo_walnut.png`} 
              alt="Walnut Snowveil" 
              className="h-[90px] w-auto transition-all duration-300"
            />
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to="/reservations"
              className={`hidden md:block transition-colors duration-300 ${
                isScrolled ? 'text-[#7a4a23]' : 'text-white'
              }`}
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              RESERVATIONS
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full flex items-center justify-center bg-[#7a4a23] transition-all duration-300"
              style={{ width: '42px', height: '42px' }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="flex flex-col gap-1.5">
                <div
                  className="bg-white rounded-full transition-all duration-300 origin-center"
                  style={{ width: '20px', height: '2px', transform: isMenuOpen ? 'translateY(8px) rotate(-45deg)' : 'none' }}
                />
                <div
                  className="bg-white rounded-full transition-all duration-300"
                  style={{ width: '20px', height: '2px', opacity: isMenuOpen ? 0 : 1, transform: isMenuOpen ? 'scale(0)' : 'scale(1)' }}
                />
                <div
                  className="bg-white rounded-full transition-all duration-300 origin-center"
                  style={{ width: '20px', height: '2px', transform: isMenuOpen ? 'translateY(-8px) rotate(45deg)' : 'none' }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-500"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: isMenuOpen ? 'blur(4px)' : 'none',
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          animation: isMenuOpen ? 'glassEffectTopToBottom 0.6s ease-out forwards' : 'none',
        }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className="fixed top-0 right-0 h-full z-50 overflow-auto w-full max-w-sm md:w-[420px]"
        style={{
          backgroundColor: '#120a05',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          animation: isMenuOpen ? 'slideFromRight 0.5s ease-out 0.3s both' : 'none',
          padding: '80px 20px 80px 40px',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
      >
        {/* Close button — X made of two rotated white lines */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute rounded-full flex items-center justify-center"
          style={{ top: '20px', right: '20px', width: '40px', height: '40px', background: 'transparent' }}
          aria-label="Close menu"
        >
          <div style={{ position: 'relative', width: '20px', height: '20px' }}>
            <div style={{
              position: 'absolute', top: '50%', left: 0,
              width: '100%', height: '2px',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: '999px',
              transform: 'translateY(-50%) rotate(-45deg)',
            }} />
            <div style={{
              position: 'absolute', top: '50%', left: 0,
              width: '100%', height: '2px',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: '999px',
              transform: 'translateY(-50%) rotate(45deg)',
            }} />
          </div>
        </button>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              className="group relative inline-flex items-center gap-3"
              style={{
                textDecoration: 'none',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(24px)',
                transition: `opacity 0.4s ease ${0.15 + i * 0.06}s, transform 0.4s ease ${0.15 + i * 0.06}s`,
                pointerEvents: isMenuOpen ? 'auto' : 'none',
              }}
              onClick={() => {
                handleLinkClick(link);
              }}
              onPointerEnter={() => setHoveredLink(link.label)}
              onPointerLeave={() => setHoveredLink(null)}
              onTouchStart={() => {
                setHoveredLink(link.label);
                handleLinkClick(link);
              }}
            >
              {/* Left Line that appears on hover/click */}
              <div
                style={{
                  height: '3px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  width: hoveredLink === link.label || clickedLink === link.label ? '24px' : 0,
                  transition: 'width 0.3s ease',
                  flexShrink: 0,
                }}
              />
              {/* Text */}
              <span
                style={{
                  fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(32px, 8vw, 48px)',
                  color: 'rgb(255, 255, 255)',
                  lineHeight: '1.1',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                  transform: hoveredLink === link.label || clickedLink === link.label ? 'translateX(8px)' : 'translateX(0)',
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
