import React from 'react';
import { FileText, Home, User, MapPin, CheckCircle } from 'lucide-react';

const Documents: React.FC = () => {
  const documentCategories = [
    {
      icon: User,
      title: "Kimlik Belgeleri",
      color: "bg-blue-500",
      documents: [
        "T.C. Kimlik Kartı (Fotokopisi)",
        "Vekalet (Vekil başvurusu durumunda)",
        "İmza Sirküleri (Tüzel kişi için)"
      ]
    },
    {
      icon: Home,
      title: "Mülkiyet Belgeleri",
      color: "bg-green-500",
      documents: [
        "Tapu Senedi (Fotokopisi)",
        "Kat Mülkiyeti Belgesi",
        "İmar Durumu Belgesi",
        "Yapı Kullanım İzni"
      ]
    },
    {
      icon: MapPin,
      title: "Teknik Belgeler",
      color: "bg-purple-500",
      documents: [
        "Mimari Projeler",
        "Elektrik Projesi",
        "Mekanik Projeler",
        "Isıtma-Soğutma Sistem Bilgileri"
      ]
    },
    {
      icon: FileText,
      title: "Ek Belgeler",
      color: "bg-orange-500",
      documents: [
        "Fotoğraflar (Bina dış cephe)",
        "Enerji Faturası Örnekleri",
        "Bina Yönetim Planı (varsa)",
        "Önceki EKB (yenileme durumunda)"
      ]
    }
  ];

  return (
    <section id="documents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Gerekli Belgeler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            EKB başvurunuz için aşağıdaki belgeleri hazırlamanız gerekmektedir. 
            Eksik belge durumunda süreç uzayabilir.
          </p>
        </div>

        {/* Document Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {documentCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.documents.map((doc, docIndex) => (
                  <li key={docIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Önemli Notlar
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Tüm belgeler güncel ve okunabilir olmalıdır</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Fotokopiler aslı gibidir onaylı olmalıdır</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Eksik belge durumunda ek süre gerekebilir</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Dijital belgeler PDF formatında kabul edilir</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <div className="bg-white border-2 border-green-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Belge Hazırlama Konusunda Yardım
            </h3>
            <p className="text-gray-600 mb-6">
              Hangi belgelere ihtiyacınız olduğu konusunda emin değil misiniz? 
              Uzman ekibimiz size yardımcı olmaya hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+905551234567" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Hemen Arayın
              </a>
              <a 
                href="https://wa.me/905551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;