import React, { useState } from 'react';

function ReservationsContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    occasion: "",
    guests: "",
    date: "",
  });

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let err = {};
    if (formData.name === "") {
      err.name = "* Full name required!";
    }
    if (formData.email === "") {
      err.email = "* Email required!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.email)) {
        err.email = "Email not valid!";
      }
    }

    if (formData.telephone === "") {
      err.telephone = "* Phone number required!";
    } else {
      let phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
      if (!phoneRegex.test(formData.telephone)) {
        err.telephone = "Telephone number not valid!";
      }
    }

    if (formData.guests === "") {
      err.guests = "* Please specify number of guests!";
    }
    if (formData.date === "") {
      err.date = "* Please specify date and time!";
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(formData);

    let isValid = validateForm();
    if (isValid) {
      alert("Submitted");
    }
  };

  return (
    <div className="reservation-wrapper">
      <div className="reservation-container">
        <div className="reservation-description">
          <h2>Discover the Perfect Blend of Tradition and Luxury</h2>
          <p>
          At Little Lemon, we take immense pride in offering our customers an unparalleled luxurious experience infused with a touch of tradition.
          </p>
          <p>Reserve a table with us and indulge in this unique experience.</p>
        </div>
        <div className="reservation-form">
          <h1>Reserve a Table</h1>
          <p>
          Please fill out and submit the form to book your reservation at Little Lemon.
          </p>
          <form onSubmit={onSubmitHandler}>
            <fieldset className="form-fieldset">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  name="name"
                  onChange={onChangeHandler}
                />
                <span className="error-message">{formError.name}</span>
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="text@email.com"
                  name="email"
                  onChange={onChangeHandler}
                />
                <span className="error-message">{formError.email}</span>
              </div>
              <div className="form-field">
                <label htmlFor="telephone">Telephone</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="9000000000"
                  name="telephone"
                  onChange={onChangeHandler}
                />
                <span className="error-message">{formError.telephone}</span>
              </div>
              <div className="form-guests-date">
                <div className="form-field form-occasion">
                  <label htmlFor="occasion">Occasion (optional)</label>
                  <div className="form-select">
                    <select
                      name="occasion"
                      className="form-select-box"
                      onChange={onChangeHandler}
                    >
                      <option value="select">Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="engagement">Engagement</option>
                      <option value="anniversary">Anniversary</option>
                    </select>
                  </div>
                </div>
                <div className="form-field guest">
                  <label htmlFor="guests">Guests</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="0"
                    name="guests"
                    onChange={onChangeHandler}
                  />
                  <span className="error-message">{formError.guests}</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="date">Date & Time</label>
                <input
                  type="datetime-local"
                  className="form-input"
                  name="date"
                  onChange={onChangeHandler}
                />
                <span className="error-message">{formError.date}</span>
              </div>
              <button className="s-button" type="submit">
                Reserve
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationsContent;
