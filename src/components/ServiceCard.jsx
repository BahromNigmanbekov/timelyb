import React from "react";

function ServiceCard({ service, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(service)}>
      <h3>{service.name}</h3>
      <p>{service.price}</p>
      <p>{service.time}</p>
      <span>{service.location}</span>
    </div>
  );
}

export default ServiceCard;
