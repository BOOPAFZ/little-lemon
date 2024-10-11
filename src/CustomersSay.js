import React from 'react';
import './CustomersSay.css';

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2 className="testimonial-header">What Our Customers Say</h2>
      <div className="review-container">
        <div className="review">
          <img src='/assets/ahmed.jpg' alt="Customer Ahmed" id="profile" />
          <h2>Ahmed Bakhsouss</h2>
          <div id="rating">★★★★★</div>
          <p>"You have to try the tajine."</p>
        </div>
        <div className="review">
          <img src='/assets/ahmed.jpg' alt="Customer Ahmed" id="profile" />
          <h2>Ahmed Bakhsouss</h2>
          <div id="rating">★★★★★</div>
          <p>"You have to try the tajine."</p>
        </div>
        <div className="review">
          <img src='/assets/ahmed.jpg' alt="Customer Ahmed" id="profile" />
          <h2>Ahmed Bakhsouss</h2>
          <div id="rating">★★★★★</div>
          <p>"You have to try the tajine."</p>
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
