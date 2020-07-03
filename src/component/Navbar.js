import React from "react";
import logo from '../logo.jpg'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        
  <a className="navbar-brand" href="https://google.com"><img src={logo} className="img-fluid logo" alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ml-auto space">
      <li className="nav-item active">
        <a className="nav-link text-center" href="https://google.com">Home </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link text-center" href="https://google.com">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-center" href="https://google.com">About us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-center" href="https://google.com">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-center box p-2" href="https://google.com">Services</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
