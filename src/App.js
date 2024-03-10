// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admission from './pages/Admission';
import ContactUs from './pages/ContactUs';
import Navbar from './Navbar';
import './Navbar.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Admission" element={<Admission />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
