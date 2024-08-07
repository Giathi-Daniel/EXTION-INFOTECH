import React from "react";
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

const Home = () => {
  return (
    <div className="home__container">
      <section id="#">
        <h2>Home</h2>
      </section>
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
          <img src={safe} style={{ inlineSize: "4rem" }} alt="" />
          <div className="feature__desc">
            <p>Safe Shopping</p>
            <span>Safe Shopping Guarantee</span>
          </div>
        </div>
        <div className="feature">
          <img src={online} style={{ inlineSize: "3rem" }} alt="" />
          <div className="feature__desc">
            <p>Online Support</p>
            <span>24/24 on day</span>
          </div>
        </div>
      </div>
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
      <section id="products">
        <h2>Products</h2>
        <div className="products__container">
          <div className="product">
            
          </div>
        </div>
      </section>
      <section id="collection">
        <h2>Collection</h2>
      </section>
    </div>
  );
};

export default Home;
