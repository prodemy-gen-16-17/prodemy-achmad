import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from './StarRating';
import { CheckoutContext } from './context/CartContext';
import useSWR from 'swr';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader'; // Import BeatLoader

const fetcher = (url) => axios.get(url).then((response) => response.data);

function DetailProduct() {
  const { id } = useParams();
  const { setDataCheckout } = useContext(CheckoutContext);
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
    setDataCheckout({
      ...data,
      qty,
    });
    navigate('/checkout');
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
        <StarRating rating={data.rating} />
        <div className="mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 mr-4" onClick={onClickBuyNow}>
            Bayar
          </button>

        </div>

      </div>
    </div>
  );
}

export default DetailProduct;
