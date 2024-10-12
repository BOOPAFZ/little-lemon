import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

const BookingPage = () => {
  return (
    <div className='booking-page'>
      <img src='assets/booking.jpeg'></img>
      <h1>Book a Table</h1>
      <BookingForm />
    </div>
  );
};

export default BookingPage;
