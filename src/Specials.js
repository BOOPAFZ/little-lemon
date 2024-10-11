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
            <h5 className="card-title">Tagine</h5>
            <p className="card-text">
            is a traditional North African dish 
            </p>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src="/assets/bastila.jpg" alt="Dish Image" />
          <div className="card-body">
            <h5 className="card-title">Moroccan Chicken Bastila</h5>
            <p className="card-text">
            a traditional Moroccan pie that beautifully combines sweet and savory flavors. 
            </p>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src="/assets/omlette.jpg" alt="Dish Image" />
          <div className="card-body">
            <h5 className="card-title">Persian Omelette</h5>
            <p className="card-text">
            Omelette Irani, is a simple yet flavorful dish that is perfect for any meal of the day.
            </p>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>



      </div>
    </section>
  );
}

export default Specials;

