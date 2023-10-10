import React, { useState, useEffect } from 'react';

function NewArrivals() {
  const [products, setProducts] = useState([
    { name: 'Flower Women Suit', price: 150, releaseDate: '2023-03-25', image: 'images/model2.png' },
    { name: 'Jaket Winter', price: 30, releaseDate: '2023-03-10', image: 'images/baju5.jpg' },
    { name: 'Flower Women Suit', price: 70, releaseDate: '2023-03-20', image: 'images/baju7.jpg' },
  ]);

  useEffect(() => {
    // Set produk awal dengan pengurutan dari yang terbaru ke yang paling lama
    const sortedProducts = [...products].sort(
      (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
    );
    setProducts(sortedProducts);
  }, []); // Efek ini hanya dijalankan sekali saat komponen pertama kali di-render

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
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded border border-gray-300"
          >
            {/* Menampilkan gambar */}
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 rounded-md w-48 h-48"
            />
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
