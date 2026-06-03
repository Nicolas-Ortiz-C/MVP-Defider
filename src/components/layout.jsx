import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/dashboard_page';
import HomePage from '../pages/home_page';
import RecintosPage from '../pages/recintos_page';
// 1. Importas el nuevo componente
import ContactPage from '../pages/ContactPage'; 
import NavBar from './nav_bar';

export default function Layout() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="layout__page">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/reservas" element={<HomePage />} />
          <Route path="/recintos" element={<RecintosPage />} />
          
          {/* 2. Agregas la ruta para que coincida con el enlace de tu NavBar y tu Dashboard */}
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/recintos" element={<RecintosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}