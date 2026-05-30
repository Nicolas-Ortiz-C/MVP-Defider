import React, { useState } from 'react';

export default function HomePage() {
  const usmColors = {
    azulMarino: '#003366',
    dorado: '#F2A900',
    blanco: '#FFFFFF',
    grisFondo: '#F9FAFB',
    grisBorde: '#E5E7EB',
    textoOscuro: '#111827',
    textoSecundario: '#4B5563'
  };

  // Datos correlacionados con la sección de infraestructura real de DEFIDER
  const [recintos, setRecintos] = useState([
    {
      id: 1,
      nombre: 'Sala Fitness',
      campus: 'Casa Central',
      aforoActual: 18,
      aforoMaximo: 20,
      bloques: [
        { hora: '08:00 - 09:30', disponible: true },
        { hora: '09:45 - 11:15', disponible: false },
        { hora: '11:30 - 13:00', disponible: true },
      ]
    },
    {
      id: 2,
      nombre: 'Canchas Futbolito',
      campus: 'San Joaquín',
      aforoActual: 14,
      aforoMaximo: 14, // Aforo lleno para demostrar la validación visual
      bloques: [
        { hora: '14:00 - 15:30', disponible: false },
        { hora: '15:30 - 17:00', disponible: false },
        { hora: '17:00 - 18:30', disponible: true },
      ]
    },
    {
      id: 3,
      nombre: 'Sala de Musculación',
      campus: 'Vitacura',
      aforoActual: 5,
      aforoMaximo: 15,
      bloques: [
        { hora: '09:00 - 10:30', disponible: true },
        { hora: '10:30 - 12:00', disponible: true },
        { hora: '12:00 - 13:30', disponible: false },
      ]
    }
  ]);

  const [reservaModal, setReservaModal] = useState({ activo: false, recinto: null, bloque: null });
  const [feedback, setFeedback] = useState(null);
  const [misReservas, setMisReservas] = useState([]);

  const iniciarReserva = (recinto, bloque) => {
    if (!bloque.disponible || recinto.aforoActual >= recinto.aforoMaximo) return;
    setReservaModal({ activo: true, recinto, bloque });
  };

  const confirmarReserva = (e) => {
    e.preventDefault();
    const { recinto, bloque } = reservaModal;

    const recintosActualizados = recintos.map(r => {
      if (r.id === recinto.id) {
        const bloquesNuevos = r.bloques.map(b => 
          b.hora === bloque.hora ? { ...b, disponible: false } : b
        );
        return { ...r, aforoActual: r.aforoActual + 1, bloques: bloquesNuevos };
      }
      return r;
    });

    setRecintos(recintosActualizados);
    setMisReservas([...misReservas, { id: Date.now(), recinto: recinto.nombre, campus: recinto.campus, hora: bloque.hora }]);
    setReservaModal({ activo: false, recinto: null, bloque: null });
    
    setFeedback({ tipo: 'exito', mensaje: `Reserva confirmada en ${recinto.nombre} a las ${bloque.hora}.` });
    setTimeout(() => setFeedback(null), 4000);
  };

  const anularReserva = (idReserva, nombreRecinto, horaBloque) => {
    setMisReservas(misReservas.filter(res => res.id !== idReserva));
    
    const recintosRestaurados = recintos.map(r => {
      if (r.nombre === nombreRecinto) {
        const bloquesNuevos = r.bloques.map(b => b.hora === horaBloque ? { ...b, disponible: true } : b);
        return { ...r, aforoActual: r.aforoActual - 1, bloques: bloquesNuevos };
      }
      return r;
    });
    
    setRecintos(recintosRestaurados);
    setFeedback({ tipo: 'info', mensaje: 'Tu reserva ha sido anulada.' });
    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: usmColors.grisFondo, minHeight: '100vh', padding: '20px' }}>
      
      <header style={{ maxWidth: '1000px', margin: '0 auto 30px', borderBottom: `3px solid ${usmColors.dorado}`, paddingBottom: '15px' }}>
        <h1 style={{ color: usmColors.azulMarino, margin: '0 0 5px 0' }}>App DEFIDER</h1>
        <p style={{ color: usmColors.textoSecundario, margin: 0 }}>Panel de Autogestión Deportiva USM</p>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '30px', alignItems: 'start' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {feedback && (
            <div style={{ padding: '15px', borderRadius: '6px', backgroundColor: feedback.tipo === 'exito' ? '#DEF7EC' : '#E5E7EB', color: feedback.tipo === 'exito' ? '#03543F' : '#374151', borderLeft: `4px solid ${feedback.tipo === 'exito' ? '#0E9F6E' : '#6B7280'}`, fontWeight: 'bold' }}>
              {feedback.mensaje}
            </div>
          )}

          <h2 style={{ color: usmColors.textoOscuro, fontSize: '1.3rem', margin: 0 }}>Disponibilidad en Tiempo Real</h2>
          
          {recintos.map(recinto => {
            const isLleno = recinto.aforoActual >= recinto.aforoMaximo;
            const porcentajeAforo = (recinto.aforoActual / recinto.aforoMaximo) * 100;
            
            return (
              <div key={recinto.id} style={{ backgroundColor: usmColors.blanco, padding: '20px', borderRadius: '8px', border: `1px solid ${usmColors.grisBorde}`, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', color: usmColors.azulMarino }}>{recinto.nombre}</h3>
                    <span style={{ fontSize: '0.85rem', color: usmColors.textoSecundario }}>📍 Sede {recinto.campus}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: isLleno ? '#DC2626' : '#059669' }}>
                      Aforo: {recinto.aforoActual}/{recinto.aforoMaximo}
                    </div>
                    <div style={{ width: '100px', height: '6px', backgroundColor: '#E5E7EB', borderRadius: '3px', marginTop: '5px', overflow: 'hidden' }}>
                      <div style={{ width: `${porcentajeAforo}%`, height: '100%', backgroundColor: isLleno ? '#DC2626' : '#059669' }}></div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {recinto.bloques.map((bloque, i) => (
                    <button
                      key={i}
                      onClick={() => iniciarReserva(recinto, bloque)}
                      disabled={!bloque.disponible || isLleno}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: 'none',
                        backgroundColor: bloque.disponible && !isLleno ? '#E1EFFE' : '#F3F4F6',
                        color: bloque.disponible && !isLleno ? '#1E429F' : '#9CA3AF',
                        fontWeight: 'bold',
                        cursor: bloque.disponible && !isLleno ? 'pointer' : 'not-allowed',
                        transition: 'background 0.2s'
                      }}
                    >
                      {bloque.hora} {bloque.disponible && !isLleno ? '✓' : '✗'}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <aside style={{ backgroundColor: usmColors.blanco, padding: '20px', borderRadius: '8px', border: `1px solid ${usmColors.dorado}` }}>
          <h2 style={{ color: usmColors.azulMarino, fontSize: '1.2rem', margin: '0 0 15px 0', borderBottom: `1px solid ${usmColors.grisBorde}`, paddingBottom: '10px' }}>Mis Reservas</h2>
          
          {misReservas.length === 0 ? (
            <p style={{ color: usmColors.textoSecundario, fontSize: '0.9rem' }}>Sin reservas activas.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {misReservas.map(res => (
                <div key={res.id} style={{ backgroundColor: usmColors.grisFondo, padding: '12px', borderRadius: '6px', borderLeft: `3px solid ${usmColors.azulMarino}` }}>
                  <strong style={{ display: 'block', color: usmColors.textoOscuro, fontSize: '0.95rem' }}>{res.recinto}</strong>
                  <span style={{ display: 'block', fontSize: '0.85rem', color: usmColors.textoSecundario, margin: '4px 0' }}>{res.hora} | {res.campus}</span>
                  <button onClick={() => anularReserva(res.id, res.recinto, res.hora)} style={{ marginTop: '8px', padding: '4px 8px', fontSize: '0.8rem', color: '#DC2626', backgroundColor: 'transparent', border: '1px solid #DC2626', borderRadius: '4px', cursor: 'pointer' }}>
                    Liberar Cupo
                  </button>
                </div>
              ))}
            </div>
          )}
        </aside>
      </main>

      {reservaModal.activo && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: usmColors.blanco, padding: '30px', borderRadius: '8px', width: '350px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: usmColors.azulMarino }}>Confirmar Acción</h3>
            <p style={{ color: usmColors.textoSecundario, fontSize: '0.95rem' }}>
              Reservar <strong>{reservaModal.recinto.nombre}</strong><br/>
              Bloque: {reservaModal.bloque.hora}
            </p>
            <form onSubmit={confirmarReserva}>
              <div style={{ marginTop: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px', color: usmColors.textoOscuro }}>Rol USM:</label>
                <input type="text" placeholder="Ej: 202273631-3" required style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: `1px solid ${usmColors.grisBorde}` }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: usmColors.azulMarino, color: usmColors.blanco, border: 'none', borderRadius: '4px', fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' }}>
                Confirmar Reserva
              </button>
              <button type="button" onClick={() => setReservaModal({ activo: false, recinto: null, bloque: null })} style={{ width: '100%', padding: '10px', backgroundColor: 'transparent', color: usmColors.textoSecundario, border: 'none', marginTop: '5px', cursor: 'pointer' }}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}