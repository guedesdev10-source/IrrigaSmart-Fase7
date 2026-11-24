import styled from 'styled-components'

/* barra de navegação (App.jsx) */
export const NavSidebar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;
    border-bottom: 1px solid var(--cor-texto-secundaria);

    .sidebar__titulo{
        display: flex;

        h1{
            padding-left: 0.8rem;
            font-size: 1.8rem;
        }
    }

    a{
        color: var(--cor-texto-principal);
        margin: 0.4rem 0.4rem;
        padding: 0.6rem 0.6rem;
        cursor: pointer;
        font-family: var(--fonte-secundaria);
        font-weight: 500;
        text-decoration: none;
    }

    .sidebar__nav{
        display: flex;

        a:hover{
            color: var(--cor-principal);
            padding: 0.6rem 0.6rem;
            background-color: var(--cor-secundaria);
            border-radius: 0 1rem 0 1rem;
        }

        a.active{
            color: var(--cor-principal);
        }
    }

    @media (max-width: 768px){
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;

        .sidebar__nav{
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`

/* cards do painel (Card.jsx), usados no Dashboard e no Sistemas */
export const LiCard = styled.li`
    background-color: var(--cor-cards);
    border-radius: 1rem;

    .painel__conteudo{
        display: flex;
        padding: 1.5rem;
        align-items: center;
    }

    .painel__conteudo-icone{
        height: 3rem;
        padding: 0.8rem;
        border-radius: 1rem;
    }

    .arquitetura{
        background-color: var(--cor-secundaria);
    }

    .relogio{
        background-color: var(--cor-fundo-relogio);
    }

    .agua{
        background-color: var(--cor-quartenaria);
    }

    .painel__conteudo-box{
        padding-left: 0.8rem;
    }

    .painel__conteudo-texto{
        font-weight: 500;
        font-size: 1.8rem;
        margin-top: 0.08rem;
    }

    .texto-arquitetura{
        color: var(--cor-principal);
    }

    .texto-relogio{
        color: var(--cor-icone-relogio);
    }

    .texto-agua{
        color: var(--cor-azul-principal);
    }
`

/* página Dashboard (Dashboard.jsx) */
export const MainDashboard = styled.main`

    .dashboard__banner{
        height: 22rem;
        background:
            linear-gradient(
                to right,
                rgba(255, 255, 255, 0.95) 0%,
                rgba(255, 255, 255, 0.85) 30%,
                rgba(255, 255, 255, 0.4) 55%,
                rgba(255, 255, 255, 0) 75%
            ),
            url('/asserts/dashboard/banner.png');
        background-size: cover;
        background-position: center;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
    }

    .dashboard__banner__conteudo{
        max-width: 500px;
        margin-left: 4rem;
    }

    .dashboard__banner__conteudo-subtitulo{
        font-size: 2rem;
    }

    .dashboard__banner__conteudo-texto{
        font-size: 1rem;
        font-weight: 400;
        color: var(--cor-texto-secundaria);
        margin-top: 0.6rem;
    }

    .dashboard__banner__conteudo-video{
        display: inline-block;
        margin-top: 1.2rem;
        background-color: var(--cor-principal);
        color: var(--cor-cards);
        border-radius: 0.4rem;
        padding: 0.8rem 1.5rem;
        font-family: var(--fonte-secundaria);
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
    }

    .dashboard__banner__conteudo-video:hover{
        color: var(--cor-principal);
        background-color: var(--cor-secundaria);
    }

    .dashboard__painel-subtitulo{
        margin: 1.5rem 4rem;
    }

    .dashboard__painel__list{
        display: grid;
        gap: 3rem;
        margin: 0 3rem;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
    }

    .dashboard__tabela{
        background-color: var(--cor-cards);
        border-radius: 1rem;
        margin: 2rem 3rem 0 3rem;
        padding: 1rem 0;

        table{
            width: 100%;
            table-layout: fixed;
            padding: 0 2rem;
        }

        th{
            color: var(--cor-texto-secundaria);
        }

        th, td{
            padding: 12px;
            text-align: left;
            word-wrap: break-word;
        }

        tbody td{
            border-top: 1px solid #f0f0f0;
        }
    }

    .dashboard__tabela-subtitulo{
        font-family: var(--fonte-secundaria);
        font-size: 1.2rem;
        font-weight: 700;
        margin: 1rem 2.5rem;
    }

    @media (max-width: 768px){
        .dashboard__painel__list{
            grid-template-columns: 1fr;
            margin: 1rem;
        }

        .dashboard__tabela{
            overflow-x: auto;
        }
    }
`

/* previsão do tempo (Clima.jsx), que aparece no Dashboard */
export const DivClima = styled.div`
    background-color: var(--cor-cards);
    border-radius: 1rem;
    margin: 2rem 3rem;
    padding: 1.5rem 2.5rem;

    .clima-subtitulo{
        font-family: var(--fonte-secundaria);
        font-size: 1.2rem;
        font-weight: 700;
    }

    .clima-texto{
        color: var(--cor-texto-secundaria);
        font-family: var(--fonte-secundaria);
        font-size: 0.9rem;
        margin-top: 0.4rem;
    }

    form{
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        margin-top: 1rem;

        .form-content{
            display: flex;
            flex-direction: column;
            width: 18rem;
        }

        input{
            padding: 0.7rem;
            border: 1px solid #CCCCCC;
            border-radius: 0.4rem;
            font-family: var(--fonte-secundaria);
        }

        span{
            color: var(--cor-aviso);
            font-family: var(--fonte-secundaria);
            font-size: 0.75rem;
            margin-top: 0.2rem;
        }

        .form-content.error input{
            border-color: var(--cor-aviso);
        }

        button{
            background-color: var(--cor-principal);
            color: var(--cor-cards);
            border-radius: 0.4rem;
            border: none;
            padding: 0.75rem 1.5rem;
            font-family: var(--fonte-secundaria);
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
        }

        button:hover{
            color: var(--cor-principal);
            background-color: var(--cor-secundaria);
        }

        button:disabled{
            opacity: 0.7;
            cursor: wait;
        }
    }

    .clima-erro{
        color: var(--cor-aviso);
        font-family: var(--fonte-secundaria);
        font-size: 0.85rem;
        margin-top: 1rem;
    }

    .clima__resultado{
        margin-top: 1.5rem;

        h4{
            font-family: var(--fonte-secundaria);
            color: var(--cor-principal);
            margin-bottom: 1rem;
        }
    }

    .clima__lista{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        list-style: none;

        li{
            background-color: var(--cor-background);
            border-radius: 0.8rem;
            padding: 1rem;
        }

        p{
            color: var(--cor-texto-secundaria);
            font-family: var(--fonte-secundaria);
            font-size: 0.85rem;
        }

        strong{
            display: block;
            font-size: 1.5rem;
            font-weight: 500;
            color: var(--cor-azul-principal);
            margin-top: 0.3rem;
        }
    }

    .clima-dica{
        margin-top: 1rem;
        padding: 15px 20px;
        border-radius: 10px;
        font-family: var(--fonte-secundaria);
        font-size: 0.95rem;
    }

    .clima-dica.chuva{
        background-color: var(--cor-quartenaria);
        border-left: 5px solid var(--cor-azul-principal);
    }

    .clima-dica.sol{
        background-color: #fff8e1;
        border-left: 5px solid #f5b642;
    }

    @media (max-width: 768px){
        margin: 1rem;
        padding: 1.5rem;

        form{
            flex-direction: column;
        }

        .clima__lista{
            grid-template-columns: 1fr 1fr;
        }
    }
`

/* página Sistemas (Sistemas.jsx) */
export const SectionSistemas = styled.section`

    .sistemas__enunciado{
        margin: 2rem 4rem;

        h1{
            font-size: 2.5rem;
            font-weight: 600;
        }

        p{
            color: var(--cor-texto-secundaria);
            font-family: var(--fonte-secundaria);
            font-size: 1rem;
            font-weight: 400;
            padding-top: 0.8rem;
        }
    }

    .sistemas__painel__list{
        display: grid;
        gap: 3rem;
        margin: 0 3rem;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
    }

    .sistemas__alerta{
        margin: 20px 0;
        padding: 15px 20px;
        background-color: #fff8e1;
        border-left: 5px solid #f5b642;
        border-radius: 10px;

        h3{
            margin: 0 0 8px;
            color: #555;
        }

        p{
            margin: 0;
            color: #666;
        }
    }

    .sistemas__grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 2rem 3rem;
    }

    .sistemas__zonas{
        background-color: var(--cor-cards);
        border-radius: 1rem;
        padding: 1.5rem 2rem;
    }

    .sistemas__zonas-subtitulo{
        font-family: var(--fonte-secundaria);
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--cor-principal);
        margin-bottom: 1rem;
    }

    .sistemas__zonas__list{
        list-style: none;
    }

    .zona__item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.9rem 0;
        border-top: 1px solid #f0f0f0;
    }

    .zona__item:first-child{
        border-top: none;
        padding-top: 0;
    }

    .zona__item-nome{
        font-size: 0.95rem;
        font-weight: 600;
        font-family: var(--fonte-secundaria);
        color: var(--cor-texto-principal);
        margin-bottom: 0.2rem;
    }

    .zona__item-detalhe{
        font-size: 0.8rem;
        color: var(--cor-texto-secundaria);
        font-family: var(--fonte-secundaria);
    }

    .zona__item-badge{
        font-size: 0.75rem;
        font-family: var(--fonte-secundaria);
        font-weight: 600;
        padding: 0.25rem 0.8rem;
        border-radius: 2rem;
        white-space: nowrap;
    }

    .zona__item-badge--ativo{
        background-color: var(--cor-secundaria);
        color: var(--cor-principal);
    }

    .zona__item-badge--inativo{
        background-color: var(--cor-background);
        color: var(--cor-texto-secundaria);
    }

    .zona-toggle{
        border: 0;
        cursor: pointer;
        font-family: var(--fonte-secundaria);
    }

    .zona-toggle:hover{
        opacity: 0.75;
    }

    .zona-ajuda{
        margin-top: 1rem;
        color: var(--cor-texto-secundaria);
        font-family: var(--fonte-secundaria);
        font-size: 0.75rem;
    }

    .sistemas__horarios{
        background-color: var(--cor-cards);
        border-radius: 1rem;
        padding: 1.5rem 2rem;
    }

    .sistemas__horarios-subtitulo{
        font-family: var(--fonte-secundaria);
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--cor-principal);
        margin-bottom: 1rem;
    }

    .sistemas__horarios__tabela{
        width: 100%;
        table-layout: fixed;

        th{
            color: var(--cor-texto-secundaria);
        }

        th, td{
            padding: 12px 8px;
            text-align: left;
            word-wrap: break-word;
            font-family: var(--fonte-secundaria);
            font-size: 0.9rem;
        }

        tbody td{
            border-top: 1px solid #f0f0f0;
        }
    }

    .zona-detalhes{
        margin-top: 24px;
        padding: 24px;
        background: #ffffff;
        border-radius: 16px;
        border: 1px solid #e8e8e8;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

        h3{
            margin: 0 0 18px;
            color: #69a85f;
            font-size: 20px;
        }

        p{
            margin: 10px 0;
            color: #555;
        }

        strong{
            color: #222;
        }

        button{
            margin-top: 12px;
            padding: 8px 18px;
            border: none;
            border-radius: 8px;
            background: #69a85f;
            color: #ffffff;
            cursor: pointer;
            font-weight: 600;
        }

        button:hover{
            background: #578f4e;
        }
    }

    .simulador{
        background: #fff;
        margin: 2rem 3rem;
        padding: 1.5rem;
        border-radius: 1rem;

        h3{
            font-family: var(--fonte-secundaria);
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--cor-principal);
            margin-bottom: 1rem;
        }

        input{
            display: block;
            border-radius: 0.4rem;
            border: 1px solid #CCCCCC;
            margin: 10px 0;
            padding: 8px;
        }

        button{
            background-color: var(--cor-principal);
            color: var(--cor-cards);
            border-radius: 0.4rem;
            border: none;
            padding: 0.8rem 1.5rem;
            font-family: var(--fonte-secundaria);
            font-size: 1rem;
            font-weight: 500;
        }

        button:hover{
            cursor: pointer;
            color: var(--cor-principal);
            background-color: var(--cor-secundaria);
        }
    }

    .form-text{
        font-family: var(--fonte-secundaria);
        font-size: 1rem;
        font-weight: 650;
        padding-bottom: 0.4rem;
        padding-top: 0.8rem;
    }

    .resultado{
        margin-top: 1rem;
        font-family: var(--fonte-secundaria);
        font-size: 1rem;
        font-weight: 500;
        color: var(--cor-texto-principal);
        display: none;
    }

    .resultado.error{
        color: var(--cor-aviso);
        font-size: 0.8rem;
        display: block;
    }

    .resultado.success{
        display: block;
    }

    @media (max-width: 768px){
        .sistemas__painel__list{
            grid-template-columns: 1fr;
            margin: 1rem;
        }

        .sistemas__grid{
            grid-template-columns: 1fr;
            margin: 1rem;
        }
    }
`

/* página Fale Conosco (FaleConosco.jsx e Info.jsx) */
export const SectionFaleConosco = styled.section`

    .fale-conosco__enunciado{
        margin: 2rem 5rem;

        h1{
            font-size: 2.5rem;
            font-weight: 600;
        }

        p{
            color: var(--cor-texto-secundaria);
            font-family: var(--fonte-secundaria);
            font-size: 1rem;
            font-weight: 400;
            padding-top: 0.8rem;
        }
    }

    .fale-conosco__grid{
        display: grid;
        grid-template-columns: 50% 30%;
        margin: 0 5rem;
        gap: 4rem;
    }

    .fale-conosco__grid__fbox,
    .fale-conosco__grid__sbox{
        padding: 1.5rem 2.5rem;
        border-radius: 0.8rem;
        background-color: var(--cor-cards);
    }

    .fale-conosco__grid__fbox-subtitulo{
        color: var(--cor-principal);
        font-size: 1rem;
        font-weight: 700;
        font-family: var(--fonte-secundaria);
    }

    .form-content{
        display: flex;
        flex-direction: column;

        input{
            padding: 0.5rem;
            border: 1px solid #CCCCCC;
            border-radius: 0.4rem;
        }

        span{
            color: var(--cor-aviso);
            font-family: var(--fonte-secundaria);
            font-size: 0.75rem;
            font-weight: 400;
            margin-top: 0.2rem;
            display: none;
        }
    }

    .form-content.error{
        input, textarea{
            border-color: var(--cor-aviso);
        }

        span{
            display: block;
        }
    }

    .fale-conosco__grid__formulario{
        label{
            font-family: var(--fonte-secundaria);
            font-size: 0.9rem;
            font-weight: 650;
            padding-bottom: 0.4rem;
            padding-top: 0.8rem;
        }

        input::placeholder{
            font-family: var(--fonte-secundaria);
            color: var(--cor-texto-secundaria);
        }
    }

    .fale-conosco__grid__fbox textarea{
        height: 8rem;
        padding: 0.5rem;
        border: 1px solid #CCCCCC;
        border-radius: 0.4rem;
        margin-bottom: 0.4rem;
    }

    .fale-conosco__grid__fbox textarea::placeholder{
        font-family: var(--fonte-secundaria);
        color: var(--cor-texto-secundaria);
    }

    .fale-conosco__grid__fbox-aviso{
        color: var(--cor-aviso);
        font-family: var(--fonte-secundaria);
        font-size: 0.75rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    .fale-conosco__grid__fbox-button{
        width: 13rem;
        background-color: var(--cor-principal);
        color: var(--cor-cards);
        border-radius: 0.4rem;
        border: none;
        font-family: var(--fonte-secundaria);
        font-size: 1rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        padding: 0.8rem;

        img{
            padding-right: 0.6rem;
            height: 1.5rem;
        }
    }

    .fale-conosco__grid__fbox-button:hover{
        cursor: pointer;
    }

    .fale-conosco__grid__fbox-button:disabled{
        opacity: 0.7;
        cursor: wait;
    }

    .mensagem-sucesso{
        color: var(--cor-principal);
        font-family: var(--fonte-secundaria);
        font-size: 0.85rem;
        font-weight: 600;
        margin-top: 1rem;
    }

    .mensagem-erro{
        color: var(--cor-aviso);
        font-family: var(--fonte-secundaria);
        font-size: 0.85rem;
        font-weight: 600;
        margin-top: 1rem;
    }

    .fale-conosco__grid__sbox ul{
        list-style: none;
    }

    .grid__sbox__conteudo{
        display: flex;
        height: 8rem;
        align-items: center;

        img{
            background-color: var(--cor-secundaria);
            padding: 0.8rem;
            border-radius: 1rem;
            margin-right: 1rem;
        }
    }

    .grid__sbox__conteudo-subtitulo{
        font-family: var(--fonte-secundaria);
        font-weight: 750;
        color: var(--cor-principal);
        margin-bottom: 0.4rem;
    }

    .grid__sbox__conteudo-texto{
        font-family: var(--fonte-secundaria);
        font-weight: 500;
        font-size: 1rem;
        color: var(--cor-texto-secundaria);
    }
`
