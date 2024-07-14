// src/components/ProductItem.js
import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';

const ProductItem = ({ image, name }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden m-4">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <div className="flex justify-between items-center">
          <IconButton aria-label="add to wishlist">
            <FavoriteBorderIcon />
          </IconButton>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
