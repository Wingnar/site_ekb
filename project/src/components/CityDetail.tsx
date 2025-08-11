import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Building, FileText, Clock, Phone } from 'lucide-react';

const CityDetail: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();

  // Convert URL-friendly city name back to display name
  const getDisplayName = (urlName: string) => {
    const cityMappings: { [key: string]: string } = {
      'corlu': 'Çorlu',
      'bahcelievler': 'Bahçelievler',
      'gebze': 'Gebze',
      'kusadasi': 'Kuşadası',
      'kecioren': 'Keçiören',
      'esenyurt': 'Esenyurt',
      'bodrum': 'Bodrum',
      'mamak': 'Mamak',
      'sincan': 'Sincan',
      'ankara': 'Ankara',
      'istanbul': 'İstanbul',
      'izmir': 'İzmir',
      'bursa': 'Bursa',
      'antalya': 'Antalya',
      'adana': 'Adana',
      'konya': 'Konya',
      'gaziantep': 'Gaziantep',
      'mersin': 'Mersin',
      'diyarbakir': 'Diyarbakır',
      'samsun': 'Samsun',
      'denizli': 'Denizli',
      'eskisehir': 'Eskişehir',
      'trabzon': 'Trabzon',
      'erzurum': 'Erzurum',
      'van': 'Van',
      'batman': 'Batman',
      'elazig': 'Elazığ',
      'kayseri': 'Kayseri',
      'kocaeli': 'Kocaeli',
      'sakarya': 'Sakarya',
      'tekirdag': 'Tekirdağ',
      'balikesir': 'Balıkesir',
      'manisa': 'Manisa',
      'aydin': 'Aydın',
      'mugla': 'Muğla',
      'canakkale': 'Çanakkale',
      'edirne': 'Edirne',
      'kirklareli': 'Kırklareli',
      'yalova': 'Yalova',
      'bilecik': 'Bilecik'
    };
    
    return cityMappings[urlName.toLowerCase()] || urlName.charAt(0).toUpperCase() + urlName.slice(1);
  };

  const displayCityName = getDisplayName(cityName || '');

  return (
    <section className="py-20 bg-white">
      {/* Header Banner */}
      <div className="bg-green-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <div className="flex items-center mb-4">
                <Link 
                  to="/service-regions" 
                  className="flex items-center text-blue-200 hover:text-white transition-colors duration-300 mr-4"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Geri Dön
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {displayCityName} Enerji Kimlik Belgesi
              </h1>
              <div className="flex items-center text-blue-200 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span>A Akademi Enerji / {displayCityName} Hizmet Bölgesi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* City Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - City Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {displayCityName}'da Enerji Kimlik Belgesi Hizmeti
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {displayCityName} şehrinde yaşayan bina sahipleri için profesyonel enerji kimlik belgesi hizmeti sunuyoruz. 
              Enerji verimliliği, günümüzde hem çevresel hem de ekonomik açıdan büyük önem taşımaktadır.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              {displayCityName} enerji kimlik belgesi, bir binanın enerji verimliliğini ve sera gazı salım seviyesini 
              gösteren resmi bir belgedir. Bu belge, binanın yalıtım kalitesini de değerlendirir ve A'dan G'ye kadar 
              bir sınıflandırma içerir.
            </p>
            
            {/* Features */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <Building className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Bina Değerlendirmesi</h4>
                  <p className="text-gray-600 text-sm">Profesyonel ekip tarafından detaylı bina analizi</p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Resmi Belge</h4>
                  <p className="text-gray-600 text-sm">Yasal geçerliliği olan enerji kimlik belgesi</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Hızlı Hizmet</h4>
                  <p className="text-gray-600 text-sm">Kısa sürede tamamlanan işlemler</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Image */}
          <div className="space-y-6">
            {/* City Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center"
                alt={`${displayCityName} Enerji Kimlik Belgesi`}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {displayCityName} İçin Hızlı İletişim
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">+90 (212) 555 0123</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{displayCityName} ve çevre iller</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium">
                Hemen Teklif Alın
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {displayCityName}'da Enerji Kimlik Belgesi Neden Önemli?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Yasal Zorunluluk</h4>
              <p className="text-gray-600">
                Türkiye genelinde yeni yapılan binalar ve mevcut yapılar için enerji kimlik belgesi alınması zorunludur.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Enerji Tasarrufu</h4>
              <p className="text-gray-600">
                Belge sayesinde binanızın enerji verimliliği artar ve enerji maliyetleriniz düşer.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Çevre Dostu</h4>
              <p className="text-gray-600">
                Enerji verimli binalar çevreye daha az zarar verir ve sürdürülebilir yaşam sağlar.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Değer Artışı</h4>
              <p className="text-gray-600">
                Enerji verimli binaların piyasa değeri daha yüksektir ve satış/kira işlemlerinde avantaj sağlar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityDetail;
