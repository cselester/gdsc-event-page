import React from "react";
import "./Navbar.css";

function Navbar({ toggleTheme, darkTheme }) {
  return (
    <nav className="navbar">
      <h2 className="logo">GDSC Solution Challenge 2025</h2>
      <ul>
        <li><a href="#highlights">Highlights</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#location">Location</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
