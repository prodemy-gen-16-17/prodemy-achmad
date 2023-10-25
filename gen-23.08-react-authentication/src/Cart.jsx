import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((state) => state.addToCart.cartItems);

  return (
    <div className="w-96 p-4 bg-gray-400 rounded-lg shadow-lg ml-4">
      <h2>Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang belanja kosong</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="flex flex-row items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                <div>
                  <h3>{item.name}</h3>
                  <p>Harga: ${item.price}</p>
                  <p>Jumlah: {item.qty}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
