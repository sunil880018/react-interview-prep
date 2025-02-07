// production level code
import React, { useState, useEffect, useRef } from 'react';

const fetchRestaurants = async (query, signal) => {
  if (!query) return []; // Prevent unnecessary API calls

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      { signal } // Attach signal for request cancellation
    );

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('Error fetching restaurants:', error);
    }
    return [];
  }
};

export default function ZomatoOrderSystem() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const debounceRef = useRef(null); // For debouncing API calls

  useEffect(() => {
    const controller = new AbortController(); // API request controller
    const { signal } = controller;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      setError('');

      try {
        const data = await fetchRestaurants(searchTerm, signal);
        setRestaurants(data);
      } catch (err) {
        setError('Failed to fetch restaurants. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 500); // 500ms debounce delay

    return () => controller.abort(); // Cleanup: cancel API call on unmount or new request
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

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {restaurants.length > 0
          ? restaurants.map((restaurant) => (
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
            ))
          : !loading && <p>No restaurants found.</p>}
      </div>
    </div>
  );
}
