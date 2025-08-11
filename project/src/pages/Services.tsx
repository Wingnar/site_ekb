import React from 'react';
import ServicesGrid from '../components/ServicesGrid';

const ServicesPage: React.FC = () => {
  return (
    <main>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
      <ServicesGrid />
    </main>
  );
};

export default ServicesPage;
