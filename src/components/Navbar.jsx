import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Timely</h1>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Bookings</a>
        <a href="#">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;
