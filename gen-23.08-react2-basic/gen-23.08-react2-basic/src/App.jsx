import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* awal navbar */}
        <div className="topnav">
            <a className="active" href="#">Femworld</a>
            <a href="#">New Arrivals</a>
            <a href="#">All Product</a>
            <a href="#">Blogs</a>
            <a href="#">Contact Us</a>
            <a href="#" className="logo-search">Logo Search</a>
            <a href="#" className="get-started">Get Started</a>
        </div>
        {/* akhir navbar */}

        {/* awal content */}
        <div className="description">
            <h1>Luxurious Executive Model</h1>
            <p>Fashion is a form of self. expression and autonomy for a certain period. fashion describes the expression
                of self and increase self-confidence</p>
        </div>

        <div className="image-container">
            <img src="images/model8.png" alt="Gambar 1"/>
            <img src="images/model9.png" alt="Gambar 3"/>
            <img src="images/model11.png" alt="Gambar 2"/>

        </div>

        <div className="new_arivals">
            <h1>New Arrivals this Spring Season</h1>
            <p>Spring has arrived, we come with fashion choices that are suitable to be combined with this season, lots
                of formal and informal clothes.</p>

        </div>

        <div className="image">
            <figure>
                <img src="images/baju4.jpg" alt="Gambar 1"/>
                <figcaption>Black women Suit</figcaption>
                <figcaption>$123</figcaption>
            </figure>
            <figure>
                <img src="images/baju5.jpg" alt="Gambar 2"/>
                <figcaption>Shiny Golden Suit</figcaption>
                <figcaption>$200</figcaption>
            </figure>
            <figure>
                <img src="images/baju6.jpg" alt="Gambar 3"/>
                <figcaption>Black Formal Set</figcaption>
                <figcaption>$165</figcaption>
            </figure>
            <figure>
                <img src="images/baju7.jpg" alt="Gambar 4"/>
                <figcaption>Flower Women Suit</figcaption>
                <figcaption>$133</figcaption>
            </figure>
        </div>

        <div className="model1">
            <img src="images/model1.png" alt=""/>
        </div>

        <div className="new_arivals2">
            <h1>Last previous collection</h1>
            <p>The last stock from the previous season, we still provide last season for those of you.</p>
        </div>

        <div className="image2">
            <figure>
                <img src="images/model2.png" alt="Gambar 1"/>
                <figcaption>Previous Winter Season</figcaption>
            </figure>
            <figure>
                <img src="images/model3.png" alt="Gambar 2"/>
                <figcaption>Previous Summer Season</figcaption>
            </figure>

        </div>

        <div className="top">
            <h1>Top lookbook 2022</h1>
            <p>You can see our lookbook, from several seasons you can see how models use our products.</p>
        </div>

        <div className="image3">
            <figure>
                <img src="images/model4.png" alt="Gambar 1"/>
                <figcaption>Formal lookbook</figcaption>
            </figure>
            <figure>
                <img src="images/model5.png" alt="Gambar 2"/>
                <figcaption>Summer lookbook</figcaption>
            </figure>
            <figure>
                <img src="images/model6.png" alt="Gambar 3"/>
                <figcaption>Spring lookbook</figcaption>
            </figure>
        </div>

        <div className="customer">
            <h1>Our Customer Testimonials</h1>
            <p>Our brand is very trusted, you can see from some of the reviews of some of our customers.</p>
            <ul className="ul-test">
                <li className="li-test">
                    "I really like this brand, the design looks elegant and very comfortable to wear, and I often wear
                    it."
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </li>
                <li className="li-test">
                    "I like this brand, this brand always keeps up with the times and the models are not marketable look
                    exclusive"
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>

                </li>
                <li className="li-test">
                    "All the materials used are very comfortable and look very good when worn."
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>

                </li>
            </ul>
        </div>

        <div className="container">
            <img src="images/model7.png" alt=""/>
            <div className="content">
                <h1>Join Our Community</h1>
                <p>We have the community to share more information about us. To get our promo, you can leave your email
                    address in the form below.</p>
            </div>
            <input type="text" placeholder="Email address" name="mail" required/>
        </div>

        {/* akhir content */}

    </div>
    </>
  )
}

export default App
