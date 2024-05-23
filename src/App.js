import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import CustomNavbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Pricing from './component/Pricing';
import { About } from './component/About';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} /> {/* Ensure this path matches the link */}

          {/* Add other routes here */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
