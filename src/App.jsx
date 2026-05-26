import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact';
import Safaris from './pages/Safaris';
import ZanzibarTours from './pages/ZanzibarTours';
import Adventures from './pages/Adventures';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/safaris" element={<Safaris />} />
          <Route path="/zanzibar-tours" element={<ZanzibarTours />} />
          <Route path="/adventures" element={<Adventures />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
