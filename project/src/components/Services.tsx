import React, { useState } from 'react';
import { FileText, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Enerji Kimlik Belgesi',
      description: 'Enerji kimlik belgesi binanızın enerji tüketimi detaylı bir şekilde bakanlığın sistemine göre girilmesi sonucu oluşan bir belgedir. Bu belge, binanızın enerji performansını gösterir ve enerji verimliliği konusunda size rehberlik eder.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Enerji Etüdü',
      description: 'Günümüzde sınırlı kaynaklar arasında yer alan enerjinin en verimli şekilde kullanılması için çok çeşitli çalışmalar yapılır. Bu çalışmalar kapsamında enerji etütleri, enerji verimliliği projeleri ve enerji yönetim sistemleri kurulur.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Enerji Yöneticiliği',
      description: 'Kurumlar için enerji yönetimi ve verimlilik artırma hizmetleri. Enerji tüketimini optimize eder, maliyetleri düşürür ve sürdürülebilir enerji politikaları geliştirir.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Verimlilik Arttırıcı Proje (VAP)',
      description: 'Enerji verimliliğini artırmaya yönelik kapsamlı proje geliştirme ve uygulama. Teknik çözümler, uygulama takibi ve sonuç değerlendirmesi ile tam kapsamlı hizmet.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Isı İzolasyonu Danışmanlığı',
      description: 'Binalarda ısı yalıtımı konusunda uzman danışmanlık ve uygulama desteği. Yalıtım malzeme seçimi, uygulama teknikleri ve performans analizi.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Termal Kamera',
      description: 'Termal kamera ile enerji kaçaklarını tespit etme ve ısı yalıtım analizi. Detaylı görüntüleme ve uzman değerlendirmesi ile enerji verimliliğini artırın.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-lg text-gray-600 mb-2">Enerji Verimliliği Danışmanlığı</p>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Hizmetlerimiz</h2>
            </div>
            
            <div className="w-20 h-1 bg-orange-500 mb-6"></div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Şirketimiz, Enerji Bakanlığı tarafından yetkilendirilen Enerji Yöneticisi kadroları ile sanayi ve bina sektörlerinde enerji verimliliği, enerji yönetim sisteminin kurulması, enerji etütleri, eğitimler, fizibilite çalışmaları, verimlilik artırıcı projeler ve teşvik-destek programları gibi konularda hizmetler vermektedir.
            </p>

            {/* Navigation Dots */}
            <div className="flex space-x-2 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Service Cards */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Service Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={services[currentSlide].image} 
                  alt={services[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {services[currentSlide].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {services[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-blue-900" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-blue-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
