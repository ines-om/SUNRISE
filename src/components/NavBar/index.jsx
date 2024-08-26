import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "./assets/logo.png";

function Nav() {
  return (
    <div className="container">
      <nav className="primaryNav">
        <ul className="navBar">
          <div className="subcontainer1">
            <div className="item-in-container">
              <Link className="logo" to="/">
                <img src={logo} className="nav-link" alt="Logo" />
              </Link>
            </div>{" "}
          </div>
          <div className="subcontainer2">
            <div className="item-in-container">
              <li className="nav-item">
                <Link className="nav-link" to="/Plan">
                  START
                </Link>
              </li>
            </div>

            <div className="item-in-container">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
