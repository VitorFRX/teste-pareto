
// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS


export const ContainerRightSide = styled.div`
    width: 100%;
    height: 100vh;

    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    row-gap: 16px;

    border-radius: 8px;
    border: 1px solid ${props => props.theme.cores.cinza.cinza8};

    row-gap: 40px;
`;

export const HeaderRightSide = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        width: 18px;
        height: 18px;

        fill: ${props => props.theme.cores.neutra.branco1};

        cursor: pointer;
    }
`;

export const TitleRightSide = styled.h1`
    color: ${props => props.theme.cores.neutra.branco1};
    ${props => props.theme.tipografia.body16bold};
`;

export const ContainerMessage = styled.div`
    width: 100%;
    max-width: 800px;
    height: 100vh;

    display: flex;
    flex-direction: column;

    row-gap: 16px;
`;

export const MessageTyped = styled.p`
    width: 100%;
    overflow-wrap: break-word;

    color: ${props => props.theme.cores.neutra.branco1};
`;

export const FormField = styled.form`
    width: 100%;
    max-width: 800px;
    
    display: flex;

    column-gap: 8px;
`;

export const ErroMsg = styled.div`
  color: ${props => props.theme.cores.alertas.perigo};

  font-size: 14px;
  margin-top: 5px;
`;