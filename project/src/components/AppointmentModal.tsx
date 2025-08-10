import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Send, CheckCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    // Form submission logic would go here
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertyType: '',
      address: '',
      preferredDate: '',
      preferredTime: '',
      notes: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Randevu Al
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="text-sm font-medium">Kişisel Bilgiler</span>
            </div>
            <div className={`flex-1 h-0.5 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="text-sm font-medium">Randevu Detayları</span>
            </div>
            <div className={`flex-1 h-0.5 ${step >= 3 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="text-sm font-medium">Tamamlandı</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Kişisel Bilgileriniz
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="0555 123 45 67"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="modal-propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                  Emlak Türü *
                </label>
                <select
                  id="modal-propertyType"
                  name="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Seçiniz</option>
                  <option value="konut">Konut</option>
                  <option value="isyeri">İşyeri</option>
                  <option value="ofis">Ofis</option>
                  <option value="magaza">Mağaza</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="modal-address" className="block text-sm font-medium text-gray-700 mb-2">
                  Emlak Adresi *
                </label>
                <textarea
                  id="modal-address"
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="EKB alınacak emlağın tam adresi"
                ></textarea>
              </div>
              
              <button
                onClick={handleNext}
                disabled={!formData.name || !formData.phone || !formData.propertyType || !formData.address}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Devam Et
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Randevu Detayları
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-date" className="block text-sm font-medium text-gray-700 mb-2">
                    Tercih Edilen Tarih *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      id="modal-date"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="modal-time" className="block text-sm font-medium text-gray-700 mb-2">
                    Tercih Edilen Saat *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="modal-time"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Saat seçiniz</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="modal-notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Ek Notlar
                </label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Özel talepleriniz, ek bilgiler..."
                ></textarea>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:border-gray-400 transition-colors"
                >
                  Geri
                </button>
                <button
                  type="submit"
                  disabled={!formData.preferredDate || !formData.preferredTime}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Randevu Oluştur</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Randevunuz Oluşturuldu!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Randevu talebiniz başarıyla alındı. Uzman ekibimiz en kısa sürede 
                sizinle iletişime geçerek randevunuzu onaylayacaktır.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Randevu Özeti:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Ad:</strong> {formData.name}</p>
                  <p><strong>Telefon:</strong> {formData.phone}</p>
                  <p><strong>Emlak Türü:</strong> {formData.propertyType}</p>
                  <p><strong>Tarih:</strong> {formData.preferredDate}</p>
                  <p><strong>Saat:</strong> {formData.preferredTime}</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
              >
                Tamam
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;