export const singleQuery = `
query($id: ID!){
    singleTutor(id: $id) {
        errors {
            message
        }
        tutor {
            id
            description
            type {
                id
                name
            }
            rating
            amountClasses
            amountStudents
            user {
                id
                name
                email
                sex
                country
                city
                avatar
                userPlatformAccount {
                    platform {
                        id
                        name
                        account
                    }
                }
            }
            classes {
                id
                name
                description
                amountTimeTaught
                level
                active
                price {
                    id
                    price
                    time
                }
                createdAt
                updatedAt
            }
            categories {
                id
                name
                icon
            }
        }
    }
}
`;

export const ordersQuery = `
query TutorOrdersAwaitingApproval($id: Float!) {
    ordersTutorAwaitingApproval(tutorId: $id) {
        id
        user {
            id
            name
        }
        classes {
            id
            name
            description
            active
            level
            price {
                id
                time
                price
            }
            tutor {
                id
                description
                user {
                    id
                    name
                }
            }
            createdAt
            updatedAt
        }
        date
        platformId
        classDuration
        userAccount
        classPrice
        isOrderAproved
        hasTutorConfirmedClassDone
        hasUserConfirmedClassDone
        isPaid
        paymentDetails
        createdAt
        updatedAt
    }
}

`;
