

/**
 * 
 * @param texto string
 * @param limite number
 * @returns Retorna o `texto` limitado dinamicamente através da quantidade `limite` de caracteres.
 */
export const limitarCaracteres = (texto: string, limite: number) => {
    if (texto.length <= limite) {
        return texto;

    } else {
        return texto.substring(0, limite) + '...';
    }
};