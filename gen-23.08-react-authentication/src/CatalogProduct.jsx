// CatalogProduct.jsx
import useSWR from 'swr';
import axios from 'axios';

function CatalogProduct() {
  const { data: products, error } = useSWR('http://localhost:3000/products', (url) =>
    axios.get(url).then((res) => res.data)
  );

  if (error) {
    return <div>Error loading data.</div>;
  }

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Catalog Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogProduct;