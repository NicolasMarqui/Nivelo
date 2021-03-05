import {
    NewClassMutation,
    SingleTutorDocument,
    SingleTutorQuery,
} from "./../generated/graphql";
import { dedupExchange, fetchExchange, Exchange, gql } from "urql";
import { pipe, tap } from "wonka";
import { cacheExchange } from "@urql/exchange-graphcache";
import {
    LoginMutation,
    MeDocument,
    MeQuery,
    RegisterMutation,
    LogoutMutation,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import Router from "next/router";
import {
    DeleteClassMutationVariables,
    NewClassMutationVariables,
} from "../generated/graphql";

const errorExchange: Exchange = ({ forward }) => (ops$) => {
    return pipe(
        forward(ops$),
        tap(({ error }) => {
            if (error?.message.includes("not authenticated")) {
                Router.replace("/login");
            }
        })
    );
};

const singleQuery = `
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

export const createUrqlClient = (ssrExchange: any) => ({
    url: "http://localhost:4000/graphql",
    fetchOptions: {
        credentials: "include" as const,
    },
    exchanges: [
        dedupExchange,
        cacheExchange({
            updates: {
                Mutation: {
                    newClass: (_result, args, cache, info) => {
                        cache.updateQuery(
                            { query: singleQuery, variables: { id: 24 } },
                            (data) => {
                                if (!data) return null;
                                // @ts-ignore
                                data.singleTutor.tutor.classes.push({
                                    id: 999,
                                    name: "I have no idea why it works",
                                });

                                return data;
                            }
                        );
                    },
                    deleteClass: (_result, args, cache, info) => {
                        console.log("Deleted");
                        cache.invalidate({
                            __typename: "Classes",
                            id: (args as DeleteClassMutationVariables).id,
                        });
                    },
                    logout: (_result, args, cache, info) => {
                        betterUpdateQuery<LogoutMutation, MeQuery>(
                            cache,
                            { query: MeDocument },
                            _result,
                            () => ({ me: null })
                        );
                    },
                    login: (_result, args, cache, info) => {
                        betterUpdateQuery<LoginMutation, MeQuery>(
                            cache,
                            { query: MeDocument },
                            _result,
                            // @ts-ignore
                            (result, query) => {
                                if (result.login.errors) {
                                    return query;
                                } else {
                                    return {
                                        me: result.login.user,
                                    };
                                }
                            }
                        );
                    },
                    register: (_result, args, cache, info) => {
                        betterUpdateQuery<RegisterMutation, MeQuery>(
                            cache,
                            { query: MeDocument },
                            _result,
                            // @ts-ignore
                            (result, query) => {
                                if (result.signup.errors) {
                                    return query;
                                } else {
                                    return {
                                        me: result.signup.user,
                                    };
                                }
                            }
                        );
                    },
                },
            },
        }),
        errorExchange,
        ssrExchange,
        fetchExchange,
    ],
});
