import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1585803114088-cd027272106a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundBlendMode: "overlay",
          opacity: 0.4
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entrega de Gás e Água Mineral com Rapidez e Segurança</h1>
          <p className="text-xl mb-8">Atendemos toda a região com preços competitivos e atendimento de qualidade.</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#produtos" className="btn-secondary flex items-center justify-center">
              Ver Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="https://wa.me/45985990980" className="btn-primary bg-green-600 hover:bg-green-700 flex items-center justify-center">
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;