import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Men from './pages/men/Men';
import Product1Description from './pages/Product1Description/Product1Description'; // Correct import for Product1Description
import ProductDescription from './pages/Product1Description/Product1Description'; // Import for dynamic product description
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup.js/Signup";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/Product1Description" element={<Product1Description />} />
        <Route path="/product/:id" element={<ProductDescription />} /> {/* Dynamic route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
