import React from 'react';
import ProductItem from './ProductItem';
import '../css/Products.css';

const products = [
  { id: 1, image: 'https://via.placeholder.com/150', name: 'Product 1' },
  { id: 2, image: 'https://via.placeholder.com/150', name: 'Product 2' },
  { id: 3, image: 'https://via.placeholder.com/150', name: 'Product 3' },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Product 4' },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Product 5' },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Product 6' },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Product 7' },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Product 8' },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Product 9' },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Product 10' },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Product 11' },
  { id: 4, image: 'https://via.placeholder.com/150', name: 'Product 12' },
];

const Products = () => {
    return (
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="overflow-x-hidden mb-8">
            <div className="flex animate-slide-left">
              {products.map(product => (
                <ProductItem key={product.id} image={product.image} name={product.name} />
              ))}
            </div>
          </div>
          <div className="overflow-x-hidden">
            <div className="flex animate-slide-right">
              {products.map(product => (
                <ProductItem key={product.id} image={product.image} name={product.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Products;
