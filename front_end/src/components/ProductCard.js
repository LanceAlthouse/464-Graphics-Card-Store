import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (value) => {
    if (quantity + value >= 0) {
      setQuantity(quantity + value);
    }
  };

  const handleBuyClick = () => {
    // For final implement buy click functionality
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="quantity-input">
        <p>Price: ${price}</p>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <button className='buy-button' onClick={handleBuyClick}>Buy</button>
    </div>
  );
};

export default ProductCard;