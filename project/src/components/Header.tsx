import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onAppointmentClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAppointmentClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
            src="/logo_real.png"
            alt="A Akademi Enerji Logo"
            className={`mr-3 transition-all duration-300 ${
              isScrolled ? 'w-24 h-12' : 'w-45 h-16'
            }`}
          />

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-8 transition-all duration-300`}>
            <Link
              to="/"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                isScrolled ? 'text-sm' : 'text-lg'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/services"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                isScrolled ? 'text-sm' : 'text-lg'
              }`}
            >
              Hizmetlerimiz
            </Link>
            <Link
              to="/thermal-camera"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                isScrolled ? 'text-sm' : 'text-lg'
              }`}
            >
              Termal Kamera
            </Link>
            <Link
              to="/references"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                isScrolled ? 'text-sm' : 'text-lg'
              }`}
            >
              Referanslarımız
            </Link>
            <Link
              to="/service-regions"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                isScrolled ? 'text-sm' : 'text-lg'
              }`}
            >
              Hizmet Bölgelerimiz
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                isScrolled ? 'text-sm' : 'text-lg'
              }`}
            >
              İletişim
            </Link>
            <button
              onClick={onAppointmentClick}
              className={`bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 ${
                isScrolled ? 'text-sm px-3 py-1' : 'text-base px-6 py-2'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Randevu Al</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Ana Sayfa
              </Link>
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Hizmetlerimiz
              </Link>
              <Link
                to="/thermal-camera"
                onClick={closeMobileMenu}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Termal Kamera
              </Link>
              <Link
                to="/references"
                onClick={closeMobileMenu}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Referanslarımız
              </Link>
              <Link
                to="/service-regions"
                onClick={closeMobileMenu}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Hizmet Bölgelerimiz
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                İletişim
              </Link>
              <button
                onClick={() => {
                  onAppointmentClick();
                  closeMobileMenu();
                }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 w-full justify-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Randevu Al</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
