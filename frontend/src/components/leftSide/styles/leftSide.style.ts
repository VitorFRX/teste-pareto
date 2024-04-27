
// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS


export const ContainerLeftSide = styled.div`
    width: 100%;
    max-width: 400px;
    height: 100vh;

    padding: 20px;

    display: flex;
    flex-direction: column;

    row-gap: 16px;

    border-radius: 8px;
    border: 1px solid ${props => props.theme.cores.cinza.cinza8};

    row-gap: 26px;
`;

export const HeaderLeftSide = styled.div`
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

export const TitleLeftSide = styled.h1`
    color: ${props => props.theme.cores.neutra.branco1};
    ${props => props.theme.tipografia.body16regular};
`;