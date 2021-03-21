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

export function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];
    var year = a.getUTCFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = `${date < 10 ? "0" : ""}${date}` + "/" + month + "/" + year;
    return time;
}
