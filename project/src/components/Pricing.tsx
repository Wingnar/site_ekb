import React from 'react';
import { Check, Star, Clock, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  const packages = [
    {
      name: "Standart",
      price: "299",
      description: "Temel EKB hizmeti",
      features: [
        "Enerji Kimlik Belgesi",
        "Yerinde inceleme",
        "24-48 saat teslimat",
        "Yasal garanti",
        "Telefon desteği"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Hızlı",
      price: "399",
      description: "Acil durumlar için",
      features: [
        "Enerji Kimlik Belgesi",
        "Yerinde inceleme",
        "12-24 saat teslimat",
        "Yasal garanti",
        "7/24 destek",
        "Öncelikli işlem"
      ],
      popular: true,
      color: "border-green-500"
    },
    {
      name: "Premium",
      price: "499",
      description: "Kapsamlı danışmanlık",
      features: [
        "Enerji Kimlik Belgesi",
        "Yerinde inceleme",
        "12-24 saat teslimat",
        "Yasal garanti",
        "7/24 destek",
        "Enerji verimliliği raporu",
        "İyileştirme önerileri",
        "1 yıl ücretsiz güncelleme"
      ],
      popular: false,
      color: "border-purple-500"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fiyatlarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İhtiyacınıza uygun paketi seçin. Tüm paketlerimizde yasal garanti 
            ve uzman hizmet bulunmaktadır.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${pkg.color} ${pkg.popular ? 'transform scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>En Popüler</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {pkg.description}
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    ₺{pkg.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    / belge
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600'
                }`}
              >
                Paketi Seç
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">
                Hızlı Teslimat
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Belgeleriniz tamamlandıktan sonra en geç 48 saat içinde 
              EKB'niz hazır. Acil durumlar için 12 saatlik hızlı seçeneğimiz mevcuttur.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">
                Yasal Garanti
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Tüm belgelerimiz yasal gerekliliklere uygun olarak hazırlanır. 
              Herhangi bir sorun durumunda ücretsiz düzeltme garantisi verilir.
            </p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ödeme Seçenekleri
          </h3>
          <p className="text-gray-600 mb-6">
            Nakit, kredi kartı, havale/EFT ile ödeme yapabilirsiniz. 
            Kurumsal müşterilerimiz için fatura düzenlenir.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-white px-4 py-2 rounded-lg">💳 Kredi Kartı</span>
            <span className="bg-white px-4 py-2 rounded-lg">💰 Nakit</span>
            <span className="bg-white px-4 py-2 rounded-lg">🏦 Havale/EFT</span>
            <span className="bg-white px-4 py-2 rounded-lg">📄 Faturalı</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;