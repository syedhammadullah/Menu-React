// src/components/Recipe.js
import React, { useState } from 'react';

const Recipe = ({ name, stock, image }) => {
  const [currentStock, setCurrentStock] = useState(stock);

  const handleOrder = () => {
    if (currentStock > 0) {
      setCurrentStock(currentStock - 1);
      alert(`Order placed for ${name}! Remaining stock: ${currentStock - 1}`);
    } else {
      alert(`Order not possible for ${name}, it is out of stock!`);
    }
  };

  return (
    <div className="recipe">
      <img src={image} alt={name} className="recipe-image" />
      <h3>{name}</h3>
      {currentStock > 0 ? (
        <p className="stock">Stock left: {currentStock}</p>
      ) : (
        <p className="out-of-stock">Out of Stock</p>
      )}
      <button
        className="order-button"
        onClick={handleOrder}
        disabled={currentStock === 0}
      >
        {currentStock > 0 ? 'Order Now' : 'Unavailable'}
      </button>
    </div>
  );
};

export default Recipe;
