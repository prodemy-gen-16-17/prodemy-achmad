import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Home from './Home';
import NewArrivals from './NewArrivals';
import DetailProduct from './DetailProduct';
import CheckoutForm from './CheckoutForm';
import Cart from './Cart';
import { CheckoutProvider } from './context/CartContext';


function App() {
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: 'Sweater Jaket Sherpa Coat Saku Zipper',
  //     price: 150,
  //     releaseDate: '2023-03-25',
  //     image: '/images/model2.png',
  //     rating: 5
  //   },
  //   {
  //     id: 2,
  //     name: 'Gaun Panjang Hitam Elegan Gaun Kasual Wanita Lengan Panjang Kain Perca Pinggang Tinggi Gaun Kasual Wanita Korea Chic Jubah Polos Vestidos',
  //     price: 30,
  //     releaseDate: '2023-04-10',
  //     image: '/images/baju5.jpg',
  //     rating: 4
  //   },
  //   {
  //     id: 3,
  //     name: 'Tie Dye Printed T Shirt Women O-neck Short Irregular T Shirt Long Sleeve Sexy Streetwear Tee Vintage Mesh T-shirt Femme',
  //     price: 70,
  //     releaseDate: '2023-03-20',
  //     image: '/images/baju7.jpg',
  //     rating: 4
  //   },
  // ]);
  return (
    <CheckoutProvider>
      <div>
        {/* Navbar */}
        <div className="topnav bg-black text-white text-center">
          <Link to="/" className="inline-block py-2 px-4 border border-white rounded">
            Home
          </Link>
          <Link to="/new-arrivals" className="inline-block py-2 px-4 border border-white rounded">
            New Arrivals
          </Link>
          <Link to="/cart" className="inline-block py-2 px-4 border border-white rounded">
            <FaShoppingCart /> {/* Ganti teks "Cart" dengan ikon cart */}
          </Link>
          {/* Tambahkan tautan lainnya */}
        </div>

        {/* Akhir Navbar */}

        <Routes>
          {/* Rute-rute aplikasi */}
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout/:id" component={CheckoutForm} /> */}
        </Routes>
      </div>
    </CheckoutProvider>
    
  );
}


export default App;

