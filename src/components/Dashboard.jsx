import { MainDashboard } from '../styled.js'
import Card from './Card.jsx'
import Clima from './Clima.jsx'
import { irrigacoesDeHoje, statusDaIrrigacao, proximaIrrigacao, consumoHoje, nomeCurto } from '../funcoes.js'

// link do Pitch Vídeo da Sprint 7 no YouTube (precisa estar público)
const linkVideo = 'COLE_AQUI_O_LINK_DO_VIDEO_NO_YOUTUBE';

export default function Dashboard({ zones }) {

  const activeCount = zones.filter(zone => zone.active).length;
  const irrigacoes = irrigacoesDeHoje(zones);

  return (
    <MainDashboard className="content">
      <section id="dashboard" className="aba">
        <div className="dashboard__banner">
          <div className="dashboard__banner__conteudo">
            <h2 className="dashboard__banner__conteudo-subtitulo">Irrigação <span className="destaque">Inteligente</span> para melhores resultados</h2>
            <p className="dashboard__banner__conteudo-texto">Tecnologia que monitora e automatiza a irrigação, economizando água e aumentando a produtividade</p>
            <a className="dashboard__banner__conteudo-video" href={linkVideo} target="_blank" rel="noreferrer">
              ▶ Assistir ao Pitch Vídeo
            </a>
          </div>
        </div>
        <div className="dashboard__painel">
          <h2 className="dashboard__painel-subtitulo">Painel de controle</h2>
          <ul className="dashboard__painel__list">
            <Card icon="arquitetura" image="arquitetura.png" title="Status da irrigação" value={activeCount > 0 ? 'Ativa' : 'Desligada'} />
            <Card icon="relogio" image="relogio.png" title="Próxima irrigação" value={proximaIrrigacao(zones)} />
            <Card icon="agua" image="agua.png" title="Consumo de água hoje" value={`${consumoHoje(zones)}L`} />
          </ul>
        </div>
        <div className="dashboard__tabela">
          <h3 className="dashboard__tabela-subtitulo">Irrigações de Hoje</h3>
          <table>
            <thead><tr><th>Área</th><th>Início</th><th>Duração</th><th>Status</th></tr></thead>
            <tbody>
              {irrigacoes.length > 0 ? (
                irrigacoes.map(zone => (
                  <tr key={zone.id}>
                    <td>{nomeCurto(zone)}</td>
                    <td>{zone.time}</td>
                    <td>{zone.duration}</td>
                    <td>{statusDaIrrigacao(zone)}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="4">Nenhuma irrigação programada para hoje.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <Clima />
      </section>
    </MainDashboard>
  )
}
