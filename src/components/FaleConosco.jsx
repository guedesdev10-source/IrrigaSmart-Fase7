import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SectionFaleConosco } from '../styled.js'
import Info from './Info.jsx'

const schema = yup.object({
  nome: yup.string().trim()
    .required('Por favor, insira seu nome completo.')
    .matches(/^\S{2,}(\s+\S{2,})+$/, 'Por favor, insira seu nome completo.'),
  email: yup.string().trim()
    .required('Por favor, insira um email válido.')
    .email('Por favor, insira um email válido.'),
  assunto: yup.string(),
  mensagem: yup.string().trim()
    .required('O campo de mensagem é obrigatório.')
    .max(500, 'A mensagem deve ter no máximo 500 caracteres.')
});

export default function FaleConosco() {

  const [status, setStatus] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  // envia a mensagem para uma API de testes (JSONPlaceholder) usando fetch com método POST
  function enviarMensagem(dados) {
    setStatus('enviando');

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    })
      .then((res) => res.json())
      .then(() => {
        setStatus('enviado');
        reset();
      })
      .catch(() => {
        setStatus('erro');
      });
  }

  return (
    <SectionFaleConosco id="fale-conosco" className="aba">
      <div className="fale-conosco__enunciado">
        <h1>Fale conosco</h1>
        <p>Precisa de ajuda com o sistema de irrigação?<br />Entre em contato com nossa equipe.</p>
      </div>
      <div className="fale-conosco__grid">
        <div className="fale-conosco__grid__fbox">
          <h2 className="fale-conosco__grid__fbox-subtitulo">Enviar Mensagem</h2>
          <form className="fale-conosco__grid__formulario" onSubmit={handleSubmit(enviarMensagem)}>
            <div className={`form-content ${errors.nome ? 'error' : ''}`}>
              <label htmlFor="nome">Nome Completo*</label>
              <input id="nome" type="text" placeholder="Digite seu nome" {...register('nome')} />
              <span>{errors.nome?.message}</span>
            </div>
            <div className={`form-content ${errors.email ? 'error' : ''}`}>
              <label htmlFor="email">Email *</label>
              <input id="email" type="text" placeholder="Digite seu email" {...register('email')} />
              <span>{errors.email?.message}</span>
            </div>
            <div className="form-content">
              <label htmlFor="assunto">Assunto</label>
              <input id="assunto" type="text" placeholder="Digite o assunto" {...register('assunto')} />
            </div>
            <div className={`form-content ${errors.mensagem ? 'error' : ''}`}>
              <label htmlFor="mensagem">Mensagem *</label>
              <textarea id="mensagem" placeholder="Descreva sua dúvida ou problema" {...register('mensagem')} />
              <span>{errors.mensagem?.message}</span>
            </div>
            <p className="fale-conosco__grid__fbox-aviso">Campos marcados com * são obrigatórios!</p>
            <button type="submit" className="fale-conosco__grid__fbox-button" disabled={status === 'enviando'}>
              <img src="/asserts/fale-conosco/enviar.png" alt="Ícone de enviar" /> {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {status === 'enviado' && <p className="mensagem-sucesso">Mensagem enviada com sucesso!</p>}
            {status === 'erro' && <p className="mensagem-erro">Não foi possível enviar a mensagem. Tente novamente.</p>}
          </form>
        </div>
        <div className="fale-conosco__grid__sbox">
          <ul>
            <Info image="telefone.png" title="Telefone" text="(11) 99999-9999" />
            <Info image="e-mail.png" title="Email" text="suporte@irrigasmart.com" />
            <Info image="relogio.png" title="Atendimento" text="Segunda a Sexta • 08:00 às 18:00" />
            <Info image="mapa.png" title="Localização" text="São Paulo • Brasil" />
          </ul>
        </div>
      </div>
    </SectionFaleConosco>
  )
}
