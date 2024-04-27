

export function extrairArrayJSON(stringComArray: string) {
    // Expressão regular para encontrar o conteúdo JSON entre colchetes
    const regex = /\[(.*)\]/;
    // Executar a expressão regular na string e extrair o conteúdo dentro dos colchetes
    const match = regex.exec(stringComArray);
    // Se encontrarmos um match, retornamos o conteúdo JSON
    if (match && match[1]) {
        return match[1];
    } else {
        // Caso contrário, retornamos null ou tratamos o erro de outra forma
        return null;
    }
}