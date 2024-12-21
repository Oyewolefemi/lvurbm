import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Shopper/LandingPage';
import ProductList from './pages/Vendors/ProductList';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* Product List Page */}
        <Route path="/vendors/:vendorId/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
