export const tutorsBreadcumbList = [
    {
        id: 1,
        text: "Tutores",
    },
];

export const tutorBreadcumbList = (name: string) => {
    return [
        {
            id: 1,
            text: "Tutores",
            linkTo: "/tutors",
        },
        {
            id: 2,
            text: name,
        },
    ];
};

export const faqBreadcumbList = [
    {
        id: 1,
        text: "F.A.Q",
    },
];
