export const overlayBody = (isOpen: boolean) => {
    let body = document.querySelector("body");

    if (isOpen) {
        return body.classList.add("overlay", "no-scroll");
    } else {
        return body.classList.remove("overlay", "no-scroll");
    }
};

export const renderTitleAgendar = (i: number) => {
    switch (i) {
        case 1:
            return "Selecione o tipo de aula";
        case 2:
            return "Aula - opções";
        case 3:
            return "Aula - Marcação";
        case 4:
            return "Metódo de comunicação";
    }
};

export function ToLocalDate(inDate: any) {
    var utcSeconds = Number(inDate);
    var d = new Date(utcSeconds * 1000);

    const finalDate = d.toISOString();

    return finalDate;
}
