import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
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
