import React from 'react';
import { Calendar, CheckCircle, Clock, Award } from 'lucide-react';

interface HeroProps {
  onAppointmentClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAppointmentClick }) => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('section:nth-of-type(2)');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="mt-5 text-4xl lg:text-6xl font-bold text-gray-900 leading-tight pt-10">
                <span className="text-green-600">Enerji Kimlik Belgesi</span>
                <br />
                <span className="text-2xl lg:text-4xl">Hızlı ve Güvenilir</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Emlak alım-satım ve kira işlemleriniz için zorunlu olan Enerji Kimlik Belgesi'ni 
                uzman ekibimizle hızlı ve güvenilir şekilde alın.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Yasal Zorunluluk</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">24 Saat İçinde</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Uzman Ekip</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Uygun Fiyat</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onAppointmentClick}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <Calendar className="w-5 h-5" />
                <span>Hemen Randevu Al</span>
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-colors text-lg font-semibold"
              >
                Detaylı Bilgi
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern ev enerji verimliliği" 
                className="w-full h-80 object-cover rounded-lg"
              />
              {/* Floating Appointment Button */}
              <button 
                onClick={onAppointmentClick}
                className="absolute bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Randevu Al</span>
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
