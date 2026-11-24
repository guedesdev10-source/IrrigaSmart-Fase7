import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { DivClima } from '../styled.js'

// a partir de quantos % de chance de chuva o site recomenda adiar a irrigação
const LIMITE_CHANCE_CHUVA = 60;

const schema = yup.object({
  cidade: yup.string().trim()
    .required('Digite o nome da cidade.')
    .min(3, 'Digite pelo menos 3 letras.')
});

export default function Clima() {

  const [clima, setClima] = useState(null);
  const [erroClima, setErroClima] = useState('');
  const [carregando, setCarregando] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // 1º fetch: API de geocodificação da Open-Meteo descobre a latitude e longitude da cidade
  // 2º fetch: API de previsão da Open-Meteo traz o clima de hoje nesse lugar
  function buscarPrevisao(dados) {
    setErroClima('');
    setClima(null);
    setCarregando(true);

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${dados.cidade}&count=1&language=pt&format=json&countryCode=BR`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.results) {
          setErroClima('Cidade não encontrada. Confira o nome e tente de novo.');
          setCarregando(false);
          return;
        }

        const local = data.results[0];

        return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${local.latitude}&longitude=${local.longitude}&current=temperature_2m,relative_humidity_2m&daily=precipitation_probability_max,precipitation_sum&timezone=America%2FSao_Paulo&forecast_days=1`)
          .then((res) => res.json())
          .then((previsao) => {
            setClima({
              cidade: local.name,
              estado: local.admin1,
              temperatura: previsao.current.temperature_2m,
              umidade: previsao.current.relative_humidity_2m,
              chanceChuva: previsao.daily.precipitation_probability_max[0],
              chuva: previsao.daily.precipitation_sum[0]
            });
            setCarregando(false);
          });
      })
      .catch(() => {
        setErroClima('Não foi possível buscar a previsão agora. Tente novamente.');
        setCarregando(false);
      });
  }

  const vaiChover = clima && clima.chanceChuva >= LIMITE_CHANCE_CHUVA;

  return (
    <DivClima>
      <h3 className="clima-subtitulo">Previsão do tempo</h3>
      <p className="clima-texto">Digite a cidade da sua propriedade para saber se vai chover hoje e se vale a pena irrigar.</p>

      <form onSubmit={handleSubmit(buscarPrevisao)}>
        <div className={`form-content ${errors.cidade ? 'error' : ''}`}>
          <input type="text" placeholder="Ex.: São Paulo" {...register('cidade')} />
          <span>{errors.cidade?.message}</span>
        </div>
        <button type="submit" disabled={carregando}>
          {carregando ? 'Buscando...' : 'Ver previsão'}
        </button>
      </form>

      {erroClima && <p className="clima-erro">{erroClima}</p>}

      {clima && (
        <div className="clima__resultado">
          <h4>{clima.cidade} - {clima.estado}</h4>
          <ul className="clima__lista">
            <li>
              <p>Temperatura agora</p>
              <strong>{clima.temperatura} °C</strong>
            </li>
            <li>
              <p>Umidade do ar</p>
              <strong>{clima.umidade}%</strong>
            </li>
            <li>
              <p>Chance de chuva hoje</p>
              <strong>{clima.chanceChuva}%</strong>
            </li>
            <li>
              <p>Chuva prevista hoje</p>
              <strong>{clima.chuva} mm</strong>
            </li>
          </ul>

          {vaiChover ? (
            <p className="clima-dica chuva">🌧️ Chuva prevista para hoje. Você pode adiar a irrigação e economizar água.</p>
          ) : (
            <p className="clima-dica sol">☀️ Pouca chance de chuva hoje. Mantenha a irrigação programada.</p>
          )}
        </div>
      )}
    </DivClima>
  )
}
