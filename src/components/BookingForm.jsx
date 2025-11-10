import React, { useState } from "react";

function BookingForm({ service, goBack }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {
    alert(`You booked ${service.name} on ${date} at ${time}`);
  };

  return (
    <div className="booking-form">
      <button className="back-btn" onClick={goBack}>← Back</button>
      <h2>{service.name}</h2>
      <p>Price: {service.price}</p>
      <label>Select Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <label>Select Time:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button className="book-btn" onClick={handleBook}>Book Now</button>
    </div>
  );
}

export default BookingForm;
