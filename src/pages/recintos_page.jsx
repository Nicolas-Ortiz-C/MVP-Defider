import React from 'react';
import '../stylesheets/recintos_page.css';

export default function RecintosPage() {
  const dataRecintos = [
    {
      campus: 'Campus Casa Central',
      instalaciones: [
        { name: 'Sala Fitness', img: 'https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0016.jpg' },
        { name: 'Estadio USM', img: 'https://defider.usm.cl/wp-content/uploads/2022/05/G0251554.2e16d0ba.fill-158x158-1.jpg' },
        { name: 'Multicancha 7x7', img: 'https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0035.jpg' },
        { name: 'Cancha Squash', img: 'https://defider.usm.cl/wp-content/uploads/2022/05/Squash_web.2e16d0ba.fill-158x158-1.jpg' },
        { name: 'Multicancha 5x5', img: 'https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0031.jpg' },
        { name: 'Gimnasio 1', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Gimnasio_1_web.2e16d0ba.fill-158x158-1.jpg" },
        { name: 'Gimnasio 2', img: 'https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0023.jpg' },
        { name: 'Piscina USM', img: 'https://defider.usm.cl/wp-content/uploads/2022/05/G0141451.2e16d0ba.fill-158x158-1.jpg' },
        { name: 'Cancha Tenis', img: 'https://defider.usm.cl/wp-content/uploads/2022/05/Tenis_1_jCjmKao.2e16d0ba.fill-158x158-1.jpg' },
        { name: 'Sala de Ajedrez', img: "https://defider.usm.cl/wp-content/uploads/2022/05/IMG_1676_wGpKUu2.2e16d0ba.fill-158x158-1.jpg" },
        { name: 'Sala de Musculación', img: "https://defider.usm.cl/wp-content/uploads/2023/03/IMG_0018.jpg" }
      ]
    },
    {
      campus: 'Campus Santiago San Joaquín',
      instalaciones: [
        { name: 'Sala Musculación', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Sala_Fitness_San_Joaquin_de_8_a_20.2e16d0ba.fill-158x158-1.jpg" },
        { name: 'Gimnasio Principal', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Gimnasio_San_joaquin_de_8_a_22_hrs.2e16d0ba.fill-158x158-1.jpg" },
        { name: 'Cancha Voleibol Playa', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Voley_playa_San_joaquin_de_8_a_22_.2e16d0ba.fill-158x158-1.jpg" },
        { name: 'Canchas de Tenis', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Cancha_de_tenis_San_joaquin_de_10_.2e16d0ba.fill-158x158-1.jpg" },
        { name: 'Canchas Futbolito', img: "https://defider.usm.cl/wp-content/uploads/2022/05/Canchas_de_futbolito__San_joaquin_.2e16d0ba.fill-158x158-1.jpg" }
      ]
    },
    {
      campus: 'Campus Santiago Vitacura',
      instalaciones: [
        { name: 'Gimnasio', img: "https://defider.usm.cl/wp-content/uploads/2023/03/Gimnasio-Vitacura.jpeg" },
        { name: 'Sala de Musculación', img: "https://defider.usm.cl/wp-content/uploads/2022/05/IMG_1541.2e16d0ba.fill-158x158-1.jpg" }
      ]
    }
  ];

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
        <div className="defider-breadcrumbs">
          
        </div>

        <div className="defider-page-intro">
          <h2>Recintos Deportivos</h2>
          <p>
            El Área de Recintos Deportivos del DEFIDER es la encargada de administrar, mantener y supervisar los recintos, instalaciones e implementos deportivos de la Universidad.
          </p>
        </div>

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
    </div>
  );
}