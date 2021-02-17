import { dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import {
    LoginMutation,
    MeDocument,
    MeQuery,
    RegisterMutation,
    LogoutMutation,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";

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
        ssrExchange,
        fetchExchange,
    ],
});
