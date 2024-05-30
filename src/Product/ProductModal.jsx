import React from 'react';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center " onClick={onClose}>
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <button className="mb-4 text-red-500" onClick={onClose}>❌</button>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-500 mb-4">${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
