export const tutorsBreadcumb = [
    {
        id: 1,
        text: "Home",
        linkTo: "/",
    },
    {
        id: 2,
        text: "Tutores",
    },
];

export const tutorBreadcumb = (tutorName: string) => [
    {
        id: 1,
        text: "Home",
        linkTo: "/",
    },
    {
        id: 2,
        text: "Tutores",
        linkTo: "/tutors",
    },
    {
        id: 3,
        text: tutorName,
    },
];

export const dashBoardAccountBread = [
    {
        id: 1,
        text: "Dashboard",
        linkTo: "/dashboard",
    },
    {
        id: 2,
        text: "Minha Conta",
    },
];
