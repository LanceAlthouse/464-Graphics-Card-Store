import React, { useState } from 'react';

const ProductCard = ({ image, name, price }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (value) => {
    if (quantity + value >= 0) {
      setQuantity(quantity + value);
    }
  };

  const handleBuyClick = () => {
    // Handle buy button click event
  };

  return (
    <div className="product-card" style={{justifyContent: 'center', alignItems: 'center'}}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <div className="quantity-input">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <button onClick={handleBuyClick}>Buy</button>
    </div>
  );
};

export default ProductCard;