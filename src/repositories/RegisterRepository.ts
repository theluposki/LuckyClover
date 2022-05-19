import { PrismaClient } from "@prisma/client";
import { Hash } from "../Utils/Hash";

const prisma = new PrismaClient();

interface UserInterface {
  name: string;
  fullName: string;
  nickName: string;
  email: string;
  password: string;
  imgProfile?: string;
}

export const RegisterRepository = async (User: UserInterface) => {
  
  const hash: string = Hash.generateHashCrypto(User.password);

  const user = await prisma.user.create({
    data: {
      name: User.name,
      fullName: User.fullName,
      nickName: User.nickName,
      email: User.email,
      password: hash,
    },
  });

  return user;
};
