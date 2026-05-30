import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#F2A900' : '#FFFFFF',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    letterSpacing: '0.5px'
  });

  return (
    <nav style={{ 
      backgroundColor: '#003366', 
      padding: '15px 30px', 
      display: 'flex', 
      alignItems: 'center',
      gap: '30px', // Espacio entre los enlaces
      borderBottom: '4px solid #F2A900',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <NavLink to="/" style={linkStyle}>
        Inicio
      </NavLink>
      <NavLink to="/recintos" style={linkStyle}>
        Recintos Deportivos
      </NavLink>
    </nav>
  );
}