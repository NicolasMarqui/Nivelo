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
