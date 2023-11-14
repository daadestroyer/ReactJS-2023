/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg p-4  navbar-${props.mode} bg-${props.mode} `}
      >
        <a className="navbar-brand" href="#">
          TheCoders TV
        </a>
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
            <li className="nav-item active">
              <a className=" nav-link" href="#">
                Home  
              </a>
            </li>
            <li className="nav-item">
              <a className=" nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className=" nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className=" nav-link" href="#">
                Contacts
              </a>
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
      {/* <div className="container">
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus
          quidem, inventore nulla a assumenda harum perspiciatis praesentium,
          velit asperiores quos ut beatae perferendis suscipit veniam quia!
          Dolorem, veniam ratione. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam a praesentium impedit modi excepturi
          doloribus minus vero error quo magni molestias fugiat ipsum saepe,
          dolor deleniti fuga atque ea accusamus. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Asperiores officiis impedit hic
          doloribus exercitationem, obcaecati blanditiis nisi, maxime alias
          ducimus, architecto libero quas. Omnis ipsam dolorum perferendis
          error, aperiam amet! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Provident recusandae reiciendis culpa doloribus
          necessitatibus iusto? Deleniti modi facilis quae non maiores, hic,
          consequatur, quo recusandae sed expedita ea illo vitae?
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus
          quidem, inventore nulla a assumenda harum perspiciatis praesentium,
          velit asperiores quos ut beatae perferendis suscipit veniam quia!
          Dolorem, veniam ratione. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam a praesentium impedit modi excepturi
          doloribus minus vero error quo magni molestias fugiat ipsum saepe,
          dolor deleniti fuga atque ea accusamus. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Asperiores officiis impedit hic
          doloribus exercitationem, obcaecati blanditiis nisi, maxime alias
          ducimus, architecto libero quas. Omnis ipsam dolorum perferendis
          error, aperiam amet! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Provident recusandae reiciendis culpa doloribus
          necessitatibus iusto? Deleniti modi facilis quae non maiores, hic,
          consequatur, quo recusandae sed expedita ea illo vitae?
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus
          quidem, inventore nulla a assumenda harum perspiciatis praesentium,
          velit asperiores quos ut beatae perferendis suscipit veniam quia!
          Dolorem, veniam ratione. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam a praesentium impedit modi excepturi
          doloribus minus vero error quo magni molestias fugiat ipsum saepe,
          dolor deleniti fuga atque ea accusamus. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Asperiores officiis impedit hic
          doloribus exercitationem, obcaecati blanditiis nisi, maxime alias
          ducimus, architecto libero quas. Omnis ipsam dolorum perferendis
          error, aperiam amet! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Provident recusandae reiciendis culpa doloribus
          necessitatibus iusto? Deleniti modi facilis quae non maiores, hic,
          consequatur, quo recusandae sed expedita ea illo vitae?
        </p>
      </div> */}
    </>
  );
}
