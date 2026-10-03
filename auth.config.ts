import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl}}) {
            const isLoggedIn = !!auth?.user;

            const pathname = nextUrl.pathname;
            const isProtected =
                /^\/meetings\/new\/?$/.test(pathname) ||
                /^\/meetings\/[^/]+\/edit\/?$/.test(pathname);

            if (isProtected) {
                if (isLoggedIn) return true;
                return false;
            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;