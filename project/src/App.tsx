import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Documents from './components/Documents';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openAppointmentModal = () => setIsAppointmentModalOpen(true);
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onAppointmentClick={openAppointmentModal} />
      <main>
        <Hero onAppointmentClick={openAppointmentModal} />
        <About />
        <Process />
        <Documents />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={closeAppointmentModal} 
      />
    </div>
  );
}

export default App;