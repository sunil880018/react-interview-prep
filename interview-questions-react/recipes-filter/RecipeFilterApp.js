import React, { useState, useEffect } from 'react';
import './styles.css';
import recipesData from './recipesData';

const RecipeFilterApp = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [averageRating, setAverageRating] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const addToCart = (id) => {
    setCartItems((prevItems) => [...prevItems, id]);
  };

  const filteredRecipes = selectedOption
    ? recipesData.filter(
        (recipe) => recipe.rating >= parseFloat(selectedOption)
      )
    : recipesData;

  const calculateAverageRating = () => {
    if (filteredRecipes.length === 0) {
      setAverageRating(0);
      return;
    }

    const total = filteredRecipes.reduce(
      (acc, recipe) => acc + recipe.rating,
      0
    );
    const avg = total / filteredRecipes.length;
    setAverageRating(avg.toFixed(2));
  };

  useEffect(() => {
    calculateAverageRating();
  }, [selectedOption]);

  return (
    <div>
      <h1>🍽️ Recipe Explorer</h1>

      <div className="filter-by-rating">
        <label htmlFor="rating-filter">Filter by Rating:</label>
        <select
          id="rating-filter"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="4.0">4.0+</option>
          <option value="4.3">4.3+</option>
          <option value="4.5">4.5+</option>
          <option value="4.7">4.7+</option>
          <option value="4.9">4.9+</option>
        </select>
      </div>

      <div className="cart-items">Cart Items: {cartItems.length}</div>

      <div className="average-rating">
        Average Rating: {averageRating} ({filteredRecipes.length} recipes)
      </div>

      <div className="recipes-list">
        {filteredRecipes
          .filter((data) => data.rating == selectedOption)
          .map((data) => (
            <div key={data.id} className="recipe-card">
              <div>{data.name}</div>
              <div>{data.cuisine}</div>
              <img src={data.image} alt={data.name} style={{ width: '30%' }} />
              <div>
                Rating: {data.rating} ({data.reviewCount} reviews)
              </div>
              <button onClick={() => addToCart(data.id)}> Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
