import { LiCard } from '../styled.js'

export default function Card({ icon, image, title, value }) {
  return (
    <LiCard>
      <div className="painel__conteudo">
        <img className={`painel__conteudo-icone ${icon}`} src={`/asserts/dashboard/${image}`} alt="" />
        <div className="painel__conteudo-box">
          <h3 className="painel__conteudo-descricao">{title}</h3>
          <p className={`painel__conteudo-texto texto-${icon}`}>{value}</p>
        </div>
      </div>
    </LiCard>
  )
}
