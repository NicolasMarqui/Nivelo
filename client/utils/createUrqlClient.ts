import { cacheExchange, Cache } from "@urql/exchange-graphcache";
import Router from "next/router";
import { dedupExchange, Exchange, fetchExchange } from "urql";
import { pipe, tap } from "wonka";
import {
    DeleteClassMutationVariables,
    LoginMutation,
    LogoutMutation,
    MeDocument,
    MeQuery,
    RegisterMutation,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { singleQuery } from "./singleQuery";

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

const updateTutorCache = (cache: Cache) => {
    cache.updateQuery({ query: singleQuery, variables: { id: 24 } }, (data) => {
        if (!data) return null;
        // @ts-ignore
        data.singleTutor.tutor.classes.push({
            id: 999,
            name: "I have no idea why it works",
        });

        return data;
    });
};

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
                        updateTutorCache(cache);
                    },
                    updateClass: (_result, args, cache, info) => {
                        updateTutorCache(cache);
                    },
                    categoryToTutor: (_result, args, cache, info) => {
                        updateTutorCache(cache);
                    },
                    removeCategoryFromTutor: (_result, args, cache, info) => {
                        updateTutorCache(cache);
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
