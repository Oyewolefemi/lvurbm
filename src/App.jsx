import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Shopper/LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vendors/:vendorId" element={<div>Store Details Coming Soon</div>} />
      </Routes>
    </Router>
  );
};

export default App;
