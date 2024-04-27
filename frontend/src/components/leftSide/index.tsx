

// ANCHOR --> IMPORTS REACT
import { useContext } from "react";
import { VariaveisContext } from "../../context";
// END REACT

// ANCHOR --> IMPORTS STYLES
import { 
    ContainerLeftSide, 
    HeaderLeftSide, 
    TitleLeftSide,
    
} from "./styles/leftSide.style";
// END STYLES

// ANCHOR --> IMPORTS ICONS
import { GoCrossReference } from "react-icons/go";
// END ICONS

// ANCHOR --> IMPORTS COMPONENTES
import { CardChat } from "../cardChat";
// END COMPONENTES

// ANCHOR --> IMPORTS TYPES
import { ChatProps } from "../../pages/chat/types/chatTypes";
// END TYPES


export const LeftSide = ({ data, isLoading }: ChatProps) => {

    const {selectedChatId, setSelectedChatId} = useContext(VariaveisContext);

    console.log(selectedChatId);


    const handleChatClick = (chatId: string) => {
        setSelectedChatId(chatId);
        console.log("chamei");
    };
    
    return(
        <>
            <ContainerLeftSide>
                <HeaderLeftSide>
                    <TitleLeftSide>Novo Chat</TitleLeftSide>
                    <GoCrossReference />
                </HeaderLeftSide>

                { isLoading ?
                    "Carregando..."
                    :
                    data?.map((chats) => {
                        return <CardChat
                                    text={chats.content}
                                    onClick={() => handleChatClick(chats.id_chat)}
                                    key={chats.id_chat} 
                                />
                    })
                }
            </ContainerLeftSide>
        </>
    );
};