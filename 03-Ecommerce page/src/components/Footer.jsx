import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Shop</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">123 E-commerce St.</p>
          <p className="mb-2">City, State, 12345</p>
          <p className="mb-2">Email: info@ecommerce.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><FacebookIcon /></a>
            <a href="#" className="hover:text-gray-400"><TwitterIcon /></a>
            <a href="#" className="hover:text-gray-400"><InstagramIcon /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 My E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
