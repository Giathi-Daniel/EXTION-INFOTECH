import React, { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "../css/Header.css";
import { IoCart, IoClose, IoMenu } from "react-icons/io5";
import { FaShoppingBasket, FaUser } from "react-icons/fa";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
  }, [auth]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setIsAuthenticated(false);
      navigate("/");
    });
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="header__container">
        <ul className="nav__links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => scrollToSection("categories")}>Category</li>
          <li onClick={() => scrollToSection("products")}>Our Products</li>
          <li onClick={() => scrollToSection("collection")}>Collection</li>
        </ul>
        <div className="logo" onClick={() => navigate("/")}>
          SmartShop
        </div>
        <div className="nav__menus">
          {isAuthenticated ? (
            <>
              <li onClick={() => navigate("/cart")}>
                <FaShoppingBasket className="menus" />
                Cart
              </li>
              <li onClick={() => navigate("/profile")}>
                <FaUser className="menus" />
              </li>
              <button onClick={handleLogout} className="logout__button">
                Log out
              </button>
            </>
          ) : (
            <>
              <li className="login">
                <Link to="/sign-in">Log in</Link>/
                <Link to="/sign-up">Sign up</Link>
              </li>
            </>
          )}
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
                scrollToSection("#");
                setMobileMenuOpen(false);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                scrollToSection("categories");
                setMobileMenuOpen(false);
              }}
            >
              Category
            </li>
            <li
              onClick={() => {
                scrollToSection("products");
                setMobileMenuOpen(false);
              }}
            >
              Our Products
            </li>
            <li
              onClick={() => {
                scrollToSection("collection");
                setMobileMenuOpen(false);
              }}
            >
              Collection
            </li>
            {isAuthenticated ? (
              <li
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                  className = "logout_btn";
                }}
              >
                Log out
              </li>
            ) : (
              <li
                onClick={() => {
                  navigate("/sign-in");
                  setMobileMenuOpen(false);
                }}
              >
                <FaUser className="menus" /> Login
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
