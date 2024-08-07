import React from "react";
import {
  FaLinkedinIn,
  FaPinterest,
  FaGooglePlusG,
  FaTwitter,
  FaFacebookF,
  FaHome,
  FaPhone,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__about">
        <h1 className="footer__title">About Store</h1>
        <div className="footer__contact">
          <p className="footer__address">
            <FaHome className="footer__icons"/> No 40 Nairobi Mfangano Street 133/2{" "}
          </p>
          <p className="footer__address">
            <CiMail className="footer__icons"/> Customer@example.com{" "}
          </p>
          <p className="footer__address">
            <FaPhone className="footer__icons"/> (+254) 743893800 - (+234) 994323983{" "}
          </p>
          <p className="footer__address">
            <IoMdTime className="footer__icons"/> Open Time: 8:00AM - 6:00PM{" "}
          </p>
        </div>
      </div>
      <div className="footer__services">
        <h1 className="footer__title">Our Services</h1>
        <ul className="footer__links">
          <li>About Store</li>
          <li>New Collection</li>
          <li>Contact Us</li>
          <li>Latest News</li>
          <li>Our Sitemap</li>
        </ul>
      </div>
      <div className="footer__info">
        <h1 className="footer__title">Information</h1>
        <ul className="footer__links">
          <li>My Account</li>
          <li>FAQS</li>
          <li>Gifts Sports</li>
          <li>Extras</li>
        </ul>
      </div>
      <div className="footer__socials">
        <h1 className="footer__title">Sign up for Newsletter</h1>
        <p>Register your email for news and get special offers</p>
        <div className="footer__newsletter">
          <input type="email" id="email" placeholder="Enter Your Mail" />
          <input type="submit" value="SIGN IN" />
        </div>
        <div className="footer__social">
          <h1 className="footer__title">Follow Socials</h1>
          <div className="footer__media">
            <FaLinkedinIn className="footer__icon" />
            <FaPinterest className="footer__icon" />
            <FaGooglePlusG className="footer__icon" />
            <FaTwitter className="footer__icon" />
            <FaFacebookF className="footer__icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
