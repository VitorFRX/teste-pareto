import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    outline: none;
    border: none;

    ::-webkit-scrollbar {
      width: 10px; /* Largura da barra de rolagem */
      background-color: #8A8A8A; /* Cor de fundo da barra de rolagem */
      border-radius: 8px; /* Raio da borda da barra de rolagem */
    };

    ::-webkit-scrollbar-thumb {
      background-color: #5A5A5A; /* Cor do polegar da barra de rolagem */
      border-radius: 8px; /* Raio da borda do polegar da barra de rolagem */
    };
  };

  body {
    background: ${props => props.theme.cores.neutra.preto3};
  }

  input[type="text"], input[type="password"], textarea {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
`;