import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import Home from './Home';
import Products from './Products';

const App = () => (
  <>
    <nav className="navbar">
      <Link to="/home" style={{ marginRight: '10px' }}>
        Home
      </Link>
      <Link to="/products">Products</Link>
    </nav>

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </>
);

export default App;
