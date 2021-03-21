const checkIfActive = (pathName: string, checker: String) => {
    return pathName === checker ? "active" : "";
};

export default checkIfActive;
