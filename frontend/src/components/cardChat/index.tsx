
// ANCHOR --> IMPORTS STYLED COMPONENTS
import styled from "styled-components";
// END STYLED COMPONENTS

// ANCHOR --> IMPORTS ICONS
import { GoTrash } from "react-icons/go";
// END ICONS

// ANCHOR --> IMPORTS HELPERS
import { limitarCaracteres } from "../../helpers/limitaCaracteres";
// END HELPERS


interface CardChatProps {
    text: string
    onClick?: () => void;
}


export const CardChat = ({ text }: CardChatProps) => {

    return(
        <>
            <ContainerCard>
                <TitleCard>
                    {
                        limitarCaracteres(text, 40)
                    }
                </TitleCard>
                <GoTrash />
            </ContainerCard>
        </>
    );
};

const ContainerCard = styled.div`
    width: 100%;

    padding: 16px;

    display: flex;
    justify-content: space-between;

    border-radius: 6px;

    background-color: ${props => props.theme.cores.cinza.cinza8};

    svg {
        width: 18px;
        height: 18px;

        fill: ${props => props.theme.cores.neutra.branco1};

        cursor: pointer;
    }

    transition: .5s ease-in;

    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.cores.cinza.cinza5};
    }
`;

const TitleCard = styled.p`
    color: ${props => props.theme.cores.neutra.branco1};
    ${props => props.theme.tipografia.body14regular};
`;