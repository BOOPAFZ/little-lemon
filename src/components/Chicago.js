import React from 'react';
import './styles/chicago.css';


function Chicago() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant that brings traditional
          recipes to life with a modern twist. Our chefs draw inspiration from Italian, Greek, and Turkish cuisines,
          offering a seasonal menu of 12-15 items that rotate to highlight the freshest ingredients.
          <br />
          Founded by brothers Mario and Adrian, Little Lemon combines the warmth of family recipes with the sophistication
          of Mediterranean flavors. Mario, an experienced chef from Italy, crafts each dish with care, while Adrian leads
          our marketing efforts, ensuring that our menu reflects the diverse culinary traditions of the Mediterranean region.
        </p>
      </div>
      <div className="owners">
        <img src='/assets/chef.jpg' alt="Chefs" id="chefs" />
        <img src='/assets/restaurant.jpg' alt="Restaurant" id="restaurant" />
      </div>
    </section>
  );
}

export default Chicago;
