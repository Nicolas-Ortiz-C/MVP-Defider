import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/dashboard_page';
import HomePage from '../pages/home_page';
import RecintosPage from '../pages/recintos_page';
import DeportesPage from '../pages/deportes_page';
import DeporteDetallePage from '../pages/deporte_detalle_page';
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
          <Route path="/deportes" element={<DeportesPage />} />
          <Route path="/deportes/:slug" element={<DeporteDetallePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}