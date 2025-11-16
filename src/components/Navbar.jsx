import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";


function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo"><IoMenu /></h1>
      <div className="nav-links">
        <a href="#"> <FaPlusCircle /></a>
        <a href="#"> <CgProfile /></a>
      </div>
    </nav>
  );
}

export default Navbar;
