import React, { useEffect, useState } from 'react';

const Products = () => {
  const [data, setData] = useState(null);
  const [viewMore, setViewMore] = useState(null);
  const changeDesc = (index) => {
    setViewMore(index);
  };
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  }, []);

  return (
    <div className="products">
      <h2>Product List</h2>
      <div className="product-list">
        {data?.products?.map((p, index) => (
          <div key={p.id} className="product-card">
            <p>{p.title}</p>
            <img src={p.thumbnail} alt={p.title} width="100" height="100%" />
            <p key={index}>
              {index !== viewMore ? p.description.slice(0, 30) : p.description}
            </p>
            <p>{p.price}</p>
            <button onClick={() => changeDesc(index)}>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
