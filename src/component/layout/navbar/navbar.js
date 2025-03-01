import React from 'react';
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Amazon Lite</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="">Men</a></li>

                <li><a className="dropdown-item" href="#">Women</a></li>
                <li><a className="dropdown-item" href="#">Kids</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
          <form className="d-flex me-3" role="search">
          <input
  className="form-control me-2 custom-search-bar"
  type="search"
  placeholder="Search for products, brands, and more"
  aria-label="Search"
/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul className="navbar-nav d-flex align-items-center">
            {/* Profile */}
            <li className="nav-item">
              <a className="nav-link" href="/login" title="Profile">👤 Profile</a>
            </li>
            {/* Wishlist */}
            <li className="nav-item">
              <a className="nav-link" href="#" title="Wishlist">♡ Wishlist</a>
            </li>
            {/* Bag */}
            <li className="nav-item">
              <a className="nav-link" href="#" title="Bag">🛍️ Bag</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
