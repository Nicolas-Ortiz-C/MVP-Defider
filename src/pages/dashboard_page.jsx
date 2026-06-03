import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/dashboard_page.scss';

export default function DashboardPage() {
  return (
    <div className="defider-inicio">
      <section className="hero-banner">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-subtitle">Universidad Técnica Federico Santa María</p>
            <h1 className="hero-title">Departamento de Educación Física, Deportes y Recreación</h1>
            <p className="hero-description">
              Bienvenido al nuevo portal de autogestión deportiva.
            </p>
          </div>
        </div>
      </section>

      <section className="accesos-section">
        <div className="container">
          <div className="section-header">
            <h2>Servicios en Línea</h2>
            <div className="header-line"></div>
          </div>

          <div className="cards-grid">
            <Link to="/reservas" className="defider-card">
              <div className="card-image bg-canchas"></div>
              <div className="card-body">
                <h3>Reservar Recintos</h3>
                <p>Accede a la disponibilidad en tiempo real y asegura tu bloque horario para canchas y salas de musculación.</p>
                <span className="btn-link">Ingresar al portal &rarr;</span>
              </div>
            </Link>

            <Link to="/recintos" className="defider-card">
              <div className="card-image bg-infra"></div>
              <div className="card-body">
                <h3>Infraestructura</h3>
                <p>Conoce nuestras instalaciones deportivas disponibles a lo largo de todos los campus y sedes de la universidad.</p>
                <span className="btn-link">Ver catálogo &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}