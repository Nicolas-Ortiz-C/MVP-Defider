import React from 'react';
import '../stylesheets/recintos_page.css';

export default function RecintosPage() {
  const dataRecintos = [
    {
      campus: 'Campus Casa Central',
      instalaciones: [
        { name: 'Sala Fitness', img: null },
        { name: 'Estadio USM', img: null },
        { name: 'Multicancha 7x7', img: null },
        { name: 'Cancha Squash', img: null },
        { name: 'Multicancha 5x5', img: null },
        { name: 'Gimnasio 1', img: null },
        { name: 'Gimnasio 2', img: null },
        { name: 'Piscina USM', img: null },
        { name: 'Cancha Tenis', img: null },
        { name: 'Sala de Ajedrez', img: null },
        { name: 'Sala de Musculación', img: null }
      ]
    },
    {
      campus: 'Campus Santiago San Joaquín',
      instalaciones: [
        { name: 'Sala Musculación', img: null },
        { name: 'Gimnasio Principal', img: null },
        { name: 'Cancha Voleibol Playa', img: null },
        { name: 'Canchas de Tenis', img: null },
        { name: 'Canchas Futbolito', img: null }
      ]
    },
    {
      campus: 'Campus Santiago Vitacura',
      instalaciones: [
        { name: 'Gimnasio', img: null },
        { name: 'Sala de Musculación', img: null }
      ]
    }
  ];

  return (
    <div className="recintos-container">
      <h1 className="recintos-main-title">Nuestra Infraestructura</h1>

      {dataRecintos.map((grupo, index) => (
        <section key={index} className="campus-section">
          <h2 className="campus-title">
            <span className="campus-indicator"></span>
            {grupo.campus}
          </h2>

          <div className="recintos-grid">
            {grupo.instalaciones.map((recinto, i) => (
              <div 
                key={i} 
                className="infra-card"
                style={{ backgroundImage: recinto.img ? `url(${recinto.img})` : 'none' }}
              >
                <div className="infra-card-overlay">
                  <div className="infra-card-title-row">
                    <span className="infra-card-indicator"></span>
                    <h3>{recinto.name}</h3>
                  </div>
                  <span className="infra-card-sub">
                    {grupo.campus.replace('Campus ', '')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}