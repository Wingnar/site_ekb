import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-green-600 text-white p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                  EKB
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Enerji Kimlik Belgesi</h3>
                <p className="text-gray-400 text-sm">Uzman Danışmanlık</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Türkiye'nin önde gelen EKB danışmanlık firması olarak, 
              hızlı ve güvenilir hizmet sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  EKB Hakkında
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Başvuru Süreci
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gerekli Belgeler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fiyatlar
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Konut EKB</li>
              <li>İşyeri EKB</li>
              <li>Hızlı EKB</li>
              <li>Enerji Danışmanlığı</li>
              <li>Belge Yenileme</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span className="text-gray-400">+90 555 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-600" />
                <span className="text-gray-400">info@ekbdanismanlik.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-gray-400">
                  Atatürk Mah. Enerji Cad. No:123<br />
                  Çankaya/Ankara
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-600 mt-0.5" />
                <span className="text-gray-400">
                  Pzt-Cum: 09:00-18:00<br />
                  Cmt: 09:00-15:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 EKB Danışmanlık. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                KVKK
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;