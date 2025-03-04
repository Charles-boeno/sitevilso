import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PromoCarousel from './components/PromoCarousel';
import ProductSection from './components/ProductSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PromoCarousel />
        <ProductSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;