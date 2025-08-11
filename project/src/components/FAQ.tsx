import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Enerji Kimlik Belgesi zorunlu mu?",
      answer: "Evet, 5627 sayılı Enerji Verimliliği Kanunu gereğince konut ve işyeri satış/kira işlemlerinde EKB zorunludur. Bu belge olmadan emlak işlemi gerçekleştirilemez."
    },
    {
      question: "EKB belgesi ne kadar sürede hazırlanır?",
      answer: "Standart süreç 24-48 saattir. Acil durumlar için 12-24 saatlik hızlı seçeneğimiz mevcuttur. Belge hazırlama süresi, gerekli belgelerin eksiksiz teslim edilmesine bağlıdır."
    },
    {
      question: "EKB belgesi kaç yıl geçerlidir?",
      answer: "Enerji Kimlik Belgesi 10 yıl süreyle geçerlidir. Bu süre sonunda belgenin yenilenmesi gerekmektedir."
    },
    {
      question: "Hangi belgeler gereklidir?",
      answer: "Temel belgeler: T.C. Kimlik kartı, tapu senedi, yapı kullanım izni, mimari projeler ve bina fotoğraflarıdır. Detaylı liste için 'Gerekli Belgeler' bölümünü inceleyebilirsiniz."
    },
    {
      question: "EKB sınıfları nedir?",
      answer: "EKB sınıfları A'dan G'ye kadar değişir. A sınıfı en verimli, G sınıfı en az verimli binalar için verilir. Sınıf, binanın yıllık enerji tüketim miktarına göre belirlenir."
    },
    {
      question: "Eski binalar için EKB alınabilir mi?",
      answer: "Evet, yapım yılı fark etmeksizin tüm binalar için EKB alınabilir. Eski binalar genellikle düşük enerji sınıfı alır, ancak bu yasal zorunluluğu ortadan kaldırmaz."
    },
    {
      question: "EKB ücreti ne kadardır?",
      answer: "Standart EKB ücreti 299 TL'dir. Hızlı işlem için 399 TL, premium danışmanlık paketi için 499 TL ücret alınmaktadır."
    },
    {
      question: "EKB olmadan satış yapılabilir mi?",
      answer: "Hayır, EKB olmadan emlak satışı yasal değildir. Satış sözleşmesinde EKB bilgileri yer almalı ve alıcıya teslim edilmelidir."
    },
    {
      question: "Apartman daireleri için ayrı EKB gerekli mi?",
      answer: "Evet, apartman dairelerinin her biri için ayrı EKB belgesi alınması gerekmektedir. Ortak alanlar için ayrı belge düzenlenir."
    },
    {
      question: "EKB iptal edilebilir mi?",
      answer: "EKB iptal edilemez, ancak hatalı bilgi durumunda düzeltme yapılabilir. Belge kaybı durumunda aynı bilgilerle yeni belge düzenlenebilir."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-green-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Sıkça Sorulan Sorular
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            EKB hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sorunuz mu var?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Aradığınız soruyu bulamadınız mı? Uzman ekibimiz size yardımcı olmaya hazır. 
            Hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905551234567" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Hemen Arayın
            </a>
            <a 
              href="https://wa.me/905551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold"
            >
              WhatsApp Yazın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;