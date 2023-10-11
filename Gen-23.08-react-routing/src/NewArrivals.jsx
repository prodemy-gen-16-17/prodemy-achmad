import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NewArrivals() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Jaket winter', price: 150, releaseDate: '2023-03-25', image: 'images/model2.png' },
    { id: 2, name: 'Shiny Golden Suit', price: 30, releaseDate: '2023-04-10', image: 'images/baju5.jpg' },
    { id: 3, name: 'Flower Women Suit', price: 70, releaseDate: '2023-03-20', image: 'images/baju7.jpg' },
  ]);


  useEffect(() => {
    // Set produk awal dengan pengurutan dari yang terbaru ke yang paling lama
    const sortedProducts = [...products].sort(
      (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
    );
    setProducts(sortedProducts);
  }, []);

  return (
    <div>
      {/* Isi dari halaman New Arrivals */}
      <div className="bg-white text-center py-4">
        <h1 className="text-3xl font-bold">New Arrivals this Spring Season</h1>
        <p>
          Spring has arrived, we come with fashion choices that are suitable to
          be combined with this season, lots of formal and informal clothes.
        </p>
      </div>

      {/* Daftar produk */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={`${product.name}-${product.releaseDate}`} className="bg-gray-100 p-4 rounded border border-gray-300">
            <img src={product.image} alt={product.name} className="mb-2 rounded-md w-48 h-48" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Release Date: {product.releaseDate}</p>
            {/* Tambahkan tombol "Lihat Detail" dengan link ke halaman detail produk */}
            <Link to={`/product/${product.id}`} className="text-blue-500">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
