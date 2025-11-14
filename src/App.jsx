import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import BookingForm from "./components/BookingForm";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Bolalar masaji",
      price: "205,000 UZS",
      time: "09:00 - 20:00",
      location: "Tashkent City",
    },
    {
      id: 2,
      name: "Bolalar masaji",
      price: "250,000 UZS",
      time: "10:00 - 23:00",
      location: "Yunusobod",
    },
    {
      id: 3,
      name: "Bolalar masaji",
      price: "235,000 UZS",
      time: "08:00 - 22:00",
      location: "Chilonzor",
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        {!selectedService ? (
          <>
            <h2 className="page-title">Book a Service</h2>
            <div className="service-grid">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} onSelect={setSelectedService} />
              ))}
            </div>
          </>
        ) : (
          <BookingForm service={selectedService} goBack={() => setSelectedService(null)} />
        )}
      </div>
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;

