import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <button className="logo" onClick={toggleMenu}><IoMenu /></button>
        <h2 className="nav-title">Timely</h2>
        <div className="nav-links">
          <button><FaPlusCircle /></button>
          <button><CgProfile /></button>
        </div>
      </nav>

      
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Profil</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#dashboard" onClick={toggleMenu}>Dashboard</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Navbar;

