import React, { useState } from 'react';
import '../stylesheets/home_page.css';

export default function HomePage() {
  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const [recintos, setRecintos] = useState([
    {
      id: 1,
      nombre: 'Multicancha 1',
      campus: 'San Joaquín',
      deporte: 'Fútbol',
      aforoMaximo: 14,
      agenda: {
        'Lunes': { aforoActual: 4, bloques: [{ hora: '12:30 - 14:00', disponible: true }, { hora: '14:00 - 15:30', disponible: true }] },
        'Martes': { aforoActual: 8, bloques: [{ hora: '12:30 - 14:00', disponible: false }, { hora: '14:00 - 15:30', disponible: true }] },
        'Miércoles': { aforoActual: 2, bloques: [{ hora: '12:30 - 14:00', disponible: true }, { hora: '14:00 - 15:30', disponible: true }] },
        'Jueves': { aforoActual: 10, bloques: [{ hora: '12:30 - 14:00', disponible: true }, { hora: '14:00 - 15:30', disponible: false }] },
        'Viernes': { aforoActual: 0, bloques: [
          { hora: '12:30 - 14:00', disponible: false },
          { hora: '14:00 - 15:30', disponible: true },
          { hora: '15:30 - 17:00', disponible: true }
        ]},
        'Sábado': { aforoActual: 14, bloques: [{ hora: '10:00 - 11:30', disponible: false }, { hora: '11:30 - 13:00', disponible: false }] }
      }
    },
    {
      id: 2,
      nombre: 'Sala Fitness',
      campus: 'Casa Central',
      deporte: 'Musculación',
      aforoMaximo: 20,
      agenda: {
        'Lunes': { aforoActual: 12, bloques: [{ hora: '14:00 - 15:30', disponible: true }, { hora: '15:30 - 17:00', disponible: true }] },
        'Martes': { aforoActual: 15, bloques: [{ hora: '14:00 - 15:30', disponible: true }, { hora: '15:30 - 17:00', disponible: false }] },
        'Miércoles': { aforoActual: 10, bloques: [{ hora: '14:00 - 15:30', disponible: true }, { hora: '15:30 - 17:00', disponible: true }] },
        'Jueves': { aforoActual: 14, bloques: [{ hora: '14:00 - 15:30', disponible: false }, { hora: '15:30 - 17:00', disponible: true }] },
        'Viernes': { aforoActual: 18, bloques: [{ hora: '14:00 - 15:30', disponible: true }, { hora: '15:30 - 17:00', disponible: true }] },
        'Sábado': { aforoActual: 5, bloques: [{ hora: '09:00 - 10:30', disponible: true }, { hora: '10:30 - 12:00', disponible: true }] }
      }
    },
    {
      id: 3,
      nombre: 'Sala de Musculación',
      campus: 'Vitacura',
      aforoMaximo: 15,
      agenda: {
        'Lunes': { aforoActual: 15, bloques: [{ hora: '14:00 - 15:30', disponible: false }, { hora: '15:30 - 17:00', disponible: false }] },
        'Martes': { aforoActual: 8, bloques: [{ hora: '14:00 - 15:30', disponible: true }, { hora: '15:30 - 17:00', disponible: true }] },
        'Miércoles': { aforoActual: 15, bloques: [{ hora: '14:00 - 15:30', disponible: false }, { hora: '15:30 - 17:00', disponible: false }] },
        'Jueves': { aforoActual: 12, bloques: [{ hora: '14:00 - 15:30', disponible: true }, { hora: '15:30 - 17:00', disponible: false }] },
        'Viernes': { aforoActual: 11, bloques: [{ hora: '14:00 - 15:30', disponible: true }, { hora: '15:30 - 17:00', disponible: false }] },
        'Sábado': { aforoActual: 15, bloques: [{ hora: '09:00 - 10:30', disponible: false }, { hora: '10:30 - 12:00', disponible: false }] }
      }
    }
  ]);

  const [filtroSede, setFiltroSede] = useState('Todas');
  const [filtroDeporte, setFiltroDeporte] = useState('Todos');
  const [filtroDia, setFiltroDia] = useState('Viernes');

  const [reservaModal, setReservaModal] = useState({ activo: false, recinto: null, bloque: null });
  const [solicitarImplemento, setSolicitarImplemento] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [misReservas, setMisReservas] = useState([]);

  const recintosFiltrados = recintos.filter(r => {
    const coincideSede = filtroSede === 'Todas' || r.campus === filtroSede;
    const coincideDeporte = filtroDeporte === 'Todos' || r.deporte === filtroDeporte;
    return coincideSede && coincideDeporte;
  });

  const iniciarReserva = (recinto, bloque) => {
    const datosDia = recinto.agenda[filtroDia];
    if (!bloque.disponible || datosDia.aforoActual >= recinto.aforoMaximo) return;
    setSolicitarImplemento(false);
    setReservaModal({ activo: true, recinto, bloque });
  };

  const confirmarReserva = (e) => {
    e.preventDefault();
    const { recinto, bloque } = reservaModal;

    const recintosActualizados = recintos.map(r => {
      if (r.id === recinto.id) {
        const agendaDiaActual = r.agenda[filtroDia];
        const bloquesNuevos = agendaDiaActual.bloques.map(b => 
          b.hora === bloque.hora ? { ...b, disponible: false } : b
        );
        return {
          ...r,
          agenda: {
            ...r.agenda,
            [filtroDia]: { aforoActual: Math.min(agendaDiaActual.aforoActual + 1, r.aforoMaximo), bloques: bloquesNuevos }
          }
        };
      }
      return r;
    });

    setRecintos(recintosActualizados);
    setMisReservas([...misReservas, { 
      id: Date.now(), recintoId: recinto.id, recinto: recinto.nombre, campus: recinto.campus, hora: bloque.hora, dia: filtroDia,
      implemento: solicitarImplemento && recinto.deporte === 'Fútbol' ? '1 Balón de Fútbol' : 'Ninguno'
    }]);
    
    setReservaModal({ activo: false, recinto: null, bloque: null });
    setFeedback({ tipo: 'exito', mensaje: `Reserva confirmada en ${recinto.nombre} para el ${filtroDia} (${bloque.hora}).` });
    setTimeout(() => setFeedback(null), 5000);
  };

  const anularReserva = (idReserva, recintoId, diaReserva, horaBloque) => {
    setMisReservas(misReservas.filter(res => res.id !== idReserva));
    const recintosRestaurados = recintos.map(r => {
      if (r.id === recintoId) {
        const agendaDiaActual = r.agenda[diaReserva];
        const bloquesNuevos = agendaDiaActual.bloques.map(b => b.hora === horaBloque ? { ...b, disponible: true } : b);
        return {
          ...r,
          agenda: {
            ...r.agenda,
            [diaReserva]: { aforoActual: Math.max(agendaDiaActual.aforoActual - 1, 0), bloques: bloquesNuevos }
          }
        };
      }
      return r;
    });
    setRecintos(recintosRestaurados);
    setFeedback({ tipo: 'info', mensaje: 'Reserva anulada. Cupo liberado.' });
    setTimeout(() => setFeedback(null), 4000);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>App DEFIDER</h1>
        <p>Panel de Autogestión Deportiva USM</p>
      </header>

      <main className="main-grid">
        <div className="left-column">
          {feedback && (
            <div className={`feedback-alert ${feedback.tipo}`}>
              {feedback.mensaje}
            </div>
          )}

          <div className="filters-panel">
            <div className="filter-group">
              <label>Sede / Campus:</label>
              <select value={filtroSede} onChange={(e) => setFiltroSede(e.target.value)}>
                <option value="Todas">Todas las sedes</option>
                <option value="Casa Central">Casa Central</option>
                <option value="San Joaquín">San Joaquín</option>
                <option value="Vitacura">Vitacura</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Deporte:</label>
              <select value={filtroDeporte} onChange={(e) => setFiltroDeporte(e.target.value)}>
                <option value="Todos">Todos los deportes</option>
                <option value="Fútbol">Fútbol / Multicancha</option>
                <option value="Musculación">Musculación / Fitness</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Día de la agenda:</label>
              <select className="highlight" value={filtroDia} onChange={(e) => setFiltroDia(e.target.value)}>
                {diasSemana.map(dia => <option key={dia} value={dia}>{dia}</option>)}
              </select>
            </div>
          </div>
          
          {recintosFiltrados.map(recinto => {
            const agendaDia = recinto.agenda[filtroDia] || { aforoActual: 0, bloques: [] };
            const isLleno = agendaDia.aforoActual >= recinto.aforoMaximo;
            const porcentaje = (agendaDia.aforoActual / recinto.aforoMaximo) * 100;
            
            return (
              <div key={recinto.id} className="recinto-card">
                <div className="recinto-card-header">
                  <div>
                    <h3>{recinto.nombre}</h3>
                    <span>📍 Sede {recinto.campus} | ⚽ {recinto.deporte}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className={`aforo-text ${isLleno ? 'red' : 'green'}`}>
                      Aforo ({filtroDia}): {agendaDia.aforoActual}/{recinto.aforoMaximo}
                    </div>
                    <div className="aforo-bar-bg">
                      <div className={`aforo-bar-fill ${isLleno ? 'red' : 'green'}`} style={{ width: `${porcentaje}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="bloques-grid">
                  {agendaDia.bloques.map((bloque, i) => (
                    <button
                      key={i}
                      onClick={() => iniciarReserva(recinto, bloque)}
                      disabled={!bloque.disponible || isLleno}
                      className={`bloque-btn ${bloque.disponible && !isLleno ? 'available' : 'disabled'}`}
                    >
                      {bloque.hora} {bloque.disponible && !isLleno ? '✓' : '✗'}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <aside className="sidebar-panel">
          <h2 className="sidebar-title">Mis Reservas</h2>
          {misReservas.length === 0 ? (
            <p style={{ color: '#4B5563', fontSize: '0.9rem' }}>Sin reservas activas.</p>
          ) : (
            misReservas.map(res => (
              <div key={res.id} className="reserva-item">
                <strong>{res.recinto}</strong>
                <span>📅 {res.dia} | 🕒 {res.hora}</span>
                <span>📍 Campus {res.campus}</span>
                {res.implemento !== 'Ninguno' && <span className="implemento-tag">🎒 Incluye: {res.implemento}</span>}
                <button onClick={() => anularReserva(res.id, res.recintoId, res.dia, res.hora)} className="anular-btn">
                  Liberar Cupo
                </button>
              </div>
            ))
          )}
        </aside>
      </main>

      {reservaModal.activo && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Confirmar Acción</h3>
            <p style={{ color: '#4B5563', fontSize: '0.95rem' }}>
              Reservar <strong>{reservaModal.recinto.nombre}</strong><br/>
              Día: <strong>{filtroDia}</strong> | Bloque: {reservaModal.bloque.hora}
            </p>
            <form onSubmit={confirmarReserva}>
              <div style={{ marginTop: '15px' }}>
                <label style={{ fontWeight: 'bold', color: '#111827', fontSize: '0.85rem' }}>Rol USM:</label>
                <input type="text" placeholder="Ej: 202012345-6" required className="input-field" />
              </div>
              
              {reservaModal.recinto.deporte === 'Fútbol' && (
                <div className="implemento-box">
                  <label>
                    <input type="checkbox" checked={solicitarImplemento} onChange={(e) => setSolicitarImplemento(e.target.checked)} />
                    Agregar 1 Balón de Fútbol al préstamo
                  </label>
                </div>
              )}

              <button type="submit" className="submit-btn">Confirmar Reserva</button>
              <button type="button" onClick={() => setReservaModal({ activo: false, recinto: null, bloque: null })} className="cancel-btn">Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}