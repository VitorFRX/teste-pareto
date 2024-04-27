
// ANCHOR --> IMPORTS REACT
import { Outlet } from "react-router-dom";
// END REACT

// ANCHOR --> IMPROTS STYLED
import styled from "styled-components";
// END STYLED


export const ChatArea = () => {

    return(
        <>
            <ContainerChat>
                <Outlet />
            </ContainerChat>
        </>
    );
};


const ContainerChat = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;

    @media (max-width: 786px) {
        flex-direction: column;
    }
`;