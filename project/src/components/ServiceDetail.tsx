import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin, Clock, Users, Award } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceType } = useParams<{ serviceType: string }>();

  // Service data mapping
  const serviceData = {
    'enerji-kimlik-belgesi': {
      title: 'Enerji Kimlik Belgesi',
      icon: 'FileText',
      description: 'Binaların enerji performansını değerlendiren ve sınıflandıran resmi belge hizmeti',
      longDescription: 'Enerji Kimlik Belgesi, bir binanın enerji verimliliğini ve sera gazı salım seviyesini gösteren resmi bir belgedir. Bu belge, binanın yalıtım kalitesini değerlendirir ve A\'dan G\'ye kadar bir sınıflandırma içerir.',
      features: [
        'Enerji verimliliği analizi',
        'Yasal uyumluluk',
        'Detaylı raporlama',
        'Uzman danışmanlık',
        'Bina performans değerlendirmesi',
        'Enerji tasarruf önerileri'
      ],
      process: [
        'Bina inceleme ve veri toplama',
        'Enerji modelleme ve analiz',
        'Performans hesaplamaları',
        'Belge hazırlama ve onay',
        'Teslim ve takip'
      ],
      benefits: [
        'Yasal yükümlülüklerin yerine getirilmesi',
        'Enerji maliyetlerinde tasarruf',
        'Bina değerinde artış',
        'Çevre dostu yapılar',
        'Sürdürülebilir yaşam alanları'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center',
      price: 'Başlangıç: ₺2.500',
      duration: '3-5 iş günü'
    },
    'enerji-etudu': {
      title: 'Enerji Etüdü',
      icon: 'Building2',
      description: 'Tesis ve binalarda enerji tüketim analizi ve verimlilik önerileri',
      longDescription: 'Enerji Etüdü, tesis ve binalarda enerji tüketimini analiz ederek verimlilik artırıcı öneriler sunan kapsamlı bir hizmettir. Bu çalışma ile enerji maliyetlerinizi önemli ölçüde düşürebilirsiniz.',
      features: [
        'Enerji tüketim analizi',
        'Verimlilik önerileri',
        'Maliyet hesaplamaları',
        'Uygulama planları',
        'Performans izleme',
        'ROI hesaplamaları'
      ],
      process: [
        'Mevcut durum analizi',
        'Enerji tüketim ölçümleri',
        'Verimlilik hesaplamaları',
        'Öneri raporu hazırlama',
        'Uygulama planı oluşturma'
      ],
      benefits: [
        'Enerji maliyetlerinde %20-40 tasarruf',
        'Operasyonel verimlilik artışı',
        'Çevresel etki azalması',
        'Yatırım getirisi optimizasyonu',
        'Sürdürülebilir işletme modeli'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center',
      price: 'Başlangıç: ₺5.000',
      duration: '1-2 hafta'
    },
    'termal-kamera': {
      title: 'Termal Kamera',
      icon: 'Camera',
      description: 'Termal kamera ile enerji kaçaklarını tespit etme ve ısı yalıtım analizi',
      longDescription: 'Termal kamera teknolojisi ile binalarda enerji kaçaklarını tespit ediyor, ısı yalıtım performansını analiz ediyoruz. Bu sayede enerji kayıplarını minimize edebilir ve konfor seviyenizi artırabilirsiniz.',
      features: [
        'Termal görüntüleme',
        'Enerji kaçak tespiti',
        'Detaylı analiz raporu',
        'Uzman değerlendirmesi',
        'Yalıtım performans analizi',
        'Enerji tasarruf önerileri'
      ],
      process: [
        'Termal kamera ile tarama',
        'Görüntü analizi ve değerlendirme',
        'Kaçak tespiti ve raporlama',
        'Çözüm önerileri sunma',
        'Takip ve kontrol'
      ],
      benefits: [
        'Görünmez enerji kaçaklarının tespiti',
        'Isı yalıtım performansının iyileştirilmesi',
        'Enerji maliyetlerinde tasarruf',
        'Konfor seviyesinde artış',
        'Bina değerinde yükselme'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center',
      price: 'Başlangıç: ₺3.500',
      duration: '1-2 gün'
    },
    'enerji-yoneticiligi': {
      title: 'Enerji Yöneticiliği',
      icon: 'UserCheck',
      description: 'Kurumlar için enerji yönetimi ve verimlilik artırma hizmetleri',
      longDescription: 'Enerji Yöneticiliği hizmeti ile kurumlarınızda enerji tüketimini optimize ediyor, sürdürülebilir enerji yönetimi sağlıyoruz. Uzman ekibimiz ile enerji verimliliğinizi sürekli olarak artırıyoruz.',
      features: [
        'Enerji yönetim planı',
        'Sürekli izleme',
        'Raporlama',
        'Eğitim ve bilinçlendirme',
        'Performans takibi',
        'Stratejik planlama'
      ],
      process: [
        'Mevcut durum analizi',
        'Enerji yönetim planı oluşturma',
        'İzleme sistemleri kurulumu',
        'Personel eğitimi',
        'Sürekli takip ve raporlama'
      ],
      benefits: [
        'Sistemli enerji yönetimi',
        'Sürekli verimlilik artışı',
        'Maliyet kontrolü',
        'Çevresel sorumluluk',
        'Rekabet avantajı'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center',
      price: 'Aylık: ₺8.000',
      duration: 'Sürekli hizmet'
    },
    'verimlilik-arttirici-proje': {
      title: 'Verimlilik Arttırıcı Proje (VAP)',
      icon: 'Compass',
      description: 'Enerji verimliliğini artırmaya yönelik kapsamlı proje geliştirme ve uygulama',
      longDescription: 'Verimlilik Arttırıcı Proje (VAP) ile enerji verimliliğinizi artırmaya yönelik kapsamlı çözümler geliştiriyoruz. Bu projeler ile hem enerji tasarrufu sağlıyor hem de yatırım getirinizi optimize ediyoruz.',
      features: [
        'Proje tasarımı',
        'Teknik çözümler',
        'Uygulama takibi',
        'Sonuç değerlendirmesi',
        'Finansman desteği',
        'Sürekli optimizasyon'
      ],
      process: [
        'Proje ön fizibilite çalışması',
        'Detaylı proje tasarımı',
        'Uygulama ve takip',
        'Performans ölçümü',
        'Sonuç raporu ve optimizasyon'
      ],
      benefits: [
        'Enerji verimliliğinde %30-50 artış',
        'Yatırım getirisi optimizasyonu',
        'Çevresel etki azalması',
        'Operasyonel verimlilik',
        'Sürdürülebilir büyüme'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center',
      price: 'Proje bazlı',
      duration: '3-6 ay'
    },
    'isi-izolasyonu-danismanligi': {
      title: 'Isı İzolasyonu Danışmanlığı',
      icon: 'Shield',
      description: 'Binalarda ısı yalıtımı konusunda uzman danışmanlık ve uygulama desteği',
      longDescription: 'Isı İzolasyonu Danışmanlığı ile binalarınızda en uygun yalıtım çözümlerini belirliyor, uygulama süreçlerini takip ediyoruz. Bu sayede enerji kayıplarını minimize ediyor ve konfor seviyenizi artırıyoruz.',
      features: [
        'Yalıtım malzeme seçimi',
        'Uygulama teknikleri',
        'Performans analizi',
        'Kalite kontrol',
        'Malzeme testleri',
        'Uygulama takibi'
      ],
      process: [
        'Mevcut yalıtım analizi',
        'Malzeme seçimi ve test',
        'Uygulama planı oluşturma',
        'Uygulama takibi',
        'Performans testi ve raporlama'
      ],
      benefits: [
        'Isı kayıplarında %40-60 azalma',
        'Enerji maliyetlerinde tasarruf',
        'Konfor seviyesinde artış',
        'Bina ömründe uzama',
        'Çevresel etki azalması'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center',
      price: 'Başlangıç: ₺4.500',
      duration: '2-4 hafta'
    }
  };

  const service = serviceData[serviceType as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Hizmet Bulunamadı</h1>
          <Link to="/services" className="text-blue-600 hover:underline">Hizmetler sayfasına dön</Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      {/* Header Banner */}
      <div className="bg-green-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <div className="flex items-center mb-4">
                <Link 
                  to="/services" 
                  className="flex items-center text-blue-200 hover:text-white transition-colors duration-300 mr-4"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Geri Dön
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <div className="flex items-center text-blue-200 text-lg">
                <span>A Akademi Enerji / {service.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Service Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.title} Hakkında
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {service.longDescription}
            </p>
            
            {/* Service Features */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hizmet Özellikleri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image & Info */}
          <div className="space-y-6">
            {/* Service Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Service Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hizmet Bilgileri
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Süre: {service.duration}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Fiyat: {service.price}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium">
                Hemen Teklif Alın
              </button>
            </div>
          </div>
        </div>

        {/* Process & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Process */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Çalışma Süreci
            </h3>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{step}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Faydalar
            </h3>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {service.title} Hakkında Detaylı Bilgi Alın
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Uzman ekibimiz size en uygun çözümleri sunmak için hazır
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              İletişime Geçin
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Teklif Alın
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
