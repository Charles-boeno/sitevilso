import React, { useState } from 'react';
import { Flame, Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-brand-blue" />
            <span className="font-bold text-2xl text-brand-blue">Da Silva Gás</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#inicio" className="text-gray-700 hover:text-brand-blue font-medium">Início</a></li>
                <li><a href="#produtos" className="text-gray-700 hover:text-brand-blue font-medium">Produtos</a></li>
                <li><a href="#promocoes" className="text-gray-700 hover:text-brand-blue font-medium">Promoções</a></li>
                <li><a href="#localizacao" className="text-gray-700 hover:text-brand-blue font-medium">Localização</a></li>
                <li><a href="#sobre" className="text-gray-700 hover:text-brand-blue font-medium">Sobre Nós</a></li>
              </ul>
            </nav>
            <a href="tel:+5545985990980" className="btn-primary flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Ligue Agora
            </a>
          </div>
          
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white h-full w-64 shadow-lg p-5">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Flame className="h-6 w-6 text-brand-blue" />
                <span className="font-bold text-xl text-brand-blue">Da Silva Gás</span>
              </div>
              <button onClick={toggleMenu}>
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            
            <nav>
              <ul className="space-y-4">
                <li><a href="#inicio" className="block py-2 text-gray-700 hover:text-brand-blue font-medium" onClick={toggleMenu}>Início</a></li>
                <li><a href="#produtos" className="block py-2 text-gray-700 hover:text-brand-blue font-medium" onClick={toggleMenu}>Produtos</a></li>
                <li><a href="#promocoes" className="block py-2 text-gray-700 hover:text-brand-blue font-medium" onClick={toggleMenu}>Promoções</a></li>
                <li><a href="#localizacao" className="block py-2 text-gray-700 hover:text-brand-blue font-medium" onClick={toggleMenu}>Localização</a></li>
                <li><a href="#sobre" className="block py-2 text-gray-700 hover:text-brand-blue font-medium" onClick={toggleMenu}>Sobre Nós</a></li>
              </ul>
            </nav>
            
            <div className="mt-6">
              <a href="tel:+5545985990980" className="btn-primary flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2" />
                Ligue Agora
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;