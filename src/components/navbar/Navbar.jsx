import React from "react";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="tc-navbar">
      <div className="container">
        <div className="tc-navbar-box">
          {/* left section */}
          <div className="navbar-logo">
            <h1>tictactoe</h1>
          </div>
          <div className="navbar-menu-btn">
            <FiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
