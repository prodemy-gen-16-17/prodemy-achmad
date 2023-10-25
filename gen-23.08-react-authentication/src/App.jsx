import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Layout from "./layouts/Layout";
import LoginPage from "./LoginPage";
import Home from './Home';
import NewArrivals from './NewArrivals';
import DetailProduct from './DetailProduct';
import CheckoutForm from './CheckoutForm';
import Cart from './Cart';
import { CheckoutProvider } from './context/CartContext';
import PrivateRoutes from "./components/route/PrivateRoutes";
import GuestRoutes from "./components/route/GuestRoutes";


function App() {

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
          {/* <Link to="/login" className="inline-block py-2 px-4 border border-white rounded">
            Logout
          </Link> */}
          {/* Tambahkan tautan lainnya */}
        </div>

        {/* Akhir Navbar */}

        <Layout>
        <Routes>
        <Route element={<GuestRoutes />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          {/* Rute-rute aplikasi */}
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout/:id" component={CheckoutForm} /> */}
        </Route>
        </Routes>
        </Layout>
       
        
      </div>
    </CheckoutProvider>

  );
}


export default App;

