import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const ServiceRegions: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const regionsPerPage = 9;
  const totalPages = 12;

  // Sample data for the first page - you can expand this to 108 regions
  const allRegions = [
    {
      id: 1,
      name: 'Çorlu',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
      description: 'Enerji verimliliği, günümüzde hem çevresel hem de ekonomik açıdan büyük önem taşımaktadır. Çorlu\'da yaşayan bina sahipleri için enerji kimlik belgesi alımı artık zorunlu hale gelmiştir.',
      url: 'https://www.enerji-kimlik-belgesi.com/corlu-enerji-kimlik-belgesi'
    },
    {
      id: 2,
      name: 'Bahçelievler',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc3b?w=400&h=300&fit=crop&crop=center',
      description: 'Bahçelievler enerji kimlik belgesi, bir binanın enerji verimliliğini ve sera gazı salım seviyesini gösteren resmi bir belgedir.',
      url: 'https://www.enerji-kimlik-belgesi.com/bahcelievler-enerji-kimlik-belgesi'
    },
    {
      id: 3,
      name: 'Gebze',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
      description: 'Enerji verimliliği her geçen gün daha fazla önem kazanırken, yapı sahiplerinin yasal yükümlülüklerini yerine getirmeleri de hayati önem taşımaktadır.',
      url: 'https://www.enerji-kimlik-belgesi.com/gebze-enerji-kimlik-belgesi'
    },
    {
      id: 4,
      name: 'Kuşadası',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
      description: 'Kuşadası\'nda konut, ticari bina veya toplu yaşam alanı sahibiyseniz, enerji kimlik belgesi almanız yasal bir zorunluluktur.',
      url: 'https://www.enerji-kimlik-belgesi.com/kusadasi-enerji-kimlik-belgesi'
    },
    {
      id: 5,
      name: 'Keçiören',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
      description: 'Keçiören enerji kimlik belgesi, binaların enerji verimliliğini belgeleyen ve A\'dan G\'ye kadar bir sınıflandırma içeren resmi bir belgedir.',
      url: 'https://www.enerji-kimlik-belgesi.com/kecioren-enerji-kimlik-belgesi'
    },
    {
      id: 6,
      name: 'Esenyurt',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc3b?w=400&h=300&fit=crop&crop=center',
      description: 'Esenyurt enerji kimlik belgesi, binaların enerji tüketim performansını gösteren resmi bir belgedir. Bu belge, binanın yalıtım kalitesini de değerlendirir.',
      url: 'https://www.enerji-kimlik-belgesi.com/esenyurt-enerji-kimlik-belgesi'
    },
    {
      id: 7,
      name: 'Bodrum',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
      description: 'Bodrum enerji kimlik belgesi, binaların enerji verimliliğini ve çevresel etkilerini ölçen, Türkiye genelinde zorunlu hale gelmiş resmi bir belgedir.',
      url: 'https://www.enerji-kimlik-belgesi.com/bodrum-enerji-kimlik-belgesi'
    },
    {
      id: 8,
      name: 'Mamak',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
      description: 'Mamak enerji kimlik belgesi, yapıların enerji verimliliğini ölçen ve yasal olarak alınması zorunlu hale gelen resmi bir belgedir.',
      url: 'https://www.enerji-kimlik-belgesi.com/mamak-enerji-kimlik-belgesi'
    },
    {
      id: 9,
      name: 'Sincan',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
      description: 'Sincan Enerji Kimlik Belgesi, bir yapının enerji verimliliğini gösteren resmi bir belgedir ve hem yeni yapılan binalar hem de mevcut yapılar için gereklidir.',
      url: 'https://www.enerji-kimlik-belgesi.com/sincan-enerji-kimlik-belgesi'
    }
  ];

  // Generate more regions for demonstration (you can replace with actual data)
  for (let i = 10; i <= 108; i++) {
    const cityNames = [
      'Ankara', 'İstanbul', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep',
      'Mersin', 'Diyarbakır', 'Samsun', 'Denizli', 'Eskişehir', 'Trabzon', 'Erzurum',
      'Van', 'Batman', 'Elazığ', 'Kayseri', 'Kocaeli', 'Sakarya', 'Tekirdağ', 'Balıkesir',
      'Manisa', 'Aydın', 'Muğla', 'Çanakkale', 'Edirne', 'Kırklareli', 'Yalova', 'Bilecik'
    ];
    
    const randomCity = cityNames[Math.floor(Math.random() * cityNames.length)];
    const randomImage = [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc3b?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center'
    ][Math.floor(Math.random() * 3)];
    
    allRegions.push({
      id: i,
      name: randomCity,
      image: randomImage,
      description: `${randomCity} enerji kimlik belgesi, binaların enerji verimliliğini ve çevresel etkilerini ölçen, Türkiye genelinde zorunlu hale gelmiş resmi bir belgedir.`,
      url: `https://www.enerji-kimlik-belgesi.com/${randomCity.toLowerCase().replace(/[ğüşıöç]/g, (match) => {
        const replacements: { [key: string]: string } = { 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ı': 'i', 'ö': 'o', 'ç': 'c' };
        return replacements[match];
      })}-enerji-kimlik-belgesi`
    });
  }

  // Get current page regions
  const indexOfLastRegion = currentPage * regionsPerPage;
  const indexOfFirstRegion = indexOfLastRegion - regionsPerPage;
  const currentRegions = allRegions.slice(indexOfFirstRegion, indexOfLastRegion);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      {/* Header Banner */}
      <div className="bg-green-600 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hizmet Bölgelerimiz
              </h1>
              <div className="flex items-center text-blue-200 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span>A Akademi Enerji / Hizmet Bölgelerimiz</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentRegions.map((region) => {
            // Convert city name to URL-friendly format
            const urlFriendlyName = region.name.toLowerCase().replace(/[ğüşıöç]/g, (match) => {
              const replacements: { [key: string]: string } = { 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ı': 'i', 'ö': 'o', 'ç': 'c' };
              return replacements[match];
            });
            
            return (
              <Link
                key={region.id}
                to={`/hizmet-bolgelerimiz/${urlFriendlyName}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 block"
                title={`${region.name} Enerji Kimlik Belgesi hakkında detaylı bilgi için tıklayın`}
              >
                {/* Region Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={region.image}
                    alt={`${region.name} Enerji Kimlik Belgesi`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Region Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {region.name} Enerji Kimlik Belgesi
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {region.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                    <span>Detaylı Bilgi İçin Tıklayın →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg transition-colors ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-600 hover:bg-blue-50'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              // Show first 5 pages, last 5 pages, and current page with neighbors
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                pageNumber === currentPage - 3 ||
                pageNumber === currentPage + 3
              ) {
                return (
                  <span key={pageNumber} className="px-2 py-2 text-gray-400">
                    ...
                  </span>
                );
              }
              return null;
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg transition-colors ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-600 hover:bg-blue-50'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Page Info */}
        <div className="text-center mt-6 text-gray-600">
          Sayfa {currentPage} / {totalPages} - Toplam {allRegions.length} bölge
        </div>
      </div>
    </section>
  );
};

export default ServiceRegions;
