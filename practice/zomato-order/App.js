import React, { useState, useEffect, useRef } from 'react';

const fetchRestaurants = async (query, page, pageSize, signal) => {
  if (!query) return { meals: [], total: 0 }; // Prevent unnecessary API calls

  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      const res = await fetch(`https://jatin-blog-app.vercel.app/posts`);
      console.log(res);
    }
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      { signal } // Attach signal for request cancellation
    );

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const data = await response.json();
    const meals = data.meals || [];

    // Implement pagination logic manually (since API doesn't support it)
    const total = meals.length;
    const paginatedMeals = meals.slice((page - 1) * pageSize, page * pageSize);

    return { meals: paginatedMeals, total };
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('Error fetching restaurants:', error);
    }
    return { meals: [], total: 0 };
  }
};

export default function ZomatoOrderSystem() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 5; // Number of results per page

  const debounceRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      setError('');

      try {
        const { meals, total } = await fetchRestaurants(
          searchTerm,
          page,
          pageSize,
          signal
        );
        setRestaurants(meals);
        setTotalResults(total);
      } catch (err) {
        setError('Failed to fetch restaurants. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => controller.abort();
  }, [searchTerm, page]);

  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Zomato Order System</h1>
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1); // Reset to first page on new search
        }}
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

      {/* Pagination Controls */}
      {totalResults > pageSize && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            style={{
              marginRight: '10px',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
