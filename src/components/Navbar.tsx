import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Experiences', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Reservation', href: '/reservation' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        style={{ height: '80px' }}
      >
        <div className="h-full flex items-center justify-between px-4 md:px-20">
          <Link
            to="/"
            className={`font-serif transition-colors duration-300 ${
              isScrolled ? 'text-[#7a4a23]' : 'text-white'
            }`}
            style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.05em' }}
          >
            Oasila
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              className={`hidden md:block transition-colors duration-300 ${
                isScrolled ? 'text-[#7a4a23]' : 'text-white'
              }`}
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              RESERVATIONS
            </button>

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
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className="fixed top-0 right-0 h-full z-50 overflow-auto w-full max-w-sm md:w-[420px]"
        style={{
          backgroundColor: '#120a05',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          padding: '80px 20px 80px 40px',
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
              className="group relative inline-block"
              style={{
                textDecoration: 'none',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(24px)',
                transition: `opacity 0.4s ease ${0.15 + i * 0.06}s, transform 0.4s ease ${0.15 + i * 0.06}s`,
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Overline that appears on hover */}
              <div
                className="transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  height: '1px',
                  backgroundColor: 'rgb(255, 255, 255)',
                  width: '100%',
                  opacity: 0,
                  position: 'absolute',
                  top: '-4px',
                  left: 0
                }}
              />
              {/* Text */}
              <span
                style={{
                  fontFamily: "Jomolhari, 'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(32px, 8vw, 48px)',
                  color: 'rgb(255, 255, 255)',
                  lineHeight: '1.1',
                  display: 'block'
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
