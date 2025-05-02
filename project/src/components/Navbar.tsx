import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-netflix-black shadow-lg' : 'bg-gradient-to-b from-netflix-black to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-netflix-red font-bold text-3xl tracking-wider">SAHITHI</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
              <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
              <NavLink to="/projects" active={location.pathname === '/projects'}>Projects</NavLink>
              <NavLink to="/skills" active={location.pathname === '/skills'}>Skills</NavLink>
              <NavLink to="/leadership" active={location.pathname === '/leadership'}>Leadership</NavLink>
              <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-netflix-red transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-netflix-black-light border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" active={location.pathname === '/'}>Home</MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === '/about'}>About</MobileNavLink>
            <MobileNavLink to="/projects" active={location.pathname === '/projects'}>Projects</MobileNavLink>
            <MobileNavLink to="/skills" active={location.pathname === '/skills'}>Skills</MobileNavLink>
            <MobileNavLink to="/leadership" active={location.pathname === '/leadership'}>Leadership</MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === '/contact'}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className={`text-sm transition-all duration-200 ${
        active ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
        active ? 'bg-netflix-red text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;