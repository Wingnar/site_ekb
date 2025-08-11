import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ThermalCamera from '../components/ThermalCamera';
import FAQ from '../components/FAQ';

interface HomeProps {
  onAppointmentClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onAppointmentClick }) => {
  return (
    <main>
      <Hero onAppointmentClick={onAppointmentClick} />
      <Services />
      <ThermalCamera />
      <FAQ />
    </main>
  );
};

export default Home;

