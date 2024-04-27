import styled, { css } from "styled-components";

interface InputProps {
    erro?: boolean | null,
}


export const Input = styled.input<InputProps>`
  width: 100%;
  height: 48px;
  
  padding: 13px 16px;

  background-color: ${props => props.theme.cores.secundaria.branco};
  
  border-radius: 8px;
  
  ${props => props.theme.tipografia.body14regular}
  color: ${props => props.theme.cores.cinza.cinza8};
  
  transition: .3s ease-in;

  &::-ms-reveal {
    display: none;
  }
  
  &:focus{
    color: ${props => props.theme.cores.cinza.cinza2};
    border: 1px solid ${props => props.theme.cores.neutra.cinza5};
  }

  &:disabled{
    color: ${props => props.theme.cores.cinza.cinza10};
    background-color: ${props => props.theme.cores.cinza.cinza12};
    border: none; 
  }

  &::placeholder{
    color: ${props => props.theme.cores.cinza.cinza1};
    ${props => props.theme.tipografia.body14regular};
  };

  &[type="password"]{
    ${props => props.theme.tipografia.body14boldSenha}
    letter-spacing: 3px;

    &::placeholder{
      transform: translateY(-1px);
      letter-spacing: 0;      
    }
  };
  
  ${props => props.erro && css`
    color: ${props => props.theme.cores.alertas.perigo};
    border: 1px solid ${props => props.theme.cores.alertas.perigo};
    
    &::placeholder{
      color: ${props => props.theme.cores.alertas.perigo};
    }
  `};

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;