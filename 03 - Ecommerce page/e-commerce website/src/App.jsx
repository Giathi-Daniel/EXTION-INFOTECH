import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ToastContainer } from 'react-toastify';
import Cart from "./pages/Cart/Cart"

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<Home onAddToCart={handleAddToCart} />} 
        />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              handleQuantityChange={handleQuantityChange} 
              handleRemoveItem={handleRemoveItem} 
            />
          } 
        />
        <Route path="/register" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
