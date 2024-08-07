import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./Header.css";
import { IoCart, IoClose, IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (e) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header>
      <div className="header__container">
        <ul className="nav__links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/features")}>Features</li>
          <li onClick={() => navigate("/prodcuts")}>Our Products</li>
          <li onClick={() => navigate("/collection")}>Collection</li>
        </ul>
        <div className="logo" onClick={() => navigate("/")}>
          BestShop
        </div>
        <div className="nav__menus">
          <li onClick={() => navigate("/register")} className="login">
            <FaUser className="menus" /> Log in/Sign up
          </li>
          <li onClick={() => navigate("/cart")}>
            <IoCart className="menus" /> Cart
          </li>
        </div>
        <div className={`mobile__nav ${isMobileMenuOpen ? "open" : ""}`}>
          {isMobileMenuOpen ? (
            <IoClose id="menuClose" onClick={toggleMobileMenu} />
          ) : (
            <IoMenu id="menuOpen" onClick={toggleMobileMenu} />
          )}
        </div>
        <div
          className={`mobile__menu ${isMobileMenuOpen ? "open" : ""}`}
          ref={mobileMenuRef}
        >
          <ul>
            <li
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/features");
                setMobileMenuOpen(false);
              }}
            >
              Features
            </li>
            <li
              onClick={() => {
                navigate("/products");
                setMobileMenuOpen(false);
              }}
            >
              Our Products
            </li>
            <li
              onClick={() => {
                navigate("/collection");
                setMobileMenuOpen(false);
              }}
            >
              Collection
            </li>
            <li
              onClick={() => {
                navigate("/sign-in");
                setMobileMenuOpen(false);
              }}
            >
              <FaUser className="menus" /> Login
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
