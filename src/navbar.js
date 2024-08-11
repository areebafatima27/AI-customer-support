import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Ensure this file is created for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Your Chatbot</Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/signup" onClick={toggleNavbar}>
          Signup
        </Link>
        <Link to="/login" onClick={toggleNavbar}>
          Login
        </Link>
      </div>
      <div className="nav-toggle" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
