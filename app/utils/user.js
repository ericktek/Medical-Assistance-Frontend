import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

export async function createUserWithAccount( username, email, password ) {  
   try {
    const newUser  = await prisma.user.create({
        data: {
            username,
            email,
            password,
            accounts: {
                create: {
                    type: "credentials",
                    provider: "email",
                    providerAccountId: uuidv4(),
                }
            }
        },
        include: {
            account: true
        }
    });
   } catch (error) {
    console.error('Error creating user: ', error);
   }
}

export async function getUserByEmail(email) {
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        return user;
    } catch (error) {
        console.error('Error fetching user by email: ', error);
    }
}