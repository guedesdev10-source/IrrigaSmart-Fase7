import { useState } from 'react'
import { SectionSistemas } from '../styled.js'
import Card from './Card.jsx'
import { proximaIrrigacao, consumoHoje, nomeCurto } from '../funcoes.js'

export default function Sistemas({ zones, toggleZone }) {

  const [selectedZone, setSelectedZone] = useState(null);

  const [liters, setLiters] = useState('');
  const [times, setTimes] = useState('');
  const [result, setResult] = useState(null);

  const activeCount = zones.filter(zone => zone.active).length;
  const activeZones = zones.filter(zone => zone.active);

  function calculate() {
    const l = Number(liters);
    const t = Number(times);
    if (l <= 0 || t <= 0) {
      setResult({ type: 'error', text: 'Por favor, insira valores positivos para litros e vezes.' });
      return;
    }
    setResult({ type: 'success', text: `O consumo total de água é: ${l * t} litros por dia.` });
  }

  return (
    <SectionSistemas id="sistemas" className="aba">
      <div className="sistemas__enunciado">
        <h1>Sistemas</h1>
        <p>Gerencie as zonas e os horários de irrigação</p>
      </div>
      <ul className="sistemas__painel__list">
        <Card icon="arquitetura" image="arquitetura.png" title="Zonas ativas" value={`${activeCount} / ${zones.length}`} />
        <Card icon="relogio" image="relogio.png" title="Próxima irrigação" value={proximaIrrigacao(zones)} />
        <Card icon="agua" image="agua.png" title="Consumo hoje" value={`${consumoHoje(zones)} L`} />
      </ul>

      <div className="sistemas__alerta">
        <h3>Alertas</h3>

        {activeCount > 0 ? (
          <p>⚠️ Existem {activeCount} zonas com irrigação ativa.</p>
        ) : (
          <p>✅ Nenhuma zona está ativa no momento.</p>
        )}
      </div>

      <div className="sistemas__grid">
        <div className="sistemas__zonas">
          <h3 className="sistemas__zonas-subtitulo">Zonas de Irrigação</h3>
          <ul className="sistemas__zonas__list">
            {zones.map(zone => (
              <li className="zona__item" key={zone.id}>
                <div className="zona__item__info">
                  <h4 className="zona__item-nome">{zone.name}</h4>
                  <p className="zona__item-detalhe">{zone.time} • {zone.duration} • {zone.days}</p>
                </div>
                <button
                  type="button"
                  className="zona__detalhes"
                  onClick={() => setSelectedZone(zone)}
                >
                  Ver detalhes
                </button>

                <button
                  type="button"
                  className={`zona__item-badge zona__item-badge--${zone.active ? 'ativo' : 'inativo'} zona-toggle`}
                  onClick={() => toggleZone(zone.id)}
                  title="Clique para alterar o status"
                >
                  {zone.active ? 'Ativo' : 'Inativo'}
                </button>
              </li>
            ))}
          </ul>
          <p className="zona-ajuda">Clique no status de uma zona para ativar ou desativar a irrigação.</p>
        </div>
        <div className="sistemas__horarios">
          <h3 className="sistemas__horarios-subtitulo">Horários Automáticos</h3>
          <table className="sistemas__horarios__tabela">
            <thead><tr><th>Área</th><th>Horário</th><th>Duração</th><th>Dias</th></tr></thead>
            <tbody>
              {activeZones.length > 0 ? (
                activeZones.map(zone => (
                  <tr key={zone.id}>
                    <td>{nomeCurto(zone)}</td>
                    <td>{zone.time}</td>
                    <td>{zone.duration}</td>
                    <td>{zone.days}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="4">Nenhuma zona ativa.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {selectedZone && (
        <div className="zona-detalhes">
          <h3>Detalhes da área</h3>

          <p>
            <strong>Área:</strong> {selectedZone.name}
          </p>

          <p>
            <strong>Duração:</strong> {selectedZone.duration}
          </p>

          <p>
            <strong>Horário:</strong> {selectedZone.time}
          </p>

          <p>
            <strong>Dias:</strong> {selectedZone.days}
          </p>

          <button
            type="button"
            onClick={() => setSelectedZone(null)}
          >
            Fechar
          </button>
        </div>
      )}
      <section className="simulador">
        <h3>Simulador de Consumo de Água</h3>
        <label htmlFor="litros" className="form-text">Litros por irrigação:</label>
        <input type="number" id="litros" min="1" className="form-control" value={liters} onChange={e => setLiters(e.target.value)} />
        <label htmlFor="vezes" className="form-text">Irrigações por dia:</label>
        <input type="number" id="vezes" min="1" className="form-control" value={times} onChange={e => setTimes(e.target.value)} />
        <button id="calcular" className="btn btn-primary" onClick={calculate}>Calcular</button>
        {result && <p className={`resultado ${result.type}`}>{result.text}</p>}
      </section>
    </SectionSistemas>
  )
}
