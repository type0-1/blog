import React from 'react';
import Navbar from './components/Navbar.js';
import MainSection from './components/MainSection.js';
import BlogDetail from './components/BlogDetail.js'; // Import BlogDetail
import { Routes, Route } from 'react-router-dom'; // Only import Routes and Route for defining routes
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <br />

      {/* Routes handle navigation */}
      <Routes>
        {/* Route for the main blog listing */}
        <Route path="/" element={<MainSection />} />

        {/* Dynamic route for individual blog post */}
        <Route path="/blog/:blogId" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
