import React, { useState, useEffect } from 'react';
import '../styles.css';

function LoadingSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // ✅ Fix here
    }, 2000);
  }, []);

  return (
    <div className="card">
      {loading ? (
        <div className="skeleton-wrapper">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      ) : (
        <div className="content">
          <h2>John Doe</h2>
          <p>Full-stack developer at XYZ company</p>
        </div>
      )}
    </div>
  );
}

export default LoadingSkeleton;
