import React, { useState } from "react";

function BookingForm({ service, goBack }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {
    alert(`You booked ${service.name} on ${date} at ${time}`);
  };

  return (
    <div className="booking-form">
      <button className="back-btn" onClick={goBack}>Back</button>
      <h2>{service.name}</h2>
      <p><span>Narxi :</span> {service.price}</p>
      <label>Kunlarni belgilang:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="data" />
      <label>Vaqtni belgilang:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="time" />
      <button className="book-btn" onClick={handleBook}>Band qilish</button>
    </div>
  );
}

export default BookingForm;
