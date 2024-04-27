
// ANCHOR --> IMPORTS REACT
import { useContext } from "react";
// END REACT

// ANCHOR --> IMPORTS VARIAVEIS DO CONTEXT
import { VariaveisContext } from "..";
// END VARIAVEIS DO CONTEXT


// SECTION --> Hook personalizado para acessar o contexto
export const useVariaveisContext = () => {
    const context = useContext(VariaveisContext);

    if (!context) {
      throw new Error("useVariaveisContext deve ser usado dentro de um VariaveisContextProvider");
    }
    
    return context;
};