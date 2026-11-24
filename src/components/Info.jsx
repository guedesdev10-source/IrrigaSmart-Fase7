export default function Info({ image, title, text }) {
  return (
    <li className="grid__sbox__conteudo">
      <img src={`/asserts/fale-conosco/${image}`} alt="" />
      <div>
        <h4 className="grid__sbox__conteudo-subtitulo">{title}</h4>
        <p className="grid__sbox__conteudo-texto">{text}</p>
      </div>
    </li>
  )
}
