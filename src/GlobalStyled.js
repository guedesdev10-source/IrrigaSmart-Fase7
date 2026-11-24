import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    :root {
        --cor-background: #F5F7FA;
        --cor-cards: #FFFFFF;
        --cor-texto-principal: #000000;
        --cor-texto-secundaria: #9CA3AF;
        --cor-principal: #79AE6F;
        --cor-secundaria: #CFE9CB;
        --cor-azul-principal: #81A6C6;
        --cor-quartenaria: #CFE6EE;
        --cor-icone-relogio: #FF85BB;
        --cor-fundo-relogio: #FFE4F0;
        --cor-aviso: #DB1A1A;

        --fonte-primaria: "Inter", sans-serif, arial;
        --fonte-secundaria: "Montserrat", sans-serif, arial;
    }

    *{
        margin: 0;
        padding: 0;
    }

    body{
        background-color: var(--cor-background);
        font-family: var(--fonte-primaria);
    }

    .destaque{
        color: var(--cor-principal);
    }
`
export default GlobalStyled
