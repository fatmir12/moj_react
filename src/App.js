// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel"; // Nova stranica za admina

import "./styles/Navbar.css";
import "./styles/Home.css";
import "./styles/Events.css";
import "./styles/Register.css";
import "./styles/Login.css";
import "./styles/Contact.css";
import "./styles/Admin.css"; // Novi CSS za admin panel

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleRegister = () => {
    // Za jednostavnost — kasnije možeš dodati korisnički objekt iz backend-a
    setUser({ email: "newuser@example.com", role: "user" });
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={!!user} user={user} onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          {user?.role === "admin" && <Route path="/admin" element={<AdminPanel />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
