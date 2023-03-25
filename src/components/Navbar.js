import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <button class="btn btn-default btn-lg"><i class="zmdi zmdi-settings zmdi-hc-spin"></i></button>
    <NavLink className="navbar-brand" to="/">ULX</NavLink>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li classNameName="nav-item">
          <NavLink classNameName="nav-link" to="/about">About</NavLink>
        </li>
        <li classNameName="nav-item">
          <NavLink classNameName="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li classNameName="nav-item">
          <NavLink classNameName="nav-link" to="/login">Login</NavLink>
        </li>
        <li classNameName="nav-item">
          <NavLink classNameName="nav-link" to="/signup">Registration</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar