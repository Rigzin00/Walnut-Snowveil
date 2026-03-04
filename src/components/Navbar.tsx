import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="h-full flex items-center justify-between" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
        <div
          className={`font-serif transition-colors duration-300 ${
            isScrolled ? 'text-[#7a4a23]' : 'text-white'
          }`}
          style={{ fontFamily: 'Georgia, serif', fontSize: '42px', fontStyle: 'italic', fontWeight: 400, letterSpacing: '0.05em' }}
        >
          Dasila
        </div>

        <div className="flex items-center" style={{ gap: '24px' }}>
          <button
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-[#7a4a23]' : 'text-white'
            }`}
            style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}
          >
            RESERVATIONS
          </button>

          <button
            className={`rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-[#7a4a23]' : 'bg-[#7a4a23]'
            }`}
            style={{ width: '42px', height: '42px' }}
          >
            <div className="flex flex-col gap-1.5">
              <div className="w-5 h-0.5 bg-white rounded-full"></div>
              <div className="w-5 h-0.5 bg-white rounded-full"></div>
              <div className="w-5 h-0.5 bg-white rounded-full"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
