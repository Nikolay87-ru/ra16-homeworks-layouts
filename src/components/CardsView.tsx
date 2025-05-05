import React from 'react';

type Product = {
  name: string;
  price: string;
  color: string;
  img: string;
};

export const CardsView: React.FC<{ cards: Product[] }> = ({ cards }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {cards.map((product, index) => (
      <div 
        key={index} 
        className="relative h-80 rounded-lg overflow-hidden shadow-lg group"
      >
        <img 
          src={product.img} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center p-4">
          <h3 className="text-black text-xl font-bold text-center drop-shadow-lg">
            {product.name}
          </h3>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <span className="text-red-500 font-bold text-lg drop-shadow">
            ${product.price}
          </span>
          
          <button className="px-4 py-2 rounded-full border-2 border-red-500 text-red-500 font-bold bg-transparent hover:bg-red-500 hover:text-white transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    ))}
  </div>
);