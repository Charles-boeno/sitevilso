import React from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Botijão de Gás P13",
      description: "Botijão residencial de 13kg, ideal para uso doméstico.",
      price: 120.00,
      image: "./src/img/galao.png",
      category: "gas"
    },
    {
      id: 2,
      name: "Botijão de Gás P45",
      description: "Botijão de 45kg para uso comercial ou residencial de alto consumo.",
      price: 360.00,
      image: "https://images.unsplash.com/photo-1585803114088-cd027272106a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "gas"
    },
    {
      id: 3,
      name: "Água Mineral 20L",
      description: "Galão de água mineral de 20 litros, água pura e cristalina.",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "water"
    },
    {
      id: 4,
      name: "Válvula para Botijão",
      description: "Válvula de segurança para botijões de gás, com certificação INMETRO.",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories"
    },
    {
      id: 5,
      name: "Água Mineral 500ml (Pack)",
      description: "Pack com 12 garrafas de água mineral de 500ml.",
      price: 18.00,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "water"
    },
    {
      id: 6,
      name: "Regulador de Pressão",
      description: "Regulador de pressão para botijões de gás, com mangueira inclusa.",
      price: 35.00,
      image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "accessories"
    }
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const createWhatsAppLink = (product: Product) => {
    const message = encodeURIComponent(`Olá! Gostaria de comprar o produto: ${product.name} por ${formatPrice(product.price)}`);
    return `https://wa.me/5545985990980?text=${message}`;
  };

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossos Produtos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-800">{formatPrice(product.price)}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={createWhatsAppLink(product)} 
                    className="btn-primary flex items-center justify-center bg-green-600 hover:bg-green-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                  <a 
                    href={`tel:+5545985990980`} 
                    className="btn-primary flex items-center justify-center"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;