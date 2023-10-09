import React, { useState } from 'react';

function NewArrivals() {
  const [products, setProducts] = useState([
    { name: 'Product A', price: 50, releaseDate: '2023-03-15' },
    { name: 'Product B', price: 30, releaseDate: '2023-03-10' },
    { name: 'Product C', price: 70, releaseDate: '2023-03-20' },
  ]);

  const sortProducts = (sortBy) => {
    if (sortBy === 'price') {
      // Sorting by price (ascending order)
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (sortBy === 'releaseDate') {
      // Sorting by release date (newest to oldest)
      const sortedProducts = [...products].sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
      setProducts(sortedProducts);
    }
  };

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

      {/* Tombol untuk mengurutkan produk */}
      <div className="my-4 text-center">
        <button
          onClick={() => sortProducts('price')}
          className="border border-red-300 rounded px-4 py-2 mr-2"
        >
          Sort by Price
        </button>
        <button
          onClick={() => sortProducts('releaseDate')}
          className="border border-blue-300 rounded px-4 py-2"
        >
          Sort by Release Date
        </button>
      </div>

      {/* Daftar produk */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded border border-gray-300"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Release Date: {product.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
