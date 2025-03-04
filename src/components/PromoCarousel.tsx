import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PromoCarousel: React.FC = () => {
  const promotions = [
    {
      id: 1,
      title: "Promoção de Botijão P13",
      description: "Compre um botijão P13 e ganhe frete grátis para sua região!",
      image: "https://images.unsplash.com/photo-1585803114088-cd027272106a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      color: "from-blue-700 to-blue-900"
    },
    {
      id: 2,
      title: "Kit Água + Gás",
      description: "Na compra de um botijão, leve um galão de água com 50% de desconto!",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      id: 3,
      title: "Desconto para Empresas",
      description: "Condições especiais para empresas e condomínios. Consulte-nos!",
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      color: "from-green-600 to-green-800"
    }
  ];

  return (
    <section id="promocoes" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Promoções Especiais</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {promotions.map((promo) => (
            <SwiperSlide key={promo.id}>
              <div className={`relative h-96 bg-gradient-to-r ${promo.color} text-white`}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('${promo.image}')`,
                    backgroundBlendMode: "overlay",
                    opacity: 0.6
                  }}
                ></div>
                
                <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-16">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{promo.title}</h3>
                  <p className="text-xl mb-6">{promo.description}</p>
                  <a href="https://wa.me/5545985990980" className="btn-secondary self-start">
                    Aproveitar Agora
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PromoCarousel;