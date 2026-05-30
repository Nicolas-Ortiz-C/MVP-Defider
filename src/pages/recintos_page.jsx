import React from 'react';

export default function RecintosPage() {
  const dataRecintos = [
    {
      campus: 'Campus Casa Central',
      instalaciones: [
        'Sala Fitness', 'Estadio USM', 'Multicancha 7x7', 'Cancha Squash',
        'Multicancha 5x5', 'Gimnasio 1', 'Gimnasio 2', 'Piscina USM', 
        'Cancha Tenis', 'Sala de Ajedrez', 'Sala de Musculación'
      ]
    },
    {
      campus: 'Campus Santiago San Joaquín',
      instalaciones: [
        'Sala Musculación', 'Gimnasio Principal', 'Cancha Voleibol Playa',
        'Canchas de Tenis', 'Canchas Futbolito'
      ]
    },
    {
      campus: 'Campus Santiago Vitacura',
      instalaciones: [
        'Gimnasio', 'Sala de Musculación'
      ]
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Título Principal de la Página */}
      <h1 style={{ color: '#003366', borderBottom: '3px solid #F2A900', paddingBottom: '10px', marginBottom: '40px' }}>
        Nuestra Infraestructura
      </h1>

      {dataRecintos.map((grupo, index) => (
        <section key={index} style={{ marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', color: '#555', marginBottom: '25px', fontWeight: 'bold' }}>
            <span style={{ display: 'inline-block', width: '4px', height: '35px', backgroundColor: '#F2A900', marginRight: '15px' }}></span>
            {grupo.campus}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {grupo.instalaciones.map((nombreRecinto, i) => (
              <div key={i} style={{
                position: 'relative', height: '220px', borderRadius: '12px', overflow: 'hidden',
                backgroundColor: '#4A5568', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <span style={{ display: 'inline-block', width: '3px', height: '16px', backgroundColor: '#F2A900', marginRight: '8px' }}></span>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>{nombreRecinto}</h3>
                  </div>
                  <span style={{ color: '#E2E8F0', fontSize: '0.85rem', marginLeft: '11px' }}>
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