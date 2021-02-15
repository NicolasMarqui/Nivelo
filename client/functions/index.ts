export const overlayBody = (isOpen: boolean) => {
    let body = document.querySelector("body");

    if (isOpen) {
        return body.classList.add("overlay", "no-scroll");
    } else {
        return body.classList.remove("overlay", "no-scroll");
    }
};
