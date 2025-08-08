import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';

const App = () => (
  <>
    <nav className="navbar">
      <Link to="/" style={{ marginRight: '10px' }}>
        Home
      </Link>
      <Link to="/products">Products</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
    </Routes>
  </>
);

export default App;
