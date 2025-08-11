import React from 'react';
import References from '../components/References';

const ReferencesPage: React.FC = () => {
  return (
    <main>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
      <References />
    </main>
  );
};

export default ReferencesPage;
