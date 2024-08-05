import { createUserWithAccount, getUserByEmail } from "@/lib/auth"; 
import { NextResponse } from "next/server"; 
import bcrypt from "bcryptjs"; 

// Function to handle POST requests for user registration
export const POST = async (req, res) => {   
  try {
    // Parse the request body to get the username, email, and password
    const { username, email, password } = await req.json();

    // Check if a user with the given email already exists
    const existingUser = await getUserByEmail(email);

    // If the user already exists, return a 400 status with an error message
    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 });
    }

    // Hash the password for secure storage
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user with the provided details and hashed password
    const newUser = await createUserWithAccount({ username, email, password: hashedPassword });

    // Return a 201 status with a success message and the new user's data
    return NextResponse.json({ message: "User created successfully", data: { ...newUser } }, { status: 201 });
  } catch (error) {
    // If an error occurs, return a 500 status with the error message
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
