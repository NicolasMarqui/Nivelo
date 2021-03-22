export interface TutorProps {
    id?: number;
    description?: string;
    type?: {
        id?: number;
        name?: string;
    };
    rating?: number;
    amountClasses?: number;
    amountStudents?: number;
    user?: {
        id?: number;
        name?: string;
        email?: string;
        sex?: string;
        country?: string;
        city?: string;
        avatar?: string;
        userPlatformAccount?: {
            platform?: {
                id?: number;
                name?: string;
                account?: string;
            };
        };
    };
    classes?: {
        id?: number;
        name?: string;
        description?: string;
        active?: boolean;
        amountTimeTaught?: number;
        price?: {
            id?: number;
            price?: number;
            time?: number;
        };
    }[];
    categories?: {
        id?: number;
        name?: string;
        icon?: string;
    }[];
}

export interface TutorCardProps {
    tutor: TutorProps;
}

export interface ClassesProps {
    id?: number;
    name?: string;
    description?: string;
    amountTimeTaught?: number;
    level?: string;
    active?: boolean;
    price: {
        id?: number;
        price?: number;
        time?: number;
    };
    createdAt?: string;
    updatedAt?: string;
}

export interface ClassesTutorProps {
    classes: ClassesProps[] | [];
}

export interface TutorFeedbackProps {
    id?: number;
    rating?: number;
    content?: string;
    createdAt?: string;
    user: {
        id: number;
        name?: string;
        avatar?: string;
    };
}
