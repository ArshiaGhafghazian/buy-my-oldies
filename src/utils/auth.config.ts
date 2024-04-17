import { NextAuthConfig } from "next-auth"

export const authConfig = {
    providers: [],
    pages: {
        signIn: "/signin",
    },
    callbacks: {},
} satisfies NextAuthConfig
