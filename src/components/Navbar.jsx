import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-info px-3">
    <div className="navbar-name text-uppercase text-light fw-bold">Note App</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact="true">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          Information
        </NavLink>
      </li>
    </ul>
  </nav>
);
