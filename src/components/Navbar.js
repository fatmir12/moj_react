// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">📅Eventify</Link>
      </div>

      <div className="navbar-center">
        <Link to="/" className="navbar-link"><b>Home</b></Link>
        <Link to="/contact" className="navbar-link"><b>Contact</b></Link>
        <Link to="/events" className="navbar-link"><b>Events</b></Link>
        {isLoggedIn && user?.role === "admin" && (
          <Link to="/admin" className="navbar-link"><b>Admin</b></Link>
        )}
      </div>

      <div className="navbar-right">
        {isLoggedIn ? (
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login" className="auth-link"><b>Login</b></Link>
            <Link to="/register" className="auth-link"><b>Register</b></Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
