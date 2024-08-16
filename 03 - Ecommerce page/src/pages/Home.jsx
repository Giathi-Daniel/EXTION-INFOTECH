import React, { useState, useEffect } from "react";
import "../css/Home.css";
import { toast } from "react-toastify";
import Hero from "../components/Hero";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { db } from "../../firebase";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Assets imports
import shipping from "../assets/shipping.png";
import money from "../assets/money.png";
import safe from "../assets/safe.png";
import online from "../assets/online.png";
import computer from "../assets/categories/computers.png";
import headphone from "../assets/categories/headphones.png";
import phone from "../assets/categories/smartphones.png";
import tv from "../assets/categories/tv-audio.png";
import laptop from "../assets/categories/laptops.png";
import r1 from "../assets/1.png";

const Home = () => {
  const [productsOne, setProductsOne] = useState([]);
  const [productsTwo, setProductsTwo] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsOneCollection = collection(db, "productsOne");
        const productsTwoCollection = collection(db, "productsTwo");
        const productsOneSnapshot = await getDocs(productsOneCollection);
        const productsTwoSnapshot = await getDocs(productsTwoCollection);
        setProductsOne(productsOneSnapshot.docs.map((doc) => doc.data()));
        setProductsTwo(productsTwoSnapshot.docs.map((doc) => doc.data()));
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAddToCart = async (product) => {
    if (!user) {
      toast.error("You must be logged in to add items to the cart.");
      return;
    }

    try {
      const userCartRef = doc(db, "carts", user.uid);
      const cartDoc = await getDoc(userCartRef);
      let updatedCart;

      if (cartDoc.exists()) {
        const cartData = cartDoc.data().items || [];
        const existingProductIndex = cartData.findIndex(
          (item) => item.id === product.id
        );

        if (existingProductIndex > -1) {
          cartData[existingProductIndex].quantity += 1;
        } else {
          cartData.push({ ...product, quantity: 1 });
        }

        updatedCart = cartData;
      } else {
        updatedCart = [{ ...product, quantity: 1 }];
      }

      await setDoc(userCartRef, { items: updatedCart }, { merge: true });
      toast.success("Item added to cart");
    } catch (error) {
      console.error("Error adding to cart: ", error);
      toast.error("Failed to add item to cart");
    }
  };

  return (
    <div className="home__container">
      <section id="home">
        <Hero />
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
        <div className="collection__container">
          {productsTwo.map((product) => (
            <div key={product.id} className="custom__product">
              <img src={product.imgSrc} alt={product.desc} />
              <div className="product__desc">
                <div className="product__details">
                  <p dangerouslySetInnerHTML={{ __html: product.desc }}></p>
                  <div className="product__listing">
                    <span
                      className="price"
                      dangerouslySetInnerHTML={{ __html: product.price }}
                    ></span>
                  </div>
                </div>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, index) => {
                    const ratingValue = index + 0.5;
                    return (
                      <span key={index}>
                        {product.rating >= index + 1 ? (
                          <FaStar className="icon" />
                        ) : product.rating >= ratingValue ? (
                          <FaStarHalfAlt className="icon" />
                        ) : (
                          <FaRegStar className="icon" />
                        )}
                      </span>
                    );
                  })}
                </div>
                <button type="submit" onClick={() => handleAddToCart(product)}>
                  add to cart
                </button>
              </div>
            </div>
          ))}
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
        <div className="collection__container">
          {productsOne.map((product) => (
            <div key={product.id} className="custom__product">
              <img src={product.imgSrc} alt={product.desc} />
              <div className="product__desc">
                <div className="product__details">
                  <p dangerouslySetInnerHTML={{ __html: product.desc }}></p>
                  <div className="product__listing">
                    <span
                      className="price"
                      dangerouslySetInnerHTML={{ __html: product.price }}
                    ></span>
                  </div>
                </div>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, index) => {
                    const ratingValue = index + 0.5;
                    return (
                      <span key={index}>
                        {product.rating >= index + 1 ? (
                          <FaStar className="icon" />
                        ) : product.rating >= ratingValue ? (
                          <FaStarHalfAlt className="icon" />
                        ) : (
                          <FaRegStar className="icon" />
                        )}
                      </span>
                    );
                  })}
                </div>
                <button type="submit" onClick={() => handleAddToCart(product)}>
                  add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
