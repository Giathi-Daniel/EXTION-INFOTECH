import React from 'react';
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen text-center flex flex-col justify-center items-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}>
      <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Welcome to Our Store</h1>
      <p className="text-xl md:text-2xl text-white mb-8">Find the best products at unbeatable prices</p>
      <Button variant="contained" color="primary" className="text-lg md:text-xl">
        Shop Now
      </Button>
    </div>
  );
}

export default Hero;
