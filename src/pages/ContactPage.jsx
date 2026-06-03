import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/contact_page.scss';

export default function ContactPage() {
  return (
    <div className="contacto-page">
      {/* Banner superior */}
      <section className="hero-contacto">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Contacto</h1>
          </div>
        </div>
      </section>

      {/* Contenedor principal */}
      <div className="container contacto-container">
        


        {/* Tabla de información de contacto */}
        <div className="table-responsive">
          <table className="contact-table">
            <tbody>
              <tr>
                <td className="campus-name">Campus Casa Central</td>
                <td className="campus-info">
                  Teléfono: +56 32 2654269 / +56 32 2654000<br />
                  Correo electrónico: defider@usm.cl
                </td>
              </tr>
              <tr>
                <td className="campus-name">Santiago San Joaquin</td>
                <td className="campus-info">
                  Teléfono: +56 2 2303 7000 / +56 2 2303 7001<br />
                  Correo electrónico: defider@usm.cl
                </td>
              </tr>
              <tr>
                <td className="campus-name">Santiago Vitacura</td>
                <td className="campus-info">
                  Teléfono: +56 2 3202 8000<br />
                  Correo electrónico: defider@usm.cl
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}