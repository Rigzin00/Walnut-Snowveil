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
    { label: 'RESERVATIONS', href: '/reservations' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <footer className="bg-[#2b1207]" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="text-center">
        <h2 className="font-serif text-white mb-8" style={{ fontSize: '56px', letterSpacing: '0.02em' }}>
          Stay in the know
        </h2>

        <p className="text-white mb-16" style={{ fontSize: '16px', opacity: 0.85, letterSpacing: '0.01em' }}>
          Be the first to know about new hotels we've uncovered
        </p>

        <div className="flex justify-center mb-16">
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="rounded bg-white text-gray-800 placeholder-gray-600 focus:outline-none"
              style={{
                width: '480px',
                height: '48px',
                paddingLeft: '16px',
                paddingRight: '60px',
                fontSize: '14px'
              }}
            />
            <button
              className="absolute rounded-full bg-[#7a4a23] hover:bg-[#6B3F1A] transition-colors flex items-center justify-center"
              style={{
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '32px',
                height: '32px',
                padding: '0 16px'
              }}
            >
              <ArrowRight className="text-white" style={{ width: '16px', height: '16px' }} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <nav className="flex items-center justify-center flex-wrap" style={{ gap: '24px' }}>
          {navItems.map((item, index) => (
            <div key={item.label} className="flex items-center" style={{ gap: '24px' }}>
              <NavLink label={item.label} href={item.href} />
              {index < navItems.length - 1 && (
                <span className="text-white" style={{ opacity: 0.6 }}>|</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
