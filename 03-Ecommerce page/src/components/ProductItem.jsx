import React from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductItem = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md mx-4">
      <img src={image} alt={name} className="w-32 h-32 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="flex space-x-2">
        <IconButton aria-label="add to wishlist">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductItem;
