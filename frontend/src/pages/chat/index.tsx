


// ANCHOR --> IMPORTS COMPONENTS
import { LeftSide } from "../../components/leftSide";
import { RightSide } from "../../components/rightSide";
// EnD MODELS

// ANCHOR --> IMPORTS STYLES
import { ContainerSides } from "./styles";
// END STYLES

// ANCHOR --> IMPORTS TANSTACK QUERY
import { useQuery } from "@tanstack/react-query";
// TANSTACK QUERY

// ANCHOR --> IMPORTS MODELS
import { handleChats } from "../../pages/chat/models/leftSide.model";
// END MODELS


export const Chat = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["getChats"],
        queryFn: handleChats
    });


    return(
        <>
            <ContainerSides>
                <LeftSide 
                    data={data} 
                    isLoading={isLoading}
                />

                <RightSide 
                    data={data} 
                    isLoading={isLoading}
                />
            </ContainerSides>
        </>
    );
};