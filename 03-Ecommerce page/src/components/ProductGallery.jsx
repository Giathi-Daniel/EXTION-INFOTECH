import React from 'react';

const products = [
  { id: 1, image: 'https://via.placeholder.com/300x200', name: 'Product 1' },
  { id: 2, image: 'https://via.placeholder.com/300x200', name: 'Product 2' },
  { id: 3, image: 'https://via.placeholder.com/300x200', name: 'Product 3' },
  { id: 4, image: 'https://via.placeholder.com/300x200', name: 'Product 4' },
  { id: 5, image: 'https://via.placeholder.com/300x200', name: 'Product 5' },
  { id: 6, image: 'https://via.placeholder.com/300x200', name: 'Product 6' },
  { id: 7, image: 'https://via.placeholder.com/300x200', name: 'Product 7' },
  { id: 8, image: 'https://via.placeholder.com/300x200', name: 'Product 8' },
];

const ProductGallery = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Product Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="relative overflow-hidden rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform transform hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
                {product.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;
