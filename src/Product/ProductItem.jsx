import React from 'react'

const ProductItem = ({product ,onClick}) => {
  return (
    <div className="border p-4 rounded-lg hover:shadow-lg cursor-pointer" onClick={onClick}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-gray-500">${product.price}</p>
    </div>
  )
}

export default ProductItem