import React from 'react';
import './styles/CallToAction.css';


function CallToAction() {
  return (
    <div className='ce'>
      <section className="call-to-action">
        <h1> Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <a href="/booking">
          <button id="c-button">Reserve a Table</button>
        </a>
      </section>
      <nav className="logo-nav">
      <img className="card-img-top" src="/assets/display.jpg" alt="Display" />
      </nav>
    </div>
  );
}

export default CallToAction;


