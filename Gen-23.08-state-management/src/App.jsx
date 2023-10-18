import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewArrivals from './NewArrivals';
import DetailProduct from './DetailProduct';
import CheckoutForm from './CheckoutForm';
import { Provider } from 'react-redux';
import store from "./store/store";

function Home() {

  return (

    <div>
      <div div className="bg-white p-4 text-center" >
        <h1 className="text-4xl font-bold break-words">Luxurious Executive Model</h1>
        <p className="break-words">Fashion is a form of self-expression and autonomy for a certain period. Fashion
          describes the expression of self and increases self-confidence</p>
      </div>


      <div className="bg-white text-center">
        <img src="images/model8.png" alt="Gambar 1" className="max-w-45% mx-10 inline-block" />
        <img src="images/model9.png" alt="Gambar 3" className="max-w-45% mx-10 inline-block" />
        <img src="images/model11.png" alt="Gambar 2" className="max-w-45% mx-10 inline-block" />
      </div>
      <div>
        <div className="bg-white text-center py-4">
          <h1 className="text-3xl font-bold">New Arrivals this Spring Season</h1>
          <p>Spring has arrived, we come with fashion choices that are suitable to be combined with this season, lots
            of formal and informal clothes.</p>
        </div>

        <div className="bg-white flex justify-center space-x-4 py-4">
          <figure>
            <img src="images/baju4.jpg" alt="Gambar 1" className="max-w-full h-auto" />
            <figcaption className="text-lg font-semibold">Black women Suit</figcaption>
            <figcaption className="text-xl font-bold">$123</figcaption>
          </figure>
          <figure>
            <img src="images/baju5.jpg" alt="Gambar 2" className="max-w-full h-auto" />
            <figcaption className="text-lg font-semibold">Shiny Golden Suit</figcaption>
            <figcaption className="text-xl font-bold">$200</figcaption>
          </figure>
          <figure>
            <img src="images/baju6.jpg" alt="Gambar 3" className="max-w-full h-auto" />
            <figcaption className="text-lg font-semibold">Black Formal Set</figcaption>
            <figcaption className="text-xl font-bold">$85</figcaption>
          </figure>
          <figure>
            <img src="images/baju7.jpg" alt="Gambar 4" className="max-w-full h-auto" />
            <figcaption className="text-lg font-semibold">Flower Women Suit</figcaption>
            <figcaption className="text-xl font-bold">$133</figcaption>
          </figure>
        </div>

        <div className="bg-white py-4">
          <img src="images/model1.png" alt="" className="w-full h-auto" />
        </div>

        <div className="bg-white text-center py-4">
          <h1 className="text-3xl font-bold">Last previous collection</h1>
          <p>The last stock from the previous season, we still provide last season for those of you.</p>
        </div>

        <div className="bg-white flex justify-center space-x-4 py-4">
          <figure>
            <img src="images/model2.png" alt="Gambar 1" className="max-w-full h-auto" />
            <figcaption className="text-lg font-semibold">Previous Winter Season</figcaption>
          </figure>
          <figure>
            <img src="images/model3.png" alt="Gambar 2" className="max-w-full h-auto" />
            <figcaption className="text-lg font-semibold">Previous Summer Season</figcaption>
          </figure>
        </div>

        <div id="carouselExampleControls" className="relative" data-te-carousel-init data-te-ride="carousel">
          {/* Carousel items */}
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/* First item */}
            <div className="relative float-left -mr-[100%] w-80 ml-auto my-4 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item data-te-carousel-active>
              <img src="images/korosel2.jpeg" className="block w-full" alt="Wild Landscape" />
            </div>
            {/* Second item */}
            <div className="relative float-left -mr-[100%] hidden w-80 ml-auto my-4 duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item>
              <img src="images/korosel1.jpeg" className="block w-full" alt="Camera" />
            </div>
            <div className="bg-slate-400 text-center py-4">
              <p>Summer Collection</p>
              <h1 className="text-3xl font-bold">Black Turtle Sec Skin</h1>
              <p>This shirt shows your body shape perfectly,with good summer materials.</p>
              <h1 className="text-3xl font-bold">$450</h1>
              <p>wa've 3 color for you.</p>

              <div className="w-8 h-8 mx-auto mt-4 bg-red-500 border border-black cursor-pointer inline-block"
                onClick={onClickKotakMerah}></div>


              <div className="w-8 h-8 mx-auto mt-4 bg-white border border-black cursor-pointer inline-block"
                onClick={onClickKotakPutih}></div>


              <div className="w-8 h-8 mx-auto mt-4 bg-black border border-black cursor-pointer inline-block"
                onClick={onClickKotakHitam}></div>

              <p>wa've some size for you.</p>

              <div className="text-center py-4">

                <div className="w-8 h-8 mx-auto mt-4 bg-white border border-black cursor-pointer inline-block relative"
                  onClick={onClickKotakS}>
                  <span
                    className="text-black absolute inset-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-black">S</span>
                </div>


                <div className="w-8 h-8 mx-auto mt-4 bg-white border border-black cursor-pointer inline-block relative"
                  onClick={onClickKotakM}>
                  <span
                    className="text-black absolute inset-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-black">M</span>
                </div>


                <div className="w-8 h-8 mx-auto mt-4 bg-white border border-black cursor-pointer inline-block relative"
                  onClick={onClickKotakL}>
                  <span
                    className="text-black absolute inset-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-black">L</span>
                </div>


                <div className="w-8 h-8 mx-auto mt-4 bg-white border border-black cursor-pointer inline-block relative"
                  onClick={onClickKotakXL}>
                  <span
                    className="text-black absolute inset-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-black">XL</span>
                </div>

                <div className="text-center">
                  <div className="w-24 h-8 mx-auto mt-4 bg-white border border-black cursor-pointer inline-block relative"
                    onClick={onClickKotakCart}>
                    <span
                      className="text-black absolute inset-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-black">Go
                      to cart</span>
                  </div>


                  <div className="w-24 h-8 mx-auto mt-4 bg-white border border-black cursor-pointer inline-block relative"
                    onClick={onClickKotakSave}>
                    <span
                      className="text-black absolute inset-0 flex items-center justify-center transition-colors duration-300 ease-in-out hover:text-black">Save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls - prev item */}
          <button
            className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center bg-transparent text-white hover:text-black focus:text-black focus:outline-none"
            type="button" data-te-target="#carouselExampleControls" data-te-slide="prev">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" className="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Carousel controls - next item */}
          <button
            className="absolute right-0 top-0 w-12 h-12 flex items-center justify-center bg-transparent text-white hover:text-black focus:text-black focus:outline-none"
            type="button" data-te-target="#carouselExampleControls" data-te-slide="next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" className="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>


      </div>

      <div className="bg-white text-center py-4">
        <h1 className="text-3xl font-bold">Top lookbook 2022</h1>
        <p>You can see our lookbook, from several seasons you can see how models use our products.</p>
      </div>

      <div className="bg-white flex justify-center space-x-4 py-4">
        <figure>
          <img src="images/model4.png" alt="Gambar 1" className="max-w-full h-auto" />
          <figcaption className="text-lg font-semibold">Formal lookbook</figcaption>
        </figure>
        <figure>
          <img src="images/model5.png" alt="Gambar 2" className="max-w-full h-auto" />
          <figcaption className="text-lg font-semibold">Summer lookbook</figcaption>
        </figure>
        <figure>
          <img src="images/model6.png" alt="Gambar 3" className="max-w-full h-auto" />
          <figcaption className="text-lg font-semibold">Spring lookbook</figcaption>
        </figure>
      </div>

      <div className="bg-white p-4 text-center">
        <h1 className="text-3xl font-bold">Our Customer Testimonials</h1>
        <p>Our brand is very trusted, you can see from some of the reviews of some of our customers.</p>
        <ul className="mt-4">
          <li className="bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-md">
            "I really like this brand, the design looks elegant and very comfortable to wear, and I often wear
            it."
            <span className="text-yellow-500">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
          </li>
          <li className="bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-md">
            "I like this brand, this brand always keeps up with the times and the models are not marketable look
            exclusive"
            <span className="text-yellow-500">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
          </li>
          <li className="bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-md">
            "All the materials used are very comfortable and look very good when worn."
            <span className="text-yellow-500">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 flex items-center space-x-4">
        <img src="images/model7.png" alt="" className="max-w-full h-auto" />
        <div>
          <h1 className="text-3xl font-bold">Join Our Community</h1>
          <p>We have the community to share more information about us. To get our promo, you can leave your email
            address in the form below.</p>
        </div>
        <div className="email-input">
          <input type="text" placeholder="Email address" name="mail" required
            className="border border-gray-300 px-2 py-1 rounded" />
        </div>
      </div>
    </div>

  );
}

function App() {
  // Inisialisasi data produk di komponen App
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Sweater Jaket Sherpa Coat Saku Zipper',
      price: 150,
      releaseDate: '2023-03-25',
      image: '/images/model2.png',
      rating: 5
    },
    {
      id: 2,
      name: 'Gaun Panjang Hitam Elegan Gaun Kasual Wanita Lengan Panjang Kain Perca Pinggang Tinggi Gaun Kasual Wanita Korea Chic Jubah Polos Vestidos',
      price: 30,
      releaseDate: '2023-04-10',
      image: '/images/baju5.jpg',
      rating: 4
    },
    {
      id: 3,
      name: 'Tie Dye Printed T Shirt Women O-neck Short Irregular T Shirt Long Sleeve Sexy Streetwear Tee Vintage Mesh T-shirt Femme',
      price: 70,
      releaseDate: '2023-03-20',
      image: '/images/baju7.jpg',
      rating: 4
    },
    // Tambahkan produk lainnya
  ]);
  return (
    <Provider store={store}>
      <Router>
      <div>
        {/* Navbar */}
        <div className="topnav bg-black text-white text-center">
          <Link to="/" className="inline-block py-2 px-4 border border-white rounded">
            Home
          </Link>
          <Link to="/new-arrivals" className="inline-block py-2 px-4 border border-white rounded">
            New Arrivals
          </Link>
          {/* Tambahkan tautan lainnya */}
        </div>

        {/* Akhir Navbar */}

        <Routes>
          {/* Rute-rute aplikasi */}
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivals products={products} />} />
          <Route path="/product/:id" element={<DetailProduct products={products} />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </div>
    </Router>
    </Provider>
    
  );
}


// Definisi fungsi onClickKotakMerah
export const onClickKotakMerah = () => {
  // Implementasi tindakan yang seharusnya dilakukan ketika kotak merah diklik 
  alert('Kotak Merah diklik');
}

// Definisi fungsi onClickKotakPutih
export const onClickKotakPutih = () => {
  // Implementasi tindakan yang seharusnya dilakukan ketika kotak putih diklik
  alert('Kotak Putih diklik');
}

// Definisi fungsi onClickKotakHitam
export const onClickKotakHitam = () => {
  // Implementasi tindakan yang seharusnya dilakukan ketika kotak hitam diklik
  alert('Kotak Hitam diklik');
}

export const onClickKotakS = () => {
  // Implementasi tindakan yang seharusnya dilakukan ketika kotak S diklik
  alert('Kotak S diklik');
}

export const onClickKotakM = () => {
  // Implementasi tindakan yang seharusnya dilakukan ketika kotak m diklik
  alert('Kotak M diklik');
}

export const onClickKotakL = () => {
  // Implementasi tindakan yang seharusnya dilakukan ketika kotak l diklik
  alert('Kotak L diklik');
}

export const onClickKotakXL = () => {
  // Implementasi tindakan yang seharusnya dilakukan ketika kotak xl diklik
  alert('Kotak XL diklik');
}

export const onClickKotakCart = () => {
  // Implementasi tindakan yang seharusnya dilakukan ketika kotak Cart diklik
  alert('Kotak Cart diklik');
}

export const onClickKotakSave = () => {
  // Implementasi tindakan yang seharusnya dilakukan ketika kotak Save diklik
  alert('Kotak Save diklik');
}

export default App;
