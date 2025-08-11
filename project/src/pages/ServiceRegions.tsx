import React from 'react';
import ServiceRegions from '../components/ServiceRegions';

const ServiceRegionsPage: React.FC = () => {
  return (
    <main>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
      <ServiceRegions />
    </main>
  );
};

export default ServiceRegionsPage;
