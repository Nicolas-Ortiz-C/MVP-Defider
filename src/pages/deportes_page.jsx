import React from 'react';
import { Link } from 'react-router-dom';
import deportesData from '../data/deportes_data';
import '../stylesheets/deportes_page.css';

export default function DeportesPage() {
  return (
    <div className="deportes-page-wrapper">
      <div className="defider-hero-banner deportes-hero">
        <div className="defider-hero-overlay">
          <div className="defider-hero-content">
            <div className="yellow-line"></div>
            <h1>Deportes</h1>
          </div>
        </div>
      </div>

      <div className="deportes-container">
        <div className="defider-page-intro">
          <p>
            El Área de Representación Deportiva del DEFIDER es la encargada de planificar, coordinar, ejecutar y evaluar las selecciones deportivas, siendo éstas una opción de participación voluntaria y encargadas de representar a la Universidad en los diferentes escenarios del deporte competitivo a nivel regional, nacional e internacional.
          </p>
        </div>

        <div className="deportes-grid">
          {deportesData.map((deporte) => (
            <Link
              to={`/deportes/${deporte.slug}`}
              key={deporte.slug}
              className="deporte-card"
              style={{ backgroundImage: deporte.img ? `url(${deporte.img})` : 'none' }}
            >
              <div className="deporte-card-overlay">
                <div className="deporte-card-content">
                  <div className="yellow-line-small"></div>
                  <h3>{deporte.nombre}</h3>
                  <span className="deporte-categoria">{deporte.categoria}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
