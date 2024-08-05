import prisma from "@/lib/prisma"; 
import { v4 as uuidv4 } from "uuid"; 

// Function to create a new user with an associated account
export async function createUserWithAccount(username, email, password) {  
   try {
    // Create a new user with the provided data and an associated account
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password,
            accounts: {
                create: {
                    type: "credentials",
                    provider: "email",
                    providerAccountId: uuidv4(), // Generate a unique ID for the providerAccountId
                }
            }
        },
        include: {
            accounts: true // Include associated accounts in the response
        }
    });
    return newUser; // Return the created user
   } catch (error) {
    console.error('Error creating user: ', error); // Log any errors that occur
   }
}

// Function to fetch a user by their email
export async function getUserByEmail(email) {
    try {
        const user = await prisma.user.findUnique({
            where: { email }, // Find a user by their email
        });
        return user; // Return the found user
    } catch (error) {
        console.error('Error fetching user by email: ', error); // Log any errors that occur
    }
}
