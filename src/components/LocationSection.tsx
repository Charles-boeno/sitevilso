import React from 'react';
import { MapPin } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossa Localização</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Endereço</h3>
                  <p className="text-gray-700">R. Olegário Mariano, 892 - São Francisco, Toledo - PR, 85915-038</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Áreas de Entrega</h3>
                <p className="text-gray-700 mb-2">Atendemos toda a região com entrega rápida e segura.</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-gray-700">Toledo</span>
                  </div>
                </div>
              </div>
              
              <div>
                <a 
                  href="https://wa.me/45985990980?text=Olá! Gostaria de saber se vocês entregam no meu endereço."
                  className="btn-primary bg-green-600 hover:bg-green-700 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar Entrega
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.135430585835!2d-53.74657702546483!3d-24.756545277997326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f395b7abb05991%3A0x486e5350d2b2e793!2sDa%20Silva%20G%C3%A1s%20Ultragaz!5e0!3m2!1spt-BR!2sbr!4v1741109822500!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Da Silva Gás"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;