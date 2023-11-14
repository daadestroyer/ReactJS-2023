/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg p-4  navbar-${props.mode} bg-${props.mode} `}
      >
        <Link className="navbar-brand" to="/" >TheCoders TV</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <Link className=" nav-link" to="/about" >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link" to="/services">Services</Link>
              
            </li>
            <li className="nav-item">
              <Link className=" nav-link" to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label
            class="form-check-label "
            for="flexSwitchCheckDefault"
            style={{ color: props.darkModeText }}
          >
            Enable Dark Mode
          </label>
        </div>
      </nav>
      
    </>
  );
}
