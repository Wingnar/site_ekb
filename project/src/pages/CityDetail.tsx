import React from 'react';
import CityDetail from '../components/CityDetail';

const CityDetailPage: React.FC = () => {
  return (
    <main>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
      <CityDetail />
    </main>
  );
};

export default CityDetailPage;
