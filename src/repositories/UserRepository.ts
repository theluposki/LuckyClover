import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  name: string,

}

export const UserRepository = {
  async getAll() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        fullName: true,
        nickName: true,
        email: true,
        imgProfile: true,
        createAt: true,
        updateAt: true
      }
    });

    return users
  },
  async getOneByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user
  },
};
