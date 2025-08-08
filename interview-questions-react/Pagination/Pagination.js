import { useEffect, useState } from 'react';
import './styles.css';
import ProductCard from './ProductCard';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const PAGE_SIZE = 10;
const TOTAL_PAGES = 20;

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const skip = (page - 1) * PAGE_SIZE;
    fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => setData(data.products || []));
  }, [page]);

  if (data.length === 0) return <p>No Products Found</p>;

  return (
    <div>
      <h1>Pagination</h1>

      <div className="button-container">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          <FiChevronsLeft />
        </button>

        {Array.from({ length: TOTAL_PAGES }, (_, i) => (
          <button
            key={i}
            className={page === i + 1 ? 'active' : ''}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === TOTAL_PAGES}
          onClick={() => setPage((prev) => Math.min(prev + 1, TOTAL_PAGES))}
        >
          <FiChevronsRight />
        </button>
      </div>

      <div className="product-grid">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
