export const renderTitleAgendar = (i: number, id: number | null) => {
    switch (i) {
        case 1:
            return "Selecione o tipo de aula";
        case 2:
            return "Aula - opções";
        case 3:
            return "Aula - Marcação";
        case 4:
            return "Aula - Horários";
        case 5:
            return `${
                id ? "Metódo de comunicação" : "Faça o login para continuar"
            }`;
    }
};
