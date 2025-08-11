import React from 'react';
import { Home, FileText, Shield, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Enerji Kimlik Belgesi Nedir?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enerji Kimlik Belgesi (EKB), binaların enerji performansını gösteren ve 
            emlak işlemlerinde yasal olarak zorunlu olan önemli bir belgedir.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Enerji verimli ev" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              EKB'nin Önemi ve Faydaları
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Enerji Kimlik Belgesi, binanızın enerji tüketim seviyesini A'dan G'ye kadar 
              sınıflandırarak gösterir. Bu belge sayesinde:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Yasal zorunlulukları yerine getirirsiniz</span>
              </li>
              <li className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Emlak değerinizi artırırsınız</span>
              </li>
              <li className="flex items-start space-x-3">
                <Home className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Enerji tasarrufu sağlarsınız</span>
              </li>
              <li className="flex items-start space-x-3">
                <FileText className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Alıcı/kiracı güvenini kazanırsınız</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Requirements */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Yasal Zorunluluklar
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              5627 sayılı Enerji Verimliliği Kanunu gereğince, aşağıdaki durumlarda 
              EKB zorunludur:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Satış İşlemleri</h4>
              <p className="text-gray-600 text-sm">
                Konut ve işyeri satışlarında EKB zorunludur
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Kira İşlemleri</h4>
              <p className="text-gray-600 text-sm">
                Kiralama sözleşmelerinde EKB ibraz edilmelidir
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Yapı Kullanım İzni</h4>
              <p className="text-gray-600 text-sm">
                Yeni yapılarda kullanım izni için gereklidir
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;