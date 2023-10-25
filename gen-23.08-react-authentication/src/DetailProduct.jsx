import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

import useSWR from 'swr';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import { checkoutBooking } from "./store/reducers/checkoutSlice";
import { addToCart } from "./store/reducers/addToCart";


const fetcher = (url) => axios.get(url).then((response) => response.data);

function DetailProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading, error } = useSWR(
    `http://localhost:3000/products/${id}`,
    fetcher
  );

  const availableSizes = ['S', 'M', 'L'];
  const [selectedSize, setSelectedSize] = useState(null);
  
  if (isLoading) return <BeatLoader color="#38BDF8" />; // Render the loader while loading

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };


  const handleSizeClick = (size) => {
    setSelectedSize(size);
    console.log(`Ukuran terpilih: ${size}`);
  };

  const onClickBuyNow = () => {
    dispatch(checkoutBooking({ ...data, qty }));
    navigate("/checkout");
  };

  const onClickAddToCart = () => {
    dispatch(addToCart({ ...data, qty }));
    navigate("/cart");
  };



  if (error) {
    return <div>Error loading data.</div>;
  }



  return (
    <div className="flex">
      <div className="flex-shrink-0 w-1/2 pr-4">
        <img src={data.image} alt={data.name} width="500" height="200" />
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p>{data.description}</p>
        <h1 className="text-1xl font-bold">${data.price}</h1>
          <StarRating rating={data.rating} />
        <div className="flex space-x-4 mt-4">
          {availableSizes.map((size) => (
            <div
              key={size}
              className={`w-8 h-8 bg-white border border-black cursor-pointer ${selectedSize === size ? 'bg-gray-300' : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              <span className="text-black flex items-center justify-center">
                {size}
              </span>
            </div>
          ))}
        </div>

        <p>{data.description}</p>
          <span className="text-1xl font-bold">Quantity</span>
          <div className="flex flex-row h-10 rounded-lg bg-transparent mt-1">
            <button
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none text-2xl font-thin"
              onClick={decrementQty}
            >
              −
            </button>
            <input
              type="number"
              className="outline-none focus:outline-none text-center bg-gray-300 w-20 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="qty"
              value={qty}
              disabled
            />
            <button
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer text-2xl font-thin"
              onClick={incrementQty}
            >
              +
            </button>
          </div>

        <div className="mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 mr-4" onClick={onClickBuyNow}>
            Bayar
          </button>
          <button className="bg-green-500 text-white py-2 px-4" onClick={onClickAddToCart}>
            Tambah ke Keranjang
          </button>

        </div>

      </div>
    </div>
  );
}

export default DetailProduct;
