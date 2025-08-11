import React from 'react';
import ServiceDetail from '../components/ServiceDetail';

const ServiceDetailPage: React.FC = () => {
  return (
    <main>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
      <ServiceDetail />
    </main>
  );
};

export default ServiceDetailPage;
