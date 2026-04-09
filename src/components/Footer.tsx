import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink = ({ label, href }: NavLinkProps) => {
  return (
    <Link
      to={href}
      className="nav-link-wrapper"
    >
      <div className="nav-link-text">{label}</div>
      <div className="nav-link-text">{label}</div>
    </Link>
  );
};

const Footer = () => {
  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'ROOMS', href: '/rooms' },
    { label: 'EXPERIENCES', href: '/experience' },
    { label: 'BLOG', href: '/blog' },
    { label: 'RESERVATION', href: '/reservations' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <footer className="bg-[#2b1207] px-5 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-[120px] pb-6 sm:pb-10 md:pb-[100px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-left md:text-center">
          <h2
            className="font-serif text-white mb-5 sm:mb-7 md:mb-8 text-[46px] sm:text-[50px] md:text-[56px] leading-[1.05]"
            style={{ letterSpacing: '0.02em' }}
          >
            Stay in the know
          </h2>

          <p
            className="text-white mb-8 sm:mb-10 md:mb-16 max-w-[290px] md:max-w-[620px] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6]"
            style={{ opacity: 0.85, letterSpacing: '0.01em' }}
          >
            Be the first to know about new hotels we've uncovered
          </p>

          <div className="flex justify-start md:justify-center mb-10 sm:mb-12 md:mb-16">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[480px]">
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-12 rounded bg-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#b98a64]/40 pl-4 pr-14 text-sm"
              />
              <button
                className="absolute rounded-full bg-[#7a4a23] hover:bg-[#6B3F1A] transition-colors flex items-center justify-center"
                style={{ right: '8px', top: '50%', transform: 'translateY(-50%)' }}
                aria-label="Subscribe"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                  <ArrowRight className="text-white w-4 h-4" strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <nav className="flex flex-col items-start gap-4 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-4 md:gap-y-3 md:text-center mt-8 md:mt-0">
          {navItems.map((item, index) => (
            <div key={item.label} className="flex items-center gap-4 md:gap-6">
              <NavLink label={item.label} href={item.href} />
              {index < navItems.length - 1 && (
                <span className="hidden md:inline text-white/60">|</span>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 sm:mt-10 md:mt-14 border-t border-white/10 pt-8 text-center">
          <p className="text-white/80 text-[14px] md:text-[15px] font-medium" style={{ letterSpacing: '0.01em' }}>
            Copyright © 2025 WalnutSnowveil. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
