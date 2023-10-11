import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailProduct({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const availableSizes = ['S', 'M', 'L'];

  return (
    <div className="flex">
      <div className="flex-shrink-0 w-1/2 pr-4">
        <img src={product.image} alt={product.name}  width="500" height="200"/>
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <h1 className="text-1xl font-bold">${product.price}</h1>
        <div className="flex space-x-4 mt-4">
          {availableSizes.map((size) => (
            <div
              key={size}
              className={`w-8 h-8 bg-white border border-black cursor-pointer ${
                selectedSize === size ? 'bg-gray-300' : ''
              }`}
              onClick={() => handleSizeClick(size)}
            >
              <span className="text-black flex items-center justify-center">
                {size}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
