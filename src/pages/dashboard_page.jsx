import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/dashboard_page.css';

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Bienvenido a DEFIDER</h1>
      <p className="dashboard-subtitle">
        Gestiona tus reservas deportivas e infraestructura de manera centralizada.
      </p>

      <div className="dashboard-grid">
        <Link to="/reservas" className="dashboard-card">
          <h2>⚽ Reservar Recintos</h2>
          <p>
            Consulta la disponibilidad en tiempo real de aforos y asegura tu cupo de forma express para tus actividades.
          </p>
        </Link>

        <Link to="/recintos" className="dashboard-card">
          <h2>🏢 Infraestructura</h2>
          <p>
            Revisa la lista completa de recintos, canchas y gimnasios disponibles a lo largo de cada uno de los campus universitarios.
          </p>
        </Link>
      </div>
    </div>
  );
}