import React, { useEffect, useRef, useState, useCallback } from 'react';

// Simulated API with page parameter
const fetchItems = async (page) => {
  console.log(`Fetching page ${page}`); // Debug output
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate network delay
  return Array.from(
    { length: 10 },
    (_, i) => `Item ${(page - 1) * 10 + i + 1}`
  );
};

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const newItems = await fetchItems(page);
    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
    }
    setIsLoading(false);
  }, [page, isLoading, hasMore]);

  useEffect(() => {
    loadMore(); // initial load
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h3>📜 Infinite Scroll</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              borderBottom: '1px solid #ccc',
              padding: '10px 0',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {hasMore && (
        <div ref={loaderRef} style={{ textAlign: 'center', padding: 10 }}>
          {isLoading ? 'Loading...' : 'Scroll to load more ⬇️'}
        </div>
      )}
      {!hasMore && <p style={{ textAlign: 'center' }}>No more items 🚫</p>}
    </div>
  );
};

export default InfiniteScrollList;
