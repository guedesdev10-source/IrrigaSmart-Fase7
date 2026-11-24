import { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import { NavSidebar } from './styled.js'
import Dashboard from './components/Dashboard.jsx'
import Sistemas from './components/Sistemas.jsx'
import FaleConosco from './components/FaleConosco.jsx'

const initialZones = [
  { id: 1, name: 'Área 1 - Horticultura', duration: '30 min', time: '06:00', days: 'Seg a Sex', active: true },
  { id: 2, name: 'Área 2 - Fruticultura', duration: '25 min', time: '07:30', days: 'Diário', active: true },
  { id: 3, name: 'Área 3 - Pastagem', duration: '20 min', time: '09:00', days: 'Sáb e Dom', active: true },
  { id: 4, name: 'Área 4 - Estufa', duration: '15 min', time: '11:00', days: 'Ter e Qui', active: false },
  { id: 5, name: 'Área 5 - Reserva', duration: '40 min', time: '14:00', days: 'Seg, Qua e Sex', active: false },
];

function App() {

  // as zonas ficam aqui no App para o Dashboard e o Sistemas usarem os mesmos dados
  const [zones, setZones] = useState(() => {
    const savedZones = localStorage.getItem('zones');

    return savedZones
      ? JSON.parse(savedZones)
      : initialZones;
  });

  function toggleZone(id) {
    setZones(current => {
      const updatedZones = current.map(zone =>
        zone.id === id
          ? { ...zone, active: !zone.active }
          : zone
      );

      localStorage.setItem('zones', JSON.stringify(updatedZones));

      return updatedZones;
    });
  }

  return (
    <div className="container">
      <NavSidebar className="sidebar">
        <div className="sidebar__titulo">
          <img src="/asserts/dashboard/plantar.png" alt="Ícone do título" />
          <h1>Irriga<span className="destaque">Smart</span></h1>
        </div>
        <div className="sidebar__nav">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/sistemas">Sistemas</NavLink>
          <NavLink to="/fale-conosco">Fale Conosco</NavLink>
        </div>
      </NavSidebar>
      <Routes>
        <Route path="/" element={<Dashboard zones={zones} />} />
        <Route path="/sistemas" element={<Sistemas zones={zones} toggleZone={toggleZone} />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
      </Routes>
    </div>
  )
}

export default App
