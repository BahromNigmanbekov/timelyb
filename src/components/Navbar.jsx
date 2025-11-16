import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";


function Navbar() {
  return (
    <nav className="navbar">
      <button className="logo"><IoMenu /></button>
      <h2>Timely</h2>
      <div className="nav-links">
        <button > <FaPlusCircle /></button>
        <button> <CgProfile /></button>
      </div>
    </nav>
  );
}

export default Navbar;
