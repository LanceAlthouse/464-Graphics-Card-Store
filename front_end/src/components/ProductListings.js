import React from 'react';
import ProductCard from './ProductCard';
import { useRecoilState } from 'recoil';
import { usernameState } from './AccountSettings';


const ProductListings = ({ products }) => {
  const [username, setUsername] = useRecoilState(usernameState);

  return (
    <div>
    <h1>Welcome back {username}, to the Graphics Card Store </h1>
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
    </div>
  );
};

export default ProductListings;
