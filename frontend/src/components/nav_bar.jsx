// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [page, setPage] = useState("Home");

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h4>SkinGuardianAI</h4>
        </div>
        <div className="navbar-center">
          <img
            src="white_ribbon-veed-remove-background.png"
            alt=""
            style={{ height: "5vh" }}
          />
        </div>
        <div className="navbar-right">
          <Link
            className="nav-link"
            to="/"
            style={{ color: page === "Home" ? "black" : "gray" }}
            onClick={(e) => setPage("Home")}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            to="/about"
            style={{ color: page === "About" ? "black" : "gray" }}
            onClick={(e) => setPage("About")}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
