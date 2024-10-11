import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
