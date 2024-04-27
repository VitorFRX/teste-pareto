
// ANCHOR --> IMPORTS REACT
import { createContext, useState } from "react";
// END REACT


interface VariaveisContextType {
    // STUB --> ID: 1 - SENHA
    selectedChatId: string | null;
    setSelectedChatId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const VariaveisContext = createContext<VariaveisContextType | null>(null);


export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

    // SECTION --> ID: 1 LOGIN E SENHA - VARIÁVEL PARA MOSTRAR OU ESCONDER SENHA
    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
    
    const valores: VariaveisContextType = {
        //STUB --> ID: 1
        selectedChatId, setSelectedChatId,
    };

    return(
        <>
            <VariaveisContext.Provider value={valores}>
                {children}
            </VariaveisContext.Provider>
        </>
    );
}