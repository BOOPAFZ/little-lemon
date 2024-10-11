import React from 'react';
import './CallToAction.css';


function CallToAction() {
  return (
    <div className='ce'>
      <section className="call-to-action">
        <h1> Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button id='c-button'>Reserve a Table</button>
      </section>
      <nav className="logo-nav">
      <img className="card-img-top" src="/assets/display.jpg"  />
      </nav>
    </div>
  );
}

export default CallToAction;


