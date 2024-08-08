import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ToastContainer } from 'react-toastify';

function App() {
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
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
