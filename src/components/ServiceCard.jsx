import React from "react";

function ServiceCard({ service, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(service)}>
      <h3>{service.name}</h3>
      <p>Narxi: <span>{service.price}</span></p>
      <p className="vaqt">{service.time}</p>
      <span>{service.location}</span>
    </div>
  );
}

export default ServiceCard;
