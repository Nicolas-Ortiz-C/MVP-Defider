import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import deportesData from '../data/deportes_data';
import '../stylesheets/deporte_detalle_page.css';

export default function DeporteDetallePage() {
  const { slug } = useParams();
  const deporte = deportesData.find((d) => d.slug === slug);

  if (!deporte) {
    return <Navigate to="/deportes" replace />;
  }

  return (
    <div className="deporte-detalle-wrapper">
      <div
        className="defider-hero-banner deporte-detalle-hero"
        style={{ backgroundImage: deporte.img ? `url(${deporte.img})` : 'none' }}
      >
        <div className="defider-hero-overlay">
          <div className="defider-hero-content">
            <div className="yellow-line"></div>
            <h1>{deporte.nombre}</h1>
          </div>
        </div>
      </div>

      <div className="deporte-detalle-container">
        <div className="defider-breadcrumbs">
          <Link to="/">Inicio</Link>
          <span>»</span>
          <Link to="/deportes">Deportes</Link>
          <span>»</span>
          <span className="breadcrumb-current">{deporte.nombre}</span>
        </div>

        <div className="deporte-descripcion">
          {deporte.descripcion.split('\n\n').map((parrafo, i) => (
            <p key={i}>{parrafo}</p>
          ))}
        </div>

        {deporte.sedes.map((sede, i) => (
          <div key={i} className="deporte-sede">
            <h2>{sede.nombreSede}</h2>
            <table className="deporte-info-table">
              <tbody>
                <tr>
                  <td className="info-label">Profesor</td>
                  <td className="info-value">{sede.profesor}</td>
                </tr>
                <tr>
                  <td className="info-label">Recinto</td>
                  <td className="info-value">
                    {sede.recinto.split('\n').map((linea, j) => (
                      <span key={j} className="info-line">{linea}</span>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td className="info-label">Horarios de entrenamiento</td>
                  <td className="info-value">
                    {sede.horarios.split('\n').map((linea, j) => (
                      <span key={j} className="info-line">{linea}</span>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}

        <div className="volver-container">
          <Link to="/deportes" className="btn-secondary">&larr; Volver a Deportes</Link>
        </div>
      </div>
    </div>
  );
}
