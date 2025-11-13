import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccessTime } from "react-icons/md";


function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Timely</h1>
      <div className="nav-links">
        <a href="#"> <MdOutlineAccessTime /></a>
        <a href="#"> <CgProfile /></a>
      </div>
    </nav>
  );
}

export default Navbar;
