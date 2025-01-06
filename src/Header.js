import React from "react";
import "./Header.css";
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
  return (
    <header className="header">
      <div className="jay">
        <i className="fa-brands fa-mailchimp" style={{ color: "#10382c" }}></i>
        <div className="logo">AI Ally</div>
      </div>

      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
      <button className="sign-in-btn">Sign In</button>
    </header>
  );
};

export default Header;
