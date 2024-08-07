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
import r1 from "../../assets/1.png";

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
            <img
              src="https://m.media-amazon.com/images/I/51eAhFCg5mL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>ZIHNIC Bluetooth Headphones</p>
              <div className="price__listing">
                <span className="price">
                  $21<sup>59</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/715+h4zA3RL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>Lenovo Newest V15 G4 Business Laptop</p>
              <div className="price__listing">
                <span className="price">
                  $699<sup>00</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/81-WrIFjNiL._AC_SX679_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>INSIGNIA 42 Inches</p>
              <div className="price__listing">
                <span className="price">
                  $179<sup>99</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/81e2ShBp4YL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>10" 800W Slim UnderSeat Powered Car Subwoofer</p>
              <div className="price__listing">
                <span className="price">
                  $138<sup>99</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/71-EnPs+uQL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>Galaxy S24 Ultra Cell Phone, 256GB AI Samrtphone</p>
              <div className="price__listing">
                <span className="price">
                  $1,249<sup>00</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          {/* <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/71KoNxTw3qL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>SAMSUNG 27-Inch Odyssey G6</p>
              <div className="price__listing">
                <span className="price">
                  $801<sup>70</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/61hhulNlPYL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>TOSHIBA 50-inch Class C350 Series LED 4K UHD</p>
              <div className="price__listing">
                <span className="price">
                  $229<sup>99</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/81gr1RWdLXL._AC_UY327_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>16 Inch Laptop Computer, Gaming Laptop</p>
              <div className="price__listing">
                <span className="price">
                  $399<sup>99</sup>
                </span>
                $413.00
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/61VhJEchChL._AC_UL480_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>TP-Link Tapo Pan/Tilt Security Camera for Baby Monitor</p>
              <div className="price__listing">
                <span className="price">
                  $27<sup>15</sup>
                </span>
                $29.98
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/717y1WgiC7L._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>Fachixy [2024 New] FC200 Gaming Headset with Mic</p>
              <div className="price__listing">
                <span className="price">
                  $22<sup>94</sup>
                </span>
                $39.98
              </div>
              <button type="button">add to cart</button>
            </div>
          </div> */}
        </div>
      </section>
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
      <section id="collection">
        <h2>Collection</h2>
        <div className="products__container">
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/71lI0RJAInL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>
                Large Print Backlit Keyboard, Quiet USB Wired Computer Keyboard
              </p>
              <div className="price__listing">
                <span className="price">
                  $28<sup>99</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/61P9FlT2gCL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>GEEKERA 3 in 1 Mauretic Wireless Charging Station</p>
              <div className="price__listing">
                <span className="price">
                  $35<sup>99</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/81kKfnnHeuL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>
                Razer Wolverine Ultimate Officially Licensed Xbox One Controller
              </p>
              <div className="price__listing">
                <span className="price">
                  $68<sup>94</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/61tZ4yQcGgL._AC_SX425_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>ZOSI H.265+ 3K 5MP Lite AI Home Security Camera System </p>
              <div className="price__listing">
                <span className="price">
                  $109<sup>99</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
          <div className="product">
            <img
              src="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL480_FMwebp_QL65_.jpg"
              alt=""
            />
            <div className="product__desc">
              <div className="stars"></div>
              <p>Logitech G502 Hero High Performance Wired Gaming Mouse</p>
              <div className="price__listing">
                <span className="price">
                  $44<sup>50</sup>
                </span>
              </div>
              <button type="button">add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
