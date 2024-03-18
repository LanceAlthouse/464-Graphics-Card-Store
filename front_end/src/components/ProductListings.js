import React from 'react';
import ProductCard from './ProductCard';

const ProductListings = ({ products }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', justifyContent: 'center' }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}
        />
      ))}
    </div>
  );
};

export default ProductListings;
