import { createUserWithAccount, getUserByEmail } from "@/app/utils/user";
import { NextResponse } from "next/server"; 
import bcrypt from "bcryptjs"; 

export const POST = async (req, res) => {   
  try {
    const { username, email, password } = await req.json();
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUserWithAccount({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "User created successfully", data: { ...newUser } }, { status: 201 });
  } catch (error) {
    console.log(error); // Log the error first
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

