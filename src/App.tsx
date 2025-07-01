import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './components/ProductPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:slug" element={<ProductPage />} />
  </Routes>
);

export default App;
