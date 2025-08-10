import React from 'react';
import { Phone, FileText, MapPin, Award, Clock, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Phone,
      title: "İletişim",
      description: "Bize telefon, WhatsApp veya online form ile ulaşın",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Belge Toplama",
      description: "Gerekli belgeleri hazırlayın ve bize iletin",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "Saha İncelemesi",
      description: "Uzman ekibimiz binayı yerinde inceler",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "Belge Hazırlama",
      description: "EKB belgesi hazırlanır ve size teslim edilir",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Başvuru Süreci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            EKB alma sürecimiz basit ve hızlıdır. Sadece 4 adımda belgенizi alabilirsiniz.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Step number */}
                <div className="absolute -top-3 -left-3 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Süreç Detayları ve Süreler
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hızlı İşlem</h4>
                  <p className="text-gray-600">
                    Belgeleriniz tamamlandıktan sonra 24-48 saat içinde EKB'niz hazır
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Yerinde Hizmet</h4>
                  <p className="text-gray-600">
                    Uzman ekibimiz binayı yerinde inceleyerek doğru değerlendirme yapar
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Garanti</h4>
                  <p className="text-gray-600">
                    Tüm belgelerimiz yasal gerekliliklere uygun ve garantilidir
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Uzman Ekip</h4>
                  <p className="text-gray-600">
                    Sertifikalı enerji uzmanları tarafından hazırlanır
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;