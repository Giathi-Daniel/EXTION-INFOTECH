import React, { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router";
// import { auth } from "./firenaseConfig";
import "./Header.css";
import { IoCart, IoClose, IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Cart");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);

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
    console.log(`Scrolling to section: ${sectionId}`);
    if (element) {
      console.log(`Element found: ${element}`);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${sectionId}" not found.`);
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
          <li onClick={() => navigate("/register")} className="login">
            <FaUser className="menus" /> Log in/Sign up
          </li>
          <li onClick={() => navigate("/cart")}>
            <IoCart className="menus" /> {pageState}
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
