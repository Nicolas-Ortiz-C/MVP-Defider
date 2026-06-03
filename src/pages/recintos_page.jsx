import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/recintos_page.css'; 

export default function RecintosPage() {
  // 1. Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  const dataRecintos = [
    {
      campus: 'Campus Casa Central',
      instalaciones: [
        { name: 'Sala Fitness', img: 'https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0016.jpg', admin: 'Antonia Aro Núñez', telefono: '+56 32 2654134', horario: '09:00 a 21:00' },
        { name: 'Estadio USM', img: 'https://defider.usm.cl/wp-content/uploads/2022/05/G0251554.2e16d0ba.fill-158x158-1.jpg', admin: 'Equipo DEFIDER', telefono: '+56 32 2654000', horario: '08:00 a 18:00' },
        { name: 'Multicancha 7x7', img: 'https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0035.jpg', admin: 'Equipo DEFIDER', telefono: '+56 32 2654000', horario: '08:00 a 21:00' },
        { name: 'Cancha Squash', img: 'https://defider.usm.cl/wp-content/uploads/2022/05/Squash_web.2e16d0ba.fill-158x158-1.jpg', admin: 'Equipo DEFIDER', telefono: '+56 32 2654000', horario: '08:00 a 21:00' },
        { name: 'Multicancha 5x5', img: 'https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0031.jpg', admin: 'Equipo DEFIDER', telefono: '+56 32 2654000', horario: '08:00 a 21:00' },
        { name: 'Gimnasio 1', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Gimnasio_1_web.2e16d0ba.fill-158x158-1.jpg", admin: 'Equipo DEFIDER', telefono: '+56 32 2654000', horario: '08:00 a 21:00' },
        { name: 'Gimnasio 2', img: 'https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0023.jpg', admin: 'Equipo DEFIDER', telefono: '+56 32 2654000', horario: '08:00 a 21:00' },
        { name: 'Piscina USM', img: 'https://defider.usm.cl/wp-content/uploads/2022/05/G0141451.2e16d0ba.fill-158x158-1.jpg', admin: 'Administración Piscina', telefono: '+56 32 2654000', horario: '09:00 a 19:00' },
        { name: 'Cancha Tenis', img: 'https://defider.usm.cl/wp-content/uploads/2022/05/Tenis_1_jCjmKao.2e16d0ba.fill-158x158-1.jpg', admin: 'Equipo DEFIDER', telefono: '+56 32 2654000', horario: '08:00 a 21:00' },
        { name: 'Sala de Ajedrez', img: "https://defider.usm.cl/wp-content/uploads/2022/05/IMG_1676_wGpKUu2.2e16d0ba.fill-158x158-1.jpg", admin: 'Equipo DEFIDER', telefono: '+56 32 2654000', horario: '08:00 a 21:00' },
        { name: 'Sala de Musculación', img: "https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0018.jpg", admin: 'Equipo DEFIDER', telefono: '+56 32 2654000', horario: '08:00 a 21:00' }
      ]
    },
    {
      campus: 'Campus Santiago San Joaquín',
      instalaciones: [
        { name: 'Sala Musculación', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Sala_Fitness_San_Joaquin_de_8_a_20.2e16d0ba.fill-158x158-1.jpg", admin: 'Equipo DEFIDER', telefono: '+56 2 2303 7000', horario: '08:00 a 20:00' },
        { name: 'Gimnasio Principal', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Gimnasio_San_joaquin_de_8_a_22_hrs.2e16d0ba.fill-158x158-1.jpg", admin: 'Equipo DEFIDER', telefono: '+56 2 2303 7000', horario: '08:00 a 22:00' },
        { name: 'Cancha Voleibol Playa', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Voley_playa_San_joaquin_de_8_a_22_.2e16d0ba.fill-158x158-1.jpg", admin: 'Equipo DEFIDER', telefono: '+56 2 2303 7000', horario: '08:00 a 22:00' },
        { name: 'Canchas de Tenis', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Cancha_de_tenis_San_joaquin_de_10_.2e16d0ba.fill-158x158-1.jpg", admin: 'Equipo DEFIDER', telefono: '+56 2 2303 7000', horario: '10:00 a 20:00' },
        { name: 'Canchas Futbolito', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Canchas_de_futbolito__San_joaquin_.2e16d0ba.fill-158x158-1.jpg", admin: 'Equipo DEFIDER', telefono: '+56 2 2303 7000', horario: '08:00 a 22:00' }
      ]
    },
    {
      campus: 'Campus Santiago Vitacura',
      instalaciones: [
        { name: 'Gimnasio', img: "https://defider.usm.cl/wp-content/uploads/2023/03/Gimnasio-Vitacura.jpeg", admin: 'Equipo DEFIDER', telefono: '+56 2 3202 8000', horario: '09:00 a 20:00' },
        { name: 'Sala de Musculación', img: "https://defider.usm.cl/wp-content/uploads/2022/05/IMG_1541.2e16d0ba.fill-158x158-1.jpg", admin: 'Equipo DEFIDER', telefono: '+56 2 3202 8000', horario: '09:00 a 20:00' }
      ]
    }
  ];

  // 2. Lógica de filtrado
  const filteredData = dataRecintos.map(grupo => {
    return {
      ...grupo,
      // Filtra las instalaciones donde el nombre incluya el término de búsqueda (ignorando mayúsculas/minúsculas)
      instalaciones: grupo.instalaciones.filter(recinto => 
        recinto.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    };
  }).filter(grupo => grupo.instalaciones.length > 0); // Oculta el campus completo si no quedaron recintos tras el filtro

  return (
    <div className="recintos-page-wrapper">
      <div className="defider-hero-banner">
        <div className="defider-hero-overlay">
          <div className="defider-hero-content">
            <div className="yellow-line"></div>
            <h1>Recintos Deportivos</h1>
          </div>
        </div>
      </div>

      <div className="recintos-container">
        <div className="defider-page-intro">
          <h2>Catálogo de Instalaciones</h2>
          <p>
            Revisa la disponibilidad técnica de nuestras instalaciones a lo largo de todos los campus y gestiona tus reservas deportivas.
          </p>

          {/* 3. Barra de Búsqueda */}
          <div className="search-container">
            <input 
              type="text" 
              className="search-input"
              placeholder="Buscar recinto deportivo (ej. Tenis, Piscina, Musculación)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* 4. Renderizado condicional basado en la búsqueda */}
        {filteredData.length > 0 ? (
          filteredData.map((grupo, index) => (
            <section key={index} className="campus-section">
              <h2 className="campus-title">
                <span className="campus-indicator"></span>
                {grupo.campus}
              </h2>

              <div className="recintos-list">
                {grupo.instalaciones.map((recinto, i) => {
                  const nombreCampus = grupo.campus.replace('Campus ', '');

                  return (
                    <div key={i} className="recinto-row-card">
                      <div className="recinto-row-img" style={{ backgroundImage: recinto.img ? `url(${recinto.img})` : 'none' }}></div>

                      <div className="recinto-row-content">
                        <div className="recinto-header">
                          <div>
                            <h3>{recinto.name}</h3>
                            <span className="campus-badge">{nombreCampus}</span>
                          </div>
                        </div>

                        <div className="recinto-details-grid">
                          <div className="detail-item">
                            <span className="detail-label">Administración</span>
                            <span className="detail-value">{recinto.admin || 'No especificada'}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Horario Operativo</span>
                            <span className="detail-value">{recinto.horario || 'N/A'}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">Contacto</span>
                            <span className="detail-value">{recinto.telefono || 'N/A'}</span>
                          </div>
                        </div>

                        <div className="recinto-actions">
                          <Link to="/reservas" className="btn-primary">
                            Ir a Reservar &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))
        ) : (
          /* Estado cuando no hay resultados */
          <div className="no-results-state">
            <h3>No se encontraron resultados</h3>
            <p>No tenemos registrado un recinto con el término "<strong>{searchTerm}</strong>".</p>
            <button className="btn-secondary" onClick={() => setSearchTerm('')}>Limpiar búsqueda</button>
          </div>
        )}
      </div>
    </div>
  );
}