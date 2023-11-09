/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <>
    
    
    
      <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <a class="navbar-brand text-light" href="#">
          {props.navbarname}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ">
            <li class="nav-item active">
              <a class="text-light nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="text-light nav-link" href="#">
                {props.about}
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="text-light nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {props.services}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class=" dropdown-item" href="#">
                  Action
                </a>
                <a class=" dropdown-item" href="#">
                  Another action
                </a>
                <div class=" dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
             
          </ul>
        </div>
      </nav>
    </>
  );
}

Navbar.protoTypes = {
    navbarname: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    services:PropTypes.string.isRequired
}

Navbar.protoTypes= {
    navbarname: 'set navbarname here',
    about: 'set about us here',
    services:'set services here'
}