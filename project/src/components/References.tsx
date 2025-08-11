import React from 'react';
import { Star, Quote, MapPin, Calendar, Building, Home, Users } from 'lucide-react';

const References: React.FC = () => {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      company: "Yılmaz İnşaat",
      rating: 5,
      text: "Çok profesyonel bir ekip. EKB belgemizi 24 saat içinde hazırladılar. Fiyatları da çok uygun. Kesinlikle tavsiye ederim.",
      project: "Konut Projesi - 50 Daire"
    },
    {
      name: "Fatma Demir",
      company: "Demir Emlak",
      rating: 5,
      text: "Uzun yıllardır çalışıyoruz. Her zaman kaliteli hizmet alıyoruz. Müşterilerimiz de çok memnun.",
      project: "Emlak Danışmanlığı"
    },
    {
      name: "Mehmet Kaya",
      company: "Kaya Holding",
      rating: 5,
      text: "Büyük ölçekli projelerimizde termal kamera analizi de yaptırdık. Sonuçlar çok başarılı. Enerji tasarrufu sağladık.",
      project: "AVM Projesi - 25.000 m²"
    },
    {
      name: "Ayşe Özkan",
      company: "Özkan Mimarlık",
      rating: 5,
      text: "Mimari projelerimizde EKB danışmanlığı aldık. Çok değerli öneriler verdiler. Proje kalitemiz arttı.",
      project: "Lüks Konut Projesi"
    }
  ];

  const statistics = [
    {
      icon: <Building className="w-8 h-8 text-green-600" />,
      number: "500+",
      label: "Tamamlanan Proje"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "1000+",
      label: "Mutlu Müşteri"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      number: "5+",
      label: "Yıllık Deneyim"
    },
    {
      icon: <Home className="w-8 h-8 text-orange-600" />,
      number: "50.000+",
      label: "m² Analiz Edilen Alan"
    }
  ];

  const projects = [
    {
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Lüks Villa Projesi",
      location: "Bodrum, Muğla",
      area: "450 m²",
      type: "Konut"
    },
    {
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Ofis Kompleksi",
      location: "Levent, İstanbul",
      area: "15.000 m²",
      type: "Ticari"
    },
    {
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Toplu Konut Projesi",
      location: "Çankaya, Ankara",
      area: "25.000 m²",
      type: "Konut"
    },
    {
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "AVM ve İş Merkezi",
      location: "Nilüfer, Bursa",
      area: "35.000 m²",
      type: "Ticari"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Referanslarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Başarıyla tamamladığımız projeler ve memnun müşterilerimiz. 
            Kalitemizi referanslarımızla kanıtlıyoruz.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Müşteri Yorumları
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-green-600 mr-3" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Tamamlanan Projeler
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.type === 'Konut' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Siz de Referanslarımıza Katılın
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kaliteli hizmetimizle siz de memnun müşterilerimiz arasında yer alın. 
            Projelerinizi güvenle bize emanet edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905551234567" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Hemen Arayın
            </a>
            <a 
              href="https://wa.me/905551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold"
            >
              WhatsApp Yazın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
