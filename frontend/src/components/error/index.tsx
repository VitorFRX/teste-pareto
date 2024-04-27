
// ANCHOR --> STYLED COMPONENTS
import styled from "styled-components"
// END STYLED COMPONENTS

// ANCHOR --> COMPONENTS
import { Button as ButtonSh } from "../@/components/ui/button";
// COMPONENTS END

// ANCHOR --> IMPORTS IMAGENS
import Logo from "/1.webp";
// END IMAGENS


// STUB --> PROPS DO COMPONENTE NOT FOUND
interface NotFoundProps {
    src?: string,
    alt?: string,
}

export const NotFound: React.FC<NotFoundProps> = () => {

  return (
    <NotFoundMain>
      <LogoParetto src={Logo} alt="Logo Paretto" />
      <NotFoundDiv>
        <NotFoundH1>404</NotFoundH1>
        <NotFoundP>Pedimos desculpas! Não foi possível encontrar a página que você estava procurando.</NotFoundP>
      </NotFoundDiv>

      <ButtonSh>Voltar para a página anterior</ButtonSh>
    </NotFoundMain>
  )
};


const NotFoundMain = styled.div`
  width: 100%;
  height: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
`

const LogoParetto = styled.img<NotFoundProps>`
    svg {
        height: 200px;
        width: auto;
    }

  @media (max-width: 768px) {
    height: 73px;
    svg {
      height: 73px;
      width: auto;      
    }
  }
`
const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 679px;
`
const NotFoundH1 = styled.h1`
    ${props => props.theme.tipografia.tituloh4};
    font-size: 116px;
    color: ${props => props.theme.cores.neutra.branco3};
`
const NotFoundP = styled.p`
    text-align: center;
    ${props => props.theme.tipografia.subTitulo2};
    color: ${props => props.theme.cores.neutra.branco3};
`
// const BotaoVoltar = styled(Button)`
//   width: 296px;
//   margin-top: 30px;
// `


export const EmConstrucao = () => {
  return (
    <EmConstrucaoMain>
      <EmConstrucaoH1>Página em construção</EmConstrucaoH1>
    </EmConstrucaoMain>
  )
}
const EmConstrucaoMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const EmConstrucaoH1 = styled.h1`
  ${props => props.theme.tipografia.tituloh4};
  color: ${props => props.theme.cores.cinza.cinza2};
  text-align: center;
`