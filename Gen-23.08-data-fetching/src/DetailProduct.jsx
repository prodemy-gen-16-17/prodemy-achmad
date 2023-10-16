import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';
import useSWR from 'swr';
import axios from 'axios';

function DetailProduct() {
  const { id } = useParams();
  const { data: product, error } = useSWR(`http://localhost:3000/products/${id}`, (url) =>
    axios.get(url).then((res) => res.data)
  );

  const availableSizes = ['S', 'M', 'L'];
  
  // Menempatkan semua Hooks di awal fungsi komponen
  const [selectedSize, setSelectedSize] = useState(null);

const handleBayarClick = () => {
    // Tindakan yang akan dijalankan saat tombol "Bayar" diklik
    alert('Anda akan melakukan pembayaran.');
  };

  const handleTaruhDiKeranjangClick = () => {
    // Tindakan yang akan dijalankan saat tombol "Taruh di Keranjang" diklik
    alert('Anda akan menambahkan produk ke keranjang.');
  };

  // ...

  if (error) {
    return <div>Error loading data.</div>;
  }

  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  // Sisanya dari komponen

  return (
    <div className="flex">
      <div className="flex-shrink-0 w-1/2 pr-4">
        <img src={product.image} alt={product.name} width="500" height="200" />
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
        <StarRating rating={product.rating} />
        <div className="mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 mr-4" onClick={handleBayarClick}>
            Bayar
          </button>
          <button className="bg-green-500 text-white py-2 px-4" onClick={handleTaruhDiKeranjangClick}>
            Taruh di Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
