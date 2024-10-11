import React from 'react';
import './Specials.css';

function Specials() {
  return (
    <section className='specials'>
      <div className='specials-head'>
        <h3>Specials</h3>
        <button className='s-button'>Online menu</button>
      </div>

      <div className="cards">
        <div className="card">
          <img className="card-img-top" src="/assets/tajine.jpg" alt="Dish Image" />
          <div className="card-body">
            <h5 className="card-title">Dish Title</h5>
            <p className="card-text">
              A delicious description of the dish. It can be savory, sweet, or spicy depending on your preference.
            </p>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src="/assets/tajine.jpg" alt="Dish Image" />
          <div className="card-body">
            <h5 className="card-title">Dish Title</h5>
            <p className="card-text">
              Another tempting dish with a unique blend of flavors to satisfy your taste buds.
            </p>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src="/assets/tajine.jpg" alt="Dish Image" />
          <div className="card-body">
            <h5 className="card-title">Dish Title</h5>
            <p className="card-text">
              Another tempting dish with a unique blend of flavors to satisfy your taste buds.
            </p>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>

        


      </div>
    </section>
  );
}

export default Specials;

