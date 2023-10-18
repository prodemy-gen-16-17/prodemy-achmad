import React, { useState, useEffect } from 'react';
import SummaryOrder from './SummaryOrder';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products') 
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          {/* Kirim data produk sebagai prop ke SummaryOrder */}
          <SummaryOrder product={productData} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;