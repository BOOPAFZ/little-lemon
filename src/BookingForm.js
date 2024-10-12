import React, { useState } from 'react';





const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
        <option value="">Select time</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" max="10" required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" className="s-button">Submit reservation</button>
    </form>
  );
};

export default BookingForm;
