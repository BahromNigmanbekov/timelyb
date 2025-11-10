import React from "react";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Business Dashboard</h2>
      <div className="stats">
        <div className="stat-box">
          <h3>Today’s Bookings</h3>
          <p>8</p>
        </div>
        <div className="stat-box">
          <h3>Total Earnings</h3>
          <p>560,000 UZS</p>
        </div>
        <div className="stat-box">
          <h3>Top Service</h3>
          <p>Barber</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
