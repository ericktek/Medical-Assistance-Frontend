import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

export const options = {
    adapter: PrismaAdapter(prisma),

    providers: [ 
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "user@example.com"
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials, req) {
                try {
                    const { email, password } = credentials;

                    if (!email || !password) {
                        throw new Error("Missing email or password");
                    }

                    const user = await prisma.user.findUnique({
                        where: { email }
                    });

                    if (!user || !user.password) {
                        throw new Error("User not found or missing password");
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (passwordMatch) {
                        return user;
                    } else {
                        throw new Error("Invalid email or password");
                    }
                } catch (error) {
                    return null;
                }
            }
        })
    ], 

    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "signin",
        signOut: "signout",
    },
};
