import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import logoImg from 'figma:asset/e09cf434f4642b4eefbedaec44ef7fab7fd81999.png';

function TaxClaimLogo() {
  return (
    <div className="flex flex-col leading-none">
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        <span style={{ color: '#0f172a' }}>TAX</span><span style={{ color: '#0d9488' }}>CLAIM</span>
      </span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '0.6rem', letterSpacing: '0.08em', color: '#64748b', textTransform: 'uppercase' }}>
        CPA &amp; Business Advisory
      </span>
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/resources' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top bar with contact info */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:cpa@taxclaim.co" className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">cpa@taxclaim.co</span>
              </a>
              <a href="tel:+14153047262" className="flex items-center gap-2 hover:text-teal-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+1 (415) 304-7262</span>
              </a>
            </div>
            <a
              href="https://wa.me/14153047262"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="hidden sm:inline">WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo — behaves identically to the Home nav link */}
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="TaxClaim – CPA & Business Advisory" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? 'text-slate-900'
                    : 'text-gray-600 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-teal-600 hover:bg-teal-700">
                Get Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-slate-900 bg-gray-50'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}