import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ThermalCameraPage from './pages/ThermalCamera';
import ReferencesPage from './pages/References';
import ServiceRegionsPage from './pages/ServiceRegions';
import CityDetailPage from './pages/CityDetail';
import ServiceDetailPage from './pages/ServiceDetail';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openAppointmentModal = () => setIsAppointmentModalOpen(true);
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header onAppointmentClick={openAppointmentModal} />
        
        <Routes>
          <Route path="/" element={<Home onAppointmentClick={openAppointmentModal} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/thermal-camera" element={<ThermalCameraPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/service-regions" element={<ServiceRegionsPage />} />
          <Route path="/hizmet/:serviceType" element={<ServiceDetailPage />} />
          <Route path="/:cityName-enerji-kimlik-belgesi" element={<CityDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
        <AppointmentModal 
          isOpen={isAppointmentModalOpen} 
          onClose={closeAppointmentModal} 
        />
      </div>
    </Router>
  );
}

export default App;