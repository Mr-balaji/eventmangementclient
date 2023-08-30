import Layout from '@/app/components/layout/layout';
import React from 'react';

const products = [
  { id: 1, name: 'Product 1', imageUrl: '/product1.jpg' },
  { id: 2, name: 'Product 2', imageUrl: '/product2.jpg' },
  // Add more products...
];

const Products = () => {
  return (
    <Layout >
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Explore Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white overflow-hidden shadow-lg rounded-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full block mx-auto">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>

  );
};

export default Products;
