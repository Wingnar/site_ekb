import React from 'react';
import { Camera, Thermometer, Search, Shield, TrendingUp, Zap, Home, Building } from 'lucide-react';

const ThermalCamera: React.FC = () => {
  const benefits = [
    {
      icon: <Search className="w-8 h-8 text-red-600" />,
      title: "Isı Kaçaklarını Tespit",
      description: "Termal kamera ile duvar, çatı ve pencerelerdeki ısı kaçaklarını görsel olarak tespit ediyoruz"
    },
    {
      icon: <Thermometer className="w-8 h-8 text-orange-600" />,
      title: "Sıcaklık Analizi",
      description: "Binanın farklı bölgelerindeki sıcaklık dağılımını analiz ederek enerji verimliliğini artırıyoruz"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Yalıtım Kontrolü",
      description: "Mevcut yalıtım sistemlerinin etkinliğini termal görüntülerle değerlendiriyoruz"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Enerji Tasarrufu",
      description: "Tespit edilen problemlerin çözümü ile %30'a kadar enerji tasarrufu sağlayabiliyoruz"
    }
  ];

  const applications = [
    {
      icon: <Home className="w-6 h-6 text-green-600" />,
      title: "Konut Binaları",
      description: "Ev ve apartmanlarda ısı yalıtım analizi"
    },
    {
      icon: <Building className="w-6 h-6 text-blue-600" />,
      title: "Ticari Binalar",
      description: "Ofis ve mağazalarda enerji verimliliği kontrolü"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: "Endüstriyel Tesisler",
      description: "Fabrikalarda ısı kayıplarının tespiti"
    },
    {
      icon: <Camera className="w-6 h-6 text-purple-600" />,
      title: "Yeni Projeler",
      description: "Yapım aşamasındaki binalarda kalite kontrolü"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-12 h-12 text-red-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Termal Kamera Hizmeti
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profesyonel termal kamera teknolojisi ile binalarınızın enerji verimliliğini 
            analiz ediyor, ısı kaçaklarını tespit ediyoruz.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Termal kamera ile bina analizi" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Neden Termal Kamera Analizi?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Termal kamera teknolojisi, binaların enerji verimliliğini artırmak için 
              en etkili yöntemlerden biridir. Görünmeyen ısı kaçaklarını tespit ederek 
              maliyetli enerji kayıplarını önler.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    {app.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{app.title}</h4>
                    <p className="text-xs text-gray-600">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Termal Kamera Analiz Süreci
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Randevu ve Planlama</h4>
              <p className="text-gray-600 text-sm">
                Uygun zaman diliminde termal analiz için randevu alınır
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Termal Görüntüleme</h4>
              <p className="text-gray-600 text-sm">
                Profesyonel ekipman ile detaylı termal analiz yapılır
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rapor ve Öneriler</h4>
              <p className="text-gray-600 text-sm">
                Detaylı analiz raporu ve çözüm önerileri sunulur
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Termal Kamera Analizi İster misiniz?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Binalarınızın enerji verimliliğini artırmak ve maliyetleri düşürmek için 
            profesyonel termal kamera hizmetimizden yararlanın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905551234567" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Hemen Arayın
            </a>
            <a 
              href="https://wa.me/905551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-semibold"
            >
              WhatsApp Yazın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThermalCamera;
