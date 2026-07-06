import React from 'react';
import Button from './ui/Button';

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col p-5">
      <div className="h-56 w-full bg-gray-50 rounded-2xl mb-5 overflow-hidden flex items-center justify-center">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-5 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between mb-5">
          <span className="text-blue-700 font-extrabold text-xl">{product.price} ₼</span>
          {product.stock > 0 ? (
            <span className="bg-green-50 text-green-500 text-xs font-bold px-3 py-1.5 rounded-full">
              In Stock : {product.stock}
            </span>
          ) : (
            <span className="bg-red-50 text-red-400 text-xs font-bold px-3 py-1.5 rounded-full">
              Out of Stock
            </span>
          )}
        </div>
        
        {product.stock > 0 ? (
          <Button variant="primary" className="w-full py-3.5 rounded-xl text-[15px]">
            Add to Cart
          </Button>
        ) : (
          <Button variant="danger" className="w-full py-3.5 rounded-xl text-[15px]">
            Coming Soon
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
