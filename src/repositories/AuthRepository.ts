import { PrismaClient } from "@prisma/client";
import { Hash } from "../Utils/Hash";


const prisma = new PrismaClient();

interface AuthInterface {
  email: string;
  password: string;
}

export const AuthRepository = async (User: AuthInterface) => {
  const { email, password } = User;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return { message: "User not found" };
  }

  const isPassword: boolean = Hash.compareHashCrypto(
    password,
    user.password
  );

  if(!isPassword) {
    return { message: "Invalid username or password" };
  }


  return user;
};
