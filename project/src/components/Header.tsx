import React, { useState } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface HeaderProps {
  onAppointmentClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAppointmentClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-green-600 text-white p-2 rounded-lg mr-3">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                EKB
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Enerji Kimlik Belgesi</h1>
              <p className="text-sm text-gray-600">Uzman Danışmanlık</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              EKB Hakkında
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Başvuru Süreci
            </button>
            <button 
              onClick={() => scrollToSection('documents')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Gerekli Belgeler
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Fiyatlar
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              İletişim
            </button>
            <button 
              onClick={onAppointmentClick}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
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
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Ana Sayfa
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                EKB Hakkında
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Başvuru Süreci
              </button>
              <button 
                onClick={() => scrollToSection('documents')}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Gerekli Belgeler
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Fiyatlar
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                İletişim
              </button>
              <button 
                onClick={onAppointmentClick}
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