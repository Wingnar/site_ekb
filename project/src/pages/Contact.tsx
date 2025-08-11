import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <main>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
      <Contact />
    </main>
  );
};

export default ContactPage;

