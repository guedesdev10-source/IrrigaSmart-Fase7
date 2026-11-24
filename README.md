# IrrigaSmart - Fase 7 (React)

Continuação do projeto da Fase 6, agora com as funcionalidades implementadas usando o conteúdo visto até a Fase 7.

## O que foi feito na Fase 7

- **styled-components**: o `style.css` virou `src/styled.js` (estilos de cada tela) e `src/GlobalStyled.js` (estilo global com `createGlobalStyle`).
- **react-hook-form + yup**: validação do formulário do Fale Conosco e da busca de cidade da previsão do tempo.
- **Consumo de API com fetch**:
  - Previsão do tempo (Open-Meteo): o usuário digita a cidade da propriedade e vê temperatura, umidade e chance de chuva de hoje, com a dica de adiar ou manter a irrigação.
  - Fale Conosco: a mensagem é enviada com `fetch` (método POST) para a API de testes JSONPlaceholder.
- **Dashboard e Sistemas ligados aos dados das zonas**: status, próxima irrigação, consumo de água, irrigações de hoje e horários automáticos são calculados a partir das zonas e mudam quando uma zona é ativada ou desativada.
- **Link do Pitch Vídeo na Home**.

## Como executar

1. Instale o Node.js.
2. Abra esta pasta no VS Code.
3. No terminal, execute:

```bash
npm install
npm run dev
```

4. Abra o endereço mostrado pelo Vite, normalmente `http://localhost:5173`.

## Estrutura

- `src/main.jsx`: ponto de entrada (rotas e estilo global).
- `src/App.jsx`: menu, rotas e as zonas de irrigação (compartilhadas entre as telas).
- `src/components/`: Dashboard, Sistemas, FaleConosco, Clima (previsão do tempo), Card e Info.
- `src/styled.js` e `src/GlobalStyled.js`: estilos com styled-components.
- `src/funcoes.js`: funções que calculam próxima irrigação, consumo e status.
- `public/asserts`: imagens do projeto.
