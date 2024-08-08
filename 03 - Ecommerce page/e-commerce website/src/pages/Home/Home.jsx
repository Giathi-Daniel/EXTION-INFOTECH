import React, { useState } from "react";
import "./Home.css";
import shipping from "../../assets/shipping.png";
import money from "../../assets/money.png";
import safe from "../../assets/safe.png";
import online from "../../assets/online.png";
import computer from "../../assets/categories/computers.png";
import headphone from "../../assets/categories/headphones.png";
import phone from "../../assets/categories/smartphones.png";
import tv from "../../assets/categories/tv-audio.png";
import laptop from "../../assets/categories/laptops.png";
import r1 from "../../assets/1.png";
import { productsOne, productsTwo } from "../../ProductsData";
import ProductSlider from "../../components/ProductSlider";
import { toast } from "react-toastify";

const Home = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Item added to cart");
  };

  return (
    <div className="home__container">
      <section id="#">
        <h2>Home</h2>
      </section>

      {/* HOME FEATURES */}
      <div className="home__features">
        <div className="feature">
          <img src={shipping} alt="" />
          <div className="feature__desc">
            <p>Fast & Free Shipping</p>
            <span>on all orders $99</span>
          </div>
        </div>
        <div className="feature">
          <img src={money} alt="" />
          <div className="feature__desc">
            <p>100% Money Guarantee</p>
            <span>30 days money back</span>
          </div>
        </div>
        <div className="feature">
          <img src={safe} alt="" />
          <div className="feature__desc">
            <p>Safe Shopping</p>
            <span>Safe Shopping Guarantee</span>
          </div>
        </div>
        <div className="feature">
          <img src={online} style={{ inlineSize: "5rem" }} alt="" />
          <div className="feature__desc">
            <p>Online Support</p>
            <span>24/24 on day</span>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section id="categories">
        <h2>Category</h2>
        <div className="categories__container">
          <div className="category">
            <img src={computer} alt="" />
            <p>Computers</p>
          </div>
          <div className="category">
            <img src={headphone} alt="" style={{ blockSize: "14.5rem" }} />
            <p>Headphones</p>
          </div>
          <div className="category">
            <img src={laptop} alt="" style={{ blockSize: "14.5rem" }} />
            <p>Laptops</p>
          </div>
          <div className="category">
            <img src={tv} alt="" />
            <p>TV & Audio</p>
          </div>
          <div className="category">
            <img src={phone} alt="" />
            <p>Smartphones</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products">
        <h2>Products</h2>
        <div className="products__container">
          <ProductSlider products={productsOne} onAddToCart={handleAddToCart} />
        </div>
      </section>

      {/* RECOMMENDED */}
      <div className="recommend">
        <div>
          <div className="text">
            <h1>Samsung Galaxy Tab</h1>
            <p>Innovation security in your family</p>
            <button type="button" className="btn">
              shop now
            </button>
          </div>
          <img src={r1} alt="" />
        </div>
        <div>
          <div className="text">
            <h1>Smart watch (black camo)</h1>
            <p>Military Smart Watch for Men with Text and Call</p>
            <button type="button" className="btn">
              shop now
            </button>
          </div>
          <img
            src="https://m.media-amazon.com/images/I/81cnleCCA+L._AC_SX300_SY300_.jpg"
            alt="military watch"
          />
        </div>
      </div>

      {/* COLLECTION */}
      <section id="collection">
        <h2>Collection</h2>
        <div className="products__container">
          <ProductSlider products={productsTwo} onAddToCart={handleAddToCart} />
        </div>
      </section>
    </div>
  );
};

export default Home;
