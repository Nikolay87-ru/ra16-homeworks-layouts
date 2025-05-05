import React from 'react';

type Product = {
  name: string;
  price: string;
  color: string;
  img: string;
};

export const ListView: React.FC<{ items: Product[] }> = ({ items }) => (
  <div className="space-y-2">
    {items.map((product, index) => (
      <div 
        key={index} 
        className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
      >
        <div className="flex-1 min-w-[80px] max-w-[80px]">
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-16 h-16 object-cover rounded"
          />
        </div>

        <div className="flex-1 text-center text-gray-800 font-medium px-2">
          {product.name}
        </div>

        <div className="flex-1 text-center text-gray-600 px-2">
          <span className="capitalize">{product.color}</span>
        </div>

        <div className="flex-1 text-center text-red-500 font-bold px-2">
          ${product.price}
        </div>

        <div className="flex-1 min-w-[120px] text-right">
          <button className="px-4 py-2 rounded-full border-2 border-red-500 text-red-500 font-bold bg-transparent hover:bg-red-500 hover:text-white transition-colors whitespace-nowrap">
            Add to cart
          </button>
        </div>
      </div>
    ))}
  </div>
);