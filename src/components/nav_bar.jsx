import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/nav_bar.css';

export default function NavBar() {
  return (
    <nav className="usm-navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Inicio
      </NavLink>
      <NavLink to="/reservas" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Reservas Express
      </NavLink>
      <NavLink to="/recintos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Infraestructura
      </NavLink>
    </nav>
  );
}