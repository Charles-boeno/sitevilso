import React from 'react';
import { Flame, MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="sobre" className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="h-8 w-8 text-yellow-400" />
              <span className="font-bold text-2xl">Da Silva Gás</span>
            </div>
            <p className="text-blue-200 mb-4">
              Fornecemos gás e água mineral com qualidade e segurança para toda a região.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-300 mt-0.5" />
                <span>(45) 99859-9098</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-300 mt-0.5" />
                <span>contato@dasilvagás.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-300 mt-0.5" />
                <span>R. Olegário Mariano, 892 - São Francisco, Toledo - PR</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Horário de Funcionamento</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-blue-300 mt-0.5" />
                <div>
                  <p>Segunda a Sexta</p>
                  <p className="text-blue-200">08:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-blue-300 mt-0.5" />
                <div>
                  <p>Sábados</p>
                  <p className="text-blue-200">18:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-blue-300 mt-0.5" />
                <div>
                  <p>Domingos e Feriados</p>
                  <p className="text-blue-200">Plantão 24h</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Área de Entrega</h3>
            <p className="mb-4">Atendemos toda a região com entrega rápida e segura.</p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="text-blue-200">Toledo</li>
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} ccharlesjjose@gmail.com. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;