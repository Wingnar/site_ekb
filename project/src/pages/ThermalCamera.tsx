import React from 'react';
import ThermalCamera from '../components/ThermalCamera';

const ThermalCameraPage: React.FC = () => {
  return (
    <main>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
      <ThermalCamera />
    </main>
  );
};

export default ThermalCameraPage;
