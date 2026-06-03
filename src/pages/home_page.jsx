import React, { useState } from 'react';
import '../stylesheets/home_page.scss';

export default function HomePage() {
  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const bloquesHorarios = [
    '09:40 - 10:50', '11:05 - 12:15', '12:30 - 13:40', '14:40 - 15:50', 
    '16:05 - 17:15', '17:30 - 18:40', '18:50 - 20:00', '20:15 - 21:25'
  ];

  const generarAgenda = () => {
    let agenda = {};
    diasSemana.forEach(dia => {
      let bloquesObj = {};
      bloquesHorarios.forEach(hora => {
        // El aforo y la disponibilidad ahora pertenecen EXCLUSIVAMENTE al bloque
        bloquesObj[hora] = { 
          disponible: Math.random() > 0.3,
          aforoActual: Math.floor(Math.random() * 2) 
        };
      });
      agenda[dia] = { bloquesObj };
    });
    return agenda;
  };

  const [recintos, setRecintos] = useState([
    {
      id: 1,
      nombre: 'Canchas Futbolito',
      campus: 'San Joaquín',
      deporte: 'Fútbol',
      aforoMaximo: 2,
      agenda: generarAgenda()
    },
    {
      id: 2,
      nombre: 'Sala Fitness',
      campus: 'Casa Central',
      deporte: 'Musculación',
      aforoMaximo: 20,
      agenda: generarAgenda()
    },
    {
      id: 3,
      nombre: 'Sala de Musculación',
      campus: 'Vitacura',
      deporte: 'Musculación',
      aforoMaximo: 15,
      agenda: generarAgenda()
    }
  ]);

  const [filtroSede, setFiltroSede] = useState('Todas');
  const [filtroDeporte, setFiltroDeporte] = useState('Todos');

  const [reservaModal, setReservaModal] = useState({ activo: false, recinto: null, bloqueHora: null, dia: null });
  const [solicitarImplemento, setSolicitarImplemento] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [misReservas, setMisReservas] = useState([]);

  const recintosFiltrados = recintos.filter(r => {
    const coincideSede = filtroSede === 'Todas' || r.campus === filtroSede;
    const coincideDeporte = filtroDeporte === 'Todos' || r.deporte === filtroDeporte;
    return coincideSede && coincideDeporte;
  });

  const iniciarReserva = (recinto, dia, hora) => {
    const bloqueInfo = recinto.agenda[dia].bloquesObj[hora];

    if (!bloqueInfo.disponible || bloqueInfo.aforoActual >= recinto.aforoMaximo) return;
    
    setSolicitarImplemento(false);
    setReservaModal({ activo: true, recinto, bloqueHora: hora, dia: dia });
  };

  const confirmarReserva = (e) => {
    e.preventDefault();
    const { recinto, bloqueHora, dia } = reservaModal;

    const recintosActualizados = recintos.map(r => {
      if (r.id === recinto.id) {
        const agendaDiaActual = r.agenda[dia];
        const bloqueActual = agendaDiaActual.bloquesObj[bloqueHora];
        const nuevoAforo = Math.min(bloqueActual.aforoActual + 1, r.aforoMaximo);

        return {
          ...r,
          agenda: {
            ...r.agenda,
            [dia]: { 
              ...agendaDiaActual, 
              bloquesObj: {
                ...agendaDiaActual.bloquesObj,
                [bloqueHora]: { 
                  ...bloqueActual,
                  aforoActual: nuevoAforo,
                  disponible: nuevoAforo < r.aforoMaximo 
                }
              }
            }
          }
        };
      }
      return r;
    });

    setRecintos(recintosActualizados);
    setMisReservas([...misReservas, { 
      id: Date.now(), recintoId: recinto.id, recinto: recinto.nombre, campus: recinto.campus, hora: bloqueHora, dia: dia,
      implemento: solicitarImplemento && recinto.deporte === 'Fútbol' ? '1 Balón de Fútbol' : 'Ninguno'
    }]);
    
    setReservaModal({ activo: false, recinto: null, bloqueHora: null, dia: null });
    setFeedback({ tipo: 'exito', mensaje: `Reserva confirmada en ${recinto.nombre} para el ${dia} (${bloqueHora}).` });
    setTimeout(() => setFeedback(null), 5000);
  };

  const anularReserva = (idReserva, recintoId, diaReserva, horaBloque) => {
    setMisReservas(misReservas.filter(res => res.id !== idReserva));
    
    const recintosRestaurados = recintos.map(r => {
      if (r.id === recintoId) {
        const agendaDiaActual = r.agenda[diaReserva];
        const bloqueActual = agendaDiaActual.bloquesObj[horaBloque];
        const nuevoAforo = Math.max(bloqueActual.aforoActual - 1, 0);

        return {
          ...r,
          agenda: {
            ...r.agenda,
            [diaReserva]: { 
              ...agendaDiaActual, 
              bloquesObj: {
                ...agendaDiaActual.bloquesObj,
                [horaBloque]: { 
                  ...bloqueActual,
                  aforoActual: nuevoAforo,
                  disponible: true 
                }
              }
            }
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
          </div>
          
          {recintosFiltrados.map(recinto => {
            return (
              <div key={recinto.id} className="recinto-card">
                <div className="recinto-card-header">
                  <div>
                    <h3>{recinto.nombre}</h3>
                    <span>📍 Sede {recinto.campus} |  {recinto.deporte}</span>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="defider-calendar-table">
                    <thead>
                      <tr>
                        <th>Bloques</th>
                        {diasSemana.map(dia => <th key={dia}>{dia}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {bloquesHorarios.map((hora, index) => (
                        <tr key={index}>
                          <td className="bloque-hora">
                            <strong>{index + 1}</strong><br/>
                            {hora}
                          </td>
                          {diasSemana.map(dia => {
                            const bloqueInfo = recinto.agenda[dia].bloquesObj[hora];
                            const isLleno = bloqueInfo.aforoActual >= recinto.aforoMaximo;
                            const disponible = bloqueInfo.disponible && !isLleno;
                            const vacantes = recinto.aforoMaximo - bloqueInfo.aforoActual;

                            return (
                              <td 
                                key={dia} 
                                className={disponible ? 'cell-alumnos' : 'cell-cerrada'}
                                onClick={() => iniciarReserva(recinto, dia, hora)}
                              >
                                {disponible ? (
                                  <>
                                    <span>Alumnos</span>
                                    <div className="hover-tooltip">
                                      Prof A. BULO<br/>
                                      Cupo {recinto.aforoMaximo} Vacantes {vacantes}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <span className="alumnos-disabled">Alumnos</span><br/>
                                    <strong>CERRADA</strong>
                                  </>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
              Día: <strong>{reservaModal.dia}</strong> | Bloque: {reservaModal.bloqueHora}
            </p>
            <form onSubmit={confirmarReserva}>
              <div style={{ marginTop: '15px' }}>
                <label style={{ fontWeight: 'bold', color: '#111827', fontSize: '0.85rem' }}>Rol USM:</label>
                <input 
                  type="text" 
                  placeholder="Ej: 202012345-6" 
                  required 
                  pattern="\d{9}-[0-9kK]"
                  title="El formato debe ser 9 números, un guión y un dígito o letra K (ej: 202012345-6)"
                  className="input-field" 
                />
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
              <button type="button" onClick={() => setReservaModal({ activo: false, recinto: null, bloqueHora: null, dia: null })} className="cancel-btn">Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}