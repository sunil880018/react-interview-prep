import React, { useState, useEffect } from 'react';

const fetchRestaurants = async (query) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching restaurants', error);
    return [];
  }
};

export default function ZomatoOrderSystem() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchRestaurants(searchTerm).then(setRestaurants);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Zomato Order System</h1>
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <div>
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.idMeal}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
            }}
          >
            <h3>{restaurant.strMeal}</h3>
            <p>Category: {restaurant.strCategory}</p>
            <p>Area: {restaurant.strArea}</p>
            <button style={{ padding: '5px 10px', cursor: 'pointer' }}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
