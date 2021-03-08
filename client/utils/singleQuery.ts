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