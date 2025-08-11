import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Camera, Building2, UserCheck, Compass, Shield } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Enerji Kimlik Belgesi',
      description: 'Binaların enerji performansını değerlendiren ve sınıflandıran resmi belge hizmeti',
      features: ['Enerji verimliliği analizi', 'Yasal uyumluluk', 'Detaylı raporlama', 'Uzman danışmanlık'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center',
      slug: 'enerji-kimlik-belgesi'
    },
    {
      icon: Camera,
      title: 'Termal Kamera',
      description: 'Termal kamera ile enerji kaçaklarını tespit etme ve ısı yalıtım analizi',
      features: ['Termal görüntüleme', 'Enerji kaçak tespiti', 'Detaylı analiz raporu', 'Uzman değerlendirmesi'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center',
      slug: 'termal-kamera'
    },
    {
      icon: Building2,
      title: 'Enerji Etüdü',
      description: 'Tesis ve binalarda enerji tüketim analizi ve verimlilik önerileri',
      features: ['Enerji tüketim analizi', 'Verimlilik önerileri', 'Maliyet hesaplamaları', 'Uygulama planları'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center',
      slug: 'enerji-etudu'
    },
    {
      icon: UserCheck,
      title: 'Enerji Yöneticiliği',
      description: 'Kurumlar için enerji yönetimi ve verimlilik artırma hizmetleri',
      features: ['Enerji yönetim planı', 'Sürekli izleme', 'Raporlama', 'Eğitim ve bilinçlendirme'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
      slug: 'enerji-yoneticiligi'
    },
    {
      icon: Compass,
      title: 'Verimlilik Arttırıcı Proje (VAP)',
      description: 'Enerji verimliliğini artırmaya yönelik kapsamlı proje geliştirme ve uygulama',
      features: ['Proje tasarımı', 'Teknik çözümler', 'Uygulama takibi', 'Sonuç değerlendirmesi'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center',
      slug: 'verimlilik-arttirici-proje'
    },
    {
      icon: Shield,
      title: 'Isı İzolasyonu Danışmanlığı',
      description: 'Binalarda ısı yalıtımı konusunda uzman danışmanlık ve uygulama desteği',
      features: ['Yalıtım malzeme seçimi', 'Uygulama teknikleri', 'Performans analizi', 'Kalite kontrol'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center',
      slug: 'isi-izolasyonu-danismanligi'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enerji verimliliği ve sürdürülebilirlik konularında kapsamlı çözümler sunuyoruz
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={`/hizmet/${service.slug}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer block"
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Service Icon and Title */}
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Service Features */}
                <div className="px-6 pb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Click to Learn More */}
                <div className="px-6 pb-6">
                  <div className="text-center">
                    <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                      Detaylı Bilgi İçin Tıklayın →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Hizmetlerimiz Hakkında Detaylı Bilgi Alın
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Uzman ekibimiz size en uygun çözümleri sunmak için hazır
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              İletişime Geçin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
